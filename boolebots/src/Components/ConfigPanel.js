import "../Styles/ConfigPanel.css";
import BotPanel from "./BotPanel";
import { useState } from "react";

//       <<<<<<< draft for the config panel, consider:>>>>>>>>



// to discuss:
//add color to bots

// to be done:

// validation
//add Chakra css


// replace the input fields with the displayed data (disappear th fields)? and clicks to edit them?
// user be able to select 2 bots to battle?
// add switch for values following figma 
//add pick color field


const ConfigPanel = () => {
  const [bot1Data, setBot1Data] = useState({
    id: 1,
    name: "",
    direction: "",
    boolean: "",
  });
  const [bot2Data, setBot2Data] = useState({
    id: 2,
    name: "",
    direction: "",
    boolean: "",
  });
  const [bot3Data, setBot3Data] = useState({
    id: 3,
    name: "",
    direction: "",
    boolean: "",
  });
  const [bot4Data, setBot4Data] = useState({
    id: 4,
    name: "",
    direction: "",
    boolean: "",
  });

  const [speed, setSpeed] = useState(1);
  const [operator, setOperator] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  return (
    <div className="main-container">
      <h2>--bots configuration panel--</h2>

      <div className="config-wrapper">
        <div className="category-wrapper">
          <h4>Name</h4>
          <h4>Direction</h4>
          <h4>Value</h4>
        </div>
        <BotPanel botData={bot1Data} setBotData={setBot1Data} />
        <BotPanel botData={bot2Data} setBotData={setBot2Data} />
        <BotPanel botData={bot3Data} setBotData={setBot3Data} />
        <BotPanel botData={bot4Data} setBotData={setBot4Data} />
      </div>

      <div className="speed-operator-wrapper">
        <div>
          <label htmlFor="speed">speed</label>
          <input
            type="range"
            name="speed"
            min="1"
            max="4"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="operator">operator</label>
          <select name="operator" onChange={(e) => setOperator(e.target.value)}>
            <option>--choose an operator--</option>
            <option value="AND">AND</option>
            <option value="OR">OR</option>
            <option value="XOR">XOR</option>
            <option value="NOT">NOT</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
