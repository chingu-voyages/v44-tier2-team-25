<<<<<<< HEAD
import React from 'react';
import './styles.css'
import Speed from './components/Speed'
import Operation from './components/Operation';

function App() {
  return <div className="controller">
    <Speed/>
    <Operation/>
  </div>;
=======
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/global.scss";

import Leaderboard from "./components/Leaderboard/Leaderboard";

// mock results
const battleResults = [
  { id: 1, name: "Argonauts", battles: { win: 1, loss: 1, tie: 1 } },
  { id: 2, name: "Blackhawks", battles: { win: 1, loss: 0, tie: 1 } },
  { id: 3, name: "Dynamo", battles: { win: 0, loss: 2, tie: 0 } },
  { id: 4, name: "Globetrotters", battles: { win: 5, loss: 0, tie: 1 } },
];

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Leaderboard battleResults={battleResults} />
      </ChakraProvider>
    </div>
  );
>>>>>>> 5b7c55a978a8b85eb0c24f19667554ac2e659087
}

export default App;
