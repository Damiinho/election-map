import { useContext, useEffect, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import Logo3 from "./img/calculatorlogo3.png";
import SimpleLogo2 from "./img/calculatorsimplelogo2.png";
import { DataContext } from "./contexts/DataContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams, useNavigate } from "react-router-dom";
import { TestContext } from "./contexts/TestContext";
import QuizIcon from "@mui/icons-material/Quiz";
import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
const Header = () => {
  const {
    advancedVersion,
    setAdvancedVersion,
    setShowAddDistrict,

    setShowAddParty,
    setIsTest,
    windowWidth,
  } = useContext(AppContext);
  const { setIsTestStart } = useContext(TestContext);
  const { setParties, setDistricts } = useContext(DataContext);
  const params = useParams();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const buttons = [
    <Button
      size="small"
      style={{
        color: "white",
        textTransform: "lowercase",
        fontFamily: "Ysabeau Office, sans-serif",
        fontWeight: 600,
        gap: 5,
      }}
      onClick={() => {
        setIsTest(true);
        navigate("/test");
        setIsTestStart(false);
      }}
    >
      <span
        style={{
          width: "100%",
          display: "flex",
          gap: 10,
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        test polityczny
        <QuizIcon fontSize="medium" />
      </span>
    </Button>,
    <Button
      size="small"
      style={{
        color: "white",
        textTransform: "lowercase",
        fontFamily: "Ysabeau Office, sans-serif",
        fontWeight: 600,
        gap: 10,
      }}
      onClick={handleAdvancedVersion}
    >
      <span
        style={{
          justifyContent: "right",
          alignItems: "center",
          width: "100%",
          display: "flex",
          gap: 10,
        }}
      >
        <span style={{ position: "relative", top: 2 }}>
          wersja {advancedVersion ? "prosta" : "zaawansowana"}
        </span>
        <img
          src={advancedVersion ? SimpleLogo2 : Logo3}
          alt="logo"
          style={{ height: 25 }}
        />
      </span>
    </Button>,
  ];

  return (
    <div className="App__header">
      <div className="App__header-title">
        <span>Kalkulator wyborczy</span>
        <img src={advancedVersion ? Logo3 : SimpleLogo2} alt="" />
      </div>

      {windowWidth > 870 ? (
        <ButtonGroup
          aria-label="vertical contained button group"
          variant="text"
          orientation="vertical"
          style={{
            position: "absolute",
            bottom: 5,
            right: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          {buttons}
        </ButtonGroup>
      ) : null}

      {windowWidth > 870 ? null : (
        <div style={{ position: "absolute", bottom: 0, right: 0 }}>
          <Button
            id="positioned-button"
            aria-controls={open ? "positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ color: "white" }}
          >
            <MenuIcon fontSize="large" />
          </Button>
          <Menu
            id="positioned-menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                setIsTest(true);
                navigate("/test");
                setIsTestStart(false);
              }}
            >
              <span
                style={{
                  width: "100%",
                  display: "flex",
                  gap: 10,
                  justifyContent: "right",
                  alignItems: "center",
                  fontFamily: "Ysabeau Office, sans-serif",
                }}
              >
                test polityczny
                <QuizIcon fontSize="medium" />
              </span>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleAdvancedVersion();
              }}
              style={{ gap: 10, width: "100%" }}
            >
              <span
                style={{
                  justifyContent: "right",
                  alignItems: "center",
                  width: "100%",
                  display: "flex",
                  gap: 10,

                  fontFamily: "Ysabeau Office, sans-serif",
                }}
              >
                <span style={{ position: "relative", top: 2 }}>
                  wersja {advancedVersion ? "prosta" : "zaawansowana"}
                </span>
                <img
                  src={advancedVersion ? SimpleLogo2 : Logo3}
                  alt="logo"
                  style={{ height: 25 }}
                />
              </span>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Header;
