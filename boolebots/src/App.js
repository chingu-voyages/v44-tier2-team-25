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
      <GameBoard boardSize={boardSize} bot1={bot1} />
    </div>
  );
}

export default App;
