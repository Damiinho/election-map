import { useContext } from "react";
import MyBar from "../../Components/MyBar";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";

const BarsSimpleSummary = () => {
  const { simpleParties } = useContext(DataContext);
  const { simpleFinalResultSummary } = useContext(AppContext);

  return (
    <div className="simpleSummary-main__summary-bars">
      <div className="simpleSummary-main__summary-bars__bar">
        <MyBar
          result={simpleParties}
          value="result"
          name={
            <span
              style={{
                color: "black",
                fontSize: 30,
                margin: 5,
                fontFamily: "MuseoModerno, cursive",
                // textShadow: "1px 1px white",
              }}
            >
              Procent głosów
            </span>
          }
          barWidth="100%"
          borderRadius={0}
          boxShadow
          fontSize={20}
          height={70}
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
                fontSize: 30,
                margin: 5,
                fontFamily: "MuseoModerno, cursive",
              }}
            >
              Mandaty
            </span>
          }
          tooltip={false}
          barWidth="100%"
          borderRadius={0}
          boxShadow
          fontSize={20}
          height={70}
        />
      </div>
    </div>
  );
};

export default BarsSimpleSummary;
