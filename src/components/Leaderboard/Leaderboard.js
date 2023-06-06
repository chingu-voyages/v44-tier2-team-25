import { useContext, useEffect } from "react";
import "./leaderboard.scss";
import { BotDataContext } from "../../App";

function Leaderboard({ battleResults }) {
  const {
    bot1Data,
    bot2Data,
    bot3Data,
    bot4Data,
    gameResults,
    setBot1Data,
    setBot2Data,
    setBot3Data,
    setBot4Data,
  } = useContext(BotDataContext);

  //converts wins array into wins by bot
  const addWins = (botName) => {
    return gameResults.filter((result) => result === `winner: ${botName.name}`)
      .length;
  };
  const addTies = (botName) => {
    return gameResults.filter((result) => result === `tie: ${botName.name}`)
      .length;
  };

  // const gameLosers = gameResults.filter
  console.log(gameResults);
  const results = [
    {
      id: bot1Data.id,
      name: bot1Data.name,
      wins: addWins(bot1Data),
      ties: addTies(bot1Data),
      setStateFunction: setBot1Data,
    },
    {
      id: bot2Data.id,
      name: bot2Data.name,
      wins: addWins(bot2Data),
      ties: addTies(bot2Data),
      setStateFunction: setBot2Data,
    },
    {
      id: bot3Data.id,
      name: bot3Data.name,
      wins: addWins(bot3Data),
      ties: addTies(bot3Data),
      setStateFunction: setBot3Data,
    },
    {
      id: bot4Data.id,
      name: bot4Data.name,
      wins: addWins(bot4Data),
      ties: addTies(bot4Data),
      setStateFunction: setBot4Data,
    },
  ];
  //removes loser from game board
  useEffect(() => {
    const gameLosers = (gameBot, changeBotState) => {
      if (gameResults.includes(`loser: ${gameBot.name}`)) {
        changeBotState((prevState) => ({ ...prevState, hasLost: true }));
      }
    };
    results.forEach((gameBot) => gameLosers(gameBot, gameBot.setStateFunction));
    //Remove warning about missing dependency so netlify can properly deploy
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameResults]);

  //Sorts results array by number of wins
  const sortedResults = results.sort((a, b) => b.wins - a.wins);

  return (
    <div className="leaderboard">
      <div className="header">
        <div className="col">Name</div>
        <div className="col">Wins</div>
        <div className="col">Ties</div>
      </div>
      {sortedResults.map((gameBot, index) => {
        return (
          <div key={gameBot.id} className="row">
            <div className="col-name">
              {gameBot.name.length === 0 ? "Name Your Bot!" : gameBot.name}
            </div>
            <div className="col-wins">{gameBot.wins}</div>
            <div className="col-ties">{gameBot.ties}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Leaderboard;
