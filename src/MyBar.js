import { Tooltip } from "react-tooltip";

const MyBar = (props) => {
  const sum = props.result.reduce(
    (total, item) => total + item[props.value],
    0
  );

  return (
    <div className="list__element-bars__bar">
      <Tooltip id="myBar-tooltip" />
      {props.name}
      <div className="list__element-bars__bar-wrapper">
        <div
          className="list__element-bars__bar-wrapper__center"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="50%"
        ></div>
        {props.result.map((item) => {
          if (item[props.value] === 0) return null;
          const itemValue =
            props.value === "result"
              ? `${((item[props.value] / sum) * 100).toFixed(2)}%`
              : `${item[props.value]}`;

          return (
            <div
              key={item.color}
              className="list__element-bars__bar-wrapper__item"
              style={{ width: `${(item[props.value] / sum) * 100}%` }}
              data-tooltip-id="myBar-tooltip"
              data-tooltip-content={`${item.name}, ${itemValue}`}
            >
              <div
                className="list__element-bars__bar-wrapper__item-color"
                style={{ backgroundColor: `${item.color}` }}
              >
                {item.result / sum > 0.03 && <span>{itemValue}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBar;
