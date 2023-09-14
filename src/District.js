import React, { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { randomColor } from "randomcolor";
import StartButton from "./District/StartButton";
import DoughnutChart from "./District/DoughnutChart";
import PartyItem from "./District/PartyItem";
import AddLocalParty from "./District/AddLocalParty";
import TopButtons from "./District/TopButtons";
import DoughnutDescription from "./District/DoughnutDescription";
import DistrictTitle from "./District/DistrictTitle";
import MyBar from "./MyBar";

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

  return (
    <div
      className={`list__element ${
        currentDistrict.showFinalResult ? "withresults" : ""
      }`}
      key={props.index}
    >
      <DistrictTitle data={props} />
      <TopButtons
        addLocal={addLocal}
        showFinalResult={currentDistrict.showFinalResult}
        handleAddLocalParty={handleAddLocalParty}
        handleRemove={handleRemove}
      />
      {addLocal && (
        <AddLocalParty
          name={name}
          setName={setName}
          handleSubmitAddLocalParty={handleSubmitAddLocalParty}
        />
      )}

      {!currentDistrict.showFinalResult && (
        <div className="list__element-parties">
          {currentDistrict.parties.map((item, index) => (
            <PartyItem
              key={index}
              index={index}
              item={item}
              currentResults={currentResults}
              handleLocalDelete={handleLocalDelete}
              handleResultChange={handleResultChange}
            />
          ))}
        </div>
      )}

      <StartButton
        currentDistrict={currentDistrict}
        handleRegenerate={handleRegenerate}
        handleStart={handleStart}
      />

      {currentDistrict.showFinalResult && (
        <>
          <div className="list__element-doughnut">
            <DoughnutDescription
              districtIndex={props.index}
              finalResult={currentDistrict.finalResult}
            />
            <DoughnutChart data={currentDistrict.forChart} />
          </div>

          <div className="list__element-bars">
            <MyBar
              result={currentDistrict.finalResult}
              value="seats"
              name="Liczba mandatów z listy"
            />
            {/* <MyBar result={currentDistrict.finalResult} value="seats" /> */}
            <MyBar
              result={currentDistrict.finalResult}
              value="result"
              name="Wynik procentowy na liscie"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default District;
