import { useContext, useRef } from "react";
import { TestContext } from "../contexts/TestContext";
import { Button, Slider } from "@mui/material";
import CubeIMG from "../img/cube.png";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AppContext } from "../contexts/AppContext";

const QuestionsPanel = () => {
  const {
    questions,
    result,
    setResult,
    currentQuestion,
    setCurrentQuestion,
    setIsTestStart,
  } = useContext(TestContext);
  const { windowWidth } = useContext(AppContext);
  const navigate = useNavigate();

  // const defaultValue = 0;
  const sliderRef = useRef(null);
  const handleClick = (value, effects) => {
    console.log(value, effects);
    const newResult = result;
    console.log(newResult);
    if (effects.prog) {
      newResult.prog = newResult.prog + value * effects.prog;
    }
    if (effects.right) {
      newResult.right = newResult.right + value * effects.right;
    }
    if (effects.auth) {
      newResult.auth = newResult.auth + value * effects.auth;
    }
    setResult(newResult);
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion + 1 === questions.length) {
      navigate(
        `wynik/k+${newResult.right}+a+${newResult.auth}+p+${newResult.prog}`
      );
    }
  };

  const Question = () => {
    if (!questions[currentQuestion]) {
      return <div>Rozpocznij od nowa</div>;
    }
    const effects = questions[currentQuestion].effects;

    return (
      <div className="test__questions-item">
        <Tooltip id="question-tooltip">
          {!effects.right || effects.right === 0 ? (
            ""
          ) : effects.right > 0 ? (
            <div>Kapitalizm: {effects.right}</div>
          ) : (
            <div>Socjalizm: {Math.abs(effects.right)}</div>
          )}
          {!effects.auth || effects.auth === 0 ? (
            ""
          ) : effects.auth > 0 ? (
            <div>Autorytaryzm: {effects.auth}</div>
          ) : (
            <div>Anarchizm: {Math.abs(effects.auth)}</div>
          )}
          {!effects.prog || effects.prog === 0 ? (
            ""
          ) : effects.prog > 0 ? (
            <div>Postęp: {effects.prog}</div>
          ) : (
            <div>Tradycja: {Math.abs(effects.prog)}</div>
          )}
        </Tooltip>
        <Tooltip
          style={{
            zIndex: 1,
            width: 280,
            fontSize: 14,
            textAlign: "left",
            ">p": { marginBottom: 10 },
          }}
          id="info-tooltip"
        >
          {questions[currentQuestion].info}
        </Tooltip>
        <div className="test__questions-item__number">
          pytanie nr {currentQuestion + 1}/{questions.length}
        </div>
        <div
          className="test__questions-item__effect"
          data-tooltip-id={"question-tooltip"}
        >
          efekt?
        </div>
        {questions[currentQuestion].info && (
          <div
            className="test__questions-item__info"
            data-tooltip-id={"info-tooltip"}
          >
            info?
          </div>
        )}
        <div className="test__questions-item__text">
          {questions[currentQuestion].question}
        </div>
        <div className="test__questions-item__slider">
          <Slider
            defaultValue={0}
            min={
              questions[currentQuestion].min ||
              questions[currentQuestion].min === 0
                ? questions[currentQuestion].min
                : -1
            }
            max={
              questions[currentQuestion].max ||
              questions[currentQuestion].max === 0
                ? questions[currentQuestion].max
                : 1
            }
            step={0.01}
            valueLabelDisplay="auto"
            marks={
              questions[currentQuestion].marks
                ? questions[currentQuestion].marks?.map((item) => {
                    return {
                      value: item.value,
                      label: (
                        <div
                          style={{
                            position: item.position
                              ? item.position
                              : "relative",
                            top: item.top || item.top === 0 ? item.top : 10,
                            left:
                              item.left || item.left === 0 ? item.left : "auto",
                            right:
                              item.right || item.right === 0
                                ? item.right
                                : "auto",
                            bottom:
                              item.bottom || item.bottom === 0
                                ? item.bottom
                                : "auto",
                            fontSize:
                              windowWidth > 450
                                ? 20
                                : windowWidth > 350
                                ? 16
                                : 12,
                          }}
                        >
                          {item.answer}
                        </div>
                      ),
                    };
                  })
                : [
                    {
                      value: -0.99,
                      label: (
                        <div
                          style={{
                            position: "absolute",
                            top: 10,
                            left: 0,
                            fontSize:
                              windowWidth > 450
                                ? 20
                                : windowWidth > 350
                                ? 16
                                : 12,
                          }}
                        >
                          Nie zgadzam się
                        </div>
                      ),
                    },
                    {
                      value: 0,
                      label: (
                        <div
                          style={{
                            position: "relative",
                            top: 10,
                            fontSize:
                              windowWidth > 450
                                ? 20
                                : windowWidth > 350
                                ? 16
                                : 12,
                          }}
                        >
                          Nie wiem
                        </div>
                      ),
                    },
                    {
                      value: 0.99,
                      label: (
                        <div
                          style={{
                            position: "absolute",
                            top: 10,
                            right: 0,
                            fontSize:
                              windowWidth > 450
                                ? 20
                                : windowWidth > 350
                                ? 16
                                : 12,
                          }}
                        >
                          Zgadzam się
                        </div>
                      ),
                    },
                  ]
            }
            ref={sliderRef}
            sx={{
              // color: "black",

              height: 12,
              "span.MuiSlider-valueLabel": {
                // backgroundColor: "green",
              },
              position: "relative",
              "& .MuiSlider-markLabel": {
                fontFamily: "Ysabeau Office, sans-serif",
              },

              "& .MuiSlider-thumb": {
                height: 30,
                width: 30,
                backgroundColor: "#fff",
                border: "3px solid currentColor",
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
        </div>
        <div className="test__questions-item__buttons">
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() =>
              handleClick(
                sliderRef.current.querySelector('input[type="range"]').value,
                effects
              )
            }
          >
            Potwierdź
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="test__questions">
      {windowWidth > 500 ? (
        <div className="test__questions-buttons">
          <Button
            variant="contained"
            // style={{ backgroundColor: "#f03b3b" }}
            color="info"
            size={windowWidth > 910 ? "medium" : "small"}
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
            size={windowWidth > 910 ? "medium" : "small"}
            onClick={() => {
              navigate("/test/");
              setIsTestStart(false);
              setCurrentQuestion(0);
            }}
          >
            od nowa
          </Button>
        </div>
      ) : null}

      <Question />
      <img src={CubeIMG} alt="" />
    </div>
  );
};

export default QuestionsPanel;
