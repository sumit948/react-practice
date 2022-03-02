import React from 'react'

export default function FuncProfile(prop){
    const red = () =>{
        alert("Working fine")
    }
    return <div>
        <h2>Profile Component using function component</h2>
        <button onClick={red}>{prop.text}</button>
        <h4>{prop.text2.name}</h4>
        <h4>{prop.text2.currentNumber}</h4>
    </div>
}