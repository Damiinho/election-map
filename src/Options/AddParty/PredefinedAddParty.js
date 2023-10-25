import { Button } from "@mui/material";

const PredefinedAddParty = (props) => {
  return (
    <div className="addparty__main-predefined">
      <p
        style={{
          color: "white",
          textShadow: "1px 1px 10px black",
          fontSize: 20,
        }}
      >
        # szablony
      </p>

      <Button
        style={{
          backgroundColor: "#dddddd",
          color: "black",
          padding: 20,
          gap: 20,
          fontSize: 12,
        }}
        onClick={() => props.click("2023Poland")}
      >
        Polska
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
        onClick={() => props.click("2021Germany")}
      >
        Niemcy
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: "10%",
            // border: "1px solid black",
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
            background:
              "linear-gradient(rgb(0, 0, 0) 33.3%,rgba(255, 25, 0, 1) 33.3%,rgba(255, 25, 0, 1) 66.6%,rgb(255, 255, 0) 66.6%)",
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
        onClick={() => props.click("2022Hungary")}
      >
        Węgry
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: "10%",
            // border: "1px solid black",
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
            background:
              "linear-gradient(rgb(202, 36, 61) 33.3%,rgb(255, 255, 255) 33.3%,rgb(255, 255, 255) 66.6%,rgb(73, 112, 81) 66.6%)",
          }}
        ></div>
      </Button>
    </div>
  );
};

export default PredefinedAddParty;
