import React, {useState} from 'react'

export default function Operation(){
   const [operation, setOperation] = useState("") 

   const selectOps = (e) => {
        setOperation(e.target.value)
   }
    
    return(
        <select className='operation--menu' value={operation} onChange={selectOps}>
        <option value="">Select an Operation</option>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="XOR">XOR</option>
        <option value="NOT">NOT</option>
        </select>
    )
}