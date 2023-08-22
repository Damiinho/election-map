import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { randomColor } from "randomcolor";
import PartyList from "./PartyList";

const AddParty = () => {
  const [name, setName] = useState("");
  const [isOverThreshold, setIsOverThreshold] = useState(true);
  const { parties, setParties } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParties = [...parties];
    const party = {
      name,
      isOverThreshold,
      color: randomColor(),
    };
    console.log(party);

    newParties.push(party);
    setName("");
    setIsOverThreshold(true);
    setParties(newParties);
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
        <button onClick={handleSubmit}>Dodaj</button>
      </label>

      <PartyList />
    </div>
  );
};

export default AddParty;
