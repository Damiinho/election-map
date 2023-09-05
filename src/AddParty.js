import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { randomColor } from "randomcolor";
import PartyList from "./PartyList";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const AddParty = () => {
  const [name, setName] = useState("");
  const [isOverThreshold, setIsOverThreshold] = useState(true);
  const [chosenColor, setChosenColor] = useState("");
  const { parties, setParties } = useContext(AppContext);
  const [duplicateError, setDuplicateError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDuplicateError(false);
    setEmptyError(false);

    const existingParty = parties.find((party) => party.name === name);
    if (existingParty) {
      setDuplicateError(true);
      return;
    }
    if (name === "") {
      setEmptyError(true);
      return;
    }

    const newParties = [...parties];
    const party = {
      name,
      isOverThreshold,
      color: chosenColor === "" ? randomColor() : chosenColor,
    };
    console.log(party);

    newParties.push(party);
    setName("");
    setIsOverThreshold(true);
    setParties(newParties);
    setChosenColor("");
    setDuplicateError(false);
    setEmptyError(false);
  };
  const handlePredefined = (item) => {
    console.log("wybrano wybory 2023");

    setDuplicateError(false);
    setEmptyError(false);
    let predefinedParties = [];
    if (item === "2023Poland") {
      predefinedParties = [
        {
          name: "Prawo i Sprawiedliwość",
          isOverThreshold: true,
          color: "#0008ff",
        },
        {
          name: "Koalicja Obywatelska",
          isOverThreshold: true,
          color: "#e08300",
        },
        {
          name: "Konfederacja",
          isOverThreshold: true,
          color: "#1e1c82",
        },
        {
          name: "Trzecia Droga",
          isOverThreshold: true,
          color: "#18af0d",
        },
        {
          name: "Lewica",
          isOverThreshold: true,
          color: "#d60000",
        },
      ];
    } else if (item === "2021Germany") {
      predefinedParties = [
        {
          name: "CDU/CSU",
          isOverThreshold: true,
          color: "#000000",
        },
        {
          name: "SPD",
          isOverThreshold: true,
          color: "#de001d",
        },
        {
          name: "AfD",
          isOverThreshold: true,
          color: "#289ede",
        },
        {
          name: "FDP",
          isOverThreshold: true,
          color: "#fded2e",
        },
        {
          name: "Linke",
          isOverThreshold: true,
          color: "#bb2c75",
        },
        {
          name: "Grüne",
          isOverThreshold: true,
          color: "#66a134",
        },
      ];
    }

    setParties(predefinedParties);

    setName("");
    setIsOverThreshold(true);
    setChosenColor("");
  };

  return (
    <div className="options__addparty">
      <div className="options__addparty-title">Dodaj komitety:</div>
      <label className="options__addparty-label">
        <TextField
          color="warning"
          label="Nazwa partii"
          hiddenLabel
          variant="outlined"
          className="options__addparty-label__name"
          size="small"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label
          label="overThreshold"
          className="options__addparty-label__threshold"
        >
          <FormControlLabel
            className="options__addparty-label__threshold-form"
            control={
              <Checkbox
                checked={isOverThreshold}
                onChange={(e) => setIsOverThreshold(e.target.checked)}
                color="success"
              />
            }
            label={
              <Typography
                sx={{ fontSize: 10, fontFamily: "MuseoModerno, sans-serif" }}
                className="options__addparty-label__threshold-form__typography"
              >
                Uwzględnić przy podziale mandatów?
              </Typography>
            }
            labelPlacement="start"
          />
        </label>
        <div className="options__addparty-label__color">
          <input
            type="color"
            value={chosenColor}
            onChange={(e) => setChosenColor(e.target.value)}
          />
          <p>kolor</p>
        </div>
        <Button
          variant="contained"
          color="success"
          size="small"
          style={{ textTransform: "lowercase" }}
          onClick={handleSubmit}
        >
          dodaj
        </Button>
      </label>
      {duplicateError && <p>Partia o tej nazwie już istnieje.</p>}
      {emptyError && <p>Partia musi mieć nazwę.</p>}
      <div className="options__addparty-predefined">
        <p>Predefiniowane:</p>
        <button
          className="electionPoland"
          onClick={() => handlePredefined("2023Poland")}
        >
          <p>wybory 2023</p>
          <p>sejm</p>
        </button>
        <button
          className="electionGermany"
          onClick={() => handlePredefined("2021Germany")}
        >
          <p>wybory 2021</p>
          <p>Niemcy</p>
        </button>
      </div>
      <PartyList />
    </div>
  );
};

export default AddParty;
