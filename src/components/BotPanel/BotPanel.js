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
    const { name, value, type, checked } = e.target;
    //conditional to handle the switch buttons as 'checkbox'
    const inputValue = type === "checkbox" ? (checked ? "1" : "0") : value;
    setBotData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: inputValue,
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
  console.log(bot1Data.boolean);
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
      <div className="switch-wrapper">
        <div
          className={`checkbox ${botData.boolean === "1" && "checkbox--on"}`}
          onClick={() =>
            setBotData((prevData) => ({
              ...prevData,
              boolean: prevData.boolean === "1" ? "0" : "1",
            }))
          }
        >
          <div className="checkbox__ball"></div>
          <span className="checkbox__text">
            {botData.boolean === "1" ? "1" : "0"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotPanel;
