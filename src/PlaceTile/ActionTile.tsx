import React, { useCallback } from "react";
import { useGameStateReducer, Actions, PowerUp } from "../Reducer/GameReducer";
import "./ActionTile.css";
import { Player } from "../App";

export interface IActionTileProps {
  position: number;
  turn: Player;
  action: Actions;
  playerOnePowerUp?: PowerUp;
  playerTwoPowerUp?: PowerUp;
}

export const ActionTile: React.FC<IActionTileProps> = React.memo(
  ({ position, turn, action, playerOnePowerUp, playerTwoPowerUp }) => {
    const {
      actions: { placeNewPiece, removeRow, removeColumn }
    } = useGameStateReducer();

    const playerOnePowerUpEnabled = useCallback(() => {
      return action.valueOf() === playerOnePowerUp && turn === Player.ONE;
    }, [action, playerOnePowerUp, turn]);

    const playerTwoPowerUpEnabled = useCallback(() => {
      return action.valueOf() === playerTwoPowerUp && turn === Player.TWO;
    }, [action, playerTwoPowerUp, turn]);

    const handleClick = useCallback(() => {
      switch (action) {
        case Actions.PLACE_NEW_PIECE:
          placeNewPiece(position);
          break;
        case Actions.REMOVE_ROW:
          if (turn === Player.ONE && playerOnePowerUpEnabled()) {
            removeRow(position);
          } else if (turn === Player.TWO && playerTwoPowerUpEnabled()) {
            removeRow(position);
          }
          break;
        case Actions.REMOVE_COL:
          if (turn === Player.ONE && playerOnePowerUpEnabled()) {
            removeColumn(position);
          } else if (turn === Player.TWO && playerTwoPowerUpEnabled()) {
            removeColumn(position);
          }
          break;
      }
    }, [
      action,
      position,
      removeColumn,
      placeNewPiece,
      removeRow,
      playerOnePowerUpEnabled,
      playerTwoPowerUpEnabled
    ]);

    const discType = turn === Player.ONE ? "player1" : "player2";

    return (
      <div className="ActionTile" onClick={handleClick}>
        <div className="tilePiece">
          <div>
            {action === Actions.PLACE_NEW_PIECE && (
              <div className={`discPlace ${discType}Place`} />
            )}
            {playerOnePowerUpEnabled() && (
              <div className={`discPlace ${discType}Place`} />
            )}
            {playerTwoPowerUpEnabled() && (
              <div className={`discPlace ${discType}Place`} />
            )}
          </div>
        </div>
      </div>
    );
  }
);
