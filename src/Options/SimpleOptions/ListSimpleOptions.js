import { useContext } from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Checkbox, Slider, TextField } from "@mui/material";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
const ListSimpleOptions = () => {
  const {
    simpleOptionsResults2019,
    setSimpleOptionsResults2019,
    simpleOptionsResultsSurvey,
    setSimpleOptionsResultsSurvey,
    simpleParties,
    setSimpleParties,
    euroParties,
    setEuroParties,
    simpleOptionsEuroResults2019,
    setSimpleOptionsEuroResults2019,
    simpleOptionsEuroResultsSurvey,
    setSimpleOptionsEuroResultsSurvey,
  } = useContext(DataContext);
  const { simpleElectionsType } = useContext(AppContext);

  const handleChange = (index) => {
    const newSimpleParties = [...simpleParties];
    newSimpleParties[index].confirmed = !newSimpleParties[index].confirmed;
    setSimpleParties(newSimpleParties);
  };

  const handleResultChange = (index, value) => {
    if (
      simpleElectionsType.value === "sejm" &&
      simpleParties[index].confirmed === false
    ) {
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
      for (let i = 0; i < simpleParties.length - 1; i++) {
        if (i !== index) {
          currentSum = currentSum + newSimpleParties[i].result;
        }
      }
      const newSimplePartiesWithoutIndex = newSimpleParties.filter(
        (party, i) => i !== index && i !== simpleParties.length - 1
      );

      const newSimplePartiesUnconfirmed = newSimplePartiesWithoutIndex.filter(
        (party) => !party.confirmed
      );
      currentSum = currentSum + value;
      if (currentSum > 100) {
        if (newSimplePartiesUnconfirmed.length > 0) {
          let sumUnconfirmedParty = 0;
          newSimplePartiesUnconfirmed.map(
            (party) =>
              (sumUnconfirmedParty = sumUnconfirmedParty + party.result)
          );

          const differenceFrom100 = currentSum - 100;
          newSimplePartiesUnconfirmed.map(
            (party) =>
              (party.percentageToSubtract = party.result / sumUnconfirmedParty)
          );

          newSimplePartiesUnconfirmed.forEach((partyUnconfirmed) => {
            const matchingParty = newSimpleParties.find(
              (party) => party.name === partyUnconfirmed.name
            );
            if (matchingParty) {
              if (
                !(
                  matchingParty.result -
                    partyUnconfirmed.percentageToSubtract * differenceFrom100 <
                  0
                )
              ) {
                matchingParty.result = parseFloat(
                  (
                    matchingParty.result -
                    partyUnconfirmed.percentageToSubtract * differenceFrom100
                  ).toFixed(2)
                );
              } else matchingParty.result = 0;
            }
          });
        } else return null;
      }

      let newCurrentSum = 0;
      for (let i = 0; i < simpleParties.length - 1; i++) {
        if (i !== index) {
          newCurrentSum = newCurrentSum + newSimpleParties[i].result;
        }
      }
      newCurrentSum = newCurrentSum + value;
      if (newCurrentSum > 100) return null;
      newSimpleParties[index].result = value;
      let newSum = 0;
      for (let i = 0; i < simpleParties.length - 1; i++) {
        newSum = newSum + newSimpleParties[i].result;
      }
      newSimpleParties[simpleParties.length - 1].result = parseFloat(
        (100 - newSum).toFixed(2)
      );
      setSimpleParties(newSimpleParties);
      if (simpleOptionsResults2019) {
        setSimpleOptionsResults2019(false);
      }
      if (simpleOptionsResultsSurvey) {
        setSimpleOptionsResultsSurvey(false);
      }
    } else if (simpleElectionsType.value === "euro") {
      const newEuroParties = [...euroParties];
      value = parseFloat(value);
      if (isNaN(value)) {
        value = 0;
      } else if (value < 0) {
        value = 0;
      } else if (value > 100) {
        value = 100;
      }
      let currentSum = 0;
      for (let i = 0; i < euroParties.length - 1; i++) {
        if (i !== index) {
          currentSum = currentSum + newEuroParties[i].result;
        }
      }
      currentSum = currentSum + value;
      if (currentSum > 100) return null;
      newEuroParties[index].result = value;
      let newSum = 0;
      for (let i = 0; i < euroParties.length - 1; i++) {
        newSum = newSum + newEuroParties[i].result;
      }
      newEuroParties[euroParties.length - 1].result = parseFloat(
        (100 - newSum).toFixed(2)
      );
      setEuroParties(newEuroParties);
      if (simpleOptionsEuroResults2019) {
        setSimpleOptionsEuroResults2019(false);
      }
      if (simpleOptionsEuroResultsSurvey) {
        setSimpleOptionsEuroResultsSurvey(false);
      }
    } else return null;
  };

  return (
    <div className="simpleOptions-handler__list">
      <div className="simpleOptions-handler__list-table">
        {simpleElectionsType.value === "sejm" &&
          simpleParties.map((item, index) => (
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
                  onChange={(e) => handleResultChange(index, e.target.value)}
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
              <Checkbox
                checked={
                  simpleParties[index].confirmed === false ? false : true
                }
                onChange={() => handleChange(index)}
                icon={<LockOpenIcon />}
                checkedIcon={<LockIcon />}
              />
            </div>
          ))}
        {simpleElectionsType.value === "euro" &&
          euroParties.map((item, index) => (
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
                  onChange={(e) => handleResultChange(index, e.target.value)}
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
  );
};

export default ListSimpleOptions;
