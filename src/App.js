import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import OutputArea from "./components/OutputArea";

function App() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleChangeExpression = (e) => {
    let value = e.target.value;

    setExpression((expression) => (expression ? expression + value : value));
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, expression.length - 1));
  };

  const handleCalculation = () => {
    let array = expression.split("");
    let newExpression = array
      .map((item) => {
        switch (item) {
          case "%":
            return (item = "/100");
          case "x":
            return (item = "*");
          default:
            return item;
        }
      })
      .join("");

    try {
      setResult(eval(newExpression));
    } catch {
      alert("Math error");
      setExpression("");
      setResult("");
    }
  };

  return (
    <div className="App vh-100 bg-danger bg-gradient d-flex align-items-center">
      <div className="container-sm p-0 bg-secondary rounded-5">
        <div className="row">
          <OutputArea result={result} expression={expression} />
        </div>

        <div className="row">
          <Buttons
            handleClear={handleClear}
            handleDelete={handleDelete}
            handleChangeExpression={handleChangeExpression}
            handleCalculation={handleCalculation}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
