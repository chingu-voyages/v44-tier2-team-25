import React from "react";

const GameBoard = ({ boardSize }) => {
  //State for board game size. Should probably be a prop that is passed to this component.

  //Old function to create game Board. Not as useful as new function down below.
  // const createBoard = () => {
  // const board = [];
  // for (let i = 0; i < boardSize * boardSize; i++) {
  //   board.push(
  //     <div
  //       key={i}
  //       id={i}
  //       style={{ border: "1px solid black", padding: "30px" }}
  //     ></div>
  //   );
  // }

  //This version allows for each square to have an id with it's coordinates. This will help when triggering a bot battle.
  const createBoard = () => {
    const board = [];
    for (let row = 0; row < boardSize; row++) {
      board.push([]);
      for (let col = 0; col < boardSize; col++) {
        board[row].push(
          <div
            key={`${col}${row}`}
            //Temporary styling
            style={{ border: "1px solid black", padding: "30px" }}
            id={`${col + 1},${row + 1}`}
          ></div>
        );
      }
    }
    return board;
  };

  return (
    <div
      //Temporary styling to visualize board
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
