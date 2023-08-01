import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

const PartyList = () => {
  const { parties, setParties } = useContext(AppContext);
  const handleRemove = (index) => {
    const newParties = [...parties];
    newParties.splice(index, 1);
    setParties(newParties);
  };

  return (
    <div>
      Obecna lista:
      <ul>
        {parties.map((item, index) => (
          <li key={index}>
            {item.name},{" "}
            {item.isOverThreshold
              ? "ponad progiem wyborczym"
              : "pod progiem wyborczym"}
            <button onClick={() => handleRemove(index)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartyList;
