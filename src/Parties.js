import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";
import PartyInput from "./PartyInput";

const Parties = () => {
  const { howMany, setHowMany, parties, setParties } = useContext(AppContext);

  const handleHowManyInput = (e) => {
    setHowMany(parseInt(e.target.value));
  };

  useEffect(() => {
    setParties((prevParties) => {
      const updatedParties = [...prevParties];
      const currentLength = updatedParties.length;

      if (howMany > currentLength) {
        // Dodaj nowe puste elementy do tablicy parties
        for (let i = currentLength; i < howMany; i++) {
          updatedParties.push({ id: i, name: "" });
        }
      } else if (howMany < currentLength) {
        // Usuń elementy z tablicy parties, ale zachowaj istniejące obiekty
        updatedParties.length = howMany;
      }

      return updatedParties;
    });
  }, [howMany, setParties]);

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
      {parties.map((party) => (
        <PartyInput key={party.id} id={party.id} />
      ))}
      Wybrane partie: {parties.map((party) => party.name).join(", ")}
    </div>
  );
};

export default Parties;
