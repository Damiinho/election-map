import { Tooltip } from "react-tooltip";

const SeatsBar = (props) => {
  const sum = props.finalResult.reduce((total, item) => total + item.seats, 0);

  return (
    <div className="list__element-bars__bar">
      <Tooltip id="my-tooltip" />
      Liczba mandatów z listy
      <div className="list__element-bars__bar-wrapper">
        <div
          className="list__element-bars__bar-wrapper__center"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="50%"
        ></div>
        {props.finalResult.map((item) => {
          if (item.seats === 0) return null;

          return (
            <div
              key={item.color}
              className="list__element-bars__bar-wrapper__item"
              style={{ width: `${(item.seats / sum) * 100}%` }}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`${item.name}, mandaty: ${item.seats}`}
            >
              <div
                className="list__element-bars__bar-wrapper__item-color"
                style={{ backgroundColor: `${item.color}` }}
              >
                <span>{item.seats}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatsBar;
