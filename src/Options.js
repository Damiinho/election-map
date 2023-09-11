import AddParty from "./AddParty";
import AddDistrict from "./AddDistrict";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import MySwitch from "./MySwitch";

const Options = () => {
  const { showOptions, setShowOptions } = useContext(AppContext);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="App__options">
      <div className="App__options-handler" onClick={handleShowOptions}>
        <span className="App__options-handler__name">Ustawienia</span>
        <div className="App__options-handler__side">
          <MySwitch imgDisplay defaultValue={true} thumbDisplay={false} />
        </div>
      </div>
      <div className={`options ${!showOptions ? "hide" : ""}`}>
        <AddParty />
        <AddDistrict />
      </div>
    </div>
  );
};

export default Options;
