import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TestContext } from "../contexts/TestContext";
import { AppContext } from "../contexts/AppContext";
import { Button, Slider } from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import TestResultBox from "./TestResultBox";

const ResultsPanel = () => {
  const [officialResult, setOfficialResult] = useState({});
  const { result, setIsTestStart, setCurrentQuestion, extremeValues } =
    useContext(TestContext);
  const { windowWidth } = useContext(AppContext);
  const params = useParams();
  const navigate = useNavigate();
  const [rotate, setRotate] = useState([-28, -16, 6]);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      setIsDragging(true);
    }
  };
  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    const newRotate = [...rotate];
    if (y > mousePosition.y) {
      newRotate[1] = newRotate[1] - 1;
    }
    if (y < mousePosition.y) {
      newRotate[1] = newRotate[1] + 1;
    }
    if (x > mousePosition.x) {
      newRotate[0] = newRotate[0] - 1;
    }
    if (x < mousePosition.x) {
      newRotate[0] = newRotate[0] + 1;
    }
    setRotate(newRotate);
    setMousePosition({ x, y });
  };
  const handleMouseMove = (event) => {
    if (isDragging) {
      const x = event.clientX;
      const y = event.clientY;
      const newRotate = [...rotate];
      if (y > mousePosition.y) {
        newRotate[1] = newRotate[1] - 1;
      }
      if (y < mousePosition.y) {
        newRotate[1] = newRotate[1] + 1;
      }
      if (x > mousePosition.x) {
        newRotate[0] = newRotate[0] - 1;
      }
      if (x < mousePosition.x) {
        newRotate[0] = newRotate[0] + 1;
      }

      setRotate(newRotate);
      setMousePosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
          ? parseFloat(rightValue / (extremeValues.right.max / 10)).toFixed(2)
          : rightValue < 0
          ? parseFloat(rightValue / -(extremeValues.right.min / 10)).toFixed(2)
          : 0;
      const authForBox =
        authValue > 0
          ? parseFloat(authValue / (extremeValues.auth.max / 10)).toFixed(2)
          : authValue < 0
          ? parseFloat(authValue / -(extremeValues.auth.min / 10)).toFixed(2)
          : 0;
      const progForBox =
        progValue > 0
          ? parseFloat(progValue / (extremeValues.prog.max / 10)).toFixed(2)
          : progValue < 0
          ? parseFloat(progValue / -(extremeValues.prog.min / 10)).toFixed(2)
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

  return (
    <div className="test">
      <div className="test__title">Polityczna bryła – wynik</div>
      <div className="test__result">
        <div className="test__result-buttons">
          <Button
            variant="contained"
            // style={{ backgroundColor: "#f03b3b" }}
            color="info"
            size={windowWidth > 550 ? "medium" : "small"}
            onClick={() => {
              navigate("/test/lista");
            }}
          >
            lista pytań
          </Button>
          <Button
            variant="contained"
            // style={{ backgroundColor: "#f03b3b" }}
            color="info"
            size={windowWidth > 550 ? "medium" : "small"}
            onClick={() => {
              navigate("/test/");

              setIsTestStart(false);
              setCurrentQuestion(0);
            }}
          >
            strona główna testu
          </Button>
          <Button
            variant="contained"
            // style={{ backgroundColor: "#f03b3b" }}
            color="info"
            size={windowWidth > 550 ? "medium" : "small"}
            onClick={() => {
              navigate("/prosty/");
            }}
          >
            kalkulator
          </Button>
        </div>
        <div className="test__result-description">
          {" "}
          <div className="test__result-description__title">
            Spektrum ekonomiczne
          </div>
          <div className="test__result-description__item">
            <span>Socjalizm</span>
            <ResultSlider
              value={officialResult.rightForBox}
              color="#f0494960"
            />

            <span>Wolny rynek</span>
          </div>
          <div className="test__result-description__title">
            Spektrum zarządcze
          </div>
          <div className="test__result-description__item">
            <span>Anarchizm</span>
            <ResultSlider value={officialResult.authForBox} color="#8349f060" />
            <span>Autorytaryzm</span>
          </div>
          <div className="test__result-description__title">
            Spektrum cywilizacyjne
          </div>
          <div className="test__result-description__item">
            <span>Tradycja</span>
            <ResultSlider value={officialResult.progForBox} color="#fdfb7f60" />
            <span>Postęp</span>
          </div>
        </div>
        <div className="test__result-boxbuttons">
          <Button
            fontSize="small"
            onClick={() => {
              const newRotate = [...rotate];
              newRotate[0] = rotate[0] - 10;
              setRotate(newRotate);
            }}
          >
            <ArrowCircleLeftTwoToneIcon />
          </Button>
          <Button
            fontSize="small"
            onClick={() => {
              const newRotate = [...rotate];
              newRotate[0] = rotate[0] + 10;
              setRotate(newRotate);
            }}
          >
            <ArrowCircleRightTwoToneIcon />
          </Button>
          <Button
            fontSize="small"
            onClick={() => {
              const newRotate = [...rotate];
              newRotate[1] = rotate[1] + 10;
              setRotate(newRotate);
            }}
          >
            <ArrowCircleUpTwoToneIcon />
          </Button>
          <Button
            fontSize="small"
            onClick={() => {
              const newRotate = [...rotate];
              newRotate[1] = rotate[1] - 10;
              setRotate(newRotate);
            }}
          >
            <ArrowCircleDownTwoToneIcon />
          </Button>

          <Button
            fontSize="small"
            onClick={() => {
              const newRotate = [...rotate];
              newRotate[2] = rotate[2] - 10;
              setRotate(newRotate);
            }}
          >
            <UndoIcon />
          </Button>
          <Button
            fontSize="small"
            onClick={() => {
              const newRotate = [...rotate];
              newRotate[2] = rotate[2] + 10;
              setRotate(newRotate);
            }}
          >
            <RedoIcon />
          </Button>
        </div>
        <div className="test__result-resetbutton">
          <Button
            color="error"
            size="small"
            variant="contained"
            style={{ textTransform: "lowercase" }}
            onClick={() => {
              setRotate([-28, -16, 6]);
            }}
          >
            reset
          </Button>
        </div>
        <div
          className="boxes"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          style={{ display: "none" }}
        >
          <div
            className="box"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              transform: `rotateY(${rotate[0]}deg) rotateX(${rotate[1]}deg) rotateZ(${rotate[2]}deg)`,
            }}
          >
            <div className="bottom-side"></div>
            <div className="back-side"></div>
            <div className="left-side"></div>
            <div className="center-bar-one"></div>
            <div className="center-bar-two"></div>
            <div className="center-bar-three"></div>
            <div className="right-front-bar"></div>
            <div className="top-front-bar"></div>
            <div className="top-right-bar"></div>
            <div className="right-center-bar"></div>
            <div className="left-center-bar"></div>
            <div className="front-center-bar"></div>
            <div className="back-center-bar"></div>
            <div className="right-vert-center-bar"></div>
            <div className="left-vert-center-bar"></div>
            <div className="front-vert-center-bar"></div>
            <div className="back-vert-center-bar"></div>
            <div className="top-hor-center-bar"></div>
            <div className="bottom-hor-center-bar"></div>
            <div className="top-vert-center-bar"></div>
            <div className="bottom-vert-center-bar"></div>
            {/* prawo-lewo, góra-dół, przód-tył */}{" "}
            <div
              className="result-dott-bottom"
              style={{
                width: "1em",
                height: "1em",
                transform: `rotateY(0deg) rotateX(90deg) rotateZ(0deg) translateZ(${
                  officialResult.authForBox - 0.5
                }em) translateY(${-officialResult.progForBox}em) translateX(${
                  officialResult.rightForBox
                }em)`,
              }}
            ></div>
            <div
              className="result-dott-top"
              style={{
                width: "1em",
                height: "1em",
                transform: `rotateY(0deg) rotateX(90deg) rotateZ(0deg) translateZ(${
                  officialResult.authForBox + 0.5
                }em)translateY(${-officialResult.progForBox}em) translateX(${
                  officialResult.rightForBox
                }em)`,
              }}
            ></div>
            <div
              className="result-dott-front"
              style={{
                width: "1em",
                height: "1em",
                transform: `rotateY(0deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  -officialResult.progForBox + 0.5
                }em) translateY(${-officialResult.authForBox}em) translateX(${
                  officialResult.rightForBox
                }em)`,
              }}
            ></div>
            <div
              className="result-dott-back"
              style={{
                width: "1em",
                height: "1em",
                transform: `rotateY(0deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  -officialResult.progForBox - 0.5
                }em) translateY(${-officialResult.authForBox}em) translateX(${
                  officialResult.rightForBox
                }em)`,
              }}
            ></div>
            <div
              className="result-dott-right"
              style={{
                width: "1em",
                height: "1em",
                transform: `rotateY(90deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  officialResult.rightForBox + 0.5
                }em) translateY(${-officialResult.authForBox}em) translateX(${
                  officialResult.progForBox
                }em)`,
              }}
            ></div>
            <div
              className="result-dott-left"
              style={{
                width: "1em",
                height: "1em",
                transform: `rotateY(90deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  officialResult.rightForBox - 0.5
                }em) translateY(${-officialResult.authForBox}em) translateX(${
                  officialResult.progForBox
                }em)`,
              }}
            ></div>
          </div>
        </div>
        <div style={{ height: 420 }}>
          <TestResultBox
            right={officialResult.rightForBox}
            auth={officialResult.authForBox}
            prog={officialResult.progForBox}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default ResultsPanel;
