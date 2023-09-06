import React, { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { randomColor } from "randomcolor";
import { Button, ButtonGroup, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

ChartJS.register(ArcElement, Tooltip, Legend);
const District = (props) => {
  const { districts, setDistricts } = useContext(AppContext);
  const [addLocal, setAddLocal] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  const currentDistrict = districts[props.index];

  const handleAddLocalParty = () => {
    setAddLocal(!addLocal);
  };

  const handleSubmitAddLocalParty = (e) => {
    setAddLocal(!addLocal);
    e.preventDefault();
    const newParties = [...currentDistrict.parties];
    console.log(newParties);
    const party = {
      name,
      isOverThreshold: true,
      color: randomColor(),
    };

    newParties.push(party);
    setName("");
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        parties: newParties,
      };
      return updatedDistricts;
    });
  };

  const handleRemove = (index) => {
    const newDistricts = [...districts];
    newDistricts.splice(index, 1);
    setDistricts(newDistricts);
  };

  const handleStart = () => {
    const currentDistrict = districts[props.index];
    const partiesWithResults = currentDistrict.parties.map((party) => ({
      ...party,
      result: party.result !== undefined ? Number(party.result) : 0,
    }));

    const totalMandates = currentDistrict.deputies;

    // Funkcja do przydzielania mandatów
    const distributeSeats = (parties, totalSeats) => {
      const partiesWithSeats = parties.map((party) => ({
        ...party,
        seats: 0,
      }));

      for (let i = 0; i < totalSeats; i++) {
        const adjustedResults = partiesWithSeats.map((party) => ({
          ...party,
          adjustedResult: party.result / (party.seats + 1),
        }));

        const nextMandateParty = adjustedResults.reduce(
          (maxParty, party) =>
            party.adjustedResult > maxParty.adjustedResult ? party : maxParty,
          adjustedResults[0]
        );

        partiesWithSeats.find((party) => party.name === nextMandateParty.name)
          .seats++;
      }

      return partiesWithSeats;
    };

    // Sprawdzenie, czy każda partia ma wynik 0 w results
    const allPartiesHaveZeroResults = partiesWithResults.every(
      (party) => party.result === 0
    );

    // Przydzielanie mandatów tylko jeśli nie wszystkie partie mają wynik 0
    const partiesWithMandates = allPartiesHaveZeroResults
      ? partiesWithResults.map((party) => ({ ...party, seats: 0 }))
      : distributeSeats(partiesWithResults, totalMandates);

    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        finalResult: partiesWithMandates,
        parties: partiesWithResults, // Zachowujemy pierwotne wyniki
        showFinalResult: true,
      };

      return updatedDistricts;
    });

    const chartLabels = partiesWithMandates.map((party) => party.name);
    const chartData = partiesWithMandates.map((party) => party.seats);
    const chartColors = partiesWithMandates.map((party) => party.color);

    setData({
      labels: chartLabels,
      datasets: [
        {
          label: "Wynik",
          data: chartData,
          backgroundColor: chartColors,
          borderColor: chartColors,
        },
      ],
    });

    setAddLocal(false);

    // Wyświetlenie wyników w konsoli
    console.log("Wyniki po przydzieleniu mandatów:");
    console.log(partiesWithMandates);
  };

  const handleResultChange = (index, value) => {
    // Skopiuj partie z tego okręgu
    let currentValue = parseInt(value, 10);

    if (currentValue < 0) currentValue = 0;
    const updatedParties = currentDistrict.parties.map((party) => ({
      ...party,
    }));
    updatedParties[index].result = currentValue;

    // Uaktualnij kontekst z nową listą partii dla tego okręgu
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        parties: updatedParties,
      };
      return updatedDistricts;
    });
  };

  return (
    <div className="districts__element" key={props.index}>
      <div className="districts__element-title">
        <h1>{props.name}</h1>
        <p>
          Mandaty: <span>{props.deputies}</span>, metoda:{" "}
          <span>{props.method === "dhondt" ? "d'Hondta" : "ilościowa"}</span>
        </p>
      </div>
      <div className="districts__element-buttons">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          color="error"
        >
          <Button
            variant="contained"
            startIcon={addLocal ? <CancelIcon /> : <AddCircleOutlinedIcon />}
            color={addLocal ? "warning" : "success"}
            size="small"
            style={{
              textTransform: "lowercase",
              width: 130,
            }}
            onClick={handleAddLocalParty}
          >
            {addLocal ? "nie dodawaj" : "lokalny komitet"}
          </Button>{" "}
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleRemove(props.index)}
          >
            <DeleteForeverIcon color="string" fontSize="medium" />
          </Button>
        </ButtonGroup>
      </div>
      {addLocal ? (
        <label className="districts__element-addlocal">
          <TextField
            color="success"
            label="Nowy komitet"
            hiddenLabel
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              input: {
                backgroundColor: "#50402923",
                borderRadius: 1,
              },
            }}
            style={{ width: 150 }}
          />
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={handleSubmitAddLocalParty}
            style={{ minWidth: 40 }}
          >
            <CheckCircleIcon color="string" fontSize="medium" />
          </Button>
        </label>
      ) : (
        ""
      )}
      <div className="districts__element-list">
        {currentDistrict.parties.map((item, index) => (
          <div className="districts__element-list__item" key={index}>
            <p>{item.name}</p>

            <TextField
              color="info"
              type="number"
              label="wynik"
              InputProps={{
                inputProps: {
                  style: {
                    textAlign: "center",
                    color: "#cccccc",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                input: {
                  backgroundColor: "#d6c93855",
                  borderRadius: 1,
                },
                label: {
                  color: "#cccccc",
                  "&.Mui-focused": {
                    color: "#ffffff",
                    letterSpacing: 1.5,
                  },
                },
              }}
              size="small"
              onChange={(e) => handleResultChange(index, e.target.value)}
              value={item.result}
              variant="outlined"
              style={{ width: 80 }}
            />
          </div>
        ))}
      </div>
      <div className="districts__element-start">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{
            textTransform: "lowercase",
          }}
          onClick={handleStart}
        >
          generuj wyniki
        </Button>
      </div>

      <div className="districts__element-doughnut">
        {currentDistrict.showFinalResult ? (
          <Doughnut
            className="districts__element-doughnut__item"
            data={data}
            style={{ cursor: "pointer" }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    color: "white",
                    letterSpacing: "10px",
                  },
                },
              },
            }}
          ></Doughnut>
        ) : (
          "tutaj wygeneruję wyniki"
        )}
      </div>
    </div>
  );
};

export default District;
