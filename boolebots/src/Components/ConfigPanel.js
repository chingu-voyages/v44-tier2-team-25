import "./ConfigPanel.css";
import BotPanel from "./BotPanel";
import { useState } from "react";



//       <<<<<<< draft for the config panel, consider:>>>>>>>>

//the bots panel are in a different component, just a sugestion, to be discussed
//there's no logic on how the data is going to be stored yet, just the inputs
//the min-max speed values are just dummy, numbers 1 to 10
//don't mind the css, it's just to give room till we move forward


//       <<<<<<< to discuss>>>>>>>>
//according to the wireframe, I imagine the inputs are going to be replaced by the data? 
//naming conventions? 
//following the wirefrime design, the boolean values will be displayed in a different way, as a button for each 0 & 1? 


// no need to say everything is draft :)

// to be done:
// logic to collect the data
// replace the input fields with the displayed data (disappear th fields)? and clicks to edit them? 
// validation
// user be able to select 2 bots to battle?





const ConfigPanel = () => {
  const [speed, setSpeed] = useState(1);
  const [operator, setOperator] = useState("");

  return (
    <div className="main-container">           
      <h2>--bots configuration panel--</h2> 


      <div className="config-wrapper">
        <div className="category-wrapper">
          <h4>Name</h4>
          <h4>Direction</h4>
          <h4>Value</h4>
        </div>

        <BotPanel />
        <BotPanel />
        <BotPanel />
        <BotPanel />

      </div>

      <div className="speed-operator-wrapper">
        <div>
          <label htmlFor="speed">speed</label>
          <input
            type="range"
            name="speed"
            min="1"
            max="10"
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