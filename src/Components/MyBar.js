import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react"; // Dodajemy useState i useEffect do monitorowania szerokości ekranu

const MyBar = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateFontSize = () => {
    if (props.fontSize) {
      return props.fontSize; // Jeśli fontSize jest już dostarczone przez props, użyj go
    } else {
      // W przeciwnym razie dostosuj fontSize w zależności od szerokości ekranu
      if (windowWidth <= 380) {
        return "8px";
      } else if (windowWidth <= 500) {
        return "10px";
      } else {
        return "12px";
      }
    }
  };

  const sum = props.result.reduce(
    (total, item) => total + item[props.value],
    0
  );
  const tooltip = props.tooltip === false ? false : true || true;
  const borderRadius =
    props.borderRadius || props.borderRadius === 0 ? props.borderRadius : 0;
  const barWidth = props.barWidth || "90%";
  const boxShadow =
    props.boxShadow === true
      ? "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
      : "";
  const fontSize = props.fontSize || calculateFontSize();
  const height = props.height || "30px";

  const myBarStyle = {
    margin: "0 auto",
    width: barWidth,
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
    borderRadius: borderRadius,
    boxShadow: boxShadow,
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
    cursor: tooltip ? "pointer" : "auto",
  };

  const itemColor = {
    display: "flex",
    height: height,
    fontSize: fontSize,
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
          data-tooltip-id={tooltip ? "myBar-tooltip" : ""}
          data-tooltip-content={tooltip ? "50%" : ""}
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
                cursor: tooltip ? "pointer" : "auto",
              }}
              data-tooltip-id={tooltip ? "myBar-tooltip" : ""}
              data-tooltip-content={tooltip ? `${item.name}, ${itemValue}` : ""}
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
