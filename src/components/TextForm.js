import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("clicked upper");
    let newText = text.toUpperCase();
    settext(newText);
  };
  const textSort = () => {
    let arrangedText = text.split(" ").sort().join(" ");
    console.log(arrangedText);
    settext(arrangedText);
  };
  const handleOnChange = (event) => {
    console.log("clicked upper");
    settext(event.target.value);
  };

  const [text, settext] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
              Enter your text here
            </h1>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#3A3B3C" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary" onClick={textSort}>
          Arrange alphabetically
        </button>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {" "}
          Total {text.length} characters and{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words{" "}
        </p>
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Text Preview
        </h1>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length === 0 ? "start typing to preview" : text}
        </p>
      </div>
    </>
  );
}
