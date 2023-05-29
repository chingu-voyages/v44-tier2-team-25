import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import "./styles/global.scss";
import GameBoard from "./components/GameBoard/gameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Speedops from "./components/OperationPanel/Speedops";

// mock results
const battleResults = [
  { id: 1, name: "Argonauts", battles: { win: 1, loss: 1, tie: 1 } },
  { id: 2, name: "Blackhawks", battles: { win: 1, loss: 0, tie: 1 } },
  { id: 3, name: "Dynamo", battles: { win: 0, loss: 2, tie: 0 } },
  { id: 4, name: "Globetrotters", battles: { win: 5, loss: 0, tie: 1 } },
];

function App() {
  const boardSize = 8;

  //State for board size. Will be useful when custom board size is implemented
  // const [boardSize, changeBoardSize] = useState(8);

  //bot data
  const [bot1Data, setBot1Data] = useState({
    id: 1,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot1.gif",
  });
  const [bot2Data, setBot2Data] = useState({
    id: 2,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot2.gif",
  });
  const [bot3Data, setBot3Data] = useState({
    id: 3,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot3.gif",
  });
  const [bot4Data, setBot4Data] = useState({
    id: 4,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot4.gif",
  });
  // Speed_Operation
  const [speed, setSpeed] = useState(1);

  const [operation, setOperation] = useState("AND");

  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <ConfigPanel //--we might want to consider making a "botsData" state
          bot1Data={bot1Data} //as an array if the props are too messy--
          setBot1Data={setBot1Data}
          bot2Data={bot2Data}
          setBot2Data={setBot2Data}
          bot3Data={bot3Data}
          setBot3Data={setBot3Data}
          bot4Data={bot4Data}
          setBot4Data={setBot4Data}
        />
        <Speedops
          speed={speed}
          setSpeed={setSpeed}
          operation={operation}
          setOperation={setOperation}
        />
        <Leaderboard battleResults={battleResults} />
        <GameBoard
          boardSize={boardSize}
          bot1Data={bot1Data}
          setBot1Data={setBot1Data}
          bot2Data={bot2Data}
          setBot2Data={setBot2Data}
          bot3Data={bot3Data}
          setBot3Data={setBot3Data}
          bot4Data={bot4Data}
          setBot4Data={setBot4Data}
          speed={speed}
          setSpeed={setSpeed}
          operator={operation}
          setOperator={setOperation}
        />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
