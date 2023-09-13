const AddPartyPredefined = (props) => {
  return (
    <div className="addparty__main-predefined">
      <p>Predefiniowane:</p>
      <button
        className="electionPoland"
        onClick={() => props.click("2023Poland")}
      >
        <span>wybory 2023</span>
        <br />
        <span>sejm</span>
      </button>
      <button
        className="electionGermany"
        onClick={() => props.click("2021Germany")}
      >
        <span>wybory 2021</span>
        <br />
        <span>Niemcy</span>
      </button>
    </div>
  );
};

export default AddPartyPredefined;
