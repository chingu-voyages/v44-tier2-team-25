import "../Styles/BotPanel.css";
import { useState } from "react";

const BotPanel = ({ botData, setBotData }) => {
  const [botName, setBotName] = useState("");
  const [botDirection, setBotDirection] = useState("");
  const [botValue, setBotValue] = useState("");

  const handleInputChange = (e) => { // update bot state 
    const { name, value } = e.target;
    setBotData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      return updatedData;
    });
  };

  return (
    <div className="bot-inputs">
      <label htmlFor="bot-name" />
      <input
        type="text"
        id="bot-name"
        placeholder="Bot name"
        name="name"
        value={botData.name}
        onChange={handleInputChange}
      />

      <label htmlFor="bot-direction" />
      <select id="bot-direction" name="direction" onChange={handleInputChange}>
        <option value="">--Choose a direction--</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>

      <label htmlFor="bot-boolean" />
      <select id="bot-boolean" name="boolean" onChange={handleInputChange}>
        <option value="">--Choose a value--</option>
        <option value="1">1</option>
        <option value="0">0</option>
      </select>
    </div>
  );
};

export default BotPanel;
