import { useState, useContext, useEffect } from "react";
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

  const deputiesSum = districts.reduce(
    (total, item) => total + item.deputies,
    0
  );

  const [finalResultSummary, setFinalResultSummary] = useState([]);

  // Efekt, który aktualizuje finalResultSummary przy zmianach w districts
  useEffect(() => {
    const updatedFinalResultSummary = [];

    // Mapa do śledzenia unikalnych kombinacji name i color
    const nameColorMap = {};

    // Iteruj przez wszystkie dzielnice i ich finalResults
    districts.forEach((district) => {
      if (district.finalResult && Array.isArray(district.finalResult)) {
        district.finalResult.forEach((item) => {
          if (item.name && item.color) {
            const key = `${item.name}_${item.color}`;

            if (nameColorMap[key]) {
              // Jeśli istnieje już taki element, zaktualizuj result i seats
              nameColorMap[key].result += item.result;
              nameColorMap[key].seats += item.seats;
            } else {
              // W przeciwnym razie dodaj jako nowy element
              nameColorMap[key] = { ...item };
              updatedFinalResultSummary.push(nameColorMap[key]);
            }
          }
        });
      }
    });

    setFinalResultSummary(updatedFinalResultSummary);
  }, [districts]);

  return shouldShowSummary ? (
    <div className="App__summary">
      <div className="App__summary-title">
        4. zobacz podsumowanie
        <div className="App__summary-title__side">
          <MySwitch
            onClick={() => {
              handleShowSummary();
            }}
            imgDisplay
            value={showSummary}
            thumbDisplay={false}
          />
        </div>
      </div>
      <div className={`App__summary-main  ${showSummary ? "" : "hide"}`}>
        <div className="presentation">
          {/* Wyświetl nazwy w elemencie presentation */}
          <ul>
            {finalResultSummary.map((item, index) => (
              <li key={index}>
                {item.name}, {item.color}, Result: {item.result}, Seats:{" "}
                {item.seats}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default Summary;
