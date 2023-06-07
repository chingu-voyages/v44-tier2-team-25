import { useEffect, useState, useContext } from "react";
import "./botpanel.scss";

import { BotDataContext } from "../../App.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const BotPanel = ({ botData, setBotData }) => {
  //use data from context
  const { bot1Data, bot2Data, bot3Data, bot4Data } = useContext(BotDataContext);
  //state for toggling modal
  const [showModal, setShowModal] = useState(false);

  //add random coordinates to each bot in board
  const randomCoordinate = () => {
    return Math.floor(Math.random() * 8) + 1; // will be 8x8 as MVP - check on gameboard component for "boardsize" to replace
  };

  //validation function:
  // the validation is triggered when user stops writting and leaves the camp(onblur), check if the
  //form an array with all the bots data, check if name(e.target.value) is = to the iterated bot.name
  const handleDuplicateName = (name) => {
    const duplicateBots = [bot1Data, bot2Data, bot3Data, bot4Data].filter(
      (bot) => bot.name === name
    );
    if (duplicateBots.length > 1 && !duplicateBots.includes("")) {
      setShowModal(true);
    }
  };

  //update the data, check with bot-movement for possible refactoring
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

  //toggle boolean value
  const handleBoolean = () => {
    const booleanValue = botData.boolean === "1" ? "0" : "1";
    handleInputChange({
      target: {
        name: "boolean",
        value: booleanValue,
      },
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
        onBlur={() => handleDuplicateName(botData.name)} 
      />
      {/* will only appear when state to true, toggle in validation function */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Duplicate Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>This name is already taken. Please choose a different name.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setShowModal(false)}>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <label htmlFor="bot-direction" />
      <select id="bot-direction" name="direction" onChange={handleInputChange}>
        <option value="">direction</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>

      <label htmlFor="bot-boolean" />
      {/* <select id="bot-boolean" name="boolean" onChange={handleInputChange}>
        <option value="">value</option>
        <option value="1">1</option>
        <option value="0">0</option>
      </select> */}
      <div onClick={handleBoolean} id="bot-boolean" name="boolean"
        className={`checkbox ${botData.boolean === "1" && "checkbox-on"}`}>
        <div className="checkbox-ball"></div>
        <span className="checkbox-text" name="boolean">
          {botData.boolean === "1" ? "1" : "0"}
        </span>
      </div>
    </div>
  );
};

export default BotPanel;
