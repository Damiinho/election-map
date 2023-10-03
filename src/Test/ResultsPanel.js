import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TestContext } from "../contexts/TestContext";
import { Button } from "@mui/material";

const ResultsPanel = () => {
  const [officialResult, setOfficialResult] = useState({});
  const { result, setIsTestStart, setCurrentQuestion } =
    useContext(TestContext);
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

      setOfficialResult({
        prog: progValue,
        auth: authValue,
        right: rightValue,
      });
    }
  }, [result.auth, result.prog, result.right, params.values]);

  return (
    <div className="test">
      <div className="test__title">Test – bryła polityczna</div>
      <div className="test__result">
        <div className="test__result-buttons">
          <Button
            variant="contained"
            // style={{ backgroundColor: "#f03b3b" }}
            color="info"
            size="medium"
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
            size="medium"
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
            size="medium"
            onClick={() => {
              navigate("/prosty/");
            }}
          >
            kalkulator
          </Button>
        </div>
        <div>
          <div>
            <span>Socjalizm</span>
            <span>{officialResult.right}</span>
            <span>Kapitalizm</span>
          </div>
          <div>
            <span>Anarchizm</span>
            <span>{officialResult.auth}</span>
            <span>Autorytaryzm</span>
          </div>
          <div>
            <span>Konserwatyzm</span>
            <span>{officialResult.prog}</span>
            <span>Progresywizm</span>
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="bottom-side"></div>
            <div className="back-side"></div>
            <div className="left-side"></div>
            <div className="center-bar-one"></div>
            <div className="center-bar-two"></div>
            <div className="center-bar-three"></div>
            <div className="right-front-bar"></div>
            <div className="top-front-bar"></div>
            <div className="top-right-bar"></div>
            {/* prawo-lewo, góra-dół, przód-tył */}{" "}
            <div
              className="result-dott-bottom"
              style={{
                width: "1rem",
                height: "1rem",
                transform: `rotateY(0deg) rotateX(90deg) rotateZ(0deg) translateZ(${
                  officialResult.auth - 0.5
                }rem) translateY(${-officialResult.prog}rem) translateX(${
                  officialResult.right
                }rem)`,
              }}
            ></div>
            <div
              className="result-dott-top"
              style={{
                width: "1rem",
                height: "1rem",
                transform: `rotateY(0deg) rotateX(90deg) rotateZ(0deg) translateZ(${
                  officialResult.auth + 0.5
                }rem)translateY(${-officialResult.prog}rem) translateX(${
                  officialResult.right
                }rem)`,
              }}
            ></div>
            <div
              className="result-dott-front"
              style={{
                width: "1rem",
                height: "1rem",
                transform: `rotateY(0deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  -officialResult.prog + 0.5
                }rem) translateY(${-officialResult.auth}rem) translateX(${
                  officialResult.right
                }rem)`,
              }}
            ></div>
            <div
              className="result-dott-back"
              style={{
                width: "1rem",
                height: "1rem",
                transform: `rotateY(0deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  -officialResult.prog - 0.5
                }rem) translateY(${-officialResult.auth}rem) translateX(${
                  officialResult.right
                }rem)`,
              }}
            ></div>
            <div
              className="result-dott-right"
              style={{
                width: "1rem",
                height: "1rem",
                transform: `rotateY(90deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  officialResult.right + 0.5
                }rem) translateY(${-officialResult.auth}rem) translateX(${
                  officialResult.prog
                }rem)`,
              }}
            ></div>
            <div
              className="result-dott-left"
              style={{
                width: "1rem",
                height: "1rem",
                transform: `rotateY(90deg) rotateX(0deg) rotateZ(0deg) translateZ(${
                  officialResult.right - 0.5
                }rem) translateY(${-officialResult.auth}rem) translateX(${
                  officialResult.prog
                }rem)`,
              }}
            ></div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ResultsPanel;
