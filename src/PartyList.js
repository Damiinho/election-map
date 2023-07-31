import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

const PartyList = () => {
  const { parties } = useContext(AppContext);
  return (
    <ul>
      {parties.map((item) => (
        <li>
          {item.name}
          <button>Usuń</button>
          <button>Edytuj</button>
          wpisz wynik wyborczy: <input type="number" />
        </li>
      ))}
    </ul>
  );
};

export default PartyList;
