import React, {useState, useEffect} from "react";
import { Box, Text, Select } from "@chakra-ui/react";
import "./speedops.scss"


function Speedops(){

/* speed */

    const [speed, setSpeed] = useState(1)

useEffect(() => {
    const interval = setInterval(() => {
        
    },1000/speed);

    return () => clearInterval(interval)
} ,[speed])

/* Opeation */

    const [operation, setOperation] = useState("AND")

const changeOps = (e) => {
    setOperation(e.target.value)
}

    return(
        <Box className="speedops">
        <Box>
        <Text className="input--title">Speed</Text>
        <input type="range" 
        min="1" 
        max="3" 
        value= {speed}
        className="slider" 
        onChange={(e) => setSpeed(parseInt(e.target.value))} 
        />
        
        <Text className="speed--info">{speed === 1 ? "1x" : speed === 2 ? "2x" : "3x"}</Text>
        
        </Box>

        <Box>
        <Text className="input--title">Operation</Text>
        <Select onChange={changeOps} size='sm' variant='filled'>
        <option value="AND">AND</option>
        <option value="OR">OR</option>
        <option value="XOR">XOR</option>
        <option value="NOT">NOT</option>
        </Select>
        </Box>

        </Box>
    )
}

export default Speedops