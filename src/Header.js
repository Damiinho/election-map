import MySwitch from "./Components/MySwitch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import Logo from "./img/calculatorlogo.png";
import Logo2 from "./img/calculatorlogo2.png";
import Logo3 from "./img/calculatorlogo3.png";
import SimpleLogo3 from "./img/calculatorsimplelogo3.png";
import SimpleLogo from "./img/calculatorsimplelogo.png";
import SimpleLogo2 from "./img/calculatorsimplelogo2.png";
import { DataContext } from "./contexts/DataContext";

const Header = () => {
  const {
    advancedVersion,
    setAdvancedVersion,
    setShowAddDistrict,

    setShowAddParty,
  } = useContext(AppContext);
  const { setParties, setDistricts } = useContext(DataContext);

  const handleAdvancedVersion = () => {
    setAdvancedVersion(!advancedVersion);
    setParties([]);
    setDistricts([]);
    if (!advancedVersion) {
      setShowAddDistrict(true);
      setShowAddParty(true);
    }
  };

  return (
    <div className="App__header">
      <div className="App__header-title">
        <span>kalkulator wyborczy</span>
        <img
          src={advancedVersion ? Logo3 : SimpleLogo2}
          alt=""
          style={{ width: 80 }}
        />
      </div>
      <div className="App__header-side">
        <MySwitch
          onClick={handleAdvancedVersion}
          checkedObject={
            <CheckCircleIcon
              style={{
                width: "120%",
                height: "120%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "green",
              }}
            />
          }
          uncheckedObject={
            <CancelIcon
              style={{
                width: "120%",
                height: "120%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "gray",
              }}
            />
          }
          trackColor={"#d3d3d3"}
          trackCheckedColor={"#b6ddb8"}
          thumbDisplay={false}
          size={1}
          objectDisplay
          value={advancedVersion}
        />
        <span>wersja zaawansowana</span>
      </div>
    </div>
  );
};

export default Header;
