import React, { useContext } from "react";
import useTimer from "easytimer-react-hook";
import { BotDataContext } from "../../App";

export default function Stopwatch() {
  const { gameStatus } = useContext(BotDataContext);
  const [timer] = useTimer({
    /* Hook configuration */
  });
  gameStatus ? timer.start() : timer.pause();

  return <div>{timer.getTimeValues().toString()}</div>;
}
