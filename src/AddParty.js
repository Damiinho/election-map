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

  return (
    <div className="options__addparty">
      <div className="options__addparty-title">
        Uzupełnij listę startujących:
      </div>
      <label className="options__addparty-label">
        <input
          type="text"
          placeholder="Nazwa partii"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <p>Uwzględnić przy podziale mandatów?</p>
          <input
            type="checkbox"
            label="Partia mniejszości narodowej"
            checked={isOverThreshold}
            onChange={(e) => setIsOverThreshold(e.target.checked)}
          />
        </div>
        <div>
          <input
            type="color"
            value={chosenColor}
            onChange={(e) => setChosenColor(e.target.value)}
          />
          <p>wybrany kolor {chosenColor}</p>
        </div>

        {duplicateError && <p>Partia o tej nazwie już istnieje.</p>}
        {emptyError && <p>Partia musi mieć nazwę.</p>}

        <button onClick={handleSubmit}>Dodaj</button>
      </label>

      <PartyList />
    </div>
  );
};

export default AddParty;
