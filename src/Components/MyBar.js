import { Tooltip } from "react-tooltip";

const MyBar = (props) => {
  const sum = props.result.reduce(
    (total, item) => total + item[props.value],
    0
  );

  const myBarStyle = {
    margin: "0 auto",
    width: "100%",
    borderRadius: 7,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const wrapperStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderRadius: 12,
  };
  const wrapperCenterStyle = {
    width: "3px",
    height: "100%",
    backgroundColor: "#ffffff48",
    backgroundImage:
      "linear-gradient(0deg, #ffffff33 0%, #ffffff33 12.5%, transparent 12.5%, transparent 25%, #ffffff33 25%, #ffffff33 37.5%, transparent 37.5%, transparent 50%, #ffffff33 50%, #ffffff33 62.5%, transparent 62.5%, transparent 75%, #ffffff33 75%, #ffffff33 87.5%, transparent 87.5%, transparent 100%)",
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translateX(-50%)",
    cursor: "pointer",
  };

  const itemColor = {
    display: "flex",
    height: "30px",
    fontSize: "12px",
    fontFamily: '"MuseoModerno", cursive',
    color: "rgb(235, 235, 235)",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="myBar" style={myBarStyle}>
      <Tooltip id="myBar-tooltip" />
      {props.name}
      <div className="myBar-wrapper" style={wrapperStyle}>
        <div
          className="myBar-wrapper__center"
          data-tooltip-id="myBar-tooltip"
          data-tooltip-content="50%"
          style={wrapperCenterStyle}
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
              className="myBar-wrapper__item"
              style={{
                width: `${(item[props.value] / sum) * 100}%`,
                cursor: "pointer",
              }}
              data-tooltip-id="myBar-tooltip"
              data-tooltip-content={`${item.name}, ${itemValue}`}
            >
              <div
                className="myBar-wrapper__item-color"
                style={{ ...itemColor, backgroundColor: `${item.color}` }}
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
