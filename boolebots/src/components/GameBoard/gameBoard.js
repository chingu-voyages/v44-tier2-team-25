import React from "react";
const GameBoard = ({ boardSize, bot1, bot2 }) => {
  //This version allows for each square to have an id with it's coordinates. This will help when triggering a bot battle.
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      board.push(`${col + 1},${row + 1}`);
    }
  }
  const gameBoard = board.map((tile) => (
    <div
      style={{ border: "1px solid black", padding: "30px" }}
      id={tile}
      key={tile}
    >
      {((`${bot1.x.toString()},${bot1.y.toString()}` === tile && (
        <img src={bot1.image} alt="bot icon" />
      )) ||
        `${bot2.x.toString()},${bot2.y.toString()}` === tile) && (
        <img src={bot2.image} alt="bot icon" />
      )}
    </div>
  ));
  return (
    <div
      //Temporary styling to visualize board
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
        gap: "1px",
      }}
    >
      {gameBoard}
    </div>
  );
};

export default GameBoard;
