import { Button } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { AppContext } from "../contexts/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import ErrorSimpleOptions from "./SimpleOptions/ErrorSimpleOptions";
import OtherSimpleOptions from "./SimpleOptions/OtherSimpleOptions";
import TitleSimpleOptions from "./SimpleOptions/TitleSimpleOptions";
import TooltipsSimpleOptions from "./SimpleOptions/TooltipsSimpleOptions";
import HeaderSimpleOptions from "./SimpleOptions/HeaderSimpleOptions";
import ListSimpleOptions from "./SimpleOptions/ListSimpleOptions";

const SimpleOptions = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const {
    simpleParties,
    setSimpleParties,
    setSimpleDistricts,
    simpleDistricts,
  } = useContext(DataContext);
  const {
    setShowSimpleSummary,
    showSimpleSummary,
    setSimpleElectionsType,
    setAdvancedVersion,
  } = useContext(AppContext);
  const [resultError, setResultError] = useState(false);
  const [thresholdError, setThresholdError] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleRestart = () => {
    setShowSimpleSummary(false);
  };

  const handleStart = useCallback(() => {
    let sum = 0;
    simpleParties.forEach((item) => (sum += parseFloat(item.result)));

    const newSimpleParties = [...simpleParties];
    if (sum.toFixed(2) < 100.0) {
      const diff = 100 - sum;

      newSimpleParties[6].result = parseFloat(
        (newSimpleParties[6].result + diff).toFixed(2)
      );
    } else if (sum.toFixed(2) > 100.0) {
      if (parseFloat(sum) - parseFloat(simpleParties[6].result) > 100) {
        setShowError(true);
        setResultError(true);
        setTimeout(() => {
          setShowError(false);
        }, 500);
        setTimeout(() => {
          setResultError(false);
        }, 2500);
        return null;
      } else {
        const diff = sum - simpleParties[6].result;
        newSimpleParties[6].result = parseFloat((100 - diff).toFixed(2));
      }
    }
    newSimpleParties.forEach((party) => {
      party.isOverThreshold = true;
      if (party.result < 5) {
        party.isOverThreshold = false;
      }
      if (
        party.result < 8 &&
        (party.shortName === "TD" || party.shortName === "KO")
      ) {
        party.isOverThreshold = false;
      }
      if (party.shortName === "inne") {
        party.isOverThreshold = false;
      }
    });

    const isAnyPartyOverThreshold = newSimpleParties.some(
      (party) => party.isOverThreshold
    );

    if (isAnyPartyOverThreshold) {
      setSimpleParties(newSimpleParties);
      setShowSimpleSummary(true);

      const newSimpleDistricts = [...simpleDistricts];

      newSimpleDistricts.forEach((district, index) => {
        // Zaktualizuj parties w danym okręgu
        district.parties = newSimpleParties.map((party) => {
          // Wyszukaj partię o tej samej nazwie
          const matchingParty = district.parties.find(
            (districtParty) => districtParty.name === party.name
          );

          if (matchingParty) {
            // Zaktualizuj wynik partii w okręgu
            matchingParty.result = party.result;
            // Tutaj możesz również zaktualizować inne właściwości partii w okręgu, jeśli są takie
          }

          return party;
        });

        if (district.id === "op") {
          district.parties.push({
            name: "Mniejszość Niemiecka",
            shortName: "MN",
            isOverThreshold: true,
            color: "#fcd031",
            result: 0,
          });
        }

        // Teraz zaktualizuj element w simpleDistricts
        newSimpleDistricts[index] = district;
      });

      // Teraz możesz zaktualizować simpleDistricts
      setSimpleDistricts(newSimpleDistricts);
      const partyResults = simpleParties.map((party) => {
        return `${party.shortName.toLowerCase()}+${party.result}`;
      });

      const path = partyResults.join("+");

      navigate(`/prosty/${params.elections}/${path}`);
    }
    if (!isAnyPartyOverThreshold) {
      setShowError(true);
      setThresholdError(true);
      setTimeout(() => {
        setShowError(false);
      }, 500);
      setTimeout(() => {
        setThresholdError(false);
      }, 2500);
      return null;
    }
  }, [
    navigate,
    simpleParties,
    simpleDistricts,
    setSimpleDistricts,
    setSimpleParties,
    setShowSimpleSummary,
    params.elections,
  ]);

  useEffect(() => {
    if (params.result && !showSimpleSummary) {
      // Rozdziel params.result na tablicę wyników
      const resultArray = params.result.split("+");

      // Utwórz tablicę obiektów partii na podstawie wyników
      const resultsFromParams = [];
      for (let i = 0; i < resultArray.length; i += 2) {
        const name = resultArray[i];
        const result = parseFloat(resultArray[i + 1]);
        resultsFromParams.push({ name, result });
      }

      const missingParties = resultsFromParams.filter(
        (item) =>
          !simpleParties.some(
            (party) => party.shortName.toLowerCase() === item.name
          )
      );

      if (missingParties.length === 0) {
        setSimpleParties((prevSimpleParties) => {
          const updatedSimpleParties = [...prevSimpleParties];
          resultsFromParams.forEach((item) => {
            const matchingParty = updatedSimpleParties.find(
              (party) => party.shortName.toLowerCase() === item.name
            );
            if (matchingParty) {
              matchingParty.result = item.result;
            }
          });
          return updatedSimpleParties;
        });
      } else {
        navigate(`/prosty/`);
      }

      handleStart(); // Wywołaj handleStart po aktualizacji simpleParties, ale tylko jeśli showSimpleSummary jest fałszywe
    }

    // Tu możesz umieścić inne zależności, jeśli są potrzebne
  }, [
    params.result,
    setSimpleParties,
    showSimpleSummary,
    handleStart,
    simpleParties,
    navigate,
  ]);
  useEffect(() => {
    if (params.elections === "euro") {
      setSimpleElectionsType({ value: "euro", label: "europarlamentu" });
    } else {
      setSimpleElectionsType({ value: "sejm", label: "sejmu" });
    }
  }, [setSimpleElectionsType, params.elections]);
  useEffect(() => {
    if (params.variant && params.variant === "zaawansowany") {
      navigate("/zaawansowany");
      setAdvancedVersion(true);
    } else if (params.elections && params.elections === "euro") {
      if (!params.result) {
        navigate("/prosty/euro");
        setAdvancedVersion(false);
      }
    } else {
      if (!params.result) {
        navigate("/prosty/sejm");
        setAdvancedVersion(false);
      }
    }
  }, [
    navigate,
    params.elections,
    params.variant,
    params.result,
    setAdvancedVersion,
  ]);

  return (
    <div className="simpleOptions">
      <TooltipsSimpleOptions />

      {showSimpleSummary ? null : (
        <>
          {" "}
          <div className="simpleOptions-info" data-tooltip-id="options-tooltip">
            info
          </div>
          <div className="simpleOptions-handler">
            <TitleSimpleOptions />
            <HeaderSimpleOptions />
            <ListSimpleOptions />
          </div>
          <OtherSimpleOptions />
          <ErrorSimpleOptions
            thresholdError={thresholdError}
            resultError={resultError}
          />
        </>
      )}

      {showSimpleSummary ? null : (
        <Button
          color={showError ? "error" : "success"}
          onClick={showSimpleSummary ? handleRestart : handleStart}
          size="large"
          variant={showSimpleSummary ? "outlined" : "contained"}
          style={{
            fontFamily: "Mukta",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {showSimpleSummary ? "zmień wyniki" : "oblicz"}
        </Button>
      )}
    </div>
  );
};

export default SimpleOptions;
