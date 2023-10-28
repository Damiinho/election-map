import { Button, Slider } from "@mui/material";
import { useContext, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AppContext } from "../../contexts/AppContext";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { TestContext } from "../../contexts/TestContext";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const {
    questions,
    result,
    setResult,
    currentQuestion,
    setCurrentQuestion,
    setAnswersValue,
    answersValue,
  } = useContext(TestContext);
  const navigate = useNavigate();

  const { windowWidth } = useContext(AppContext);
  const effects = questions[currentQuestion].effects;
  const [sliderValue, setSliderValue] = useState(0);

  const handleClick = (value, effects) => {
    // console.log(value, effects);
    const newResult = result;
    // console.log(newResult);
    if (effects.prog) {
      newResult.prog = parseFloat(
        (newResult.prog + value * effects.prog).toFixed(2)
      );
    }
    if (effects.right) {
      newResult.right = parseFloat(
        (newResult.right + value * effects.right).toFixed(2)
      );
    }
    if (effects.auth) {
      newResult.auth = parseFloat(
        (newResult.auth + value * effects.auth).toFixed(2)
      );
    }
    setResult(newResult);
    setCurrentQuestion(currentQuestion + 1);

    const newAnswersValue = [...answersValue];
    newAnswersValue[currentQuestion] = {
      prog: parseFloat((value * effects.prog).toFixed(2)),
      right: parseFloat((value * effects.right).toFixed(2)),
      auth: parseFloat((value * effects.auth).toFixed(2)),
      value: value,
    };
    if (isNaN(newAnswersValue[currentQuestion].prog)) {
      newAnswersValue[currentQuestion].prog = 0;
    }
    if (isNaN(newAnswersValue[currentQuestion].right)) {
      newAnswersValue[currentQuestion].right = 0;
    }
    if (isNaN(newAnswersValue[currentQuestion].auth)) {
      newAnswersValue[currentQuestion].auth = 0;
    }
    setAnswersValue(newAnswersValue);
    setSliderValue(0);

    if (currentQuestion + 1 === questions.length) {
      let newRight = 0;
      let newProg = 0;
      let newAuth = 0;
      newAnswersValue.forEach((answer) => {
        newRight = newRight + answer.right;
        newProg = newProg + answer.prog;
        newAuth = newAuth + answer.auth;
      });
      navigate(`wynik/k+${newRight}+a+${newAuth}+p+${newProg}`);
    }
  };

  if (!questions[currentQuestion]) {
    return <div>Rozpocznij od nowa</div>;
  }

  return (
    <div className="test__questions-item">
      <Tooltip
        id="question-tooltip"
        style={{
          fontSize: 14,
          textAlign: "left",
        }}
      >
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
      <div className="test__questions-item__text">
        {questions[currentQuestion].question}
      </div>
      <div className="test__questions-item__slider">
        <Slider
          defaultValue={sliderValue}
          value={sliderValue}
          onChange={(event, newValue) => setSliderValue(newValue)} // Update the state variable on slider change
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
              ? questions[currentQuestion].marks?.map((item, index) => {
                  return {
                    key: index,
                    value: item.value,
                    label: (
                      <div
                        style={{
                          position: item.position ? item.position : "relative",
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
          size="medium"
          style={{
            textTransform: "lowercase",
            fontFamily: "Ysabeau Office, sans-serif",
          }}
          onClick={() => handleClick(sliderValue, effects)}
          endIcon={<CheckCircleOutlineIcon />}
        >
          Potwierdź
        </Button>
      </div>
    </div>
  );
};

export default Question;
