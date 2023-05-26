import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };
  return (
    <div className="container" style={{"margin-left":"auto", "margin-right":"auto"}}>
      <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
        This website uses React to provide a set of text utilites. <br />
        It also uses Routing to provide smooth transitions <br />
        It utilizes basic logical JS for formatting text and controlling colors
      </h2>
    </div>
  );
}
