function OperatorButton(props) {
  const { value, handleClick } = props;

  return (
    <button
      className={`col btn ${
        value == "%" ? "btn-light" : "btn-warning"
      } rounded-0`}
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default OperatorButton;
