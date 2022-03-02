import React, { useEffect, useState } from 'react';

const UseEffect = () =>{
    const[count, setCount]= useState(1)
    useEffect(() => {
            console.warn(count)
        }, [count==5])
    return (
        <div>
            <h2>Use Effect Working {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Update State</button>
        </div>
    );
};

export default UseEffect;