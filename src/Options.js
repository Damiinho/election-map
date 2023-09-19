import AddParty from "./Options/AddParty";
import AddDistrict from "./Options/AddDistrict";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import SimpleOptions from "./Options/SimpleOptions";
// import MySwitch from "./MySwitch";

const Options = () => {
  const { advancedVersion } = useContext(AppContext);

  // const handleShowOptions = () => {
  //   setShowOptions(!showOptions);
  // };

  return (
    <div className="App__options">
      {/* <div className="App__options-header">
        <span className="App__options-header__name">Ustawienia</span>
        <div className="App__options-header__side">
          <MySwitch
            onClick={handleShowOptions}
            imgDisplay
            defaultValue={true}
            thumbDisplay={false}
          />
        </div>
      </div> */}
      {advancedVersion ? (
        <div className={`App__options-main`}>
          <AddParty />
          <AddDistrict />
        </div>
      ) : (
        <SimpleOptions />
      )}
    </div>
  );
};

export default Options;
