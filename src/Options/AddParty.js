import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import PartyList from "./AddParty/PartyList";

import HandlerAddParty from "./AddParty/HandlerAddParty";
import HeaderAddParty from "./AddParty/HeaderAddParty";

const AddParty = () => {
  const { showAddParty } = useContext(AppContext);

  return (
    <div className="addparty">
      <HeaderAddParty />

      <div className={`addparty__main ${showAddParty ? "" : "hide"}`}>
        <div>
          <HandlerAddParty />
          <PartyList />
        </div>
      </div>
    </div>
  );
};

export default AddParty;
