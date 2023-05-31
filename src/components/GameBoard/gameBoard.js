import React, { useState, useContext, useEffect } from "react";
import { BotDataContext } from "../../App.js";
import "./gameboard.scss";

import useInterval from "../../useInterval";

const GameBoard = ({ boardSize }) => {
  const {
    bot1Data,
    setBot1Data,
    bot2Data,
    setBot2Data,
    bot3Data,
    setBot3Data,
    bot4Data,
    setBot4Data,
    speed,
    operation,
    setWins,
  } = useContext(BotDataContext);

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
  const [isFirst, setIsFirst] = useState(true);
  useInterval(() => {
    if (gameStatus) {
      setBot1Data(moveBots(bot1Data));
      setBot2Data(moveBots(bot2Data));
      setBot3Data(moveBots(bot3Data));
      setBot4Data(moveBots(bot4Data));
      battle();
      function moveBots(botData) {
        const directions = ["north", "south", "west", "east"];
        let direction;
        if (isFirst) {
          direction = botData.direction;
          setIsFirst(false);
        } else {
          direction = directions[Math.floor(Math.random() * directions.length)];
        }
        // this makes sure  the new coordinates are based on the random direction
        let newX = botData.x;
        let newY = botData.y;

        switch (direction) {
          case "north":
            newY = Math.max(botData.y - 1, 1); // Ensure the new coordinate is within the board boundaries
            break;
          case "south":
            newY = Math.min(botData.y + 1, boardSize); // Ensure the new coordinate is within the board boundaries
            break;
          case "west":
            newX = Math.max(botData.x - 1, 1); // Ensure the new coordinate is within the board boundaries
            break;
          case "east":
            newX = Math.min(botData.x + 1, boardSize); // Ensure the new coordinate is within the board boundaries
            break;
          default:
            break;
        }
        return { ...botData, x: newX, y: newY };
      }
    }
  }, speed);
  const botsData = [bot1Data, bot2Data, bot3Data, bot4Data];

  const battle = () => {
    for (let i = 0; i < botsData.length - 1; i++) {
      for (let j = i + 1; j < botsData.length; j++) {
        if (
          botsData[i].x === botsData[j].x &&
          botsData[i].y === botsData[j].y
        ) {
          calculateOutcome(botsData[i], botsData[j], operation);
          break;
        }
      }
    }
  };

  //In this scenario, when there is a win from the operator,
  //we choose randomly what bot is the actual winner
  const chooseRandomBot = () => Math.floor(Math.random() * 2) + 1;

  function calculateOutcome(value1, value2, operator) {
    let result;

    switch (operator) {
      case "AND":
        if (value1.boolean === "1" && value2.boolean === "1") {
          // if the 2 are 1(high)
          let winner = chooseRandomBot();
          result = `winner: bot ${winner === 1 ? value1.name : value2.name}`;
        } else {
          result = "Tie";
        }
        break;
      case "OR":
        if (value1.boolean === "1" || value2.boolean === "1") {
          // only a tie of both are 0(low)
          let winner = chooseRandomBot();
          result = `winner: bot ${winner === 1 ? value1.name : value2.name}`;
        } else {
          result = "Tie";
        }
        break;
      case "XOR":
        if (
          (value1.boolean === "1" && value2.boolean === "0") ||
          (value1.boolean === "0" && value2.boolean === "1")
        ) {
          // if they are uneven
          let winner = chooseRandomBot();
          result = `winner: bot ${winner === 1 ? value1.name : value2.name}`;
        } else {
          result = "Tie";
        }
        break;
      case "NOR":
        if (value1.boolean === "0" && value2.boolean === "0") {
          // if neither is 1(high)
          let winner = chooseRandomBot();
          result = `winner: bot ${winner === 1 ? value1.name : value2.name}`;
        } else {
          result = "Tie";
        }
        break;
      default:
        return false; // not sure what the default shoul be
    }
    // wins.push(result); //store in array(it can be used to build the leaderBoard)
    setWins((prevWins) => [...prevWins, result]);
  }
  //test the function
  // useEffect(()=> {
  //   console.log(calculateOutcome("0","1","XOR"))
  //   console.log(calculateOutcome("0","1","AND"))
  // } ,[])

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
