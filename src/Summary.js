import { useContext } from "react";
import MySwitch from "./MySwitch";
import { AppContext } from "./contexts/AppContext";

const Summary = () => {
  const { districts, showSummary, setShowSummary } = useContext(AppContext);

  const handleShowSummary = () => {
    setShowSummary(!showSummary);
  };

  const shouldShowSummary = districts.some(
    (district) => district.showFinalResult
  );

  return shouldShowSummary ? (
    <div className="App__summary">
      <div className="App__summary-title">
        4. zobacz podsumowanie
        <div className="App__summary-title__side">
          <MySwitch
            onClick={handleShowSummary}
            imgDisplay
            value={showSummary}
            thumbDisplay={false}
          />
        </div>
      </div>
      <div className={`App__summary-main  ${showSummary ? "" : "hide"}`}>
        <div className="presentation"></div>
      </div>
    </div>
  ) : null;
};

export default Summary;
