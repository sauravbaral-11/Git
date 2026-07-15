import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <input type="text" value={input} readOnly className="display" />

      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={deleteLast}>DEL</button>

        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
