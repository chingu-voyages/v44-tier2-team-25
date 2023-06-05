import React, { useState, createContext } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import "./styles/global.scss";
import GameBoard from "./components/GameBoard/gameBoard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Speedops from "./components/OperationPanel/Speedops";

// Create a context for the data
const BotDataContext = createContext();

function App() {
  const boardSize = 8;

  // Speed_Operation
  const [speed, setSpeed] = useState(1000);
  const [operation, setOperation] = useState("AND");

  const [gameResults, setGameResults] = useState([]); // Initializi the wins state for results array
  //state for 4 botdata
  const [bot1Data, setBot1Data] = useState({
    id: 1,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot1.gif",
    hasLost: false,
  });
  const [bot2Data, setBot2Data] = useState({
    id: 2,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot2.gif",
    hasLost: false,
  });
  const [bot3Data, setBot3Data] = useState({
    id: 3,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot3.gif",
    hasLost: false,
  });
  const [bot4Data, setBot4Data] = useState({
    id: 4,
    name: "",
    direction: "",
    boolean: "",
    x: 0,
    y: 0,
    icon: "./bot4.gif",
    hasLost: false,
  });

  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <div className="main-container">
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
              gameResults,
              setGameResults,
            }}
          >
            <div className="panels-container">
              <Heading as="h3" size="md" className="panel-heading">
                Configuration Panel
              </Heading>
              <ConfigPanel />
              <Speedops />
              <Leaderboard />
            </div>

            <GameBoard boardSize={boardSize} />
          </BotDataContext.Provider>
        </div>

        <Footer />
      </ChakraProvider>
    </div>
  );
}
export { BotDataContext };
export default App;
