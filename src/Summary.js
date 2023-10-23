import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import SummaryTable from "./Summary/SummaryTable";
import MySmallInfoBox from "./Components/MySmallInfoBox";
import MyBar from "./Components/MyBar";
import SummaryParliament from "./Summary/SummaryParliament";
import { DataContext } from "./contexts/DataContext";
import SimpleSummary from "./Summary/SimpleSummary";
import SummaryCircus from "./Summary/SummaryCircus";
import MyEyeSwitch from "./Components/MyEyeSwitch";

const Summary = () => {
  const {
    showSummary,
    setShowSummary,
    finalResultSummary,
    setFinalResultSummary,
    strictSejm,
    showSimpleSummary,
    advancedVersion,
    windowWidth,
  } = useContext(AppContext);
  const { districts } = useContext(DataContext);

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
          className="presentation__block-set__seat"
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
          className="presentation__block-set__seat"
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
    <div className={`App__summary ${strictSejm ? "strictSejm" : ""}`}>
      <div
        className="App__summary-title"
        style={{ cursor: "pointer" }}
        onClick={handleShowSummary}
      >
        4. podsumowanie
        <div className="App__summary-title__side">
          {/* <MySwitch
            onClick={handleShowSummary}
            imgDisplay
            value={showSummary}
            thumbDisplay={false}
          /> */}
          <MyEyeSwitch onChange={handleShowSummary} checked={showSummary} />
        </div>
      </div>
      <div className={`App__summary-main ${showSummary ? "" : "hide"}`}>
        <div className="presentation">
          {" "}
          <div className="presentation__block">
            <div className="presentation__block-boxes">
              <div className="presentation__block-boxes__item">
                <MySmallInfoBox
                  radius={windowWidth > 600 ? "" : "0px"}
                  txt="liczba miejsc"
                  value={deputiesSum}
                />
              </div>
              <div className="presentation__block-boxes__item">
                <MySmallInfoBox
                  txt="nieprzydzielone"
                  value={unassignedSeats}
                  radius={windowWidth > 600 ? "" : "0px"}
                  backgroundTop="grey"
                  fontSizeTop={13}
                  fontSizeBottom={20}
                  // paddingBottom="2px 0 0 2px"
                />
              </div>
            </div>
            {strictSejm ? (
              <div className="presentation__block-circus">
                <SummaryCircus />
              </div>
            ) : (
              <div className="presentation__block-set">
                {finalResultSummary.map((item, index) => renderSeatDivs(item))}
                {unassignedSeats > 0 && renderUnassignedSeatDivs()}
              </div>
            )}
          </div>
          <div className="presentation__description">
            <SummaryTable />
          </div>
          <div className="presentation__bar">
            <MyBar
              result={finalResultSummary}
              value="seats"
              barWidth={windowWidth > 800 ? "95%" : "100%"}
              name={
                <span
                  style={{
                    color: "white",
                    fontSize:
                      windowWidth > 800 ? 25 : windowWidth > 600 ? 20 : 15,
                    margin: 5,
                    textShadow: "1px 1px black",
                  }}
                >
                  Mandaty łącznie
                </span>
              }
              boxShadow={true}
              fontSize={
                windowWidth > 800
                  ? 20
                  : windowWidth > 600
                  ? 15
                  : windowWidth > 550
                  ? 12
                  : windowWidth > 500
                  ? 10
                  : windowWidth > 400
                  ? 8
                  : windowWidth > 350
                  ? 6
                  : 5
              }
              height={windowWidth > 800 ? 50 : 40}
            />
            <MyBar
              result={finalResultSummary}
              value="result"
              barWidth={windowWidth > 800 ? "95%" : "100%"}
              name={
                <span
                  style={{
                    color: "white",
                    fontSize:
                      windowWidth > 800 ? 25 : windowWidth > 600 ? 20 : 15,
                    margin: 5,
                    textShadow: "1px 1px black",
                  }}
                >
                  Średni wynik
                </span>
              }
              boxShadow={true}
              fontSize={
                windowWidth > 800
                  ? 20
                  : windowWidth > 600
                  ? 15
                  : windowWidth > 550
                  ? 12
                  : windowWidth > 500
                  ? 10
                  : windowWidth > 400
                  ? 8
                  : windowWidth > 350
                  ? 6
                  : 5
              }
              height={windowWidth > 800 ? 50 : 40}
            />
          </div>{" "}
          {strictSejm ? (
            <div
              style={{
                width: windowWidth > 900 ? 900 : "100%",
                height: windowWidth > 900 ? 850 : "100%",
                margin: "0px auto 20px",
                gridColumn: "span 2",
                backgroundColor: "#8b8b8b8a",
                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              <SummaryParliament />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : !advancedVersion && showSimpleSummary ? (
    <SimpleSummary />
  ) : null;
};

export default Summary;
