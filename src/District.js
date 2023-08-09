import React, { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";

const District = (props) => {
  const { districts, setDistricts } = useContext(AppContext);
  const [addLocal, setAddLocal] = useState(false);
  const [name, setName] = useState("");

  const handleAddLocalParty = () => {
    setAddLocal(!addLocal);
  };

  const handleSubmitAddLocalParty = (e) => {
    setAddLocal(!addLocal);
    e.preventDefault();
    const newParties = [...districts[props.index].parties];
    console.log(newParties);
    const party = {
      name,
      isOverThreshold: true,
    };

    newParties.push(party);
    setName("");
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        parties: newParties,
      };
      return updatedDistricts;
    });
  };

  const handleRemove = (index) => {
    const newDistricts = [...districts];
    newDistricts.splice(index, 1);
    setDistricts(newDistricts);
  };

  const handleStart = () => {
    // Skopiuj partie z tego okręgu
    const partiesWithResults = districts[props.index].parties.map((party) => ({
      ...party,
      result: party.result !== undefined ? Number(party.result) : 0,
    }));

    // Uaktualnij kontekst z nową listą partii dla tego okręgu
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        parties: partiesWithResults,
      };
      return updatedDistricts;
    });

    console.log(partiesWithResults);
  };

  const handleResultChange = (index, value) => {
    // Skopiuj partie z tego okręgu
    const updatedParties = districts[props.index].parties.map((party) => ({
      ...party,
    }));
    updatedParties[index].result = value;

    // Uaktualnij kontekst z nową listą partii dla tego okręgu
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        parties: updatedParties,
      };
      return updatedDistricts;
    });
  };
  const handleResultMeasure = () => {
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      const currentMeasure = updatedDistricts[props.index].measure;

      // Zmień miarę na przeciwną wartość
      const newMeasure =
        currentMeasure === "percentage" ? "number" : "percentage";

      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        measure: newMeasure,
      };
      return updatedDistricts;
    });
  };

  return (
    <div key={props.index}>
      {props.name}, liczba mandatów: {props.deputies}, metoda {props.method}
      <button onClick={() => handleRemove(props.index)}>Usuń okręg</button>
      <button onClick={handleAddLocalParty}>dodaj lokalny komitet</button>
      <button onClick={handleResultMeasure}>
        podaj wynik w{" "}
        {districts[props.index].measure === "percentage"
          ? "procentach"
          : "liczbach bezwzględnych"}
      </button>
      {districts[props.index].parties.map((item, index) => (
        <div key={index}>
          {item.name}, wynik:{" "}
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
