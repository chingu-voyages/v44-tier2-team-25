import { useState, useEffect } from "react";
import "./leaderboard.css";

// const battleResults = [
//     { name: 'Player 1', battles: ['win', 'low', 'tie']},
//     { name: 'Player 2', battles: ['tie', 'tie', 'win']},
//     { name: 'Player 3', battles: ['low', 'win', 'low']},
//     { name: 'Player 4', battles: ['win', 'win', 'tie']}
//   ];

function Leaderboard({ battleResults }) {
  const [results, setResults] = useState(battleResults);

  useEffect(() => {
    setResults(battleResults);
  }, [battleResults, setResults]);

  const calculateScore = (battles) => {
    let score = 0;
    for (let i = 0; i < battles.length; i++) {
      if (battles[i] === "win") {
        score += 3;
      } else if (battles[i] === "tie") {
        score += 1;
      }
    }
    return score;
  };

  const sortedResults = [...results].sort(
    (a, b) => calculateScore(b.battles) - calculateScore(a.battles)
  );

  return (
    <div className="container">
      <div className="table">
        <div className="table-header">
          <div className="table-cell">Ranking</div>
          <div className="table-cell">Battles</div>
          <div className="table-cell"></div>
        </div>
        {sortedResults.map((result, index) => {
          // count loss, tie, win
          const count = result.battles.reduce(
            (acc, battle) => {
              acc[battle]++;
              return acc;
            },
            { low: 0, tie: 0, win: 0 }
          );

          return (
            <div key={result.name} className="table-row">
              <div className="table-cell">{result.name}</div>
              <div className="table-cell">
                {Object.entries(count).map(([battle, count]) => (
                  <span className="cell-result" key={battle}>
                    {count} - {battle}
                  </span>
                ))}
              </div>
              <div className="table-cell">{index + 1}º</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Leaderboard;
