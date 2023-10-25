import { Alert } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";

const AlertAddDistrict = (props) => {
  const { windowWidth } = useContext(AppContext);
  return (
    <Alert
      style={{
        borderRadius: 0,
        boxShadow:
          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        margin: windowWidth > 600 ? "0 5px 5px" : "0",
        backgroundColor: `${
          props.error
            ? "#9c00008c"
            : props.addDistrictSuccess
            ? "#0d9c008c"
            : "#1988e48c"
        }`,
      }}
      variant="filled"
      severity={
        props.error ? "error" : props.addDistrictSuccess ? "success" : "info"
      }
    >
      {!props.error && !props.addDistrictSuccess && (
        <p>
          Wpisz nazwę nowego okręgu, ustal opcje i <strong>dodaj go</strong>
        </p>
      )}
      {props.error && (
        <p>
          Okręg <strong>musi mieć nazwę i ustaloną liczbę mandatów</strong>
        </p>
      )}
      {props.addDistrictSuccess && (
        <p>
          <strong>Okręg dodany!</strong>
        </p>
      )}
    </Alert>
  );
};

export default AlertAddDistrict;
