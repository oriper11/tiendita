import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorState, setColorState] = useState(
    { backgroundColor: (props.color), 
      borderColor: "black" }
    );

  function handleClick() { 
    setColorState({ backgroundColor: "violet", color: "white" });
  }

  return (
    <button onClick={handleClick} style={colorState} className="btn">
      {props.children}
    </button>
  );
}

export default Button;