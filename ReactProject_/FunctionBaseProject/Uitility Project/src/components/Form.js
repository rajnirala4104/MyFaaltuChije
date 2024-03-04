import React, { useState } from 'react'

//main Form function
function Form(props) {
    const [text, setText] = useState(""); //using useState 
    const [inputText, setInputText] = useState("");

    //function to write in textarea
    const textAreaOnChange = (e) => setText(e.target.value)
    //function to clear the textarea
    const clearTextarea = () => setText("")
    //function to convert the text into upperCase
    const convertToUpperCase = (e) => {
        let updatedValue = text.toUpperCase()
        setText(updatedValue)
    }
    const convertToLowerCase = (e) => {
        let updatedValue = text.toLowerCase()
        setText(updatedValue)
    }

    //function to wirte in input tag
    const inputOnChange = (e) => {
        setInputText(e.target.value)
        // console.log(inpuTtext)
    }

    //function to copy the text
    const CopyToClipboard = (e) => {
        if (text === "") alert("There is nothing to do copy")
        else {
            navigator.clipboard.writeText(text);
            alert("Coppied..")
        }
    }

    //functin to extra space remover
    const extraSpaceRemover = ()=>{
        // console.log(text)
        let something = text.split(/[ ]+/)
        setText(something.join(" "))
    }

    //email extractor
    const emailExtractor = () => {
        alert("Not working...\nWe're solving the problem")
    }

    //Capitalizer
    const Capitalizer = ()=>{
        console.log(text)
        
        let updatedTextArr = text.split(/[ ]+/).map(singleText => singleText.charAt(0).toUpperCase() + singleText.slice(1).toLowerCase())
        setText(updatedTextArr.join(' '))
    }


    //Dark mode CSS 
    const darkModeStyle = {
        background: "white", //light background
        color: "black" //light font color
    };

    // ----------- functioon to do dark mode ----------------
    const [themeStyle, setThemeStyle] = useState(darkModeStyle)
    const [btnThemeChangeText, setBtnThemeChangeText] = useState("Dark Mode")
    const darkMode = () => {
        // console.log("i'm clicking")
        if (themeStyle.background === "#343a40") {
            setThemeStyle({
                background: "white", //light background
                color: "black" //light font color
            })
            setBtnThemeChangeText("Dark Mode")
        } else {
            setThemeStyle({
                background: "#343a40", //dark background
                color: "#c7c7c7",//dark font color
                // border: "2px solid #c7c7c7",
                boxShadow: "0px 0px 10px black",
                border: "none !important"
            })
            setBtnThemeChangeText("Light Mode")
        }
    }
    return (
        <>
            <div className="form-group">
                <h4> <label htmlFor="exampleFormControlTextarea1">Name</label></h4>
                <input type="name" style={themeStyle} className="form-control inputItem" id="exampleFormControlInput1" placeholder="Enter name.." onChange={inputOnChange} />
            </div>
            <div className="form-group">
                {/* <h3> <label htmlFor="exampleFormControlTextarea1"></label></h3> */}
                <textarea className="form-control textArea inputItem" style={themeStyle} value={text} onChange={textAreaOnChange} id="exampleFormControlTextarea1" placeholder={props.idea} rows="6"></textarea>
            </div>
            <div className="container-btns">
                <button onClick={convertToUpperCase} className="btn btn-primary">Conver to UpperCase</button>
                <button onClick={convertToLowerCase} className="btn btn-primary">Conver to LowerCase</button>
                <button onClick={CopyToClipboard} className="btn btn-primary">Copy To Clipboard</button>
                <button onClick={emailExtractor} className="btn btn-primary">Extract Emails</button>
                <button onClick={Capitalizer} className="btn btn-primary">Capitalize</button>
                <button onClick={darkMode} className="btn btn-primary">{btnThemeChangeText}</button>
                <button onClick={extraSpaceRemover} className="btn btn-primary">Remove Extra Spaces </button>
                <button onClick={clearTextarea} className="btn btn-danger">Clear</button>
            </div>
            <div className="container result-container my-3" style={themeStyle}>
                <h2>Text Information</h2>
                Numbers of word : <strong>{text.split(' ').length === 1 ? 0 : text.split(' ').length}</strong> and Numbers of charectars: <strong>{text.length}</strong>
            </div>
        </>
    )
}

Form.defaultProps = {
    idea: "Enter here something here..."
}
export default Form;