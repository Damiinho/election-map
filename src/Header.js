import MySwitch from "./Components/MySwitch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import Logo3 from "./img/calculatorlogo3.png";
import SimpleLogo2 from "./img/calculatorsimplelogo2.png";
import { DataContext } from "./contexts/DataContext";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    advancedVersion,
    setAdvancedVersion,
    setShowAddDistrict,

    setShowAddParty,
    setIsTest,
  } = useContext(AppContext);
  const { setParties, setDistricts } = useContext(DataContext);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleAdvancedVersion = () => {
    setAdvancedVersion(!advancedVersion);
    setParties([]);
    setDistricts([]);
    if (!advancedVersion) {
      setShowAddDistrict(true);
      setShowAddParty(true);
    }
  };

  const handleHamburger = () => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <div className="App__header">
      <div className="App__header-title">
        <span>Kalkulator wyborczy</span>
        <img src={advancedVersion ? Logo3 : SimpleLogo2} alt="" />
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
      <Link to="/test" style={{ color: "white" }}>
        <div className="App__header-test" onClick={() => setIsTest(true)}>
          test?
        </div>
      </Link>

      <div
        className="App__header-hamburger"
        onMouseLeave={() => {
          setHamburgerActive(false);
        }}
      >
        <div className="App__header-hamburger__icon" onClick={handleHamburger}>
          <MenuIcon fontSize="large" />
        </div>
        {hamburgerActive ? (
          <div
            onClick={() => {
              setAdvancedVersion(!advancedVersion);
              handleHamburger();
            }}
            className="App__header-hamburger__advanced"
          >
            {advancedVersion ? "wersja uproszczona?" : "wersja zaawansowana?"}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
