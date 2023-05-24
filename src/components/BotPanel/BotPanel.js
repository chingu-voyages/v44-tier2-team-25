// import { useState } from "react";
import "./botpanel.scss";
import React, { useContext } from "react";
import { BotDataContext } from "../../App.js";

// the validation is triggered when user stops writting and leaves the camp(onblur), check if the 
// placement of the bots function can betriggered there too.





const BotPanel = ({ botData, setBotData }) => {
  //use data from context
  const { bot1Data, bot2Data, bot3Data, bot4Data } = useContext(BotDataContext);

  //add random coordinates to each bot in board
  const randomCoordinate = () => {
    return Math.floor(Math.random() * 8) + 1; // will be 8x8 as MVP - check on gameboard component for "boardsize" to replace
  };

  //validation function:
  //form an array with all the bots data, check if name(e.target.value) is = to the iterated bot.name
  const handleDuplicateName = (name) => {
    const duplicateBots = [bot1Data, bot2Data, bot3Data, bot4Data].filter(
      (bot) => bot.name === name
    );
    //if the array has 2 names and user didn't leave blank alert!(can add a modal or p tag after MVP)
    if (duplicateBots.length > 1 && !duplicateBots.includes("")) {
      alert("this name is taken");
    }

  };

  //update the data, check with bot-movement for possible refactoring
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
        placeholder="name your bot"
        name="name"
        value={botData.name}
        onChange={handleInputChange}
        onBlur={() => handleDuplicateName(botData.name)} //can the function to place the bots be triggered onBlur as well ?
      />

      <label htmlFor="bot-direction" />
      <select id="bot-direction" name="direction" onChange={handleInputChange}>
        <option value="">direction</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>

      <label htmlFor="bot-boolean" />
      <select id="bot-boolean" name="boolean" onChange={handleInputChange}>
        <option value="">value</option>
        <option value="1">1</option>
        <option value="0">0</option>
      </select>
    </div>
  );
};

export default BotPanel;
