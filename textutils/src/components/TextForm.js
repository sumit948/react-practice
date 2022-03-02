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
    props.showAlert("converted to uppercase!","success");
  }
  const handletoclear = () =>{
    console.log("handle to clear text is working")
    setText('')
    props.showAlert("Cleaned!","success");
  }
  const handlelowerclick = () =>{
    console.log("clicked")
    //setText('upper case'+text)
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert("converted to lowercase!","success");
  }
  const handleonchange = (event)=>{
    console.log("changed")
    setText(event.target.value)
  }

  const handlecopy = () => {
    console.log("copy is working fine")
    var text = document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("copy!","success");
  }

  return(
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'teal-200':'light',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleonclick}>Change to Uppercase</button>
        
        <button className='btn btn-primary mx-1 my-1' onClick={handlelowerclick}>Change to Lowercase</button>

        <button className='btn btn-primary mx-1 my-1' onClick={handletoclear}>Clear</button>

        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy} id="mybox">Copy Text</button>
      </div>
      <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Text Summery</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and Characters {text.length}</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter Something text to preview.."}</p>
      </div> 
      </>
  );
}
