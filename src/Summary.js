import { useState, useContext, useEffect } from "react";
import MySwitch from "./MySwitch";
import { AppContext } from "./contexts/AppContext";
// import { parliamentIMG } from "./img/parliamentary-template.svg";
import SummaryParliament from "./SummaryParliament";

const Summary = () => {
  const { districts, showSummary, setShowSummary } = useContext(AppContext);
  const [finalResultSummary, setFinalResultSummary] = useState([]);
  const [unassignedSeats, setUnassignedSeats] = useState(0);
  // const [totalSeatsRendered, setTotalSeatsRendered] = useState(0);

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
  }, [districts]);

  useEffect(() => {
    let totalSeats = 0;
    finalResultSummary.forEach((item) => {
      totalSeats += item.seats;
    });
    // setTotalSeatsRendered(totalSeats);
    setUnassignedSeats(deputiesSum - totalSeats);
  }, [districts, finalResultSummary, deputiesSum]);

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
      <div className={`App__summary-main ${showSummary ? "" : "hide"}`}>
        <div className="presentation">
          <div className="presentation__description">
            <div className="presentation__description-item">
              <div className="presentation__description-item__txt">
                Miejsc w wyborach:
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
          </div>

          <div className="presentation__set">
            {finalResultSummary.map((item, index) => {
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
            })}
            {unassignedSeats > 0 && (
              <>
                {unassignedSeats > 0 &&
                  (() => {
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
                  })()}
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="test">
        <SummaryParliament />
      </div> */}
    </div>
  ) : null;
};

export default Summary;
