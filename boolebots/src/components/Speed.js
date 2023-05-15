import React, {useState, useEffect} from 'react'

export default function speed() {
    
const [speed, setSpeed] = React.useState(1)

 useEffect(() => {
    const interval = setInterval(() => {
      // Move bots here with the current speed value
    }, 1000 / speed); // Adjust bot movement speed based on the selected speed

    return () => clearInterval(interval);
  }, [speed]);

    return (<input 
        type="range"
        min = "1"
        max = "3"
        value = {speed}
        onChange = {(e) => setSpeed(parseInt(e.target.value))}
    />)
}