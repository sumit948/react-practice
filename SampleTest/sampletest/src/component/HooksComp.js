import React, {useState} from "react";

function HooksComp(){
        const [count,setCount]= useState(0)
        return (
            <div>
                <h1>Hooks Working.. {count}</h1>
                <button onClick={()=>{setCount(count+1)}}>Increament</button>
            </div>
        )
}
export default HooksComp;