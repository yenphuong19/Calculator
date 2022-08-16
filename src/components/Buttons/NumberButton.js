function NumberButton(props) {
  const { value, handleClick } = props;

  return (
    <button
      className="col btn btn-dark rounded-0"
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default NumberButton;
