import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TestContext } from "../contexts/TestContext";
import { AppContext } from "../contexts/AppContext";
import { Button, ButtonGroup, Menu, MenuItem, Slider } from "@mui/material";
import TestResultBox from "./TestResultBox";
import CubeWhiteIMG from "../img/cubeWhite.png";
import MenuIcon from "@mui/icons-material/Menu";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SimpleLogo2 from "../img/calculatorsimplelogo2.png";
import MyEyeSwitch from "../Components/MyEyeSwitch";

const ResultsPanel = () => {
  const [officialResult, setOfficialResult] = useState({});
  const {
    result,
    setIsTestStart,
    setCurrentQuestion,
    extremeValues,
    questions,
    answersValue,
  } = useContext(TestContext);
  const { windowWidth } = useContext(AppContext);
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
        navigate("/prosty/sejm");
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
  useEffect(() => {
    if (params.values) {
      const resultArray = params.values.split("+");
      const resultsFromParams = [];
      for (let i = 0; i < resultArray.length; i += 2) {
        const name = resultArray[i];
        const resultValue = parseFloat(resultArray[i + 1]);
        resultsFromParams.push({ name, result: resultValue });
      }

      const progValue =
        resultsFromParams.find((item) => item.name === "p")?.result ||
        (typeof result.prog === "number" ? result.prog : 0);

      const authValue =
        resultsFromParams.find((item) => item.name === "a")?.result ||
        (typeof result.auth === "number" ? result.auth : 0);
      const rightValue =
        resultsFromParams.find((item) => item.name === "k")?.result ||
        (typeof result.right === "number" ? result.right : 0);

      const rightForBox =
        rightValue > 0
          ? parseFloat((rightValue / (extremeValues.right.max / 10)).toFixed(2))
          : rightValue < 0
          ? parseFloat(
              (rightValue / -(extremeValues.right.min / 10)).toFixed(2)
            )
          : 0;
      const authForBox =
        authValue > 0
          ? parseFloat((authValue / (extremeValues.auth.max / 10)).toFixed(2))
          : authValue < 0
          ? parseFloat((authValue / -(extremeValues.auth.min / 10)).toFixed(2))
          : 0;
      const progForBox =
        progValue > 0
          ? parseFloat((progValue / (extremeValues.prog.max / 10)).toFixed(2))
          : progValue < 0
          ? parseFloat((progValue / -(extremeValues.prog.min / 10)).toFixed(2))
          : 0;

      setOfficialResult({
        prog: progValue,
        auth: authValue,
        right: rightValue,
        rightForBox,
        authForBox,
        progForBox,
      });
    }
  }, [result.auth, result.prog, result.right, params.values, extremeValues]);

  const ResultSlider = (props) => (
    <Slider
      // defaultValue={item.result}
      value={props.value}
      valueLabelDisplay="auto"
      // step={0.01}
      min={-10}
      max={10}
      sx={{
        color: props.color,
        height: 8,
        "span.MuiSlider-valueLabel": {
          backgroundColor: props.color,
          color: props.textColor ? props.textColor : "white",
        },
        "& .MuiSlider-thumb": {
          height: 24,
          width: 24,
          backgroundColor: "#fff",
          border: "2px solid currentColor",
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
          },
          "&:before": {
            display: "none",
          },
        },
        "& .MuiSlider-track": {
          border: "none",
          backgroundColor: "transparent",
        },
        "& .MuiSlider-rail": {
          // Kolor nieaktywnego obszaru slidera
        },

        "& .MuiSlider-valueLabel": {
          lineHeight: 1.2,
          fontSize: 12,
          background: "unset",
          padding: 0,
          width: 40,
          height: 40,
          borderRadius: "50% 50% 50% 0",
          backgroundColor: "#52af77",
          transformOrigin: "bottom left",
          transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
          "&:before": { display: "none" },
          "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
          },
          "& > *": {
            transform: "rotate(45deg)",
          },
        },
      }}
    />
  );

  const styleForAnswerList =
    windowWidth > 800
      ? {
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyContent: "space-around",
          backgroundColor: "#80808055",
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          padding: "10px 10px",

          fontFamily: "Ysabeau Office, sans-serif",
        }
      : {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          backgroundColor: "#80808055",
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          padding: "10px 10px",

          fontFamily: "Ysabeau Office, sans-serif",
        };

  return (
    <div className="test">
      <div className="test__title">
        {" "}
        <div className="test__title-text">
          Polityczna bryła – wynik
          <img
            style={{ height: windowWidth > 800 ? 80 : 60 }}
            src={CubeWhiteIMG}
            alt=""
          />
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
                    navigate("/prosty/sejm");
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
      </div>
      <div className="test__result">
        <div className="test__result-description">
          {" "}
          <div className="test__result-description__title">
            Spektrum ekonomiczne
          </div>
          <div className="test__result-description__item">
            <span>Socjalizm</span>
            <ResultSlider value={officialResult.rightForBox} color="#f04949" />

            <span>Wolny rynek</span>
          </div>
          <div className="test__result-description__title">
            Spektrum zarządcze
          </div>
          <div className="test__result-description__item">
            <span>Anarchizm</span>
            <ResultSlider value={officialResult.authForBox} color="#8349f0" />
            <span>Autorytaryzm</span>
          </div>
          <div className="test__result-description__title">
            Spektrum cywilizacyjne
          </div>
          <div className="test__result-description__item">
            <span>Tradycja</span>
            <ResultSlider
              value={officialResult.progForBox}
              color="#fdfb7f"
              textColor="black"
            />
            <span>Postęp</span>
          </div>
        </div>
        <div>
          <TestResultBox
            right={officialResult.rightForBox}
            auth={officialResult.authForBox}
            prog={officialResult.progForBox}
          />
        </div>
        {answersValue.length > 1 && (
          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                backgroundColor: "#80dd8055",
                padding: 10,
                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              Szczegóły odpowiedzi
              <MyEyeSwitch />
            </div>
            <div>
              {questions.map((question, index) => {
                return (
                  <div key={index} style={styleForAnswerList}>
                    <div
                      style={{
                        minWidth: windowWidth > 570 ? 250 : "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        padding:
                          windowWidth > 800 ? "0 10px" : "10px 10px 20px",
                        width: windowWidth > 800 ? "auto" : "100%",
                        fontSize:
                          windowWidth > 800
                            ? "16px"
                            : windowWidth > 350
                            ? "20px"
                            : "16px",
                      }}
                    >
                      {question.question}
                    </div>
                    <div
                      style={{
                        minWidth: windowWidth > 570 ? 250 : "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#80808055",
                        padding: "0 10px",
                        boxShadow:
                          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",

                        width: windowWidth > 570 ? "auto" : "100%",
                      }}
                    >
                      <Slider
                        step={0.01}
                        min={question.min || -1}
                        max={question.max || 1}
                        value={answersValue[index].value}
                        readOnly
                        // disabled
                        sx={{
                          // color: "red",
                          height: 8,
                          "span.MuiSlider-valueLabel": {
                            backgroundColor: "blue",
                            color: "white",
                          },
                          "& .MuiSlider-thumb": {
                            height: 24,
                            width: 24,
                            backgroundColor: "#fff",
                            border: "2px solid currentColor",
                            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":
                              {
                                boxShadow: "inherit",
                              },
                            "&:before": {
                              display: "none",
                            },
                          },
                          // "& .MuiSlider-track": {
                          //   border: "none",
                          //   backgroundColor: "transparent",
                          // },
                          // "& .MuiSlider-rail": {
                          //   backgroundColor: "yellow"
                          // },

                          "& .MuiSlider-valueLabel": {
                            lineHeight: 1.2,
                            fontSize: 12,
                            background: "unset",
                            padding: 0,
                            width: 40,
                            height: 40,
                            borderRadius: "50% 50% 50% 0",
                            backgroundColor: "#52af77",
                            transformOrigin: "bottom left",
                            transform:
                              "translate(50%, -100%) rotate(-45deg) scale(0)",
                            "&:before": { display: "none" },
                            "&.MuiSlider-valueLabelOpen": {
                              transform:
                                "translate(50%, -100%) rotate(-45deg) scale(1)",
                            },
                            "& > *": {
                              transform: "rotate(45deg)",
                            },
                          },
                        }}
                        // disabled
                      />{" "}
                    </div>

                    <div
                      style={{
                        minWidth: windowWidth > 570 ? 250 : "auto",
                        width: windowWidth > 570 ? "auto" : "100%",
                        margin: windowWidth > 570 ? "0 10px" : 0,
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          fontSize: 15,
                          backgroundColor: "#50ffdd55",
                          boxShadow:
                            "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                        }}
                      >
                        wpływ
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "5fr 1fr",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            backgroundColor: "#f0494955",
                            boxShadow:
                              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                          }}
                        >
                          <span>Socjalizm / wolny rynek</span>

                          <span style={{ backgroundColor: "#ffffffaa" }}>
                            {answersValue[index].right}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "5fr 1fr",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            backgroundColor: "#8349f055",
                            boxShadow:
                              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                          }}
                        >
                          <span>Tradycja / postęp</span>

                          <span style={{ backgroundColor: "#ffffffaa" }}>
                            {answersValue[index].prog}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "5fr 1fr",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            backgroundColor: "#fdfb7f55",
                            boxShadow:
                              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                          }}
                        >
                          <span>Anarchizm / autorytaryzm</span>
                          <span style={{ backgroundColor: "#ffffffaa" }}>
                            {answersValue[index].auth}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default ResultsPanel;
