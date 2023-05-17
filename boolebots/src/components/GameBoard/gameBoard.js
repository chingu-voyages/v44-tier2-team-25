import React from "react";
import "./gameboard.scss";

const GameBoard = ({ boardSize, bot1, bot2 }) => {
  //This version allows for each square to have an id with it's coordinates. This will help when triggering a bot battle.
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      board.push(`${col + 1},${row + 1}`);
    }
  }
  const gameBoard = board.map((tile) => (
    <div className="tile"
      id={tile}
      key={tile}
    >
      {/* {((`${bot1.x.toString()},${bot1.y.toString()}` === tile && (
        <img src={bot1.image} alt="bot icon" />
      )) ||
        `${bot2.x.toString()},${bot2.y.toString()}` === tile) && (
        <img src={bot2.image} alt="bot icon" />
      )} */}
    </div>
  ));
  return (
    <div
      className="game-board"
      style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
    >
      {gameBoard}
    </div>
  );
};

export default GameBoard;
