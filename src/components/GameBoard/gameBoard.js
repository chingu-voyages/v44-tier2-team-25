import React, { useState } from "react";
import "./gameboard.scss";
import useInterval from "../../useInterval";

const GameBoard = ({
  bot1Data,
  setBot1Data,
  bot2Data,
  setBot2Data,
  bot3Data,
  setBot3Data,
  bot4Data,
  setBot4Data,
  boardSize,
}) => {
  //State for whether the game should play out or not
  const [gameStatus, setGameStatus] = useState(false);
  //This version allows for each square to have an id with it's coordinates. This will help when triggering a bot battle.
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      board.push(`${col + 1},${row + 1}`);
    }
  }

  const gameBoard = board.map((tile) => (
    <div className="tile" id={tile} key={tile}>
      {(() => {
        switch (tile) {
          case `${bot1Data.x.toString()},${bot1Data.y.toString()}`:
            return <img src={bot1Data.icon} alt="bot 1" className="bot-icon" />;
          case `${bot2Data.x.toString()},${bot2Data.y.toString()}`:
            return <img src={bot2Data.icon} alt="bot 2" className="bot-icon" />;
          case `${bot3Data.x.toString()},${bot3Data.y.toString()}`:
            return <img src={bot3Data.icon} alt="bot 3" className="bot-icon" />;
          case `${bot4Data.x.toString()},${bot4Data.y.toString()}`:
            return <img src={bot4Data.icon} alt="bot 4" className="bot-icon" />;
          default:
            return null;
        }
      })()}
    </div>
  ));

  // handles random bot movement
  useInterval(() => {
    if (gameStatus) {
      setBot1Data(moveBots(bot1Data));
      setBot2Data(moveBots(bot2Data));
      setBot3Data(moveBots(bot3Data));
      setBot4Data(moveBots(bot4Data));

      function moveBots(botData) {
        const directions = ["up", "down", "left", "right"];
        const randomDirection =
          directions[Math.floor(Math.random() * directions.length)];

        // this makes sure  the new coordinates are based on the random direction
        let newX = botData.x;
        let newY = botData.y;

        switch (randomDirection) {
          case "up":
            newY = Math.max(botData.y - 1, 1); // Ensure the new coordinate is within the board boundaries
            break;
          case "down":
            newY = Math.min(botData.y + 1, boardSize); // Ensure the new coordinate is within the board boundaries
            break;
          case "left":
            newX = Math.max(botData.x - 1, 1); // Ensure the new coordinate is within the board boundaries
            break;
          case "right":
            newX = Math.min(botData.x + 1, boardSize); // Ensure the new coordinate is within the board boundaries
            break;
          default:
            break;
        }

        return { ...botData, x: newX, y: newY };
      }
    }
  }, 1000);

  return (
    <div className="board-container">
      <div
        className="game-board"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
      >
        {gameBoard}
      </div>
      {gameStatus === true && (
        <button
          onClick={() => {
            setGameStatus(false);
          }}
        >
          Pause
        </button>
      )}
      {gameStatus === false && (
        <button
          onClick={() => {
            setGameStatus(true);
          }}
        >
          Battle!
        </button>
      )}
    </div>
  );
};

export default GameBoard;
