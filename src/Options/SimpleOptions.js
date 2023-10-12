import { Button, ButtonGroup, Slider, TextField } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { Tooltip } from "react-tooltip";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { AppContext } from "../contexts/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const SimpleOptions = () => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    simpleParties,
    setSimpleParties,
    setSimpleDistricts,
    simpleDistricts,
  } = useContext(DataContext);
  const { setShowSimpleSummary, showSimpleSummary, correction, setCorrection } =
    useContext(AppContext);
  const [results2019, setResults2019] = useState(false);
  const [resultsSurvey, setResultsSurvey] = useState(false);
  const [resultError, setResultError] = useState(false);
  const [thresholdError, setThresholdError] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCorrection = () => {
    setCorrection(!correction);
  };

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

      navigate(`/prosty/${path}`);
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

      // Aktualizacja simpleParties
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

      handleStart(); // Wywołaj handleStart po aktualizacji simpleParties, ale tylko jeśli showSimpleSummary jest fałszywe
    }

    // Tu możesz umieścić inne zależności, jeśli są potrzebne
  }, [params.result, setSimpleParties, showSimpleSummary, handleStart]);

  const handleResultChange = (index, value) => {
    const newSimpleParties = [...simpleParties];
    value = parseFloat(value);
    if (isNaN(value)) {
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    let currentSum = 0;
    for (let i = 0; i < 6; i++) {
      if (i !== index) {
        currentSum = currentSum + newSimpleParties[i].result;
      }
    }
    currentSum = currentSum + value;
    if (currentSum > 100) return null;
    newSimpleParties[index].result = value;
    let newSum = 0;
    for (let i = 0; i < 6; i++) {
      newSum = newSum + newSimpleParties[i].result;
    }
    newSimpleParties[6].result = parseFloat((100 - newSum).toFixed(2));
    setSimpleParties(newSimpleParties);
    if (results2019) {
      setResults2019(false);
    }
    if (resultsSurvey) {
      setResultsSurvey(false);
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
    setResultsSurvey(true);
    if (results2019) {
      setResults2019(false);
    }
  };
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

    setResults2019(true);
    if (resultsSurvey) {
      setResultsSurvey(false);
    }
  };

  return (
    <div className="simpleOptions">
      <Tooltip style={{ zIndex: 1, width: 440 }} id="correction-tooltip">
        <div>
          <p style={{ marginBottom: 10 }}>
            1. Poparcie w poszczególnych okręgach korygowane jest na podstawie
            wyników z 2019.
          </p>
          <p style={{ marginBottom: 10 }}>
            2. Wyniki Bezpartyjnych Samorządowców nie są korygowane w okręgach,
            w których nie startowali w 2019.
          </p>
          <p>
            3. Trzecia Droga ma wynik korygowany o głosy PSL-u oraz o ważoną
            sumę wyników z poszczególnych okręgów wszystkich komitetów, od
            których wyborców przejęła Polska2050 na podstawie sondażu o
            przepływie wyborców.
          </p>
        </div>
      </Tooltip>
      <Tooltip style={{ zIndex: 1 }} id="td-tooltip">
        <div>Koalicja, próg wyborczy 8%</div>
      </Tooltip>
      <Tooltip style={{ zIndex: 1, width: 440 }} id="options-tooltip">
        <div style={{ marginBottom: 10 }}>
          1. Wyniki z 2019: Trzeciej Drodze przypisuje się głosy PSL-u,
          Bezpartyjni Samorządowcy jako wynik dostają średni wynik z okręgów, w
          których startowali w 2019. Jako że suma przekracza 100%, zostaje
          dopasowana.
        </div>
        <div>2. Średnia sondażowa na podstawie ewybory.eu</div>
      </Tooltip>
      <Tooltip style={{ zIndex: 1, width: 500 }} id="other-tooltip">
        <p style={{ marginBottom: 10 }}>
          Jeśli suma wyników wszystkich komitetów wyniesie mniej niż 100%,
          brakujące głosy zostaną dodane do pozostałych.
        </p>
        <p style={{ marginBottom: 10 }}>
          Jeśli suma wyników wszystkich komitetów wyniesie więcej niż 100%, a
          głosy na pozostałe komitety wynoszą więcej niż 0, wynik pozostałych
          komitetów zostanie dopasowany tak, by suma wszystkich wynosiła 100
        </p>
        <p>
          Jeśli mimo odjęcia wszystkich głosów na pozostałe komitety suma
          wyników nadal wynosi ponad 100%, należy poprawić wyniki.
        </p>
      </Tooltip>

      {showSimpleSummary ? null : (
        <>
          {" "}
          <div className="simpleOptions-info" data-tooltip-id="options-tooltip">
            info
          </div>
          <div className="simpleOptions-handler">
            <div className="simpleOptions-handler__header">
              <span>Wpisz wyniki lub</span>
              <Button
                color="primary"
                onClick={handleSurvey}
                variant="contained"
                style={{ fontFamily: "Mukta" }}
                disabled={resultsSurvey ? true : false}
              >
                wczytaj średnią sondażową
              </Button>
              <Button
                color="secondary"
                onClick={handle2019}
                variant="contained"
                style={{ fontFamily: "Mukta" }}
                disabled={results2019 ? true : false}
              >
                wczytaj wyniki z 2019
              </Button>
            </div>
            <div className="simpleOptions-handler__list">
              <div className="simpleOptions-handler__list-table">
                {simpleParties.map((item, index) => (
                  <div
                    key={index}
                    className="simpleOptions-handler__list-table__element"
                  >
                    <div
                      className="simpleOptions-handler__list-table__element-name"
                      style={{
                        backgroundColor: item.color,
                        cursor:
                          item.shortName === "inne" ||
                          item.shortName === "TD" ||
                          item.shortName === "KO"
                            ? "help"
                            : "auto",
                      }}
                      data-tooltip-id={
                        item.shortName === "inne"
                          ? "other-tooltip"
                          : item.shortName === "TD" || item.shortName === "KO"
                          ? "td-tooltip"
                          : null
                      }
                    >
                      {item.name}
                      {item.shortName === "inne" ? (
                        <span
                          style={{
                            marginLeft: 10,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <HelpOutlineOutlinedIcon />
                        </span>
                      ) : item.shortName === "TD" || item.shortName === "KO" ? (
                        <span
                          style={{
                            marginLeft: 10,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <InfoOutlinedIcon />
                        </span>
                      ) : null}
                    </div>
                    <div className="simpleOptions-handler__list-table__element-number">
                      <TextField
                        color="info"
                        type="number"
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
                            backgroundColor: "#66708bea",
                            borderRadius: 1,
                          },
                        }}
                        size="small"
                        onChange={(e) =>
                          handleResultChange(index, e.target.value)
                        }
                        value={item.result}
                        variant="outlined"
                        style={{ width: 70 }}
                      />{" "}
                      <span>%</span>
                    </div>
                    <div className="simpleOptions-handler__list-table__element-slider">
                      <Slider
                        // defaultValue={item.result}
                        value={item.result}
                        valueLabelDisplay="auto"
                        step={0.01}
                        min={0}
                        max={100}
                        sx={{
                          color: item.color,

                          height: 8,
                          "span.MuiSlider-valueLabel": {
                            backgroundColor: item.color,
                          },
                          "& .MuiSlider-thumb": {
                            height: 24,
                            width: 24,
                            backgroundColor: "#fff",
                            border: "2px solid currentColor",
                            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":
                              {
                                boxShadow: "inherit",
                              },
                            "&:before": {
                              display: "none",
                            },
                          },
                          "& .MuiSlider-track": {
                            border: "none",
                          },

                          "& .MuiSlider-valueLabel": {
                            lineHeight: 1.2,
                            fontSize: 12,
                            background: "unset",
                            padding: 0,
                            width: 40,
                            height: 40,
                            borderRadius: "50% 50% 50% 0",
                            backgroundColor: "#52af77",
                            transformOrigin: "bottom left",
                            transform:
                              "translate(50%, -100%) rotate(-45deg) scale(0)",
                            "&:before": { display: "none" },
                            "&.MuiSlider-valueLabelOpen": {
                              transform:
                                "translate(50%, -100%) rotate(-45deg) scale(1)",
                            },
                            "& > *": {
                              transform: "rotate(45deg)",
                            },
                          },
                        }}
                        onChange={(e) =>
                          handleResultChange(index, e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="simpleOptions-other">
            {/* <Button
              size="small"
              color="warning"
              onClick={function () {}}
              variant="contained"
              style={{ fontFamily: "Mukta" }}
            >
              stwórz koalicje
            </Button> */}
            <ButtonGroup>
              <Button
                size="small"
                color="info"
                onClick={handleCorrection}
                variant="contained"
                style={{ fontFamily: "Mukta" }}
                endIcon={<HelpOutlineOutlinedIcon style={{ cursor: "help" }} />}
                disabled={correction ? false : true}
                data-tooltip-id="correction-tooltip"
              >
                nie koryguj poparcia
              </Button>
              <Button
                color="error"
                variant="contained"
                disabled={correction ? true : false}
                onClick={handleCorrection}
              >
                <UndoRoundedIcon />
              </Button>
            </ButtonGroup>
          </div>
          <div className="simpleOptions-error">
            {resultError ? (
              <div className="simpleOptions-error__text">
                Suma wyników wszystkich partii nie może przekraczać 100%
              </div>
            ) : thresholdError ? (
              <div className="simpleOptions-error__text">
                Co najmniej jedna partia musi przekroczyć próg wyborczy
              </div>
            ) : null}
          </div>
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
