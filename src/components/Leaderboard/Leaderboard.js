import { useContext } from "react";
import "./leaderboard.scss";
import { Tag } from "@chakra-ui/react";
import { BotDataContext } from "../../App";

function Leaderboard({ battleResults }) {
  const { bot1Data, bot2Data, bot3Data, bot4Data, wins } =
    useContext(BotDataContext);

  //converts wins array into wins by bot
  const addWins = (botName) => {
    return wins.filter((result) => result === `winner: ${botName.name}`).length;
  };

  const results = [
    { id: bot1Data.id, name: bot1Data.name, wins: addWins(bot1Data) },
    { id: bot2Data.id, name: bot2Data.name, wins: addWins(bot2Data) },
    { id: bot3Data.id, name: bot3Data.name, wins: addWins(bot3Data) },
    { id: bot4Data.id, name: bot4Data.name, wins: addWins(bot4Data) },
  ];

  //Sorts results array by number of wins
  const sortedResults = results.sort((a, b) => b.wins - a.wins);

  return (
    <div className="leaderboard">
      <div className="header">
        <div className="col">Name</div>
        <div className="col">Wins</div>
      </div>
      {sortedResults.map((gameBot, index) => {
        return (
          <div key={gameBot.id} className="row">
            <div className="col-ranking">
              {gameBot.name.length === 0 ? "Name Your Bot!" : gameBot.name}
            </div>
            <div className="col-positions">{gameBot.wins}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Leaderboard;
