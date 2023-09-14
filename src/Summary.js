import React, { useContext, useEffect, useState } from "react";
import MySwitch from "./MySwitch";
import { AppContext } from "./contexts/AppContext";
import SummaryTable from "./SummaryTable";

const Summary = () => {
  const {
    districts,
    showSummary,
    setShowSummary,
    finalResultSummary,
    setFinalResultSummary,
  } = useContext(AppContext);

  const [unassignedSeats, setUnassignedSeats] = useState(0);

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

  useEffect(() => {
    const updatedFinalResultSummary = [];
    const nameColorMap = {};

    districts.forEach((district) => {
      if (district.finalResult && Array.isArray(district.finalResult)) {
        district.finalResult.forEach((item) => {
          if (item.name && item.color) {
            const key = `${item.name}_${item.color}`;

            if (nameColorMap[key]) {
              nameColorMap[key].result += item.result;
              nameColorMap[key].seats += item.seats;
            } else {
              nameColorMap[key] = { ...item };
              updatedFinalResultSummary.push(nameColorMap[key]);
            }
          }
        });
      }
    });

    setFinalResultSummary(updatedFinalResultSummary);
  }, [districts, setFinalResultSummary]);

  useEffect(() => {
    let totalSeats = 0;
    finalResultSummary.forEach((item) => {
      totalSeats += item.seats;
    });
    setUnassignedSeats(
      districts.reduce((total, item) => total + item.deputies, 0) - totalSeats
    );
  }, [districts, finalResultSummary]);

  const renderSeatDivs = (item) => {
    const seatDivs = [];
    for (let i = 0; i < item.seats; i++) {
      seatDivs.push(
        <div
          className="presentation__set-seat"
          style={{ backgroundColor: item.color }}
          key={i}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={item.name}
        ></div>
      );
    }
    return seatDivs;
  };

  const renderUnassignedSeatDivs = () => {
    const unassignedSeatDivs = [];
    for (let i = 0; i < unassignedSeats; i++) {
      unassignedSeatDivs.push(
        <div
          className="presentation__set-seat"
          style={{ backgroundColor: "grey" }}
          key={i}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="nieprzypisany"
        ></div>
      );
    }
    return unassignedSeatDivs;
  };

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
      <div className={`App__summary-main ${showSummary ? "" : "hide"}`}>
        <div className="presentation">
          <div className="presentation__description">
            <div className="presentation__description-item">
              <div className="presentation__description-item__txt">
                Liczba miejsc
              </div>
              <div className="presentation__description-item__value">
                {deputiesSum}
              </div>
            </div>
            <ul>
              {finalResultSummary.map((item, index) => (
                <li key={index}>
                  {item.name}, {item.color}, Result: {item.result}, Seats:{" "}
                  {item.seats}
                </li>
              ))}
            </ul>
            <SummaryTable />
          </div>
          <div className="presentation__set">
            {finalResultSummary.map((item, index) => renderSeatDivs(item))}
            {unassignedSeats > 0 && renderUnassignedSeatDivs()}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Summary;
