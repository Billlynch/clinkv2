import React, { useReducer } from "react";
import { Board } from "./Board/Board";
import {
  GameState,
  gameReducer,
  GameStateDispatch
} from "./Reducer/GameReducer";
import { PlayerDisplay } from "./PlayerDisplay/PlayerDisplay";
import "./App.css";
import { addSpecial } from "./Reducer/Logic/Logic";

export enum Player {
  ONE = 1,
  TWO = 2
}

export enum Tile {
  EMPTY = "empty",
  PLAYER_ONE = "player1",
  PLAYER_TWO = "player2",
  SPECIAL = "special"
}

export interface IBoardProps {
  board: Tile[][];
}

const initBoard: Tile[][] = [
  [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
  [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
  [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
  [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
  [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
  [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY],
  [Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY, Tile.EMPTY]
];

const initState: GameState = {
  board: addSpecial(initBoard),
  turn: Player.ONE
};

const App: React.FC = React.memo(() => {
  const [reducerState, dispatch] = useReducer(gameReducer, initState);
  const {
    board,
    turn,
    winner,
    playerOnePowerUp,
    playerTwoPowerUp
  } = reducerState;

  return (
    <GameStateDispatch.Provider value={dispatch}>
      <div className="header">
        <span>Clink</span>
      </div>

      <div className="App">
        <div className="centeredContainer">
          <PlayerDisplay
            turn={turn}
            playerOnePowerUp={playerOnePowerUp}
            playerTwoPowerUp={playerTwoPowerUp}
          />
        </div>

        <div className="centeredContainer">
          <Board
            board={board}
            turn={turn}
            playerOnePowerUp={playerOnePowerUp}
            playerTwoPowerUp={playerTwoPowerUp}
          />
        </div>

        {winner && (
          <div>
            {" "}
            <span>Winner!:</span>
            {winner}
          </div>
        )}
      </div>
    </GameStateDispatch.Provider>
  );
});

export default App;
