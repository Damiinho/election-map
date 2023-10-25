import { Button } from "@mui/material";

const PredefinedAddDistrict = (props) => {
  return (
    <div className="adddistrict__main-predefined">
      <p
        style={{
          color: "white",
          textShadow: "1px 1px 10px black",
          fontSize: 15,
          textAlign: "center",
          marginBottom: 5,
          backgroundColor: "#a8a8a877",
        }}
      >
        # szablony okręgów
      </p>
      <div className="adddistrict__main-predefined__buttons">
        <Button
          style={{
            backgroundColor: "#dddddd",
            color: "black",
            padding: 20,
            gap: 20,
            fontSize: 12,
          }}
          onClick={() => props.handlePredefined("2023Poland")}
        >
          sejm – okręgi
          <div
            style={{
              width: 25,
              height: 25,
              borderRadius: "10%",
              // border: "1px solid black",
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
              background:
                "linear-gradient(rgba(255, 255, 255, 1) 50%, rgba(255, 25, 0, 1) 50%)",
            }}
          ></div>
        </Button>
        <Button
          style={{
            backgroundColor: "#dddddd",
            color: "black",
            padding: 20,
            gap: 20,
            fontSize: 12,
          }}
          onClick={() => props.handlePredefined("test")}
        >
          test
          <div
            style={{
              width: 25,
              height: 25,
              borderRadius: "10%",
              // border: "1px solid black",
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
              background:
                "linear-gradient(rgba(255, 0, 255, 1) 50%, rgba(0, 25, 250, 1) 50%)",
            }}
          ></div>
        </Button>
      </div>
    </div>
  );
};

export default PredefinedAddDistrict;
