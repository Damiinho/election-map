import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AppContext } from "../../contexts/AppContext";
import { DataContext } from "../../contexts/DataContext";

const PercentageBarSimpleSummary = () => {
  const { simpleFinalResultSummary } = useContext(AppContext);
  const { simpleParties } = useContext(DataContext);
  const [resultForBar, setResultForBar] = useState([]);

  useEffect(() => {
    const updatedResultForBar = simpleFinalResultSummary.map((finalResult) => {
      const matchingParty = simpleParties.find(
        (party) => party.name === finalResult.name
      );
      return {
        ...finalResult,
        result: matchingParty ? matchingParty.result : 0,
      };
    });

    setResultForBar(updatedResultForBar);
  }, [simpleParties, simpleFinalResultSummary]);

  const sum = resultForBar.reduce((total, item) => total + item.result, 0);

  return (
    <div className="simpleSummary-main__summary-bars__element">
      <div className="simpleSummary-main__summary-bars__element-title">
        Procent głosów
      </div>
      <div className="simpleSummary-main__summary-bars__element-bar">
        <Tooltip id="percentageBar" />
        <div
          className="simpleSummary-main__summary-bars__element-bar__center"
          data-tooltip-id="percentageBar"
          data-tooltip-content={`50%`}
        ></div>
        {resultForBar.map((item, index) => (
          <div
            style={{
              backgroundColor: item.color,
              height: "100%",
              color: "white",
              width: `${(item.result / sum) * 100}%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={index}
            data-tooltip-id="percentageBar"
            data-tooltip-content={`${item.name}, ${item.result}%`}
          >
            {item.result > 4.99 && `${item.result}%`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PercentageBarSimpleSummary;
