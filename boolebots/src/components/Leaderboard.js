import { useState, useEffect } from "react";
import "./leaderboard.css";

function Leaderboard({ battleResults }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(battleResults);
  }, [battleResults]);

  const calculateScore = (battles) => {
    let score = 0;
    for (let key in battles) {
      score += battles[key];
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
          return (
            <div key={result.id} className="table-row">
              <div className="table-cell">{result.name}</div>
              <div className="table-cell">
                {result.battles.loss !== 0 && <span className="cell-result loss">{result.battles.loss} - loss</span>}
                {result.battles.tie !== 0 && <span className="cell-result tie">{result.battles.tie} - tie</span>}
                {result.battles.win !== 0 && <span className="cell-result win">{result.battles.win} - win</span>}
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
