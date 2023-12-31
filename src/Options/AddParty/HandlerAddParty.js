import { Alert, Button, TextField } from "@mui/material";
import PredefinedAddParty from "./PredefinedAddParty";
import { useContext, useState } from "react";
import randomColor from "randomcolor";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";
import MyDoneSwitch from "../../Components/MyDoneSwitch";

const HandlerAddParty = () => {
  const { parties, setParties } = useContext(DataContext);
  const { windowWidth } = useContext(AppContext);
  const [name, setName] = useState("");
  const [isOverThreshold, setIsOverThreshold] = useState(true);
  const [chosenColor, setChosenColor] = useState(randomColor());
  const [duplicateError, setDuplicateError] = useState(false);
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
          isOverThreshold: false,
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
    } else if (item === "2022Hungary") {
      predefinedParties = [
        {
          name: "Fidesz – KDNP",
          isOverThreshold: true,
          color: "#fa681e",
        },
        {
          name: "Zjednoczeni dla Węgier",
          isOverThreshold: true,
          color: "#54b6a2",
        },
        {
          name: "Ruch Naszej Ojczyzny",
          isOverThreshold: true,
          color: "#698d24",
        },
        {
          name: "Węgierska Partia Psa o Dwóch Ogonach",
          isOverThreshold: false,
          color: "#808080",
        },
        {
          name: "Samorząd Krajowy Niemców",
          isOverThreshold: true,
          color: "#1547a9",
        },
      ];
    }

    setParties(predefinedParties);

    setName("");
    setIsOverThreshold(true);
    setChosenColor(randomColor());
  };

  return (
    <div className="addparty__main-handler">
      <div className="addparty__main-label">
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

        <div label="overThreshold" className="addparty__main-label__threshold">
          {/* <FormControlLabel
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
          /> */}
          <span>{">"} próg</span>
          <MyDoneSwitch
            onChange={(e) => setIsOverThreshold(e.target.checked)}
            checked={isOverThreshold}
          />
        </div>
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
          style={{ textTransform: "lowercase", margin: "0 auto" }}
          onClick={handleSubmit}
        >
          dodaj
        </Button>
      </div>

      <Alert
        style={{
          borderRadius: 0,
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          margin: windowWidth > 600 ? "0 5px 5px" : "0",
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
            Wpisz nazwę nowego komitetu, ustal opcje i <strong>dodaj go</strong>
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

      <PredefinedAddParty click={handlePredefined} />
    </div>
  );
};

export default HandlerAddParty;
