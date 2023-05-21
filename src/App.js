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
  const boardSize = 8;
  function placeBot(boardSize) {
    return Math.floor(Math.random() * boardSize + 1);
  }
  //State for board size. Will be useful when custom board size is implemented
  // const [boardSize, changeBoardSize] = useState(8);
  const [bot1Data, setBot1Data] = useState({
    id: 1,
    name: "",
    direction: "",
    boolean: "",
    x: placeBot(boardSize),
    y: placeBot(boardSize),
  });
  const [bot2Data, setBot2Data] = useState({
    id: 2,
    name: "",
    direction: "",
    boolean: "",
    x: placeBot(boardSize),
    y: placeBot(boardSize),
  });
  const [bot3Data, setBot3Data] = useState({
    id: 3,
    name: "",
    direction: "",
    boolean: "",
    x: placeBot(boardSize),
    y: placeBot(boardSize),
  });
  const [bot4Data, setBot4Data] = useState({
    id: 4,
    name: "",
    direction: "",
    boolean: "",
    x: placeBot(boardSize),
    y: placeBot(boardSize),
  });

  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <ConfigPanel
          bot1Data={bot1Data}
          setBot1Data={setBot1Data}
          bot2Data={bot2Data}
          setBot2Data={setBot2Data}
          bot3Data={bot3Data}
          setBot3Data={setBot3Data}
          bot4Data={bot4Data}
          setBot4Data={setBot4Data}
        />
        <Leaderboard battleResults={battleResults} />
        <GameBoard
          boardSize={boardSize}
          bot1Data={bot1Data}
          setBot1Data={setBot1Data}
          bot2Data={bot2Data}
          setBot2={setBot2Data}
          bot3Data={bot3Data}
          setBot3={setBot3Data}
          bot4Data={bot4Data}
          setBot4Data={setBot4Data}
        />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
