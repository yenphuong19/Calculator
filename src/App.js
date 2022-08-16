import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState();
  const [cal, setCal] = useState();
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
              <button className="btn btn-dark shadow flex-grow-1">7</button>
              <button className="btn btn-dark shadow flex-grow-1">8</button>
              <button className="btn btn-dark shadow flex-grow-1">9</button>
            </div>
            <div className="d-flex">
              <button className="btn btn-dark shadow flex-grow-1">4</button>
              <button className="btn btn-dark shadow flex-grow-1">5</button>
              <button className="btn btn-dark shadow flex-grow-1">6</button>
            </div>
            <div className="d-flex">
              <button className="btn btn-dark shadow flex-grow-1">1</button>
              <button className="btn btn-dark shadow flex-grow-1">2</button>
              <button className="btn btn-dark shadow flex-grow-1">3</button>
            </div>
            <div className="d-flex">
              <button className="btn btn-dark shadow flex-grow-1">0</button>
              <button className="btn btn-dark shadow flex-grow-1">.</button>
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
