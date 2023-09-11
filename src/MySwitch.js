import { useState } from "react";
import hideSVG from "./img/hide.svg";
import showSVG from "./img/show.svg";

const MySwitch = (props) => {
  const [isChecked, setIsChecked] = useState(props.defaultValue || false);
  const imgDisplay = props.imgDisplay || false;
  const checkedIMG = props.checkedIMG || showSVG;
  const uncheckedIMG = props.uncheckedIMG || hideSVG;
  const thumbDisplay = props.thumbDisplay === false ? false : true;
  const thumbColor = props.thumbColor || "#90c4ff";
  const trackColor = props.trackColor || "#727272bb";
  const trackCheckedColor = props.trackCheckedColor || "#4871bdb9";
  const size = props.size || 1;

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const mySwitchStyle = {
    cursor: "pointer",
    width: size * 80,
    height: size * 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const trackStyle = {
    width: size * 43,
    height: size * 15,
    borderRadius: "10px",
    backgroundColor: isChecked ? trackCheckedColor : trackColor,
    boxShadow:
      "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
  };

  const thumbStyle = {
    width: size * 23,
    height: size * 23,
    borderRadius: "10px",
    backgroundColor: thumbDisplay ? thumbColor : "",
    boxShadow: thumbDisplay
      ? "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
      : "",
    position: "relative",
    top: "0",
    transform: "translateY(-17.3913%)",
    transition: "0.2s",
    left: isChecked ? 20 * size : 0,
  };

  const imgStyle = {
    display: imgDisplay ? "inline" : "none",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "240%",
  };

  return (
    <div style={mySwitchStyle} onClick={handleClick}>
      <div style={trackStyle}>
        <div style={thumbStyle}>
          <img
            style={imgStyle}
            src={isChecked ? checkedIMG : uncheckedIMG}
            alt="thumb"
          />
        </div>
      </div>
    </div>
  );
};

export default MySwitch;
