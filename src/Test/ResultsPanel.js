import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TestContext } from "../contexts/TestContext";
import { AppContext } from "../contexts/AppContext";
import { Button, Slider } from "@mui/material";
import TestResultBox from "./TestResultBox";

const ResultsPanel = () => {
  const [officialResult, setOfficialResult] = useState({});
  const { result, setIsTestStart, setCurrentQuestion, extremeValues } =
    useContext(TestContext);
  const { windowWidth } = useContext(AppContext);
  const params = useParams();
  const navigate = useNavigate();

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
      </div>{" "}
    </div>
  );
};

export default ResultsPanel;
