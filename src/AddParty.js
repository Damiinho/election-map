import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { randomColor } from "randomcolor";
import PartyList from "./PartyList";

const AddParty = () => {
  const [name, setName] = useState("");
  const [isOverThreshold, setIsOverThreshold] = useState(true);
  const [chosenColor, setChosenColor] = useState("");
  const { parties, setParties } = useContext(AppContext);
  const [duplicateError, setDuplicateError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDuplicateError(false);
    setEmptyError(false);

    const existingParty = parties.find((party) => party.name === name);
    if (existingParty) {
      setDuplicateError(true);
      return;
    }
    if (name === "") {
      setEmptyError(true);
      return;
    }

    const newParties = [...parties];
    const party = {
      name,
      isOverThreshold,
      color: chosenColor === "" ? randomColor() : chosenColor,
    };
    console.log(party);

    newParties.push(party);
    setName("");
    setIsOverThreshold(true);
    setParties(newParties);
    setChosenColor("");
    setDuplicateError(false);
    setEmptyError(false);
  };
  const handlePredefined = () => {
    console.log("wybrano wybory 2023");

    setDuplicateError(false);
    setEmptyError(false);

    const predefinedParties = [
      {
        name: "Prawo i Sprawiedliwość",
        isOverThreshold: true,
        color: "#0008ff",
      },
      {
        name: "Koalicja Obywatelska",
        isOverThreshold: true,
        color: "#e08300",
      },
      {
        name: "Konfederacja",
        isOverThreshold: true,
        color: "#1e1c82",
      },
      {
        name: "Trzecia Droga",
        isOverThreshold: true,
        color: "#18af0d",
      },
      {
        name: "Lewica",
        isOverThreshold: true,
        color: "#d60000",
      },
    ];

    setParties(predefinedParties);

    setName("");
    setIsOverThreshold(true);
    setChosenColor("");
  };

  return (
    <div className="options__addparty">
      <div className="options__addparty-title">Dodaj komitety:</div>
      <label className="options__addparty-label">
        <input
          type="text"
          className="options__addparty-label__name"
          placeholder="Nazwa partii"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="options__addparty-label__threshold">
          <p>Uwzględnić przy podziale mandatów?</p>
          <input
            type="checkbox"
            label="Ponad progiem?"
            checked={isOverThreshold}
            onChange={(e) => setIsOverThreshold(e.target.checked)}
          />
        </label>
        <div className="options__addparty-label__color">
          <input
            type="color"
            value={chosenColor}
            onChange={(e) => setChosenColor(e.target.value)}
          />
          <p>kolor</p>
        </div>

        <button onClick={handleSubmit}>dodaj</button>
      </label>
      {duplicateError && <p>Partia o tej nazwie już istnieje.</p>}
      {emptyError && <p>Partia musi mieć nazwę.</p>}
      Listy predefiniowane:{" "}
      <button onClick={handlePredefined}>Wybory 2023 – sejm</button>
      <PartyList />
    </div>
  );
};

export default AddParty;
