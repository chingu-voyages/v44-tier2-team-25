import "../Styles/BotPanel.css";

//component for each bot panel, displaying name, direction & boolean (maybe it's not needed)
//the * are supposed to be replaced by the bots numbers (1,2,3,4) 

const BotPanel = () => {


  return (
    <div className="bot-inputs">
      <label htmlFor="bot-*-name" />
      <input
        type="text"
        id="bot-*-name"
        placeholder="Bot number * "
        name="bot-*-name"
      />

      <label htmlFor="bot-*-direction" />
      <select id="bot-*-direction" name="bot-*-direction">
        <option value="">--Choose a direction--</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>

      <label htmlFor="bot-*-boolean" />
      <select id="bot-*-boolean" name="bot-2-boolean">
        <option value="">--Choose a value--</option>
        <option value="1">1</option>
        <option value="0">0</option>
      </select>
    </div>
  );
};

export default BotPanel;