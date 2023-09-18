import MySwitch from "./MySwitch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

const Header = () => {
  const { advancedVersion, setAdvancedVersion } = useContext(AppContext);

  return (
    <div className="App__header">
      kalkulator wyborczy
      <div className="App__header-side">
        <MySwitch
          onClick={() => {
            setAdvancedVersion(!advancedVersion);
          }}
          checkedObject={
            <CheckCircleIcon
              style={{
                width: "120%",
                height: "120%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "green",
              }}
            />
          }
          uncheckedObject={
            <CancelIcon
              style={{
                width: "120%",
                height: "120%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "gray",
              }}
            />
          }
          trackColor={"#d3d3d3"}
          trackCheckedColor={"#b6ddb8"}
          thumbDisplay={false}
          size={1}
          objectDisplay
          value={advancedVersion}
        />
        <span>wersja zaawansowana</span>
      </div>
    </div>
  );
};

export default Header;
