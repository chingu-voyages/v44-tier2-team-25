import BotPanel from "../BotPanel/BotPanel";

import {BotDataContext} from "../../App.js"
import React, { useContext } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./configpanel.scss";
import "../../styles/global.scss";

//      <<<<<<< draft for the config panel, consider:>>>>>>>>


// to be done:

// replace the inputs with text when selected?
// add switch for values following figma design
// add pick color field after MVP

const ConfigPanel = () => {

  //use context data
  const {
    bot1Data,
    setBot1Data,
    bot2Data,
    setBot2Data,
    bot3Data,
    setBot3Data,
    bot4Data,
    setBot4Data,
  } = useContext(BotDataContext);



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
