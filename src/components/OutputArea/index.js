function OutputArea(props) {
  const { result, expression } = props;

  return (
    <div className="">
      <h1
        className="w-100 text-end m-auto"
        style={{ fontSize: "40px", height: "70px", lineHeight: "70px" }}
      >
        {result}
      </h1>
      <h3
        className="w-100 text-end"
        style={{ fontSize: "20px", height: "50px", lineHeight: "50px" }}
      >
        {expression}
      </h3>
    </div>
  );
}

export default OutputArea;
