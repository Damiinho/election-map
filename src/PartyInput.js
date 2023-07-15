import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

const PartyInput = (props) => {
  const { parties, setParties } = useContext(AppContext);
  const id = props.id;
  const partyObject = {
    id: { id },
    name: "",
    isMinority: false,
    overThreshold: false,
  };

  const handleInput = (e) => {
    const updateParties = [...parties];
    console.log(e.target.value);
    console.log(id);
    updateParties[id] = { name: `${e.target.value}` };
    setParties(updateParties);
  };

  return (
    <div>
      <input id={props.id} type="text" onInput={handleInput} />
      partia mniejszości narodowej <input type="checkbox" />
      czy przekroczony próg wyborczy w skali kraju <input type="checkbox" />
    </div>
  );
};

export default PartyInput;
