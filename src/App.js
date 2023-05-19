import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import "./styles/global.scss";
import GameBoard from "./components/GameBoard/gameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// mock results
const battleResults = [
  { id: 1, name: "Argonauts", battles: { win: 1, loss: 1, tie: 1 } },
  { id: 2, name: "Blackhawks", battles: { win: 1, loss: 0, tie: 1 } },
  { id: 3, name: "Dynamo", battles: { win: 0, loss: 2, tie: 0 } },
  { id: 4, name: "Globetrotters", battles: { win: 5, loss: 0, tie: 1 } },
];

function App() {
  //State for board size. Will be useful when custom board size is implemented
  // const [boardSize, changeBoardSize] = useState(8);
  const boardSize = 8
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <ConfigPanel />
        <Leaderboard battleResults={battleResults} />
        <GameBoard boardSize={boardSize} />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
