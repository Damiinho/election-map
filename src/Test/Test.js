import { useContext, useState } from "react";
import { TestContext } from "../contexts/TestContext";
import TestStartPanel from "./TestStartPanel";
import QuestionsPanel from "./QuestionsPanel";
import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import SimpleLogo2 from "../img/calculatorsimplelogo2.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { DataContext } from "../contexts/DataContext";
import MenuIcon from "@mui/icons-material/Menu";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CubeWhiteIMG from "../img/cubeWhite.png";
const Test = () => {
  const { isTestStart, setIsTestStart, setCurrentQuestion } =
    useContext(TestContext);
  const { setIsTest, setShowSimpleSummary, windowWidth } =
    useContext(AppContext);
  const { setDistricts } = useContext(DataContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttons = [
    <Button
      size="small"
      key="test"
      style={{
        color: "white",
        textTransform: "lowercase",
        fontFamily: "Ysabeau Office, sans-serif",
        fontWeight: 600,
        gap: 10,
        display: isTestStart ? "block" : "none",
      }}
      onClick={() => {
        handleClose();
        navigate("/test/");
        setIsTestStart(false);
        setCurrentQuestion(0);
      }}
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
        <span style={{ position: "relative", top: 2 }}>od nowa</span>
        <RestartAltIcon />
      </span>
    </Button>,
    <Button
      size="small"
      key="list"
      style={{
        color: "white",
        textTransform: "lowercase",
        fontFamily: "Ysabeau Office, sans-serif",
        fontWeight: 600,
        gap: 10,
      }}
      onClick={() => {
        navigate("/test/lista");
      }}
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
        <span style={{ position: "relative", top: 2 }}>lista pytań</span>
        <FormatListBulletedIcon fontSize="medium" />
      </span>
    </Button>,
    <Button
      size="small"
      key="simple"
      style={{
        color: "white",
        textTransform: "lowercase",
        fontFamily: "Ysabeau Office, sans-serif",
        fontWeight: 600,
        gap: 10,
      }}
      onClick={() => {
        setIsTest(false);
        navigate("/prosty");
        setIsTestStart(false);
        setDistricts([]);
        setShowSimpleSummary(false);
      }}
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
          kalkulator wyborczy
        </span>
        <img src={SimpleLogo2} alt="logo" style={{ height: 25 }} />
      </span>
    </Button>,
  ];

  return (
    <div className="test">
      <div className="test__title">
        <div className="test__title-text">
          Polityczna bryła
          <img
            style={{ height: windowWidth > 800 ? 80 : 60 }}
            src={CubeWhiteIMG}
            alt=""
          />
        </div>
        {windowWidth > 800 ? (
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
        {windowWidth > 800 ? null : (
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
              {isTestStart && (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/test/");
                    setIsTestStart(false);
                    setCurrentQuestion(0);
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
                      od nowa
                    </span>
                    <RestartAltIcon />
                  </span>
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  handleClose();

                  navigate("/test/lista");
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
                  lista pytań
                  <FormatListBulletedIcon fontSize="medium" />
                </span>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setIsTest(false);
                  navigate("/prosty");
                  setIsTestStart(false);
                  setDistricts([]);
                  setShowSimpleSummary(false);
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
                    kalkulator wyborczy
                  </span>
                  <img src={SimpleLogo2} alt="logo" style={{ height: 25 }} />
                </span>
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
      {!isTestStart ? <TestStartPanel /> : <QuestionsPanel />}
    </div>
  );
};

export default Test;
