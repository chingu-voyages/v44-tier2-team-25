import React, {useState, useEffect} from "react";
import "./speedops.scss"

function Speedops(){
    const [speed, setSpeed] = useState(1)

useEffect(() => {
    const interval = setInterval(() => {
        
    },1000/speed);

    return () => clearInterval(interval)
} ,[speed])


    return(
        <div className="speedops">
        <div>
        <p className="input--title">Speed</p>
        <input type="range" 
        min="1" 
        max="3" 
        value= {speed}
        className="slider" 
        onChange={(e) => setSpeed(parseInt(e.target.value))}
        />
        <p className="speed--info">{speed === 1 ? "1x" : speed === 2 ? "2x" : "3x"}</p>
        
        </div>

        <div>
        <p className="input--title">Operation</p>
        <select className="operation--drop">
        <option value="AND">AND</option>
        <option value="OR">OR</option>
        <option value="XOR">XOR</option>
        <option value="NOT">NOT</option>
        </select>
        </div>

        </div>
    )
}

export default Speedops