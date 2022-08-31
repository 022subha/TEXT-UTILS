import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");

  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    //props.showAlert("Converted to Upper Case!");
  };
  const countWords = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    if (newText.length === 0) return newText.split(" ").length - 1;
    else return newText.split(" ").length;
  };
  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    //props.showAlert("Converted to Lower Case!");
  };
  const toRemove = () => {
    let newText = text.replace(/[" "]+/g, " ").trim();
    newText = newText.replace(/\n+/g, "\n").trim();
    newText = newText.replace(/\n[" "]+/g, "\n").trim();
    setText(newText);
    //props.showAlert("Extra Space Removed!");
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied!");
  };
  const handleClick = () => {
    setText("");
    //props.showAlert("Text Cleared!");
  };
  const handleTitle = () => {
    let newText = text.toLowerCase().split(" ");
    for (var i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    //props.showAlert("Converted to Tittle Case!");
  };
  const change = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Enter your text here</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={change}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
            border:
              props.mode === "dark" ? "2px solid white" : "1px solid black",
          }}
          id="myBox"
          rows="8"
        ></textarea>

        <button
          type="button"
          onClick={toUpper}
          disabled={text.length===0} 
          className="btn btn-primary my-3 mx-2"
          style={{
            border:
              props.mode === "dark" ? "1px solid white" : "0px solid black",
          }}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          onClick={toLower}
          disabled={text.length===0} 
          className="btn btn-danger my-3 mx-2"
          style={{
            border:
              props.mode === "dark" ? "1px solid white" : "0px solid black",
          }}
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          onClick={toRemove}
          disabled={text.length===0} 
          className="btn btn-info my-3 mx-2"
          style={{
            border:
              props.mode === "dark" ? "1px solid white" : "0px solid black",
          }}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          onClick={handleTitle}
          disabled={text.length===0} 
          className="btn btn-primary my-3 mx-2"
          style={{
            border:
              props.mode === "dark" ? "1px solid white" : "0px solid black",
          }}
        >
          Convert to Title Case
        </button>

        <button
          type="button"
          onClick={handleCopy}
          disabled={text.length===0} 
          className="btn btn-warning my-3 mx-2"
          style={{
            border:
              props.mode === "dark" ? "1px solid white" : "0px solid black",
          }}
        >
          Copy Text
        </button>
        <button
          type="button"
          onClick={handleClick}
          disabled={text.length===0} 
          className="btn btn-success my-3 mx-2"
          style={{
            border:
              props.mode === "dark" ? "1px solid white" : "0px solid black",
          }}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Text Summary</h3>
        <p>
          {text.trim().length} Characters, {countWords()} Words
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter your text in textarea to preview"}
        </p>
      </div>
    </>
  );
}
