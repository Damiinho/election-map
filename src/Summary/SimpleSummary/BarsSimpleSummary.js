import { useContext } from "react";
import MyBar from "../../Components/MyBar";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";

const BarsSimpleSummary = () => {
  const { simpleParties } = useContext(DataContext);
  const { simpleFinalResultSummary, windowWidth, correction } =
    useContext(AppContext);

  return (
    <div className="simpleSummary-main__summary-bars">
      <div className="simpleSummary-main__summary-bars__bar">
        <MyBar
          result={correction ? simpleParties : simpleFinalResultSummary}
          value="result"
          name={
            <span
              style={{
                color: "black",
                fontSize: windowWidth > 810 ? 30 : 20,
                margin: 5,
                fontFamily: "MuseoModerno, cursive",
                // textShadow: "1px 1px white",
              }}
            >
              Procent głosów
            </span>
          }
          barWidth={
            windowWidth > 810 ? "100%" : windowWidth > 410 ? "95%" : "100%"
          }
          borderRadius={0}
          boxShadow
          fontSize={
            windowWidth > 810
              ? 20
              : windowWidth > 660
              ? 15
              : windowWidth > 510
              ? 12
              : windowWidth > 410
              ? 10
              : 8
          }
          height={
            windowWidth > 810
              ? 70
              : windowWidth > 660
              ? 60
              : windowWidth > 510
              ? 50
              : windowWidth > 410
              ? 40
              : 30
          }
        />
      </div>
      <div className="simpleSummary-main__summary-bars__bar">
        <MyBar
          result={simpleFinalResultSummary}
          value="seats"
          name={
            <span
              style={{
                color: "black",
                fontSize: windowWidth > 810 ? 30 : 20,
                margin: 5,
                fontFamily: "MuseoModerno, cursive",
              }}
            >
              Mandaty
            </span>
          }
          // tooltip={false}
          barWidth={
            windowWidth > 810 ? "100%" : windowWidth > 410 ? "95%" : "100%"
          }
          borderRadius={0}
          boxShadow
          fontSize={
            windowWidth > 810
              ? 20
              : windowWidth > 660
              ? 15
              : windowWidth > 510
              ? 12
              : windowWidth > 410
              ? 10
              : 8
          }
          height={
            windowWidth > 810
              ? 70
              : windowWidth > 660
              ? 60
              : windowWidth > 510
              ? 50
              : windowWidth > 410
              ? 40
              : 30
          }
        />
      </div>
    </div>
  );
};

export default BarsSimpleSummary;
