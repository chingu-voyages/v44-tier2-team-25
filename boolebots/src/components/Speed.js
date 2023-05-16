import React, {useState, useEffect} from 'react'

export default function Speed() {
    
const [speed, setSpeed] = useState(1)

 useEffect(() => {
    const interval = setInterval(() => {
      // Move bots here with the current speed value
    }, 1000 / speed); // Adjust bot movement speed based on the selected speed
console.log(speed)
    return () => clearInterval(interval);
  }, [speed]);

    return (
    <div className='slider'>
    <input 
        type="range"
        min = "1"
        max = "3"
        value = {speed}
        onChange = {(e) => setSpeed(parseInt(e.target.value))}
    />
    <p className='speed'>{speed}x</p>
    </div>
    )
}