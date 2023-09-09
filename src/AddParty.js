import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { randomColor } from "randomcolor";
import PartyList from "./PartyList";

import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const AddParty = () => {
  const [name, setName] = useState("");
  const [isOverThreshold, setIsOverThreshold] = useState(true);
  const [chosenColor, setChosenColor] = useState(randomColor());
  const { parties, setParties } = useContext(AppContext);
  const [duplicateError, setDuplicateError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [addPartySuccess, setAddPartySuccess] = useState(false);

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
      color: chosenColor,
    };
    console.log(party);

    newParties.push(party);
    setName("");
    setIsOverThreshold(true);
    setParties(newParties);
    setChosenColor(randomColor());
    setDuplicateError(false);
    setEmptyError(false);
    setAddPartySuccess(true);
    setTimeout(() => {
      setAddPartySuccess(false);
    }, 2000);
  };
  const handlePredefined = (item) => {
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
        {
          name: "Bezpartyjni Samorządowcy",
          isOverThreshold: true,
          color: "#000000",
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
    setChosenColor(randomColor());
  };

  return (
    <div className="options__addparty">
      <div className="options__addparty-title">dodaj komitety</div>
      <label className="options__addparty-label">
        <TextField
          color="warning"
          label="Nazwa komitetu"
          hiddenLabel
          variant="outlined"
          className="options__addparty-label__name"
          size="small"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            input: {
              backgroundColor: "#50402923",
              borderRadius: 1,
            },
          }}
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
                sx={{
                  textAlign: "center",
                  fontSize: 13,
                  fontFamily: "MuseoModerno, sans-serif",
                }}
                className="options__addparty-label__threshold-form__typography"
              >
                <p>{`>`}</p>
                <p>próg?</p>
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

      <Alert
        fullWidth
        style={{
          margin: "0 5px",
          backgroundColor: `${
            duplicateError || emptyError
              ? "#9c00008c"
              : addPartySuccess
              ? "#0d9c008c"
              : "#1988e48c"
          }`,
        }}
        variant="filled"
        severity={
          duplicateError || emptyError
            ? "error"
            : addPartySuccess
            ? "success"
            : "info"
        }
      >
        {!(duplicateError || emptyError || addPartySuccess) && (
          <p>
            Wpisz nazwę nowego komitetu, ustal opcje i <strong>dodaj go</strong>
          </p>
        )}
        {duplicateError && (
          <p>
            Komitet o tej nazwie <strong>już istnieje</strong>
          </p>
        )}
        {emptyError && (
          <p>
            Komitet musi <strong>mieć nazwę</strong>
          </p>
        )}
        {addPartySuccess && (
          <p>
            <strong>Komitet dodany!</strong>
          </p>
        )}
      </Alert>

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
