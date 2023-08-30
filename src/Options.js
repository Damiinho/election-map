import AddParty from "./AddParty";
import AddDistrict from "./AddDistrict";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import showIMG from "./img/show.png";
import hideIMG from "./img/hide.png";

const Options = () => {
  const { showOptions, setShowOptions } = useContext(AppContext);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="App__options">
      <div className="App__options-handler" onClick={handleShowOptions}>
        <span className="App__options-handler__name">Ustawienia</span>
        <img
          className="App__options-handler__img"
          src={showOptions ? showIMG : hideIMG}
          alt="show"
        />
      </div>
      {showOptions ? (
        <div className="options">
          <AddParty />
          <AddDistrict />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
