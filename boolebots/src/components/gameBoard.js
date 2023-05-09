import React from "react";

const GameBoard = () => {
  //State for board game size
  const [boardSize, changeBoardSize] = React.useState(4);

  //Function to create game Board
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < boardSize * boardSize; i++) {
      board.push(<div key={i}></div>);
    }
    return board;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
      }}
    >
      {createBoard()}
    </div>
  );
};

export default GameBoard;
