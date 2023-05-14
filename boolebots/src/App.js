import { ChakraProvider } from "@chakra-ui/react";
import "./styles/global.scss";

import Leaderboard from "./components/LeaderBoard/Leaderboard";

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
}

export default App;
