import { Tooltip } from "react-tooltip";

const ResultBar = (props) => {
  const sum = props.finalResult.reduce((total, item) => total + item.result, 0);

  return (
    <div className="list__element-bars__bar">
      <Tooltip id="my-tooltip" />
      Wynik procentowy na liscie
      <div className="list__element-bars__bar-wrapper">
        <div
          className="list__element-bars__bar-wrapper__center"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="50%"
        ></div>
        {props.finalResult.map((item) => {
          if (item.result === 0) return null;

          return (
            <div
              key={item.color}
              className="list__element-bars__bar-wrapper__item"
              style={{ width: `${(item.result / sum) * 100}%` }}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={item.name}
            >
              <div
                className="list__element-bars__bar-wrapper__item-color"
                style={{ backgroundColor: `${item.color}` }}
              >
                <span>{((item.result / sum) * 100).toFixed(2)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultBar;
