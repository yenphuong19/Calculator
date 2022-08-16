function ActionButton(props) {
  const { value, handleClick } = props;

  return (
    <button className="col btn btn-light rounded-0" onClick={handleClick}>
      {value}
    </button>
  );
}

export default ActionButton;
