import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'? 'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white'
    }
  return (
    <>
        <div className='container' id="BoxOne" style={myStyle}>
                <h2><strong>About component</strong></h2>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficintly. Be it word count, character count.
                </div>
                </div>
        </div>
        </div>
    </div>

    </>
      )
}
