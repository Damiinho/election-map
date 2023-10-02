import { useContext } from "react";
import { TestContext } from "../contexts/TestContext";
import TestStartPanel from "./TestStartPanel";
import QuestionsPanel from "./QuestionsPanel";

const Test = () => {
  const { isTestStart } = useContext(TestContext);

  return (
    <div className="test">
      <div className="test__title">Test – bryła polityczna</div>
      {!isTestStart ? <TestStartPanel /> : <QuestionsPanel />}
    </div>
  );
};

export default Test;
