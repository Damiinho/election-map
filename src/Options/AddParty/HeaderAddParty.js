import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import MyEyeSwitch from "../../Components/MyEyeSwitch";

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
        {/* <MySwitch
          onClick={handleShowAddParty}
          imgDisplay
          value={showAddParty}
          thumbDisplay={false}
        /> */}
        <MyEyeSwitch onChange={handleShowAddParty} checked={showAddParty} />
      </div>
    </div>
  );
};

export default HeaderAddParty;
