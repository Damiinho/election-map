const SimpleSummaryDistrict = (props) => {
  const { parties } = props;

  return (
    <div>
      {parties.map((party) => {
        return (
          <div>
            {party.name}, {party.result}
          </div>
        );
      })}
    </div>
  );
};

export default SimpleSummaryDistrict;
