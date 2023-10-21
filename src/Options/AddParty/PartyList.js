import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MySwitch from "../../Components/MySwitch";
import { DataContext } from "../../contexts/DataContext";

const PartyList = () => {
  const { showAddPartyList, setShowAddPartyList } = useContext(AppContext);
  const { parties, setParties } = useContext(DataContext);
  const [doubleClickedIndex, setdoubleClickedIndex] = useState("");
  const [newPartyName, setNewPartyName] = useState("");

  const handleRemove = (index) => {
    const newParties = [...parties];
    newParties.splice(index, 1);
    setParties(newParties);
  };

  const handleThreshold = (index) => {
    const newParties = [...parties];
    newParties[index].isOverThreshold = !newParties[index].isOverThreshold;
    setParties(newParties);
  };

  const handleColor = (index, color) => {
    const newParties = [...parties];
    newParties[index].color = color;
    setParties(newParties);
  };

  const handleDoubleClickName = (index) => {
    setdoubleClickedIndex(index);
    setNewPartyName(parties[index].name);
  };
  const handleEnterName = (index) => {
    if (newPartyName === "") {
      return;
    } else if (newPartyName === parties[index].name) {
      setdoubleClickedIndex("");
      return;
    } else if (parties.find((party) => party.name === newPartyName)) {
      return;
    }
    const newParties = [...parties];
    newParties[index].name = newPartyName;
    setdoubleClickedIndex("");
    setParties(newParties);
  };

  const handleHide = () => {
    setShowAddPartyList(!showAddPartyList);
  };

  return (
    <div className={`addparty__main-list `}>
      {parties.length > 0 ? (
        <>
          <div className={`addparty__main-list__title`} onClick={handleHide}>
            <span># lista komitetów ogólnych</span>
            <MySwitch
              onClick={handleHide}
              imgDisplay
              value={showAddPartyList}
              thumbDisplay={false}
            />
          </div>

          <ul
            className={`addparty__main-list__ul ${
              !showAddPartyList ? "hide" : ""
            }`}
          >
            <div>
              <div className="addparty__main-list__ul-element legend">
                <div>nazwa</div>
                <div>{`> próg`}</div>
                <div>kolor</div>
              </div>
              {parties.map((item, index) => (
                <li
                  className={`addparty__main-list__ul-element ${
                    doubleClickedIndex === index ? "active" : ""
                  }`}
                  key={index}
                >
                  {doubleClickedIndex === index ? (
                    <TextField
                      color="warning"
                      hiddenLabel
                      variant="standard"
                      size="small"
                      fullWidth
                      value={newPartyName}
                      onChange={(e) => setNewPartyName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleEnterName(index);
                        }
                      }}
                    />
                  ) : (
                    <div onDoubleClick={() => handleDoubleClickName(index)}>
                      {item.name}
                    </div>
                  )}
                  <div className="addparty__main-list__ul-element__threshold">
                    <MySwitch
                      onClick={() => handleThreshold(index)}
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
                            color: "red",
                          }}
                        />
                      }
                      trackColor={"#d3d3d3"}
                      trackCheckedColor={"#b6ddb8"}
                      thumbDisplay={false}
                      size={1}
                      objectDisplay
                      value={parties[index].isOverThreshold}
                    />
                  </div>
                  <input
                    className="addparty__main-list__ul-element__color"
                    type="color"
                    value={item.color}
                    onChange={(e) => handleColor(index, e.target.value)}
                  />
                  <div className="addparty__main-list__ul-element__delete">
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      style={{ minWidth: "40px", height: "30px", padding: "0" }}
                      onClick={() => handleRemove(index)}
                    >
                      <DeleteForeverIcon color="string" fontSize="medium" />
                    </Button>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PartyList;
