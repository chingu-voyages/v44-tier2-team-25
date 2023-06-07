import React, { useContext } from "react";
import useTimer from "easytimer-react-hook";
import { BotDataContext } from "../../App";
import "./gamestopwatch.scss";

export default function Stopwatch() {
  const { gameStatus } = useContext(BotDataContext);

  const [timer] = useTimer({
    precision: "secondTenths",
  });
  gameStatus ? timer.start() : timer.pause();

  return (
    <div className="game-timer">
      {timer.getTimeValues().toString(["minutes", "seconds", "secondTenths"])}
    </div>
  );
}
