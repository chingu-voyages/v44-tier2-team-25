import React from "react";

const GameBoard = () => {
  //State for board game size
  const [boardSize, changeBoardSize] = React.useState(8);

  //Function to create game Board
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < boardSize * boardSize; i++) {
      board.push(
        <div
          key={i}
          id={i}
          style={{ border: "1px solid black", padding: "30px" }}
        ></div>
      );
    }
    return board;
  };

  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
        gap: "1px",
      }}
    >
      {createBoard()}
    </div>
  );
};

export default GameBoard;
