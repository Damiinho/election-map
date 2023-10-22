import React, { useContext, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { randomColor } from "randomcolor";
import StartButton from "./District/StartButton";
import DoughnutChart from "./District/DoughnutChart";
import PartyItem from "./District/PartyItem";
import AddLocalParty from "./District/AddLocalParty";
import TopButtons from "./District/TopButtons";
import DoughnutDescription from "./District/DoughnutDescription";
import DistrictTitle from "./District/DistrictTitle";
import MyBar from "../Components/MyBar";
import { AppContext } from "../contexts/AppContext";
import { DataContext } from "../contexts/DataContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const District = (props) => {
  const { setStrictSejm, regenerateAllFlag, startAllFlag } =
    useContext(AppContext);
  const { districts, setDistricts, parties } = useContext(DataContext);
  const [addLocal, setAddLocal] = useState(false);
  const [name, setName] = useState("");
  const [currentResults, setCurrentResults] = useState(
    Array(districts[props.index].parties.length).fill(0)
  );

  const currentDistrict = districts[props.index];
  useEffect(() => {
    const newDistricts = [...districts];
    newDistricts[props.index].parties = [
      ...parties,
      ...newDistricts[props.index].localParties,
    ];
    setDistricts(newDistricts);
  }, [parties, districts, props.index, setDistricts]);

  const handleAddLocalParty = () => {
    setAddLocal(!addLocal);
  };
  useEffect(() => {
    if (regenerateAllFlag === true) {
      const results = currentDistrict.parties.map((party) => {
        const finalParty = currentDistrict.finalResult.find(
          (finalParty) => finalParty.name === party.name
        );
        return finalParty ? finalParty.result : null;
      });
      setCurrentResults(results);
    }
  }, [regenerateAllFlag, currentDistrict]);

  const handleLocalDelete = (districtIndex, name) => {
    const newDistricts = [...districts];
    newDistricts[districtIndex].localParties = newDistricts[
      districtIndex
    ].localParties.filter((party) => party.name !== name);
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

    const newLocalParties = [...currentDistrict.localParties];
    const party = {
      name,
      isOverThreshold: true,
      color: randomColor(),
      deletable: true,
    };

    newLocalParties.push(party);

    const newCurrentResults = [...currentResults];
    newCurrentResults[currentResults.length] = 0;
    setCurrentResults(newCurrentResults);
    setName("");
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = {
        ...updatedDistricts[props.index],
        localParties: newLocalParties,
      };
      return updatedDistricts;
    });
  };

  const handleRemove = () => {
    const newDistricts = [...districts];
    newDistricts.splice(props.index, 1);
    setDistricts(newDistricts);
    setStrictSejm(false);
  };

  const handleRegenerate = () => {
    currentDistrict.showFinalResult = false;
    setDistricts((prevDistricts) => {
      const updatedDistricts = [...prevDistricts];
      updatedDistricts[props.index] = currentDistrict;

      return updatedDistricts;
    });
    const results = currentDistrict.parties.map((party) => {
      const finalParty = currentDistrict.finalResult.find(
        (finalParty) => finalParty.name === party.name
      );
      return finalParty ? finalParty.result : null;
    });
    setCurrentResults(results);
  };

  useEffect(() => {
    const results = currentDistrict.parties.map((party) => {
      const finalParty = currentDistrict.finalResult.find(
        (finalParty) => finalParty.name === party.name
      );
      return finalParty ? finalParty.result : null;
    });
    setCurrentResults(results);
  }, [regenerateAllFlag, currentDistrict]);

  const handleStart = () => {
    const partiesWithResults = currentDistrict.parties.map((party, index) => ({
      ...party,
      result:
        currentResults[index] !== undefined ? Number(currentResults[index]) : 0,
    }));

    const totalMandates = currentDistrict.deputies;

    const eligibleParties = partiesWithResults.filter(
      (party) => party.isOverThreshold
    );

    // Funkcja do przydzielania mandatów
    const distributeSeats = (parties, totalSeats) => {
      if (eligibleParties.length === 0) {
        // Żadna z partii nie przekroczyła progu wyborczego, więc nic się nie dzieje
        return parties.map((party) => ({ ...party, seats: 0 }));
      }

      const partiesWithSeats = eligibleParties.map((party) => ({
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
      (party) => party.result === 0 || isNaN(party.result)
    );
    if (allPartiesHaveZeroResults || eligibleParties.length === 0) {
      return;
    }

    // Przydzielanie mandatów tylko jeśli nie wszystkie partie mają wyn ik 0
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
          label: "miejsca",
          data: chartData,
          backgroundColor: chartColors,
          borderColor: "grey",
          borderWidth: 1,
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

  useEffect(() => {
    if (startAllFlag === true) {
      const partiesWithResults = currentDistrict.parties.map(
        (party, index) => ({
          ...party,
          result:
            currentResults[index] !== undefined
              ? Number(currentResults[index])
              : 0,
        })
      );

      const totalMandates = currentDistrict.deputies;

      const eligibleParties = partiesWithResults.filter(
        (party) => party.isOverThreshold
      );

      // Funkcja do przydzielania mandatów
      const distributeSeats = (parties, totalSeats) => {
        if (eligibleParties.length === 0) {
          // Żadna z partii nie przekroczyła progu wyborczego, więc nic się nie dzieje
          return parties.map((party) => ({ ...party, seats: 0 }));
        }

        const partiesWithSeats = eligibleParties.map((party) => ({
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
        (party) => party.result === 0 || isNaN(party.result)
      );
      if (allPartiesHaveZeroResults || eligibleParties.length === 0) {
        return;
      }

      // Przydzielanie mandatów tylko jeśli nie wszystkie partie mają wyn ik 0
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
            label: "miejsca",
            data: chartData,
            backgroundColor: chartColors,
            borderColor: "grey",
            borderWidth: 1,
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
    }
  }, [
    startAllFlag,
    currentResults,
    currentDistrict,
    props.deputies,
    props.index,
    setDistricts,
  ]);

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
              currentDistrictIndex={props.index}
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
            <DoughnutChart data={currentDistrict.forChart} />
            <DoughnutDescription
              currentDistrict={currentDistrict}
              finalResult={currentDistrict.finalResult}
            />
          </div>

          <div className="list__element-bars">
            <MyBar
              result={currentDistrict.finalResult}
              value="seats"
              name="Liczba mandatów z listy"
              boxShadow={true}
            />
            <MyBar
              result={currentDistrict.finalResult}
              value="result"
              name="Wynik procentowy na liscie"
              boxShadow={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default District;
