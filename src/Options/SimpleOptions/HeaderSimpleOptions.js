import { Button } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";

const HeaderSimpleOptions = () => {
  const {
    simpleParties,
    setSimpleParties,
    simpleOptionsResults2019,
    setSimpleOptionsResults2019,
    simpleOptionsResultsSurvey,
    setSimpleOptionsResultsSurvey,
    euroParties,
    setEuroParties,
    simpleOptionsEuroResults2019,
    setSimpleOptionsEuroResults2019,
    simpleOptionsEuroResultsSurvey,
    setSimpleOptionsEuroResultsSurvey,
  } = useContext(DataContext);

  const { simpleElectionsType } = useContext(AppContext);

  const handle2019 = () => {
    const results = [
      { name: "Prawo i Sprawiedliwość", result: 43.32 },
      { name: "Koalicja Obywatelska", result: 27.23 },
      { name: "Konfederacja", result: 6.76 },
      { name: "Trzecia Droga", result: 8.49 },
      { name: "Lewica", result: 12.48 },
      { name: "Bezpartyjni Samorządowcy", result: 1.71 },
      { name: "Pozostałe komitety", result: 0.01 },
    ];

    const newSimpleParties = simpleParties.map((party) => {
      const result = results.find((item) => item.name === party.name);
      if (result) {
        return { ...party, result: result.result };
      }
      return party;
    });
    setSimpleParties(newSimpleParties);

    setSimpleOptionsResults2019(true);
    if (simpleOptionsResultsSurvey) {
      setSimpleOptionsResultsSurvey(false);
    }
  };

  const handleSurvey = () => {
    const results = [
      { name: "Prawo i Sprawiedliwość", result: 35.2 },
      { name: "Koalicja Obywatelska", result: 29.1 },
      { name: "Konfederacja", result: 8.7 },
      { name: "Trzecia Droga", result: 9.6 },
      { name: "Lewica", result: 9.6 },
      { name: "Bezpartyjni Samorządowcy", result: 2.2 },
      { name: "Pozostałe komitety", result: 5.5 },
    ];

    const newSimpleParties = simpleParties.map((party) => {
      const result = results.find((item) => item.name === party.name);
      if (result) {
        return { ...party, result: result.result };
      }
      return party;
    });
    setSimpleParties(newSimpleParties);
    setSimpleOptionsResultsSurvey(true);
    if (simpleOptionsResults2019) {
      setSimpleOptionsResults2019(false);
    }
  };

  const handleEuro2019 = () => {
    const results = [
      { name: "Prawo i Sprawiedliwość", result: 45.38 },
      { name: "Koalicja Europejska", result: 44.53 },
      { name: "Konfederacja", result: 4.55 },
      { name: "Pozostałe komitety", result: 5.54 },
    ];

    const newEuroParties = euroParties.map((party) => {
      const result = results.find((item) => item.name === party.name);
      if (result) {
        return { ...party, result: result.result };
      }
      return party;
    });
    setEuroParties(newEuroParties);

    setSimpleOptionsEuroResults2019(true);
    if (simpleOptionsEuroResultsSurvey) {
      setSimpleOptionsEuroResultsSurvey(false);
    }
  };

  const handleEuroSurvey = () => {
    const results = [
      { name: "Prawo i Sprawiedliwość", result: 35.2 },
      { name: "Koalicja Europejska", result: 29.1 },
      { name: "Konfederacja", result: 8.7 },
      { name: "Pozostałe komitety", result: 27 },
    ];

    const newEuroParties = euroParties.map((party) => {
      const result = results.find((item) => item.name === party.name);
      if (result) {
        return { ...party, result: result.result };
      }
      return party;
    });
    setEuroParties(newEuroParties);
    setSimpleOptionsEuroResultsSurvey(true);
    if (simpleOptionsEuroResults2019) {
      setSimpleOptionsEuroResults2019(false);
    }
  };

  return (
    <>
      {simpleElectionsType.value === "sejm" && (
        <div className="simpleOptions-handler__header">
          <span>Wpisz wyniki lub</span>
          <Button
            color="primary"
            onClick={handleSurvey}
            variant="contained"
            style={{ fontFamily: "Mukta" }}
            disabled={simpleOptionsResultsSurvey ? true : false}
          >
            wczytaj średnią sondażową
          </Button>
          <Button
            color="secondary"
            onClick={handle2019}
            variant="contained"
            style={{ fontFamily: "Mukta" }}
            disabled={simpleOptionsResults2019 ? true : false}
          >
            wczytaj wyniki z 2019
          </Button>
        </div>
      )}
      {simpleElectionsType.value === "euro" && (
        <div className="simpleOptions-handler__header">
          <span>Wpisz wyniki lub</span>
          <Button
            color="primary"
            onClick={handleEuroSurvey}
            variant="contained"
            style={{ fontFamily: "Mukta" }}
            disabled={simpleOptionsEuroResultsSurvey ? true : false}
          >
            wczytaj średnią sondażową
          </Button>
          <Button
            color="secondary"
            onClick={handleEuro2019}
            variant="contained"
            style={{ fontFamily: "Mukta" }}
            disabled={simpleOptionsEuroResults2019 ? true : false}
          >
            wczytaj wyniki z 2019
          </Button>
        </div>
      )}
    </>
  );
};

export default HeaderSimpleOptions;
