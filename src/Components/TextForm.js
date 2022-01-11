import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper Case was clicked!");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = ()=>{
        // console.log("Upper Case was clicked!");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("Upper Case was clicked!");
        let newText = " ";
        setText(newText)
    }
    const textCopy = ()=>{
        // console.log("Upper Case was clicked!");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpace = ()=>{
        // console.log("Upper Case was clicked!");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
    return (
        <>
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" row="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert UpperCase</button>
            <button className="btn btn-primary ms-3" onClick={handleDownClick}>Convert LowerCase</button>
            <button className="btn btn-primary ms-3" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary ms-3" onClick={textCopy}>Copy</button>
            <button className="btn btn-primary ms-3" onClick={removeExtraSpace}>Remove Spaces</button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} seconds to read this!</p>
            <h2>Preview</h2>
            <p>{text.length > 0? text: 'Enter Something Above to Preview Here'}</p>
        </div>
        </>
    )
} 
