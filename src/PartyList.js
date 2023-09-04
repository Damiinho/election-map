import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const PartyList = () => {
  const { parties, setParties } = useContext(AppContext);
  const handleRemove = (index) => {
    const newParties = [...parties];
    newParties.splice(index, 1);
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
              <li className="options__list-ul-element" key={index}>
                <div>{item.name}</div>
                <div className="options__list-ul-element__threshold">
                  {item.isOverThreshold ? (
                    <CheckCircleIcon color="success" fontSize="medium" />
                  ) : (
                    <CancelIcon color="error" fontSize="medium" />
                  )}
                </div>
                <div
                  style={{ backgroundColor: item.color }}
                  className="options__list-ul-element__color"
                ></div>
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
