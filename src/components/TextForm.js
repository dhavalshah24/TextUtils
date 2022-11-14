import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("Uppercase Clicked", text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase Clicked", text);
        let newText = "";
        setText(newText);
    }
    const handleLowClick = () => {
        // console.log("Uppercase Clicked", text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

  return (
    <div style={{color: props.mode==="dark"? "white" : "#042743"}}>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
            style={{backgroundColor: props.mode==="dark"? "grey" : "white", color: props.mode==="dark"? "white": "#042743"}}
            ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in textbox"}</p>
    </div>
    </div>
  )
}
