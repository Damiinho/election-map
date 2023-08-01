import React, { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";

const District = (props) => {
  const { parties, districts, setDistricts } = useContext(AppContext);
  const [partiesInDistrict, setPartiesInDistrict] = useState([...parties]);
  const [addLocal, setAddLocal] = useState(false);
  const [name, setName] = useState("");

  const handleAddLocalParty = () => {
    setAddLocal(!addLocal);
  };

  const handleSubmitAddLocalParty = (e) => {
    setAddLocal(!addLocal);
    e.preventDefault();
    const newParties = [...partiesInDistrict];
    const party = {
      name,
      isOverThreshold: true,
    };

    newParties.push(party);
    setName("");
    setPartiesInDistrict(newParties);
  };

  const handleRemove = (index) => {
    const newDistricts = [...districts];
    newDistricts.splice(index, 1);
    setDistricts(newDistricts);
  };

  const handleStart = () => {
    const partiesWithResults = partiesInDistrict.map((party) => ({
      ...party,
      result: party.result !== undefined ? Number(party.result) : 0,
    }));
    setPartiesInDistrict(partiesWithResults);
    console.log(partiesWithResults);
  };

  const handleResultChange = (index, value) => {
    const updatedParties = [...partiesInDistrict];
    updatedParties[index].result = value;
    setPartiesInDistrict(updatedParties);
  };

  return (
    <div key={props.index}>
      {props.name}, liczba mandatów: {props.deputies}, metoda {props.method}
      <button onClick={() => handleRemove(props.index)}>Usuń okręg</button>
      <button onClick={handleAddLocalParty}>dodaj lokalny komitet</button>
      {partiesInDistrict.map((item, index) => (
        <div key={index}>
          {item.name}, wynik w procentach:{" "}
          <input
            type="number"
            value={item.result}
            onChange={(e) => handleResultChange(index, e.target.value)}
          />
        </div>
      ))}
      {addLocal ? (
        <label className="">
          <input
            type="text"
            placeholder="Nazwa partii"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmitAddLocalParty}>Dodaj</button>
        </label>
      ) : (
        ""
      )}
      <br />
      <button onClick={handleStart}>generuj wyniki</button>
    </div>
  );
};

export default District;
