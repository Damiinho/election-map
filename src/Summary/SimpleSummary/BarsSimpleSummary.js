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
                color: "white",
                fontSize: 25,
                margin: 5,
                textShadow: "1px 1px black",
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
                color: "white",
                fontSize: 25,
                margin: 5,
                textShadow: "1px 1px black",
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
