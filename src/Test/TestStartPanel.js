import { useContext } from "react";
import { TestContext } from "../contexts/TestContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const TestStartPanel = () => {
  const navigate = useNavigate();
  const { questions, setIsTestStart, setResult, setCurrentQuestion } =
    useContext(TestContext);

  const handleStart = () => {
    setIsTestStart(true);
    setResult({ prog: 0, auth: 0, right: 0 });
    setCurrentQuestion(0);
  };
  return (
    <div className="test__main">
      <p>
        Test ma pomóc określić ci swoje poglądy polityczne względem trzech osi:
        ekonomicznej, społecznej i zarządczej.
        <br /> Składa się z {questions.length} pytań. Po udzieleniu odpowiedzi
        na wszystkie wyświetli się panel z podsumowaniem. W każdej chwili masz
        możliwość sprawdzić jak dane pytanie wpływa na twój wynik w
        poszczególnych osiach.
      </p>
      <p>
        Lista wszystkich pytań znajduje się{" "}
        <span
          style={{ color: "#00498d", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => {
            navigate("/test/lista/");
          }}
        >
          tutaj
        </span>
        .
      </p>
      <p>
        Jeśli chcesz poznać szczegóły koncepcji podziału kliknij{" "}
        <span
          style={{ color: "#00498d", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => {
            navigate("/test/koncepcja/");
          }}
        >
          tutaj
        </span>
        .
      </p>
      <Button
        variant="contained"
        color="info"
        size="large"
        style={{ margin: "0 auto" }}
        // onClick={() => {
        //   navigate("/test/window/");
        // }}
        onClick={handleStart}
      >
        Rozpocznij test
      </Button>
    </div>
  );
};

export default TestStartPanel;
