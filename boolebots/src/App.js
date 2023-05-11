import React from "react";
import GameBoard from "./components/gameBoard";
function App() {
  const [boardSize, changeBoardSize] = React.useState(8);
  const [bot1, setbot1] = React.useState({
    name: "bot1",
    operator: "AND",
    x: 3,
    y: 4,
  });
  return (
    <div className="App">
      <GameBoard boardSize={boardSize} bot1={bot1} />
    </div>
  );
}

export default App;
