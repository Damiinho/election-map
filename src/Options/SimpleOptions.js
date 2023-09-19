import { Button, Slider, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { Tooltip } from "react-tooltip";

const SimpleOptions = () => {
  const { simpleParties, setSimpleParties } = useContext(DataContext);
  const [results2019, setResults2019] = useState(false);
  const [resultsSurvey, setResultsSurvey] = useState(false);

  const handleResultChange = (index, value) => {
    const newSimpleParties = [...simpleParties];
    if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }

    newSimpleParties[index].result = value;

    setSimpleParties(newSimpleParties);
    if (results2019) {
      setResults2019(false);
    }
    if (resultsSurvey) {
      setResultsSurvey(false);
    }
  };
  const optionsInfo = () => (
    <div>
      <p>
        1. Wyniki z 2019: Trzeciej Drodze przypisuję głosy PSL-u, Bezpartyjni
        Samorządowcy jako wynik dostają średni wynik z okręgów, w których
        startowali w 2019
      </p>
    </div>
  );

  return (
    <div className="simpleOptions">
      <Tooltip style={{ zIndex: 999 }} id="options-tooltip" />

      <div
        className="simpleOptions-info"
        data-tooltip-id="options-tooltip"
        data-tooltip-content="1. Wyniki z 2019: Trzeciej Drodze przypisuję głosy PSL-u,
              Bezpartyjni Samorządowcy jako wynik dostają średni wynik z
              okręgów, w których startowali w 2019, 2. Poparcie w poszczególnych okręgach korygowane jest na podstawie wyników z 2019. Wyniki Bezpartyjnych Samorządowców nie są korygowane w okręgach, w których nie startowali w 2019. Trzecia Droga jest korygowana o wynik PSL-u oraz o ważoną sumę wyników z poszczególnych okręgów wszystkich komitetów, od których wyborców przejęła Polska2050 na podstawie sondażu o przepływie wyborców"
      >
        info
      </div>
      <div className="simpleOptions-handler">
        <div className="simpleOptions-handler__header">
          <span>wpisz wyniki lub</span>
          <Button
            color="primary"
            onClick={() => {
              setResultsSurvey(true);
              if (results2019) {
                setResults2019(false);
              }
            }}
            variant="contained"
            style={{ fontFamily: "Mukta" }}
            disabled={resultsSurvey ? true : false}
          >
            wczytaj średnią sondażową
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              setResults2019(true);
              if (resultsSurvey) {
                setResultsSurvey(false);
              }
            }}
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
                  }}
                >
                  {item.name}
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
                    onChange={(e) => handleResultChange(index, e.target.value)}
                    value={item.result}
                    variant="outlined"
                    style={{ width: 70 }}
                  />{" "}
                  <span>%</span>
                </div>
                <div
                  className="simpleOptions-handler__list-table__element-slider"
                  style={{ width: 300 }}
                >
                  <Slider
                    defaultValue={item.result}
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
                        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
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
                    onChange={(e) => handleResultChange(index, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="simpleOptions-other">
        <Button
          color="success"
          onClick={function () {}}
          variant="contained"
          style={{ fontFamily: "Mukta" }}
        >
          stwórz koalicje
        </Button>
        <Button
          color="info"
          onClick={function () {}}
          variant="contained"
          style={{ fontFamily: "Mukta" }}
        >
          nie koryguj poparcia
        </Button>
      </div>
    </div>
  );
};

export default SimpleOptions;
