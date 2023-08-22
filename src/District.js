import React, { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { randomColor } from "randomcolor";

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
    const updatedParties = currentDistrict.parties.map((party) => ({
      ...party,
    }));
    updatedParties[index].result = value;

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
  const handleResultMeasure = () => {
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      const currentMeasure = updatedDistricts[props.index].measure;

      // Zmień miarę na przeciwną wartość
      const newMeasure =
        currentMeasure === "percentage" ? "number" : "percentage";

      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        measure: newMeasure,
      };
      return updatedDistricts;
    });
  };

  return (
    <div key={props.index}>
      {props.name}, liczba mandatów: {props.deputies}, metoda {props.method}
      <button onClick={() => handleRemove(props.index)}>Usuń okręg</button>
      <button onClick={handleAddLocalParty}>
        {addLocal ? "nie dodawaj" : "dodaj lokalny komitet"}
      </button>
      <button onClick={handleResultMeasure}>
        podaj wynik w{" "}
        {currentDistrict.measure === "percentage"
          ? "procentach"
          : "liczbach bezwzględnych"}
      </button>
      {currentDistrict.parties.map((item, index) => (
        <div key={index}>
          {item.name}, wynik:{" "}
          <input
            type="number"
            value={item.result}
            onChange={(e) => handleResultChange(index, e.target.value)}
          />
        </div>
      ))}
      {addLocal ? (
        <label className="">
          <input
            type="text"
            placeholder="Nazwa partii"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmitAddLocalParty}>Dodaj</button>
        </label>
      ) : (
        ""
      )}
      <br />
      <button onClick={handleStart}>generuj wyniki</button>
      <br />
      {currentDistrict.showFinalResult ? (
        <div style={{ width: "200px", height: "200px" }}>
          <Doughnut
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
          ></Doughnut>
        </div>
      ) : (
        "tutaj wygeneruję wyniki"
      )}
    </div>
  );
};

export default District;
