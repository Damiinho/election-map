import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";
import { Tooltip } from "react-tooltip";

const VerticalSimpleSummary = () => {
  const { simpleParties } = useContext(DataContext);
  const { simpleFinalResultSummary, windowWidth } = useContext(AppContext);
  const [barCorrection, setBarCorrection] = useState(1.5);

  useEffect(() => {
    const shouldUpdateBarCorrection = simpleParties.some((party) => {
      const item = simpleFinalResultSummary.find(
        (summaryItem) => summaryItem.name === party.name
      );
      if (party.result > 90 || (item && item.seats > 340)) {
        setBarCorrection(0.8);
        return true;
      } else if (party.result > 80 || (item && item.seats > 300)) {
        setBarCorrection(1);
        return true;
      } else if (party.result > 60 || (item && item.seats > 250)) {
        setBarCorrection(1.2);
        return true;
      }
      return false;
    });

    if (!shouldUpdateBarCorrection) {
      setBarCorrection(1.5);
    }
  }, [simpleParties, simpleFinalResultSummary]);

  return (
    <div
      style={{ position: "relative" }}
      className="simpleSummary-main__summary-vertical"
    >
      <Tooltip style={{ zIndex: 1 }} id="VerticalBar-tooltip" />
      <span
        style={{
          position: "absolute",
          top: 10,
          color: "#ffffff77",
          fontSize: windowWidth > 450 ? 40 : 30,
          width: "100%",
          textAlign: "center",
          fontFamily: '"MuseoModerno", cursive',
        }}
      >
        Liczba mandatów / wynik procentowy
      </span>
      <div
        style={{
          backgroundColor: "#55577788",
          height: 300,
          width: "95%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        {simpleFinalResultSummary.map((item, index) => {
          if (!item.isOverThreshold) return null;
          const thisParty = simpleParties.find(
            (party) => party.name === item.name
          );

          let thisPartyHeight = 0;
          if (thisParty) {
            thisPartyHeight = thisParty.result;
          } else {
            return null;
          }

          return (
            <div
              key={index}
              style={{
                display: "flex",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                data-tooltip-id="VerticalBar-tooltip"
                data-tooltip-content={`${item.name}, mandaty: ${item.seats}`}
                style={{
                  width: 70,
                  height: `${(item.seats / 460) * 100 * barCorrection}%`,
                  alignSelf: "flex-end",
                  margin: "0 10px 0 10px",
                  position: "relative",
                  backgroundColor: item.color,
                  cursor: "pointer",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top:
                      windowWidth > 550 ? -35 : windowWidth > 400 ? -25 : -15,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize:
                      windowWidth > 600
                        ? 22
                        : windowWidth > 550
                        ? 18
                        : windowWidth > 500
                        ? 16
                        : windowWidth > 450
                        ? 14
                        : windowWidth > 400
                        ? 12
                        : 10,
                    fontFamily: '"MuseoModerno", cursive',
                    color: "white",
                    textShadow: "2px 2px black",
                  }}
                >
                  {item.seats}
                </span>
              </div>
              <div
                data-tooltip-id="VerticalBar-tooltip"
                data-tooltip-content={`${item.name}, wynik: ${thisPartyHeight}%`}
                style={{
                  width: 70,
                  height: `${thisPartyHeight * barCorrection}%`,
                  backgroundColor: item.color,
                  alignSelf: "flex-end",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                  margin: " 0 10px 0 10px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top:
                      windowWidth > 550 ? -35 : windowWidth > 400 ? -25 : -15,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize:
                      windowWidth > 600
                        ? 22
                        : windowWidth > 550
                        ? 18
                        : windowWidth > 500
                        ? 16
                        : windowWidth > 450
                        ? 14
                        : windowWidth > 400
                        ? 12
                        : 10,
                    fontFamily: '"MuseoModerno", cursive',
                    color: "white",
                    textShadow: "2px 2px black",
                  }}
                >
                  {thisPartyHeight}%
                </span>
              </div>
              <span
                style={{
                  color: "white",
                  textShadow: "2px 2px black",
                  fontSize:
                    windowWidth > 700
                      ? 16
                      : windowWidth > 600
                      ? 14
                      : windowWidth > 500
                      ? 12
                      : 10,
                  fontFamily: '"MuseoModerno", cursive',
                  display: windowWidth > 400 ? "inline" : "none",
                  // transform: "translateX(-50%)",
                  width: "100%",
                  textAlign: "center",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalSimpleSummary;
