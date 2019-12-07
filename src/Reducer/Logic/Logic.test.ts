import { Tile, Player } from "../../App";
import { checkForWinner, place, removeColumn, removeRow } from "./Logic";
import { cloneDeep } from "lodash";

const testBoard: Tile[][] = [
    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
];

describe('Check for win', () => {

    describe('Vertical wins', () => {

        it('should return player one as the winner when they have a vertical win', () => {
            const thisTestBoard = [...testBoard];

            thisTestBoard[0] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

            const winner = checkForWinner(thisTestBoard);

            expect(winner).toBeTruthy();
            expect(winner).toBe(Player.ONE);
        });

        it('should return player two as the winner when they have a vertical win', () => {
            const thisTestBoard = [...testBoard];

            thisTestBoard[0] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_TWO, Tile.PLAYER_TWO, Tile.PLAYER_TWO, Tile.PLAYER_TWO];

            const winner = checkForWinner(thisTestBoard);

            expect(winner).toBeTruthy();
            expect(winner).toBe(Player.TWO);
        });

        describe('column zero', () => {

            it('Bottom four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[0] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('One off the bottom', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[0] = [Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('Top four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[0] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('column one', () => {

            it('Bottom four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[1] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('One off the bottom', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[1] = [Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('Top four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[1] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('column two', () => {

            it('Bottom four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[2] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('One off the bottom', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[2] = [Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('Top four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[2] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('column three', () => {

            it('Bottom four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[3] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('One off the bottom', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[3] = [Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('Top four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[3] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('column four', () => {

            it('Bottom four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[4] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('One off the bottom', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[4] = [Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('Top four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[4] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('column five', () => {

            it('Bottom four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[5] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('One off the bottom', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[5] = [Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('Top four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[5] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('column six', () => {

            it('Bottom four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[6] = [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('One off the bottom', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[6] = [Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });

            it('Top four', () => {
                const thisTestBoard = [...testBoard];

                thisTestBoard[6] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeTruthy();
                expect(winner).toBe(Player.ONE);
            });
        });
    });

    describe('Horizontal wins', () => {


        it('should return player one as the winner when they have a horizontal win', () => {
            const thisTestBoard = cloneDeep(testBoard);
            const row = 0;

            for (let col = 0; col < 4; col++) {
                thisTestBoard[col][row] = Tile.PLAYER_ONE;
            }

            const winner = checkForWinner(thisTestBoard);

            expect(winner).toBeDefined();
            expect(winner).toBe(Player.ONE);
        });

        it('should return player two as the winner when they have a horizontal win', () => {
            const thisTestBoard = cloneDeep(testBoard);
            const row = 0;

            for (let col = 0; col < 4; col++) {
                thisTestBoard[col][row] = Tile.PLAYER_TWO;
            }

            const winner = checkForWinner(thisTestBoard);

            expect(winner).toBeDefined();
            expect(winner).toBe(Player.TWO);
        });

        describe('row 0', () => {

            it('Far left', () => {
                const thisTestBoard = cloneDeep(testBoard);
                const row = 0;

                for (let col = 0; col < 4; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('One From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);
                const row = 0;

                for (let col = 1; col < 5; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Two From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);
                const row = 0;

                for (let col = 2; col < 6; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Far right', () => {
                const thisTestBoard = cloneDeep(testBoard);
                const row = 0;

                for (let col = 3; col < 7; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('row 1', () => {
            const row = 1;

            it('Far left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 0; col < 4; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('One From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 1; col < 5; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Two From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 2; col < 6; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Far right', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 3; col < 7; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('row 2', () => {
            const row = 2;

            it('Far left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 0; col < 4; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('One From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 1; col < 5; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Two From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 2; col < 6; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Far right', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 3; col < 7; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('row 3', () => {
            const row = 3;

            it('Far left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 0; col < 4; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('One From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 1; col < 5; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Two From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 2; col < 6; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Far right', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 3; col < 7; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('row 4', () => {
            const row = 4;

            it('Far left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 0; col < 4; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('One From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 1; col < 5; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Two From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 2; col < 6; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Far right', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 3; col < 7; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
        });

        describe('row 5', () => {
            const row = 5;

            it('Far left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 0; col < 4; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('One From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 1; col < 5; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Two From the left', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 2; col < 6; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('Far right', () => {
                const thisTestBoard = cloneDeep(testBoard);

                for (let col = 3; col < 7; col++) {
                    thisTestBoard[col][row] = Tile.PLAYER_ONE;
                }

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
        });
    });

    describe('Diagonal wins', () => {

        describe('Up to the right diagonal', () => {

            it('case 0', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 1', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
            it('case 2', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 3', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 4', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 5', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 6', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 7', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 8', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 9', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 10', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });

            it('case 11', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            });
        })

        describe('Down Left diagonal', () => {

            it('case 0', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 1', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 2', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 3', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 4', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 5', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 6', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 7', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 8', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 9', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 10', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })

            it('case 10', () => {
                const thisTestBoard: Tile[][] = [
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
                    [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
                ];

                const winner = checkForWinner(thisTestBoard);

                expect(winner).toBeDefined();
                expect(winner).toBe(Player.ONE);
            })
        });
    })


});

describe('Add new piece', () => {

    it('Should place a new piece at the bottom of an empty column for player one', () => {
        const { board } = place(0, { board: [...testBoard], turn: Player.ONE});

        expect(board[0][board[0].length - 1]).toBe(Tile.PLAYER_ONE);
    })

    it('Should place a new piece at the bottom of an empty column for player two', () => {
        const { board } = place(0, { board: [...testBoard], turn: Player.TWO});

        expect(board[0][board[0].length - 1]).toBe(Tile.PLAYER_TWO);
    })

    it('Should place a new piece on top of a player for P1', () => {
        const thisTestBoard = cloneDeep(testBoard);

        thisTestBoard[0][thisTestBoard[0].length - 1] = Tile.PLAYER_TWO;

        const { board } = place(0, { board: [...thisTestBoard], turn: Player.ONE});

        expect(board[0][board[0].length - 1]).toBe(Tile.PLAYER_TWO);
        expect(board[0][board[0].length - 2]).toBe(Tile.PLAYER_ONE);
    })

    it('Should place a new piece on top of a player for P2', () => {
        const thisTestBoard = cloneDeep(testBoard);

        thisTestBoard[0][thisTestBoard[0].length - 1] = Tile.PLAYER_TWO;

        const { board } = place(0, { board: [...thisTestBoard], turn: Player.TWO});

        expect(board[0][board[0].length - 1]).toBe(Tile.PLAYER_TWO);
        expect(board[0][board[0].length - 2]).toBe(Tile.PLAYER_TWO);
    })
});

describe('Remove a column', () => {

    const emptyColumn = [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY];

    it('Should remove a row which is already empty', () => {
        const modifiedBoard = removeColumn(testBoard, 0);

        expect(modifiedBoard[0]).toEqual(emptyColumn);
    })

    it('Should remove a row which has elements on column zero', () => {
        const thisTestBoard = cloneDeep(testBoard);
        thisTestBoard[0] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_TWO];

        const modifiedBoard = removeColumn(testBoard, 0);

        expect(modifiedBoard[0]).toEqual(emptyColumn);
    })

    it('Should remove a row which has elements on column one', () => {
        const thisTestBoard = cloneDeep(testBoard);
        thisTestBoard[1] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_TWO];

        const modifiedBoard = removeColumn(testBoard, 1);

        expect(modifiedBoard[1]).toEqual(emptyColumn);
    })

    it('Should remove a row which has elements on column two', () => {
        const thisTestBoard = cloneDeep(testBoard);
        thisTestBoard[2] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_TWO];

        const modifiedBoard = removeColumn(testBoard, 2);

        expect(modifiedBoard[2]).toEqual(emptyColumn);
    })

    it('Should remove a row which has elements on column three', () => {
        const thisTestBoard = cloneDeep(testBoard);
        thisTestBoard[3] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_TWO];

        const modifiedBoard = removeColumn(testBoard, 3);

        expect(modifiedBoard[3]).toEqual(emptyColumn);
    })

    it('Should remove a row which has elements on column four', () => {
        const thisTestBoard = cloneDeep(testBoard);
        thisTestBoard[4] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_TWO];

        const modifiedBoard = removeColumn(testBoard, 4);

        expect(modifiedBoard[4]).toEqual(emptyColumn);
    })

    it('Should remove a row which has elements on column five', () => {
        const thisTestBoard = cloneDeep(testBoard);
        thisTestBoard[5] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_TWO];

        const modifiedBoard = removeColumn(testBoard, 5);

        expect(modifiedBoard[5]).toEqual(emptyColumn);
    })

    it('Should remove a row which has elements on column six', () => {
        const thisTestBoard = cloneDeep(testBoard);
        thisTestBoard[6] = [Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_ONE, Tile.PLAYER_TWO];

        const modifiedBoard = removeColumn(testBoard, 6);

        expect(modifiedBoard[6]).toEqual(emptyColumn);
    })
});

describe('Remove a row', () => {

    it('should ripple the above rows down and add a blank line at the top of the board', () => {
        const thisTestBoard: Tile[][] = [
            [Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.PLAYER_TWO, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.PLAYER_TWO, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.PLAYER_TWO, Tile.PLAYER_TWO, Tile.PLAYER_TWO, Tile.EMPTY, Tile.PLAYER_TWO, Tile.EMPTY],
            [Tile.PLAYER_TWO, Tile.EMPTY, Tile.PLAYER_TWO, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.PLAYER_ONE, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.PLAYER_ONE, Tile.PLAYER_TWO, Tile.PLAYER_ONE, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY]
        ];

        const expectedResult: Tile[][] = [
            [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.EMPTY, Tile.PLAYER_TWO, Tile.PLAYER_TWO, Tile.EMPTY, Tile.PLAYER_TWO, Tile.EMPTY],
            [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_TWO, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
            [Tile.EMPTY, Tile.PLAYER_TWO, Tile.PLAYER_ONE, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY]
        ];

        const modifiedBoard = removeRow(thisTestBoard, 0);

        expect(modifiedBoard).toEqual(expectedResult);
    });

    it('Should remove non empty row zero', () => {

        const thisTestBoard = cloneDeep(testBoard);
        const row = 0;

        for (let col = 0; col < thisTestBoard[0].length - 1; col++) {
            thisTestBoard[col][row] = Tile.PLAYER_ONE
        }

        const modifiedBoard = removeRow(thisTestBoard, row);

        expect(modifiedBoard[0][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[1][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[2][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[3][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[4][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[5][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[6][row]).toBe(Tile.EMPTY);
    })

    it('Should remove non empty row one', () => {

        const thisTestBoard = cloneDeep(testBoard);
        const row = 1;

        for (let col = 0; col < thisTestBoard[0].length - 1; col++) {
            thisTestBoard[col][row] = Tile.PLAYER_ONE
        }

        const modifiedBoard = removeRow(thisTestBoard, row);

        expect(modifiedBoard[0][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[1][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[2][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[3][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[4][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[5][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[6][row]).toBe(Tile.EMPTY);
    })

    it('Should remove non empty row two', () => {

        const thisTestBoard = cloneDeep(testBoard);
        const row = 2;

        for (let col = 0; col < thisTestBoard[0].length - 1; col++) {
            thisTestBoard[col][row] = Tile.PLAYER_ONE
        }

        const modifiedBoard = removeRow(thisTestBoard, row);

        expect(modifiedBoard[0][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[1][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[2][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[3][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[4][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[5][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[6][row]).toBe(Tile.EMPTY);
    })

    it('Should remove non empty row three', () => {
        const thisTestBoard = cloneDeep(testBoard);
        const row = 3;

        for (let col = 0; col < thisTestBoard[0].length - 1; col++) {
            thisTestBoard[col][row] = Tile.PLAYER_ONE
        }

        const modifiedBoard = removeRow(thisTestBoard, row);

        expect(modifiedBoard[0][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[1][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[2][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[3][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[4][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[5][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[6][row]).toBe(Tile.EMPTY);
    })

    it('Should remove non empty row four', () => {
        const thisTestBoard = cloneDeep(testBoard);
        const row = 4;

        for (let col = 0; col < thisTestBoard[0].length - 1; col++) {
            thisTestBoard[col][row] = Tile.PLAYER_ONE
        }

        const modifiedBoard = removeRow(thisTestBoard, row);

        expect(modifiedBoard[0][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[1][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[2][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[3][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[4][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[5][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[6][row]).toBe(Tile.EMPTY);
    })

    it('Should remove non empty row five', () => {
        const thisTestBoard = cloneDeep(testBoard);
        const row = 5;

        for (let col = 0; col < thisTestBoard[0].length - 1; col++) {
            thisTestBoard[col][row] = Tile.PLAYER_ONE
        }

        const modifiedBoard = removeRow(thisTestBoard, row);

        expect(modifiedBoard[0][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[1][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[2][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[3][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[4][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[5][row]).toBe(Tile.EMPTY);
        expect(modifiedBoard[6][row]).toBe(Tile.EMPTY);
    })
})

// describe('bugs found', () => {

//     it('should not say someone has won', () => {
//         const thisTestBoard: Tile[][] = [
//             [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
//             [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
//             [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
//             [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.EMPTY],
//             [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_ONE, Tile.PLAYER_TWO, Tile.EMPTY],
//             [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.PLAYER_TWO, Tile.PLAYER_TWO, Tile.EMPTY],
//             [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
//         ];

//         const winner = checkForWinner(thisTestBoard);

//         expect(winner).toBeUndefined(); 
//     })
// })