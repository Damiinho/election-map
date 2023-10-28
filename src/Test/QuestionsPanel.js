import { useContext } from "react";
import { TestContext } from "../contexts/TestContext";
import Question from "./QuestionsPanel/Question";
import QuestionsButtons from "./QuestionsPanel/QuestionsButtons";

const QuestionsPanel = () => {
  const { questions, currentQuestion, setIsTestStart } =
    useContext(TestContext);

  if (!questions[currentQuestion]) {
    setIsTestStart(false);
    return null;
  }

  if (questions[currentQuestion]) {
    return (
      <div className="test__questions">
        <QuestionsButtons />
        <Question />
      </div>
    );
  }
};

export default QuestionsPanel;
