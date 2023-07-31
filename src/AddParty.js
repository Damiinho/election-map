import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";

const AddParty = () => {
  const [name, setName] = useState("");
  const [isMinority, setIsMinority] = useState(false);
  const [isCoalition, setIsCoalition] = useState(false);
  const { parties, setParties } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParties = [...parties];
    const party = {
      name,
      isMinority,
      isCoalition,
    };
    console.log(party);

    newParties.push(party);
    setName("");
    setIsMinority(false);
    setIsCoalition(false);
    setParties(newParties);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nazwa partii"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Mniejszość narodowa?
      <input
        type="checkbox"
        label="Partia mniejszości narodowej"
        checked={isMinority}
        onChange={(e) => setIsMinority(e.target.checked)}
      />
      Koalicja?
      <input
        type="checkbox"
        label="Partia koalicyjna"
        checked={isCoalition}
        onChange={(e) => setIsCoalition(e.target.checked)}
      />
      <button onClick={handleSubmit}>Dodaj</button>
    </div>
  );
};

export default AddParty;
