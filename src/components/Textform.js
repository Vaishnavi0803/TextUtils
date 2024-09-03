import React, { useState } from 'react';

export default function Textform() {
  const [text, setText] = useState('Enter your text');
  const [fword, setFword] = useState('');
  const [rword, setRWord] = useState('');

  const func1 = () => {
    console.log("Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const func2 = (event) => {
    console.log("Change occurred");
    setText(event.target.value);
  };

  const func3 = () => {
    console.log("Button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const func4 = () => {
    console.log("Button was clicked");
    setText('');
  };

  const func5 = () => {
    console.log("Button was clicked");
    let newText = text.split('').reverse().join('');
    setText(newText);
  };

  const func6 = () => {
    console.log("Button was clicked");
    let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText);
  };

  const speak = () => {
    console.log("Button was clicked");
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const func7 = () => {
    console.log("Button was clicked");
    let newText = text.replace(/\s+/g, '');
    setText(newText);
  };

  const fChange = (event) => {
    setFword(event.target.value);
  };

  const rChange = (event) => {
    setRWord(event.target.value);
  };

  const fReplace = () => {
    console.log("Find and Replace button was clicked");
    let newText = text.replaceAll(fword, rword);
    setText(newText);
  };

  return (
    <>
    <div>
      <div className="container mb-3 ml-5 pl-5">
        <h3>Enter the text you want to analyse</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={func2}
          rows="8"
        ></textarea>
        <div className="mb-3">
          <label htmlFor="findWord">Find Word:</label>
          <input
            type="text"
            id="findWord"
            value={fword}
            onChange={fChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="replaceWord">Replace With:</label>
          <input
            type="text"
            id="replaceWord"
            value={rword}
            onChange={rChange}
            className="form-control"
          />
        </div>
        <br />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <button id="btn-uppercase" disabled={text.length===0}className="btn btn-primary" onClick={func1}>
            Convert to Uppercase
          </button>
          <button id="btn-lowercase" disabled={text.length===0}className="btn btn-primary" onClick={func3}>
            Convert to Lowercase
          </button>
          <button id="btn-reverse" disabled={text.length===0}className="btn btn-primary" onClick={func5}>
            Reverse Text
          </button>
          <button id="btn-wordcount" disabled={text.length===0}className="btn btn-primary" onClick={func6}>
            Capitalize First Letter of Each Word
          </button>
          <button id="btn-clear" disabled={text.length===0}className="btn btn-primary" onClick={func4}>
            Clear
          </button>
          <button id="btn-speak" disabled={text.length===0}className="btn btn-primary" onClick={speak}>
            Speak
          </button>
          <button id="btn-remove-spaces" disabled={text.length===0}className="btn btn-primary" onClick={func7}>
            Remove Spaces
          </button>
          <button id="btn-find-replace" disabled={text.length===0}className="btn btn-primary" onClick={fReplace}>
            Find and Replace
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your summary</h2>
        <p>Word count={text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <p>Character count={text.length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
    </>
  );
}




