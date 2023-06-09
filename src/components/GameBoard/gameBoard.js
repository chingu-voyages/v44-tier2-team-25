import React, { useState, useContext } from "react";
import { BotDataContext, AppContext } from "../../App.js";
import { Button, ButtonGroup, Tooltip } from "@chakra-ui/react";
import "./gameboard.scss";
import {
  FaEye,
  FaEyeSlash,
  FaUsersCog,
  FaUsersSlash,
  FaPlay,
  FaPause,
} from "react-icons/fa";

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
    setGameResults,
    operation,
  } = useContext(BotDataContext);

  const { showLeaderboard, setShowLeaderboard, showPanel, setShowPanel } =
    useContext(AppContext);

  //State for whether the game should play out or not
  const [gameStatus, setGameStatus] = useState(false);

  //This version allows for each square to have an id with it's coordinates. This will help when triggering a bot battle.
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      board.push(`${col + 1},${row + 1}`);
    }
  }

  //Enable Battle button

  const allBotOnBoard = [bot1Data, bot2Data, bot3Data, bot4Data].filter((bot) => bot.name).length   
  const activeBots = [bot1Data, bot2Data, bot3Data, bot4Data].filter((bot) => !bot.hasLost).length

  const gameBoard = board.map((tile) => (
    <div className="tile" id={tile} key={tile}>
      {(() => {
        //Bots will be disabled and unrendered when hasLost is true
        switch (tile) {
          case `${bot1Data.x.toString()},${bot1Data.y.toString()}`:
            return (
              !bot1Data.hasLost && (
                <Tooltip
                  placement="auto"
                  bg="orange"
                  fontSize="xs"
                  label={bot1Data.name}
                  isOpen
                >
                  <img
                    src={bot1Data.icon}
                    alt="bot 1"
                    className={`bot-icon ${
                      bot1Data.hasLost ? "lost-game" : ""
                    }`}
                  />
                </Tooltip>
              )
            );
          case `${bot2Data.x.toString()},${bot2Data.y.toString()}`:
            return (
              !bot2Data.hasLost && (
                <Tooltip
                  placement="auto"
                  bg="green.500"
                  fontSize="xs"
                  label={bot2Data.name}
                  isOpen
                >
                  <img
                    src={bot2Data.icon}
                    alt="bot 2"
                    className={`bot-icon ${
                      bot2Data.hasLost ? "lost-game" : ""
                    }`}
                  />
                </Tooltip>
              )
              
            );
          case `${bot3Data.x.toString()},${bot3Data.y.toString()}`:
            return (
              !bot3Data.hasLost && (
                <Tooltip
                  placement="auto"
                  bg="cyan.600"
                  fontSize="xs"
                  label={bot3Data.name}
                  isOpen
                >
                  <img
                    src={bot3Data.icon}
                    alt="bot 3"
                    className={`bot-icon ${
                      bot3Data.hasLost ? "lost-game" : ""
                    }`}
                  />
                </Tooltip>
              )
            );
          case `${bot4Data.x.toString()},${bot4Data.y.toString()}`:
            return (
              !bot4Data.hasLost && (
                <Tooltip
                  placement="auto"
                  bg="purple"
                  fontSize="xs"
                  label={bot4Data.name}
                  isOpen
                >
                  <img
                    src={bot4Data.icon}
                    alt="bot 4"
                    className={`bot-icon ${
                      bot4Data.hasLost ? "lost-game" : ""
                    }`}
                  />
                </Tooltip>
              )
            );
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
      //Bots will only move if they haven't lost yet
      setBot1Data(
        !bot1Data.hasLost ? moveBots(bot1Data) : removeBots(bot1Data)
      );
      setBot2Data(
        !bot2Data.hasLost ? moveBots(bot2Data) : removeBots(bot2Data)
      );
      setBot3Data(
        !bot3Data.hasLost ? moveBots(bot3Data) : removeBots(bot3Data)
      );
      setBot4Data(
        !bot4Data.hasLost ? moveBots(bot4Data) : removeBots(bot4Data)
      );

      battle();
      function removeBots(botData) {
        return { ...botData, x: 1000, y: 1000 };
      }

      //Stop the game if there is only one bot left

      if (activeBots === 1){
        setGameStatus(false)
      }



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
  let hasMatchingBots = false;

  const battle = () => {
    let bot1;
    let bot2;
    for (let i = 0; i < botsData.length - 1; i++) {
      bot1 = botsData[i];

      for (let j = i + 1; j < botsData.length; j++) {
        bot2 = botsData[j];

        if (bot1.x === bot2.x && bot1.y === bot2.y) {
          hasMatchingBots = true;
          break;
        }
      }

      if (hasMatchingBots) {
        //bots will only battle if both haven't lost yet
        if (!bot1.hasLost && !bot2.hasLost) {
          calculateOutcome(bot1, bot2, operation);
        }
        // battle function
        break;
      }
    }
  };

  //In this scenario, when there is a win from the operator,
  //we choose randomly what bot is the actual winner

  //randomly assign winner from the 2 colliding bots
  const chooseRandomBot = (botA, botB) => {
    const randomIndex = Math.floor(Math.random() * 2);
    return {
      winner: randomIndex === 0 ? botA : botB,
      loser: randomIndex === 0 ? botB : botA,
    };
  };

  //check if there's a win or tie from operation, if win, assign winner with the random function
  function calculateOutcome(botA, botB, operator) {
    let battleResult;
    let battleLoser;
    let battleTie;
    let battleWinner;
    let value1 = botA.boolean;
    let value2 = botB.boolean;
    console.log(value1, value2, operator);

    switch (operator) {
      case "AND":
        if (value1 === "1" && value2 === "1") {
          // if both are 1(high)
          battleResult = chooseRandomBot(botA, botB);
          battleWinner = `winner: ${battleResult.winner.name}`;
          battleLoser = `loser: ${battleResult.loser.name}`;
        } else {
          battleTie = [`tie: ${botA.name}`, `tie: ${botB.name}`];
        }
        break;
      case "OR":
        if (value1 === "1" || value2 === "1") {
          // only a tie if both are 0(low)
          battleResult = chooseRandomBot(botA, botB);
          battleWinner = `winner: ${battleResult.winner.name}`;
          battleLoser = `loser: ${battleResult.loser.name}`;
        } else {
          battleTie = [`tie: ${botA.name}`, `tie: ${botB.name}`];
        }
        break;
      case "XOR":
        if (
          (value1 === "1" && value2 === "0") ||
          (value1 === "0" && value2 === "1")
        ) {
          // if they are uneven
          battleResult = chooseRandomBot(botA, botB);
          battleWinner = `winner: ${battleResult.winner.name}`;
          battleLoser = `loser: ${battleResult.loser.name}`;
        } else {
          battleTie = [`tie: ${botA.name}`, `tie: ${botB.name}`];
        }
        break;
      case "NOR":
        if (value1 === "0" && value2 === "0") {
          // if neither is 1(high)
          battleResult = chooseRandomBot(botA, botB);
          battleWinner = `winner: ${battleResult.winner.name}`;
          battleLoser = `loser: ${battleResult.loser.name}`;
        } else {
          battleTie = [`tie: ${botA.name}`, `tie: ${botB.name}`];
        }
        break;
      default:
        return false; // not sure what the default should be
    }

    setGameResults((prevWins) => [
      ...prevWins,
      battleWinner !== undefined ? battleWinner : battleTie[0],
      battleLoser !== undefined ? battleLoser : battleTie[1],
    ]);
  }

  return (
    <div className="board-container">
      <div
        className="game-board"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
      >
        {gameBoard}
      </div>

      <ButtonGroup spacing={2} m={4}>
        <Button
          rightIcon={showPanel ? <FaUsersSlash /> : <FaUsersCog />}
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={() => setShowPanel(!showPanel)}
        >
          Panel
        </Button>

        <Button
          rightIcon={gameStatus ? <FaPause /> : <FaPlay />}
          colorScheme="teal"
          size="lg"
          className="battle btn"
          variant="solid"
          onClick={() => {
            setGameStatus(!gameStatus);
          }}
          isDisabled={allBotOnBoard !== 4 ? true : activeBots === 1 ? true : false}
        >
          {gameStatus ? "Pause" : "Battle"}
        </Button>

        <Button
          rightIcon={showLeaderboard ? <FaEyeSlash /> : <FaEye />}
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={() => setShowLeaderboard(!showLeaderboard)}
        >
          Ranking
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GameBoard;
