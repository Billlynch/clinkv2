import React from "react";
import { Tile, Player } from "../App";
import { TilePiece } from "../TilePiece/TilePiece";
import "./Board.css";
import { ActionTile } from "../PlaceTile/ActionTile";
import { Actions, PowerUp } from "../Reducer/GameReducer";

export interface IBoardProps {
  board: Tile[][];
  turn: Player;
  playerOnePowerUp?: PowerUp;
  playerTwoPowerUp?: PowerUp;
}

const pos: number[] = [0, 1, 2, 3, 4, 5, 6];

export const Board: React.FC<IBoardProps> = ({
  board,
  turn,
  playerOnePowerUp,
  playerTwoPowerUp
}) => {
  const displayBoard = () => (
    <div className="board">
      <div className="column">
        {pos.map((i: number) => (
          <ActionTile
            key={`remove-row-${i}`}
            position={i}
            playerOnePowerUp={playerOnePowerUp}
            playerTwoPowerUp={playerTwoPowerUp}
            turn={turn}
            action={Actions.REMOVE_ROW}
          />
        ))}
      </div>

      {board.map((row: Tile[], i: number) => (
        <div className="column" key={`row-container-${i}`}>
          {row.map((el: Tile, j: number) => (
            <TilePiece tile={el} key={`tile-piece-row-${i}-col-${j}`} />
          ))}

          <ActionTile
            key={`remove-col-${i}`}
            position={i}
            playerOnePowerUp={playerOnePowerUp}
            playerTwoPowerUp={playerTwoPowerUp}
            turn={turn}
            action={Actions.REMOVE_COL}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="BoardContainer">
      <div className="PlaceTileContainer">
        {pos.map((i: number) => (
          <ActionTile
            key={`place-tile-xPos-${i}`}
            position={i}
            turn={turn}
            action={Actions.PLACE_NEW_PIECE}
          />
        ))}
      </div>

      {displayBoard()}
    </div>
  );
};
