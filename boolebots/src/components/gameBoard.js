import React from "react";

const GameBoard = ({ boardSize, bot1 }) => {
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
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      board.push(`${col + 1},${row + 1}`);
    }
  }
  const gameBoard = board.map((tile) => (
    <div style={{ border: "1px solid black", padding: "30px" }} id={tile}>
      {`${bot1.x.toString()},${bot1.y.toString()}` == tile && <p>bot</p>}
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
