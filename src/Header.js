import { useContext, useEffect, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import Logo3 from "./img/calculatorlogo3.png";
import SimpleLogo2 from "./img/calculatorsimplelogo2.png";
import { DataContext } from "./contexts/DataContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams, useNavigate } from "react-router-dom";
import { TestContext } from "./contexts/TestContext";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

import doneIcon from "./img/done.svg";
import closeIcon from "./img/close.svg";

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

  const DoneSwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url(${doneIcon})`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: advancedVersion ? "#13810f" : "#b3687d",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        backgroundImage: `url(${closeIcon})`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div className="App__header">
      <div className="App__header-title">
        <span>Kalkulator wyborczy</span>
        <img src={advancedVersion ? Logo3 : SimpleLogo2} alt="" />
      </div>
      <div className="App__header-side">
        {/* <MySwitch
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
        /> */}
        <DoneSwitch
          checked={advancedVersion}
          onChange={handleAdvancedVersion}
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
          <>
            <div
              onClick={() => {
                handleAdvancedVersion();
                handleHamburger();
              }}
              className="App__header-hamburger__advanced"
            >
              {advancedVersion ? "wersja uproszczona" : "wersja zaawansowana"}
            </div>
            <div
              className="App__header-hamburger__test"
              onClick={() => {
                setIsTest(true);
                navigate("/test");
                setIsTestStart(false);
              }}
            >
              test
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
