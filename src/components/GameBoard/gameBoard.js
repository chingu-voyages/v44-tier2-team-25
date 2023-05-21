import React from "react";
import "./gameboard.scss";

const GameBoard = (props) => {
  //This version allows for each square to have an id with it's coordinates. This will help when triggering a bot battle.
  const board = [];
  for (let row = 0; row < props.boardSize; row++) {
    for (let col = 0; col < props.boardSize; col++) {
      board.push(`${col + 1},${row + 1}`);
    }
  }

  const gameBoard = board.map((tile) => (
    <div className="tile" id={tile} key={tile}>
      {(() => {
        switch (tile) {
          case `${props.bot1Data.x.toString()},${props.bot1Data.y.toString()}`:
            return <img src={props.bot1Data.image} alt="bot 1" />;
          case `${props.bot2Data.x.toString()},${props.bot2Data.y.toString()}`:
            return <img src={props.bot2Data.image} alt="bot 2" />;
          case `${props.bot3Data.x.toString()},${props.bot3Data.y.toString()}`:
            return <img src={props.bot3Data.image} alt="bot 3" />;
          case `${props.bot4Data.x.toString()},${props.bot4Data.y.toString()}`:
            return <img src={props.bot4Data.image} alt="bot 4" />;
          default:
            return null;
        }
      })()}
    </div>
  ));

  return (
    <div className="board-container">
      <div
        className="game-board"
        style={{ gridTemplateColumns: `repeat(${props.boardSize}, 1fr)` }}
      >
        {gameBoard}
      </div>
    </div>
  );
};

export default GameBoard;
