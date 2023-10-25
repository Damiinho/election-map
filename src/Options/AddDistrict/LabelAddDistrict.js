import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AppContext } from "../../contexts/AppContext";

const LabelAddDistrict = (props) => {
  const { districts, setDistricts, parties } = useContext(DataContext);
  const { setStrictSejm } = useContext(AppContext);
  const handleSubmit = (e) => {
    props.setError(false);

    if (props.deputies < 1 || props.name === "") {
      props.setError(true);
      return;
    }

    const district = {
      name: props.name,
      deputies: props.deputies,
      method: props.method,
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    };
    const newDistricts = [...districts];
    newDistricts.push(district);
    setDistricts(newDistricts);
    props.setName("");
    props.setDeputies("");
    props.setMethod("dhondt");
    props.setAddDistrictSuccess(true);
    setTimeout(() => {
      props.setAddDistrictSuccess(false);
    }, 2000);
    setStrictSejm(false);
  };

  return (
    <div className="adddistrict__main-label">
      <div className="adddistrict__main-label-name">
        <TextField
          color="error"
          label="Nazwa okręgu"
          hiddenLabel
          variant="outlined"
          size="small"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          sx={{
            input: {
              backgroundColor: "#50402923",
              borderRadius: 1,
            },
          }}
        />
      </div>
      <div className="adddistrict__main-label-deputies">
        <TextField
          color="error"
          type="number"
          label="Liczba mandatów"
          InputProps={{
            inputProps: {
              style: {
                textAlign: "center",
              },
            },
          }}
          sx={{
            input: {
              backgroundColor: "#50402923",
              borderRadius: 1,
            },
          }}
          size="small"
          onChange={(e) => {
            let value = parseInt(e.target.value, 10);

            if (value > 1000) value = 1000;
            if (value < 0) value = 0;

            props.setDeputies(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          value={props.deputies}
          variant="outlined"
        />
      </div>
      <div className="adddistrict__main-label-method">
        <FormControl
          size="small"
          style={{
            width: 223,
            backgroundColor: "#50402923",
            borderRadius: 5,
          }}
        >
          <InputLabel id="demo-simple-select-label">
            Metoda podziału mandatów
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.method}
            label="Metoda podziału mandatów"
            onChange={(e) => props.setMethod(e.target.value)}
          >
            <MenuItem value="dhondt">d'Hondt</MenuItem>
            <MenuItem value="normal">bez dzielenia</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="success"
        size="small"
        style={{ textTransform: "lowercase" }}
        onClick={handleSubmit}
      >
        dodaj
      </Button>
    </div>
  );
};

export default LabelAddDistrict;
