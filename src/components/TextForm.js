import React, {useState} from "react";

export default function TextForm(props) {

    const HandleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted To UpperCase' , 'success');
    }

    const HandleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted To LowerCase' , 'success');
    }

    const HandleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared' , 'success');
    }

    const HandleCopy = ()=>{
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert('Text Copied to ClipBoard' , 'success');
    }

    const HandleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra Spaces Removed' , 'success');
    }

    const HandleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text , setText] = useState('');

  return (
      <>
    <div className="container mb-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          placeholder="Enter Text Here"
          value = {text}
          rows={8}
          defaultValue={""}
          onChange={HandleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'#093c70',
                  color: props.mode==='dark'?'white':'black'
      }}
        />
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={HandleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={HandleLoClick}>Convert To LowerCase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={HandleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={HandleCopy}>Copy Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{
          return element.length !== 0;
        }).length} Words and {text.length} Characters</p>
        <p>Can be Read in {0.008*text.split(/\s+/).filter((element)=>{
          return element.length !== 0;
        }).length} Minutes.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Something in TextBox Above to Preview It Here.'}</p>
    </div>
    </>
  );
}
