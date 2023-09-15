const MySmallInfoBox = (props) => {
  const backgroundTop = props.backgroundTop || "#000";
  const backgroundBottom = props.backgroundBottom || "#fff";
  const colorTop = props.colorTop || "#fff";
  const colorBottom = props.colorBottom || "#000";

  const fontSizeTop = props.fontSizeTop || 15;
  const fontSizeBottom = props.fontSizeBottom || 25;
  const paddingTop = props.paddingTop || "5px 0 5px 0";
  const paddingBottom = props.paddingBottom || 0;
  const radius = props.radius || "7px";
  const allWidth = props.allWidth || 120;
  return (
    <div
      className="presentation__description-item"
      style={{
        marginTop: 10,
        width: allWidth,
        backgroundColor: backgroundBottom,
        color: colorBottom,
        borderRadius: radius,
        boxShadow:
          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        fontFamily: "Overpass, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="presentation__description-item__txt"
        style={{
          width: "100%",
          color: colorTop,
          backgroundColor: backgroundTop,
          borderRadius: `${radius} ${radius} 0 0`,
          textAlign: "center",
          fontSize: fontSizeTop,
          padding: paddingTop,
        }}
      >
        {props.txt}
      </div>
      <div
        className="presentation__description-item__value"
        style={{ fontSize: fontSizeBottom, padding: paddingBottom }}
      >
        {props.value}
      </div>
    </div>
  );
};

export default MySmallInfoBox;
