const SimpleSummaryDistrict = (props) => {
  const { parties } = props;

  return (
    <div>
      {parties.map((party, index) => {
        return (
          <div key={index}>
            {party.name}, {party.result},{" "}
            {party.isOverThreshold ? "ponad progiem" : "pod progiem"}
          </div>
        );
      })}
    </div>
  );
};

export default SimpleSummaryDistrict;
