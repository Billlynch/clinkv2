import React from "react";
import { Player } from "../App";
import { PowerUp } from "../Reducer/GameReducer";

export interface IPlayerDisplayProps {
  turn: Player;
  playerOnePowerUp?: PowerUp;
  playerTwoPowerUp?: PowerUp;
}

export const PlayerDisplay: React.FC<IPlayerDisplayProps> = ({
  turn,
  playerOnePowerUp,
  playerTwoPowerUp
}) => {
  return (
    <div>
      {turn}

      {turn === Player.ONE && <span>{playerOnePowerUp}</span>}

      {turn === Player.TWO && <span>{playerTwoPowerUp}</span>}
    </div>
  );
};
