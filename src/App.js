import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState();
  const [cal, setCal] = useState();

  const handleIncrement = (e) => {
    console.log(e.target.value);
    setCal((cal) => cal + e.target.value);
  };
  return (
    <div className="App vh-100 bg-danger bg-gradient d-flex align-items-center">
      <div className="container bg-secondary shadow rounded-5 d-flex flex-column justify-content-evenly">
        <div className="result">
          <h1 style={{ height: "50px" }}>{result}</h1>
          <h3 style={{ height: "40px" }}>{cal}</h3>
        </div>

        <div className="row">
          <div className="col-9 p-0 d-flex flex-column">
            <div className="d-flex">
              <button className="btn btn-light shadow flex-grow-1">Ccc</button>
              <button className="btn btn-light shadow flex-grow-1">+/-</button>
              <button className="btn btn-light shadow flex-grow-1">%</button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={7}
                onClick={handleIncrement}
              >
                7
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={8}
                onClick={handleIncrement}
              >
                8
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={9}
                onClick={handleIncrement}
              >
                9
              </button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={4}
                onClick={handleIncrement}
              >
                4
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={5}
                onClick={handleIncrement}
              >
                5
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={6}
                onClick={handleIncrement}
              >
                6
              </button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={1}
                onClick={handleIncrement}
              >
                1
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={2}
                onClick={handleIncrement}
              >
                2
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={3}
                onClick={handleIncrement}
              >
                3
              </button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-dark shadow flex-grow-1"
                value={0}
                onClick={handleIncrement}
              >
                0
              </button>
              <button
                className="btn btn-dark shadow flex-grow-1"
                value="."
                onClick={handleIncrement}
              >
                .
              </button>
            </div>
          </div>
          <div className="col-3 p-0 d-flex flex-column">
            <button className="btn btn-warning shadow">/</button>
            <button className="btn btn-warning shadow">x</button>
            <button className="btn btn-warning shadow">-</button>
            <button className="btn btn-warning shadow">+</button>
            <button className="btn btn-danger shadow">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
