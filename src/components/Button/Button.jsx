import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorState] = useState(
    { backgroundColor: "blueviolet", 
      borderColor: "black" }
    );

  return (
    <button onClick={props.onClick} style={colorState} className="btn">
      {props.children}
    </button>
  );
}

export default Button;