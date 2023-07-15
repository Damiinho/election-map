import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import PartyInput from "./PartyInput";

const Parties = () => {
  const { parties, howMany, setHowMany } = useContext(AppContext);

  const handleHowManyInput = (e) => {
    setHowMany(e.target.value);
  };

  const renderPartyInputs = () => {
    const partyInputs = [];
    for (let i = 0; i < howMany; i++) {
      partyInputs.push(<PartyInput id={i} key={i} />);
    }
    return partyInputs;
  };

  return (
    <div>
      <div>
        Wybierz liczbę partii:{" "}
        <input
          type="range"
          onChange={handleHowManyInput}
          value={howMany}
          min={0}
          max={10}
        />{" "}
        {howMany}
      </div>
      Uzupełnij nazwy partii:
      {renderPartyInputs()}
      Wybrane partie: {parties}
    </div>
  );
};

export default Parties;
