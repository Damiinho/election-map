import { useContext } from "react";
import { TestContext } from "../contexts/TestContext";
import { Button } from "@mui/material";
import CubeIMG from "../img/cube.png";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const QuestionsPanel = () => {
  const { questions, result, setResult, currentQuestion, setCurrentQuestion } =
    useContext(TestContext);
  const navigate = useNavigate();

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
    const tooltipContent = effects.right
      ? effects.right > 0
        ? "kapitalizm +"
        : "socjalizm +"
      : effects.auth
      ? effects.auth > 0
        ? "autorytaryzm +"
        : "anarchizm +"
      : effects.prog
      ? effects.prog > 0
        ? "progresywizm +"
        : "konserwatyzm +"
      : "nie wiem";
    return (
      <div className="test__questions-item">
        <div
          className="test__questions-item__effect"
          data-tooltip-id={"question-tooltip"}
          data-tooltip-content={tooltipContent}
        >
          efekt?
        </div>
        <div className="test__questions-item__number">
          pytanie nr {currentQuestion + 1}/{questions.length}
        </div>

        <div className="test__questions-item__text">
          {questions[currentQuestion].question}
        </div>
        <div className="test__questions-item__buttons">
          <Button
            variant="contained"
            style={{ backgroundColor: "#a02626" }}
            size="medium"
            onClick={() => handleClick(-1, effects)}
          >
            Nie zgadzam się
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f03b3b" }}
            size="medium"
            onClick={() => handleClick(-0.5, effects)}
          >
            Raczej się nie zgadzam
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#838383" }}
            size="medium"
            onClick={() => handleClick(0, effects)}
          >
            Nie wiem
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#60c700" }}
            size="medium"
            onClick={() => handleClick(0.5, effects)}
          >
            Raczej się zgadzam
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#0f7901" }}
            size="medium"
            onClick={() => handleClick(1, effects)}
          >
            Zgadzam się
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="test__questions">
      <Tooltip id="question-tooltip" />
      <div className="test__questions-side">
        <Button
          onClick={() => {
            navigate("lista");
          }}
        >
          Lista pytań
        </Button>
      </div>
      <Question />
      <img src={CubeIMG} alt="" />
    </div>
  );
};

export default QuestionsPanel;
