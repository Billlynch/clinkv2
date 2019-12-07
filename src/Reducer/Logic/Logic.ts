import { Player, Tile } from "../../App";
import { cloneDeep } from "lodash";
import { GameState, PowerUp } from "../GameReducer";

export const removeColumn = (board: Tile[][], x: number): Tile[][] => {
    const newBoard = cloneDeep(board);

    newBoard[x] = [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY];

    return newBoard;
}

export const removeRow = (board: Tile[][], y: number) => {
    const newBoard = cloneDeep(board);

    for (let col = 0; col < newBoard.length; col++) {
        for (let row = y; row > 0; row--) {
            newBoard[col][row] = newBoard[col][row - 1];
        }
        newBoard[col][0] = Tile.EMPTY;
    }

    return newBoard;
}

const freeSpaceOnBoard = (board: Tile[][]): boolean => {
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board[0].length; row++) {
            if (board[col][row] === Tile.EMPTY) {
                return true;
            }
        }
    }

    return false;
}

export const addSpecial = (board: Tile[][]): Tile[][] => {
    const newBoard = cloneDeep(board);

    while (freeSpaceOnBoard(board)) {
        const randX = Math.floor(Math.random() * 7);
        const randY = Math.floor(Math.random() * 6);

        if (newBoard[randX][randY] === Tile.EMPTY) {
            newBoard[randX][randY] = Tile.SPECIAL;
            return newBoard;
        }

    }

    throw new Error('No place to add a special');
}

const calculateBottomMostY = (col: Tile[]): number => {

    for (let y = 0; y < col.length; y++) {
        const tile = col[y];
        if (tile !== Tile.EMPTY && tile !== Tile.SPECIAL) {
            if (y === 0) {
                throw new Error('no move available')
            }
            return y - 1;
        }
    }

    return 5;
}

const randomSpecial = (): PowerUp => {
    if (Math.random() > 0.5) {
        return PowerUp.REMOVE_COL;
    }
    return PowerUp.REMOVE_ROW;
}

export const place = (x: number, currentState: GameState): GameState => {
    const newBoard = cloneDeep(currentState.board);
    const player = currentState.turn;
    let { playerOnePowerUp, playerTwoPowerUp } = currentState;

    try {
        const y = calculateBottomMostY(newBoard[x]);
        if (newBoard[x][y] === Tile.SPECIAL) {
            player === Player.ONE ? playerOnePowerUp = randomSpecial() : playerTwoPowerUp = randomSpecial();
            newBoard[x][y] = player === Player.ONE ? Tile.PLAYER_ONE : Tile.PLAYER_TWO;
            return {
                ...currentState,
                board: addSpecial(newBoard),
                playerOnePowerUp,
                playerTwoPowerUp
            };

        }
        newBoard[x][y] = player === Player.ONE ? Tile.PLAYER_ONE : Tile.PLAYER_TWO;
    } catch (e) {
        console.error(e);
    }


    return {
        ...currentState,
        board: newBoard
    };
}

const checkRight = (board: Tile[][], x: number, y: number): Player | undefined => {
    const previous = board[x][y];

    if (x < 4 && previous !== Tile.EMPTY) {

        let count = 1;

        for (let i = x + 1; i < x + 4; i++) {
            if (board[i][y] !== previous || board[i][y] === Tile.EMPTY) {
                continue;
            }
            count++;
        }

        if (count === 4) {
            return previous === Tile.PLAYER_ONE ? Player.ONE : Player.TWO;
        }
    }
}

const checkDown = (board: Tile[][], x: number, y: number): Player | undefined => {
    const previous = board[x][y];

    if (y <= 3 && previous !== Tile.EMPTY) {
        let count = 1;

        for (let i = y + 1; i < y + 4; i++) {
            if (board[x][i] !== previous || board[x][i] === Tile.EMPTY) {
                continue;
            }
            count++;
        }

        if (count === 4) {
            return previous === Tile.PLAYER_ONE ? Player.ONE : Player.TWO;
        }
    }
}

const checkDownRightDiagonal = (board: Tile[][], x: number, y: number): Player | undefined => {
    const previous = board[x][y];

    if (y < 3 && x < 4 && previous !== Tile.EMPTY) {
        let count = 1;

        for (let i = x + 1; i < x + 4; i++) {
            for (let j = y + 1; j < y + 4; j++) {
                if (board[i][j] !== previous || board[i][j] === Tile.EMPTY) {
                    continue;
                }
                count++;
            }
        }

        if (count === 4) {
            return previous === Tile.PLAYER_ONE ? Player.ONE : Player.TWO;
        }
    }
}

const checkDownLeftDiagonal = (board: Tile[][], x: number, y: number): Player | undefined => {
    const previous = board[x][y];

    if (y < 3 && x >= 3 && previous !== Tile.EMPTY) {
        let count = 1;

        for (let i = x - 1; i > x - 4; i--) {
            for (let j = y + 1; j < y + 4; j++) {
                if (board[i][j] !== previous || board[i][j] === Tile.EMPTY) {
                    continue;
                }
                count++;
            }
        }

        if (count === 4) {
            return previous === Tile.PLAYER_ONE ? Player.ONE : Player.TWO;
        }
    }
}

export const checkForWinner = (board: Tile[][]): Player | undefined => {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const winner = checkRight(board, x, y) || checkDown(board, x, y) || checkDownRightDiagonal(board, x, y) || checkDownLeftDiagonal(board, x, y);

            if (winner) {
                return winner;
            }
        }

    }

}

