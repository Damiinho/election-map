const DistrictTitle = (props) => {
  return (
    <div className="list__element-title">
      <h1>{props.data.name}</h1>
      <p>
        Mandaty: <span>{props.data.deputies}</span>, metoda:{" "}
        <span>{props.data.method === "dhondt" ? "d'Hondta" : "ilościowa"}</span>
      </p>
    </div>
  );
};

export default DistrictTitle;
