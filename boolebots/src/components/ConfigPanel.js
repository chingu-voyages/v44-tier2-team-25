import BotPanel from "./BotPanel";
import { useState } from "react";

//      <<<<<<< draft for the config panel, consider:>>>>>>>>
// all state will be lifted up later, speed and operator included

// to be done:
// * validation
// * add Chakra and sass

// user be able to select 2 bots to battle?
// add switch for values following figma design
// add pick color field



const ConfigPanel = () => {
  const [speed, setSpeed] = useState(1); //check speed-ops component
  const [operator, setOperator] = useState(""); // check speed-ops component

  const [errorMessage, setErrorMessage] = useState(""); // state for validation

  // initial state for each bot
  const [bot1Data, setBot1Data] = useState({
    id: 1,
    name: "",
    direction: "",
    boolean: "",
    x: "",
    y: "",
  });
  const [bot2Data, setBot2Data] = useState({
    id: 2,
    name: "",
    direction: "",
    boolean: "",
    x: "",
    y: "",
  });
  const [bot3Data, setBot3Data] = useState({
    id: 3,
    name: "",
    direction: "",
    boolean: "",
    x: "",
    y: "",
  });
  const [bot4Data, setBot4Data] = useState({
    id: 4,
    name: "",
    direction: "",
    boolean: "",
    x: "",
    y: "",
  });

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

      {/* <<<<<<<<<<<<<<<<<< separate components by Heet will replace the following>>>>>>>>>>>>>>>>>>
      
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
      </div>*/}
    </div>
  );
};

export default ConfigPanel;
