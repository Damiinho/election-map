import { useContext } from "react";
import MySwitch from "../Components/MySwitch";
import { AppContext } from "../contexts/AppContext";

const HeaderAddParty = () => {
  const { showAddParty, setShowAddParty } = useContext(AppContext);

  const handleShowAddParty = () => {
    setShowAddParty(!showAddParty);
  };

  return (
    <div
      className="addparty__title"
      style={{ cursor: "pointer" }}
      onClick={handleShowAddParty}
    >
      1. dodaj komitety
      <div className="addparty__title__side">
        <MySwitch
          onClick={handleShowAddParty}
          imgDisplay
          value={showAddParty}
          thumbDisplay={false}
        />
      </div>
    </div>
  );
};

export default HeaderAddParty;
