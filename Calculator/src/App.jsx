import Display from "./Components/Display/Display";
import "./App.css";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import { useState } from "react";

function App() {
  const [text, setText] = useState("0");

  const handleOnClick = (event) => {
    const value = event.target.textContent;

    if (value === "AC") {
      setText("0");
    } else if (value === "=") {
      try {
        setText(String(new Function(`return ${text}`)()));
      } catch (error) {
        setText(error);
      }
    } else {
      setText((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div classNameNameNameNameName="main-container">
      <Display text={text} />
      <ButtonContainer handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
