import { Fragment } from "react";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
function rowMake(i, props) {
  return (
    <Fragment>
      <NumberButton value={i} handleClick={props} />
      <NumberButton value={i + 1} handleClick={props} />
      <NumberButton value={i + 2} handleClick={props} />
    </Fragment>
  );
}
function Buttons(props) {
  const {
    handleClear,
    handleDelete,
    handleChangeExpression,
    handleCalculation
  } = props;

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <ActionButton value="AC" handleClick={handleClear} />
        <ActionButton value="CE" handleClick={handleDelete} />
        <OperatorButton value="%" handleClick={handleChangeExpression} />
        <OperatorButton value="/" handleClick={handleChangeExpression} />
      </div>
      <div className="row">
        {rowMake(7, handleChangeExpression)}
        <OperatorButton value="x" handleClick={handleChangeExpression} />
      </div>
      <div className="row">
        {rowMake(4, handleChangeExpression)}
        <OperatorButton value="-" handleClick={handleChangeExpression} />
      </div>
      <div className="row">
        {rowMake(1, handleChangeExpression)}
        <OperatorButton value="+" handleClick={handleChangeExpression} />
      </div>
      <div className="row">
        <NumberButton value="0" handleClick={handleChangeExpression} />
        <NumberButton value="." handleClick={handleChangeExpression} />
        <button
          className=" col-6 btn btn-danger rounded-0"
          onClick={handleCalculation}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Buttons;
