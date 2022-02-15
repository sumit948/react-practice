import React, {useState} from 'react';

// eslint-disable-next-line react-hooks/rules-of-hooks

export default function TextForm(props) {
  const [text , setText] = useState('Enter text here')
  //setText('new text')
  const handleonclick = () =>{
    console.log("clicked")
    //setText('upper case'+text)
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const handlelowerclick = () =>{
    console.log("clicked")
    //setText('upper case'+text)
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const handleonchange = (event)=>{
    console.log("changed")
    setText(event.target.value)
  }
  return(
    <>
      <div className='container'>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleonclick}>Change to Uppercase</button>
        
        <button className='btn btn-primary mx-2' onClick={handlelowerclick}>Change to Lowercase</button>
      </div>
      <div className='container my-3'>
                <h2>Text Summery</h2>
                <p>{text.split(" ").length} Words and Characters {text.length}</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text}</p>
      </div>  
      </>
  );
}
