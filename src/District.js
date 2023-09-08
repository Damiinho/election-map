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
import ReplayIcon from "@mui/icons-material/Replay";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

ChartJS.register(ArcElement, Tooltip, Legend);
const District = (props) => {
  const { districts, setDistricts } = useContext(AppContext);
  const [addLocal, setAddLocal] = useState(false);
  const [name, setName] = useState("");
  const [currentResults, setCurrentResults] = useState(
    Array(districts[props.index].parties.length).fill(0)
  );

  const currentDistrict = districts[props.index];

  const handleAddLocalParty = () => {
    setAddLocal(!addLocal);
  };

  const handleLocalDelete = (index, districtIndex) => {
    const newDistricts = [...districts];
    newDistricts[districtIndex].parties.splice(index, 1);
    setDistricts(newDistricts);
  };

  const handleSubmitAddLocalParty = (e) => {
    if (
      name === "" ||
      currentDistrict.parties.find((party) => party.name === name)
    ) {
      return;
    }

    setAddLocal(!addLocal);
    e.preventDefault();

    const newParties = [...currentDistrict.parties];
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

  const handleRemove = () => {
    const newDistricts = [...districts];
    newDistricts.splice(props.index, 1);
    setDistricts(newDistricts);
  };

  const handleRegenerate = () => {
    currentDistrict.showFinalResult = false;
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = currentDistrict;

      return updatedDistricts;
    });
    const results = districts[props.index].parties.map((party) => party.result);
    setCurrentResults(results);
  };

  const handleStart = () => {
    const currentDistrict = districts[props.index];
    const partiesWithResults = currentDistrict.parties.map((party, index) => ({
      ...party,
      result:
        currentResults[index] !== undefined ? Number(currentResults[index]) : 0,
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

    const booleanFinalResult = () => {
      if (partiesWithResults.every((party) => party.result === 0)) {
        return false;
      } else return true;
    };

    const chartLabels = partiesWithMandates.map((party) => party.name);
    const chartData = partiesWithMandates.map((party) => party.seats);
    const chartColors = partiesWithMandates.map((party) => party.color);

    const newForChart = {
      labels: chartLabels,
      datasets: [
        {
          label: "Wynik",
          data: chartData,
          backgroundColor: chartColors,
          borderColor: chartColors,
        },
      ],
    };

    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        finalResult: partiesWithMandates,
        parties: partiesWithResults, // Zachowujemy pierwotne wyniki
        showFinalResult: booleanFinalResult(),
        forChart: newForChart,
      };

      return updatedDistricts;
    });
    setCurrentResults(Array(props.deputies).fill(0));
    setAddLocal(false);
  };

  const handleResultChange = (index, value) => {
    let currentValue = value;

    if (currentValue < 0) currentValue = 0;
    const updatedParties = currentDistrict.parties.map((party) => ({
      ...party,
    }));
    updatedParties[index].result = currentValue;
    const newResults = [...currentResults];
    newResults[index] = currentValue;
    setCurrentResults(newResults);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div
      className={`districts__element ${
        currentDistrict.showFinalResult ? "withresults" : ""
      }`}
      key={props.index}
    >
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
            onClick={handleRemove}
          >
            <DeleteForeverIcon color="string" fontSize="medium" />
          </Button>
        </ButtonGroup>
      </div>
      {addLocal ? (
        <label className="districts__element-addlocal">
          <TextField
            color="warning"
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
      <div
        className={`districts__element-list ${
          currentDistrict.showFinalResult ? "hide" : ""
        }`}
      >
        {currentDistrict.parties.map((item, index) => (
          <div className="districts__element-list__item" key={index}>
            <p>{item.name}</p>
            <div className="districts__element-list__item-handle">
              <Button
                variant="contained"
                size="medium"
                color="error"
                sx={{
                  minWidth: "20px",
                  width: "20px",
                  height: "30px",
                  minHeight: "30px",
                  "&:hover": {
                    opacity: 1,
                  },
                  opacity: 0.6,
                }}
                onClick={() => handleLocalDelete(index, props.index)}
              >
                <CancelIcon />
              </Button>
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
                value={currentResults[index]}
                variant="outlined"
                style={{ width: 80 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="districts__element-start">
        <Button
          variant="contained"
          color={`${currentDistrict.showFinalResult ? "warning" : "secondary"}`}
          size="small"
          style={{
            textTransform: "lowercase",
          }}
          onClick={
            currentDistrict.showFinalResult ? handleRegenerate : handleStart
          }
          startIcon={
            currentDistrict.showFinalResult ? (
              <ReplayIcon />
            ) : (
              <PlayCircleOutlineIcon />
            )
          }
        >
          {`${
            currentDistrict.showFinalResult
              ? "popraw wyniki"
              : "generuj mandaty"
          }`}
        </Button>
      </div>

      {currentDistrict.showFinalResult ? (
        <div className="districts__element-doughnut">
          <div className="districts__element-doughnut__description">
            {currentDistrict.finalResult.map((item) => (
              <div>
                {item.name}, wynik: {item.result}, miejsca: {item.seats}
              </div>
            ))}
          </div>

          <div className="districts__element-doughnut__item">
            <Doughnut
              data={currentDistrict.forChart}
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
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default District;
