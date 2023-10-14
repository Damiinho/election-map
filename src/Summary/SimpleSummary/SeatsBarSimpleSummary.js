import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { AppContext } from "../../contexts/AppContext";

const SeatsBarSimpleSummary = () => {
  const { simpleFinalResultSummary } = useContext(AppContext);

  const sum = simpleFinalResultSummary.reduce(
    (total, item) => total + item.seats,
    0
  );

  return (
    <div className="simpleSummary-main__summary-bars__element">
      <div className="simpleSummary-main__summary-bars__element-title">
        Mandaty{" "}
      </div>
      <div className="simpleSummary-main__summary-bars__element-bar">
        <Tooltip id="seatsBar" />
        <div
          className="simpleSummary-main__summary-bars__element-bar__center"
          data-tooltip-id="seatsBar"
          data-tooltip-content={`50%`}
        ></div>
        {simpleFinalResultSummary.map((item, index) => {
          if (item.seats > 0) {
            return (
              <div
                style={{
                  backgroundColor: item.color,
                  height: "100%",
                  color: "white",
                  width: `${(item.seats / sum) * 100}%`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={index}
                data-tooltip-id="seatsBar"
                data-tooltip-content={`${item.name}, miejsc: ${item.seats}`}
              >
                {item.seats > 3 && `${item.seats}`}
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
};

export default SeatsBarSimpleSummary;
