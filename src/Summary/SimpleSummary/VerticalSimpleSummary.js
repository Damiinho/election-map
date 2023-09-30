import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";

const VerticalSimpleSummary = () => {
  const { simpleParties } = useContext(DataContext);
  const { simpleFinalResultSummary, windowWidth, correction } =
    useContext(AppContext);
  const [barCorrection, setBarCorrection] = useState(1.5);

  useEffect(() => {
    // Sprawdź warunki, które mają prowadzić do zmiany barCorrection
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
    <div className="simpleSummary-main__summary-vertical">
      <div
        style={{
          backgroundColor: "#55577788",
          height: 300,
          margin: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        {simpleFinalResultSummary.map((item) => {
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
              style={{
                display: "flex",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                title={item.name}
                style={{
                  width: 70,
                  height: `${(item.seats / 460) * 100 * barCorrection}%`,
                  alignSelf: "flex-end",
                  margin: "0 10px 0 10px",
                  position: "relative",
                  backgroundColor: item.color,
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -35,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 22,
                    fontFamily: '"MuseoModerno", cursive',
                    color: "white",
                    textShadow: "2px 2px black",
                  }}
                >
                  {item.seats}
                </span>
              </div>
              <div
                style={{
                  width: 70,
                  height: `${thisPartyHeight * barCorrection}%`,
                  backgroundColor: item.color,
                  alignSelf: "flex-end",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                  margin: " 0 10px 0 10px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -35,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 22,
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
                  fontSize: 22,
                  fontFamily: '"MuseoModerno", cursive',
                  position: "absolute",
                  bottom: -70,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  textAlign: "center",
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
