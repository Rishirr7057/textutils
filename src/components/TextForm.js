import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpperCase = () =>{
        console.log("Upercase Was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
       props.showAlert(": Converted to Uppercase :","success");
    }
    
    const handleLowerCase = () =>{
        console.log("LowerCase Button Was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted into LowerCase","success");
    }
    const handleClearText = () =>{
        console.log("clear text  Button Was clicked :"+text);
        let newText = "";
        setText(newText);
        props.showAlert(": TextBox is cleared Now","success");
    }

    const copyText = () =>{
       console.log("text Is Compied successfully");
       let text= document.getElementById("MyBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert(": Copied to Clipboard","success");
    }

    const handleExtraSpaces = () =>{
        console.log("extra space is handled successfully")
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(": Extra Spaces are Removed","success");
    }

    const handleOnChange = (event) =>{
        console.log("handle on change  Was clicked");
        setText(event.target.value);
    }



    const [text, setText] = useState(''); 
    //text="new ext";  //wrong way to change value of the textarea//
    //setText("new text by setText and this is the right way to change the value");    


    return (
        <>
    <div className="container" style={{ color:props.mode==='dark'?'white':'black'} }>
        <h2 className="my-4">{props.heading}   </h2>
            <div className="mb-3">
                    {/* <label htmlFor="MyBox">Enter your Text Here</label> */}
                <textarea name="textarea" id="MyBox" className="form-control"   onChange={handleOnChange} value={text} rows="10" style={{ backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase} >Convert To UperCase</button>
            <button className="btn btn-primary mx-2 " onClick={handleLowerCase} >Convert To LowerCase</button>
            <button className="btn btn-primary mx-2 " onClick={handleClearText} >Clear Text</button>
            <button className="btn btn-primary mx-2 " onClick={copyText} >Copy Text</button>
            <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces} >Remove Extra Space</button>

            
                </div>
    <div className="container my-3" style={{
    color:props.mode==='dark'?'white':'black'}
    }>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some text in the above given textbox to Preview "}</p>
    </div>
    </>
  )
}
