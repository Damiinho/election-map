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
    <div className="options__list">
      Obecna lista:
      <ul className="options__list-ul">
        {parties.map((item, index) => (
          <li className="options__list-ul-element" key={index}>
            {item.name},{" "}
            {item.isOverThreshold
              ? "ponad progiem wyborczym"
              : "pod progiem wyborczym"}
            , kolor:{" "}
            <div
              style={{ backgroundColor: item.color }}
              className="options__list-ul-element__color"
            ></div>
            <button
              className="options__list-ul-element__button"
              onClick={() => handleRemove(index)}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartyList;
