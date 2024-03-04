import {useState}from "react"
function Form(props) {  
    const [text, setText] = useState("")
    const textareaChange = (e) => setText(e.target.value)
    const accessTextAreaText = ()=>{
        alert(text)
    }
    return (
        <>

            <div className="form-group" style={{background:text}}>
                <h3>
                    <label htmlFor="exampleFormControlTextarea1">Notes</label>
                </h3>
                <textarea className="form-control" onChange={textareaChange} id="exampleFormControlTextarea1" placeholder="Enter here..." rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={accessTextAreaText}>Add</button>
        </>
    )
}

export default Form;

