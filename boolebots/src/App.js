import React from "react";
import GameBoard from "./components/gameBoard";
function App() {
  const [boardSize, changeBoardSize] = React.useState(8);

  return (
    <div className="App">
      <GameBoard boardSize={boardSize}/>
    </div>
  );
}

export default App;
