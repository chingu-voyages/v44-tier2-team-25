import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/global.scss";
import Leaderboard from "./components/LeaderBoard/Leaderboard";
import GameBoard from "./components/gameBoard";
// mock results
const battleResults = [
  { id: 1, name: "Argonauts", battles: { win: 1, loss: 1, tie: 1 } },
  { id: 2, name: "Blackhawks", battles: { win: 1, loss: 0, tie: 1 } },
  { id: 3, name: "Dynamo", battles: { win: 0, loss: 2, tie: 0 } },
  { id: 4, name: "Globetrotters", battles: { win: 5, loss: 0, tie: 1 } },
];

function App() {
  const [boardSize, changeBoardSize] = React.useState(8);
  const [bot1, setbot1] = React.useState({
    name: "bot1",
    operator: "AND",
    x: 3,
    y: 4,
  });
  const [bot2, setbot2] = React.useState({
    name: "bot1",
    operator: "AND",
    x: 5,
    y: 3,
  });
  return (
    <div className="App">
      <div className="App">
        <ChakraProvider>
          <Leaderboard battleResults={battleResults} />
          <GameBoard boardSize={boardSize} bot1={bot1} bot2={bot2} />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
