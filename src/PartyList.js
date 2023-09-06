import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const PartyList = () => {
  const { parties, setParties } = useContext(AppContext);
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

  return (
    <div className="options__list">
      {parties.length > 0 ? (
        <>
          <p className="options__list-title">Lista wybranych komitetów:</p>

          <ul className="options__list-ul">
            <div className="options__list-ul-element legend">
              <div>nazwa</div>
              <div>{`> próg`}</div>
              <div>kolor</div>
            </div>
            {parties.map((item, index) => (
              <li
                className={`options__list-ul-element ${
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
                <div
                  className="options__list-ul-element__threshold"
                  onClick={() => handleThreshold(index)}
                >
                  {item.isOverThreshold ? (
                    <CheckCircleIcon color="success" fontSize="medium" />
                  ) : (
                    <CancelIcon color="error" fontSize="medium" />
                  )}
                </div>
                <input
                  className="options__list-ul-element__color"
                  type="color"
                  value={item.color}
                  onChange={(e) => handleColor(index, e.target.value)}
                />
                <div className="options__list-ul-element__delete">
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
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PartyList;
