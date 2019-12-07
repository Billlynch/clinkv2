import { Player, Tile } from "../App";
import {
  place,
  checkForWinner,
  removeColumn,
  removeRow,
  addSpecial
} from "./Logic/Logic";
import { useContext, Dispatch, createContext, useMemo } from "react";

export enum PowerUp {
  REMOVE_ROW = "remove_row",
  REMOVE_COL = "remove_col"
}

export interface GameState {
  turn: Player;
  board: Tile[][];
  winner?: Player;
  playerOnePowerUp?: PowerUp;
  playerTwoPowerUp?: PowerUp;
}

export enum Actions {
  PLACE_NEW_PIECE = "place_new_piece",
  ADD_SPECIAL = "add_special",
  REMOVE_ROW = "remove_row",
  REMOVE_COL = "remove_col"
}

interface PlaceNewPieceAction {
  type: Actions.PLACE_NEW_PIECE;
  data: {
    x: number;
  };
}

interface RemoveColumnAction {
  type: Actions.REMOVE_COL;
  data: {
    x: number;
  };
}

interface RemoveRowAction {
  type: Actions.REMOVE_ROW;
  data: {
    y: number;
  };
}

interface AddSpecialAction {
  type: Actions.ADD_SPECIAL;
}

export type GameActionTypes =
  | PlaceNewPieceAction
  | RemoveColumnAction
  | RemoveRowAction
  | AddSpecialAction;

export const createActions = (dispatch: Dispatch<GameActionTypes>) => ({
  actions: {
    placeNewPiece: (x: number) =>
      dispatch({
        type: Actions.PLACE_NEW_PIECE,
        data: {
          x
        }
      }),
    removeColumn: (x: number) =>
      dispatch({
        type: Actions.REMOVE_COL,
        data: {
          x
        }
      }),
    removeRow: (y: number) =>
      dispatch({
        type: Actions.REMOVE_ROW,
        data: {
          y
        }
      }),
    addSpecial: () =>
      dispatch({
        type: Actions.ADD_SPECIAL
      })
  }
});

export const useGameStateReducer = () => {
  const dispatch = useContext(GameStateDispatch);
  return useMemo(() => createActions(dispatch), [dispatch]);
};

export const gameReducer = (
  currentState: GameState,
  action: GameActionTypes
): GameState => {
  switch (action.type) {
    case Actions.PLACE_NEW_PIECE:
      const newState = place(action.data.x, currentState);

      return {
        ...currentState,
        ...newState,
        turn: currentState.turn === Player.ONE ? Player.TWO : Player.ONE,
        winner: checkForWinner(newState.board)
      };

    case Actions.REMOVE_COL:
      const tempBoard = removeColumn(currentState.board, action.data.x);

      return {
        ...currentState,
        board: tempBoard,
        turn: currentState.turn === Player.ONE ? Player.TWO : Player.ONE,
        winner: checkForWinner(tempBoard),
        playerOnePowerUp:
          currentState.turn === Player.ONE
            ? undefined
            : currentState.playerOnePowerUp,
        playerTwoPowerUp:
          currentState.turn === Player.TWO
            ? undefined
            : currentState.playerTwoPowerUp
      };

    case Actions.REMOVE_ROW:
      const otherTempBoard = removeRow(currentState.board, action.data.y);

      return {
        ...currentState,
        board: otherTempBoard,
        turn: currentState.turn === Player.ONE ? Player.TWO : Player.ONE,
        winner: checkForWinner(otherTempBoard),
        playerOnePowerUp:
          currentState.turn === Player.ONE
            ? undefined
            : currentState.playerOnePowerUp,
        playerTwoPowerUp:
          currentState.turn === Player.TWO
            ? undefined
            : currentState.playerTwoPowerUp
      };

    case Actions.ADD_SPECIAL:
      const boardWithNewSpecial = addSpecial(currentState.board);

      return {
        ...currentState,
        board: boardWithNewSpecial
      };

    default:
      return currentState;
  }
};
// reducer

export type GameStateDispatchType = Dispatch<GameActionTypes>;
export const GameStateDispatch = createContext<GameStateDispatchType>(() => {
  throw new Error("No context set");
});
