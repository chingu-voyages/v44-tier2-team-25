import React, { useState, createContext } from "react";
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

// Create a context for the data
const BotDataContext = createContext();

function App() {
  const boardSize = 8;

  // Speed_Operation
  const [speed, setSpeed] = useState(1000);
  const [operation, setOperation] = useState("AND");

  //state for 4 botdata
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

  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <BotDataContext.Provider
          value={{
            bot1Data,
            setBot1Data,
            bot2Data,
            setBot2Data,
            bot3Data,
            setBot3Data,
            bot4Data,
            setBot4Data,
            speed,
            setSpeed,
            operation,
            setOperation,
          }}
        >
          <ConfigPanel />
          <Speedops />
          <Leaderboard battleResults={battleResults} />
          <GameBoard boardSize={boardSize} />
        </BotDataContext.Provider>

        <Footer />
      </ChakraProvider>
    </div>
  );
}
export { BotDataContext };
export default App;
