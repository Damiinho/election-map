import { useContext, useEffect, useState } from "react";
import { AppContext } from "./contexts/AppContext";

const PartyInput = (props) => {
  const { setParties } = useContext(AppContext);
  const id = props.id;
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [isMinority, setIsMinority] = useState(false);
  const [overThreshold, setOverThreshold] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleResult = (e) => {
    setResult(e.target.value);
  };

  const handleMinorityChange = (e) => {
    setIsMinority(e.target.checked);
  };

  const handleOverThresholdChange = (e) => {
    setOverThreshold(e.target.checked);
  };

  useEffect(() => {
    setParties((prevParties) => {
      const updateParties = [...prevParties];
      updateParties[id] = {
        id: id,
        name: name,
        result: result,
        isMinority: isMinority,
        overThreshold: overThreshold,
      };
      return updateParties;
    });
  }, [setParties, id, name, isMinority, overThreshold, result]);

  return (
    <div>
      <input type="text" onInput={handleName} />
      partia mniejszości narodowej
      <input
        type="checkbox"
        checked={isMinority}
        onChange={handleMinorityChange}
      />
      czy przekroczony próg wyborczy w skali kraju
      <input
        type="checkbox"
        checked={overThreshold}
        onChange={handleOverThresholdChange}
      />
      <input type="number" max={100} onInput={handleResult} />
    </div>
  );
};

export default PartyInput;
