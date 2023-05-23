import { useEffect } from "react";
import "./botpanel.scss";

const BotPanel = ({ botData, setBotData }) => {
  //add random coordinates to each bot in board
  const randomCoordinate = () => {
    return Math.floor(Math.random() * 8) + 1; // will be 8x8 as MVP - check on gameboard component for "boardsize" to replace
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBotData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      return updatedData;
    });
  };
  useEffect(() => {
    const botParameters =
      botData.x === 0 && botData.y === 0 && botData.name.length > 0;
    if (botParameters) {
      setBotData((prevBotData) => ({
        ...prevBotData,
        x: randomCoordinate(),
        y: randomCoordinate(),
      }));
    }
  }, [botData, setBotData]);

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
