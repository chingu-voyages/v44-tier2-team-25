import BotPanel from "../BotPanel/BotPanel";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import "./configpanel.scss";
import "../../styles/global.scss";

//      <<<<<<< draft for the config panel, consider:>>>>>>>>
// all state will be lifted up later, speed and operator included

// to be done:
// * validation
// replace the inputs with text when selected?
// * add Chakra and sass


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
    <div className="config-panel">
      <div className="category-wrapper">
        <Grid templateColumns="1fr 1fr 1fr" templateRows="1fr" gap={4}>
          <GridItem w="160px">
            <h4>Name</h4>
          </GridItem>
          <GridItem w="80px">
            <h4>Direction</h4>
          </GridItem>
          <GridItem w="50px">
            <h4>Value</h4>
          </GridItem>
        </Grid>
      </div>
      <div>
        <BotPanel botData={bot1Data} setBotData={setBot1Data} />
        <BotPanel botData={bot2Data} setBotData={setBot2Data} />
        <BotPanel botData={bot3Data} setBotData={setBot3Data} />
        <BotPanel botData={bot4Data} setBotData={setBot4Data} />
      </div>
    </div>
  );
};

export default ConfigPanel;
