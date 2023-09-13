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
import AddPartyPredefined from "./AddPartyPredefined";
import MySwitch from "./MySwitch";

const AddParty = () => {
  const [name, setName] = useState("");
  const [isOverThreshold, setIsOverThreshold] = useState(true);
  const [chosenColor, setChosenColor] = useState(randomColor());
  const { parties, setParties } = useContext(AppContext);
  const [duplicateError, setDuplicateError] = useState(false);
  const { showAddParty, setShowAddParty } = useContext(AppContext);
  const [emptyError, setEmptyError] = useState(false);
  const [addPartySuccess, setAddPartySuccess] = useState(false);

  const handleSubmit = (e) => {
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
          color: "#175aa7",
        },
        {
          name: "Koalicja Obywatelska",
          isOverThreshold: true,
          color: "#f9641d",
        },
        {
          name: "Konfederacja",
          isOverThreshold: true,
          color: "#1a2e4d",
        },
        {
          name: "Trzecia Droga",
          isOverThreshold: true,
          color: "#96cc22",
        },
        {
          name: "Lewica",
          isOverThreshold: true,
          color: "#e0002a",
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

  const handleShowAddParty = () => {
    setShowAddParty(!showAddParty);
  };

  return (
    <div className="addparty">
      <div className="addparty__title">
        1. dodaj komitety
        <div className="addparty__title__side">
          <MySwitch
            onClick={handleShowAddParty}
            imgDisplay
            value={showAddParty}
            thumbDisplay={false}
          />
        </div>
      </div>
      <div className={`addparty__main ${showAddParty ? "" : "hide"}`}>
        <div>
          <label className="addparty__main-label">
            <TextField
              color="warning"
              label="Nazwa komitetu"
              hiddenLabel
              variant="outlined"
              className="addparty__main-label__name"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              sx={{
                input: {
                  backgroundColor: "#50402923",
                  borderRadius: 1,
                },
              }}
            />

            <label
              label="overThreshold"
              className="addparty__main-label__threshold"
            >
              <FormControlLabel
                className="addparty__label-threshold__form"
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
                    className="addparty__main-label__threshold-form__typography"
                  >
                    <span>{`>`}</span>
                    <br />
                    <span>próg?</span>
                  </Typography>
                }
                labelPlacement="start"
              />
            </label>
            <div className="addparty__main-label__color">
              <input
                type="color"
                value={chosenColor}
                onChange={(e) => setChosenColor(e.target.value)}
              />
              <span>kolor</span>
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
              <>
                Wpisz nazwę nowego komitetu, ustal opcje i{" "}
                <strong>dodaj go</strong>
              </>
            )}
            {duplicateError && (
              <>
                Komitet o tej nazwie <strong>już istnieje</strong>
              </>
            )}
            {emptyError && (
              <>
                Komitet musi <strong>mieć nazwę</strong>
              </>
            )}
            {addPartySuccess && (
              <>
                <strong>Komitet dodany!</strong>
              </>
            )}
          </Alert>

          <AddPartyPredefined click={handlePredefined} />
          <PartyList />
        </div>
      </div>
    </div>
  );
};

export default AddParty;
