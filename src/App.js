import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState();
  const [expression, setExpression] = useState();
  console.log(expression, result);

  const handleChangeExpression = (e) => {
    setExpression((expression) =>
      expression ? expression + e.target.value : e.target.value
    );
  };

  const handleReset = () => setExpression();

  const handleCalculation = () => {
    let value = parseInt(expression);
    setResult(value);
  };
  return (
    <div className="App vh-100 bg-danger bg-gradient d-flex align-items-center">
      <div className="container bg-secondary shadow rounded-5 d-flex flex-column justify-content-evenly">
        <div className="result">
          <h1 style={{ height: "50px" }}>{result}</h1>
          <h3 style={{ height: "40px" }}>{expression}</h3>
        </div>

        <div className="row">
          <div className="col-9 p-0 d-flex flex-column">
            <div className="d-flex">
              <button
                className="btn btn-light shadow flex-grow-1"
                onClick={handleReset}
              >
                C
              </button>
              <button className="btn btn-light shadow flex-grow-1">+/-</button>
              <button className="btn btn-light shadow flex-grow-1">%</button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={7}
                onClick={handleChangeExpression}
              >
                7
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={8}
                onClick={handleChangeExpression}
              >
                8
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={9}
                onClick={handleChangeExpression}
              >
                9
              </button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={4}
                onClick={handleChangeExpression}
              >
                4
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={5}
                onClick={handleChangeExpression}
              >
                5
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={6}
                onClick={handleChangeExpression}
              >
                6
              </button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={1}
                onClick={handleChangeExpression}
              >
                1
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={2}
                onClick={handleChangeExpression}
              >
                2
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={3}
                onClick={handleChangeExpression}
              >
                3
              </button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={0}
                onClick={handleChangeExpression}
              >
                0
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value="."
                onClick={handleChangeExpression}
              >
                .
              </button>
            </div>
          </div>
          <div className="col-3 p-0 d-flex flex-column">
            <button className="btn btn-warning shadow">/</button>
            <button className="btn btn-warning shadow">x</button>
            <button className="btn btn-warning shadow">-</button>
            <button
              className="btn btn-warning shadow"
              value="+"
              onClick={handleChangeExpression}
            >
              +
            </button>
            <button
              className="btn btn-danger shadow"
              onClick={handleCalculation}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
