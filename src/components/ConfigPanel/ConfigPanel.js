import BotPanel from "../BotPanel/BotPanel";
import { Grid, GridItem } from "@chakra-ui/react";
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

const ConfigPanel = (props) => {
  // const [speed, setSpeed] = useState(1); //check speed-ops component
  // const [operator, setOperator] = useState(""); // check speed-ops component

  // const [errorMessage, setErrorMessage] = useState(""); // state for validation

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
        <BotPanel botData={props.bot1Data} setBotData={props.setBot1Data} />
        <BotPanel botData={props.bot2Data} setBotData={props.setBot2Data} />
        <BotPanel botData={props.bot3Data} setBotData={props.setBot3Data} />
        <BotPanel botData={props.bot4Data} setBotData={props.setBot4Data} />
      </div>
    </div>
  );
};

export default ConfigPanel;
