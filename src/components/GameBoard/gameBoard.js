import React from "react";
import "./gameboard.scss";
import useInterval from "../../useInterval";

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

  //handles random bot movement
  useInterval(() => {
    props.setBot1Data(moveBots(props.bot1Data));
    props.setBot2Data(moveBots(props.bot2Data));
    props.setBot3Data(moveBots(props.bot3Data));
    props.setBot4Data(moveBots(props.bot4Data));

    function moveBots(botData) {
      const directions = ["up", "down", "left", "right"];
      const randomDirection =
        directions[Math.floor(Math.random() * directions.length)];
    
      //  new coordinates based on the random direction
      let newX = botData.x;
      let newY = botData.y;
    
      switch (randomDirection) {
        case "up":
          newY = Math.max(botData.y - 1, 1); //  new coordinate is within the board boundaries
          break;
        case "down":
          newY = Math.min(botData.y + 1, props.boardSize); 
          break;
        case "left":
          newX = Math.max(botData.x - 1, 1); 
          break;
        case "right":
          newX = Math.min(botData.x + 1, props.boardSize);
          break;
        default:
          break;
      }
    
      return { ...botData, x: newX, y: newY };
    }
    
  }, 1000);



// CHECK:  
//In the case there is a win, we need to figure out who of the 2 actually wins 
//we need to figure out who wins, it's up to us! maybe it depends on 
//        the direction they come from?
//the instructions suggest "first to move wins, I imagine it refers to every bot having a different speed"



  // ----------------RULES-----------------
//high(1) wins

  //AND => high output (1) only if all its inputs are high
  //OR => high output (1) if one or more of its inputs are high
  //XOR => high output if either, but not both, of its two inputs are high.
  //NOR => The outputs of all are low(0) if any of the inputs are high(1).




  function calculateOutcome(value1, value2, operator) {
    switch (operator) {
      case "AND":
        if (value1 === "1" && value2 === "1") {// if the 2 are 1(high)
          return "First bot to move wins";
        } else {
          return "Tie";
        }
      case "OR":
        if (value1 === "1" || value2 === "1") {// only a tie of both are 0(low)
          return "First bot to move wins";
        } else {
          return "Tie";
        }
      case "XOR":
        if ((value1 === "1" && value2 === "0") || (value1 === "0" && value2 === "1")) { // if they are uneven
          return "First bot to move wins";
        } else {
          return "Tie";
        }
      case "NOR":
        if (value1 === "0" && value2 === "0") {// if neither is 1(high)
          return "First bot to move wins";
        } else {
          return "Tie";
        }
      default:
        return false; // not sure what the default shoul be
    }

  //  return (whatever result we come p with)
  // and store it in array to update in leaderBoard
  }
  
  //------------------------------------------------------------------------

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
