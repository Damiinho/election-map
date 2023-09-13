import { useState } from "react";
import MySwitch from "./MySwitch";

const Summary = () => {
  const [showSummary, setShowSummary] = useState(true);

  const handleShowSummary = () => {
    setShowSummary(!showSummary);
  };

  return (
    <div className="App__summary">
      <div className="App__summary-title">
        4. zobacz podsumowanie
        <div className="App__summary-title__side">
          <MySwitch
            onClick={handleShowSummary}
            imgDisplay
            defaultValue={true}
            thumbDisplay={false}
          />
        </div>
      </div>
      <div className="App__summary-main">
        <div className="summary"></div>
      </div>
    </div>
  );
};

export default Summary;
