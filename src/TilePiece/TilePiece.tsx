import React from "react";
import { Tile } from "../App";
import "./TilePiece.css";

export interface ITilePieceProps {
  tile: Tile;
}

export const TilePiece: React.FC<ITilePieceProps> = ({ tile }) => {
  return (
    <div className="tile">
      <div className="tilePiece">
        <div className="discContainer">
          <div className={`disc ${tile}`} />
        </div>
      </div>
    </div>
  );
};
