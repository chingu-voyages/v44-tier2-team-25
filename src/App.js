import React, { useState, createContext } from "react";
import {
  ChakraProvider,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
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
  const [showInstructions, setShowInstructions] = useState(true);
  const [wins, setWins] = useState([]); // Initializi the wins state for results array
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
        <Modal
          isOpen={showInstructions}
          onClose={() => setShowInstructions(false)}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="instructions-title">
              What is Boolebots?
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="instructions-description">
              <p>
                Boolebots is an exciting game based on the concept of the
                Boolean! To begin the game, first name your four bots and assign
                them a direction and boolean value.
              </p>
              <p>
                Next, set the speed and the operation that will be applied to
                all of the bots. Begin the game to see which bot wins!
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowInstructions(false)}>
                Got it!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
              wins,
              setWins,
              setShowInstructions,
            }}
          >
            <div className="panels-container">
              <Heading as="h3" size="md" className="panel-heading">
                Configuration Panel
              </Heading>
              <Button
                className="instructions-opener"
                onClick={() => setShowInstructions(true)}
              >
                Need Help?
              </Button>
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
