import React, { useContext } from "react";
import { BotDataContext } from "../../App.js";
import { Box, Text, Select } from "@chakra-ui/react";
import "./speedops.scss";

function Speedops() {
  //access data
  const { speed, setSpeed, setOperation } = useContext(BotDataContext);

  /* Opeation */

  const changeOps = (e) => {
    setOperation(e.target.value);
  };

  return (
    <Box className="speedops">
      <Box>
        <Text className="input--title">Speed</Text>
        <input
          type="range"
          min="1"
          max="3"
          value={speed === 1000 ? 1 : speed === 500 ? 2 : 3}
          className="slider"
          onChange={(e) => setSpeed(1000 / parseInt(e.target.value))}
        />

        <Text className="speed--info">
          {speed === 1000 ? "1x" : speed === 500 ? "2x" : "3x"}
        </Text>
      </Box>

      <Box>
        <Text className="input--title">Operation</Text>
        <Select onChange={changeOps} size="sm" variant="filled">
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="XOR">XOR</option>
          <option value="NOR">NOR</option>
        </Select>
      </Box>
    </Box>
  );
}

export default Speedops;
