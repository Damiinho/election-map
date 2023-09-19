import { useState } from "react";
import hideSVG from "../img/hide.svg";
import showSVG from "../img/show.svg";

const MySwitch = (props) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const animating = props.animating || false;
  const imgDisplay = props.imgDisplay || false;
  const checkedIMG = props.checkedIMG || showSVG;
  const uncheckedIMG = props.uncheckedIMG || hideSVG;
  const objectDisplay = props.objectDisplay || false;
  const checkedObject = props.checkedObject || "";
  const uncheckedObject = props.uncheckedObject || "";
  const thumbDisplay = props.thumbDisplay === false ? false : true;
  const thumbColor = props.thumbColor || "#90c4ff";
  const trackColor = props.trackColor || "#727272bb";
  const trackCheckedColor = props.trackCheckedColor || "#4871bdb9";
  const borderRounded = props.borderRounded || 10;
  const sizeIMG = props.sizeIMG || 1;
  const size = props.size || 1;
  const value =
    props.value === true || props.value === false ? props.value : isChecked;

  const handleClick = () => {
    if (animating) {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsChecked(!isChecked);
          setIsAnimating(false);
        }, 50); // 0.5 sekundy (500ms) opóźnienia, aby uzyskać efekt animacji
      }
    }
    setIsChecked(!isChecked);
    if (props.onClick) {
      props.onClick();
    }
  };

  const mySwitchStyle = {
    borderRadius: borderRounded,
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
    borderRadius: borderRounded,
    backgroundColor: value ? trackCheckedColor : trackColor,
    boxShadow: isAnimating
      ? "0px 3px 1px -8px rgba(0, 0, 0, 0.8), 0px 2px 2px 0px rgba(0, 0, 0, 0.56), 0px 1px 20px 0px rgba(0, 0, 0, 0.48)"
      : value
      ? "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
      : "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
    transition: "boxShadow 0.5s",
    position: "relative",
  };

  const thumbStyle = {
    width: size * 23,
    height: size * 23,
    borderRadius: borderRounded,
    backgroundColor: thumbDisplay ? thumbColor : "",
    boxShadow: thumbDisplay
      ? "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
      : "",
    position: "absolute",
    top: `-${4 * size}px`,
    transition: "0.2s",
    left: value ? 20 * size : 0,
  };

  const imgStyle = {
    display: imgDisplay ? "inline" : "none",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${240 * sizeIMG}%`,
  };

  return (
    <div style={mySwitchStyle} onClick={handleClick}>
      <div style={trackStyle}>
        <div style={thumbStyle}>
          <img
            style={imgStyle}
            src={value ? checkedIMG : uncheckedIMG}
            alt="thumb"
          />
          {objectDisplay ? (value ? checkedObject : uncheckedObject) : ""}
        </div>
      </div>
    </div>
  );
};

export default MySwitch;
