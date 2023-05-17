import { useState } from "react";

const BotPanel = ({ botData, setBotData }) => {


  //add random coordinates to each bot in board
  const randomCoordinate = () => {
    return Math.floor(Math.random() * boardSize) + 1; // 8x8 as MVP - check on gameboard component
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBotData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
        x: randomCoordinate(),
        y: randomCoordinate(),
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
