import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#093c70':'white',
    border: '1px solid',
    borderColor: props.mode==='dark'?'white':'black'
  }
  return (
    <div className="container" style={{
      color: props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'#062a4e':'white'
    }}>
      <h1 className="mt-2">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong> Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils Gives You a way to Analyze your text Quickly and
              Efficiently, be it Word count, Character count or Capitalize Your
              text etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character Counter tool that provides instant
              character count statistics for a given text. TextUtils reports the
              number of Words and Characters. This it is suitable for writing
              text with Word/Character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              This Word Counter software works in any browser like Chrome ,
              Firefox ,Internet Explorer , Safari , Opera etc. It suits to count
              Characters in Facebook , blog , books, excel document , pdf
              document , essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
