import MySwitch from "./Components/MySwitch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import Logo3 from "./img/calculatorlogo3.png";
import SimpleLogo2 from "./img/calculatorsimplelogo2.png";
import { DataContext } from "./contexts/DataContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams, useNavigate } from "react-router-dom";
import { TestContext } from "./contexts/TestContext";

const Header = () => {
  const {
    advancedVersion,
    setAdvancedVersion,
    setShowAddDistrict,

    setShowAddParty,
    setIsTest,
  } = useContext(AppContext);
  const { setIsTestStart } = useContext(TestContext);
  const { setParties, setDistricts } = useContext(DataContext);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.variant === "zaawansowany") {
      setAdvancedVersion(true);
    }
    if (params.variant === "prosty") {
      setAdvancedVersion(false);
    }
  }, [params, setAdvancedVersion]);

  const handleAdvancedVersion = () => {
    setAdvancedVersion(!advancedVersion);
    setParties([]);
    setDistricts([]);
    if (!advancedVersion) {
      setShowAddDistrict(true);
      setShowAddParty(true);
      navigate("/zaawansowany");
    } else {
      navigate("/prosty");
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
      <div
        className="App__header-test"
        onClick={() => {
          setIsTest(true);
          navigate("/test");
          setIsTestStart(false);
        }}
      >
        test?
      </div>

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
              handleAdvancedVersion();
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
