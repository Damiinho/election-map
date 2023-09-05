import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddDistrict = () => {
  const [name, setName] = useState("");
  const [deputies, setDeputies] = useState("");
  const [method, setMethod] = useState("dhondt");
  const [error, setError] = useState(false);
  const { districts, setDistricts, parties } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (deputies < 1 || name === "") {
      setError(true);
      return;
    }

    const district = {
      name,
      deputies,
      method,
      parties: [...parties],
      measure: "percentage",
      showFinalResult: false,
      finalResult: [],
    };
    const newDistricts = [...districts];
    newDistricts.push(district);
    setDistricts(newDistricts);
    setName("");
    setDeputies("");
    setMethod("dhondt");
  };

  return (
    <div className="options__adddistrict">
      <h1 className="options__adddistrict-title">generuj okręg</h1>
      <label className="options__adddistrict-label">
        <div className="options__adddistrict-label__name">
          <TextField
            color="error"
            label="Nazwa okręgu"
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
          />
        </div>
        <div className="options__adddistrict-label__deputies">
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

              setDeputies(value);
            }}
            value={deputies}
            variant="outlined"
          />
        </div>
        <div className="options__adddistrict-label__method">
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
              value={method}
              label="Metoda podziału mandatów"
              onChange={(e) => setMethod(e.target.value)}
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
      </label>
      {error && <div>Okręg musi mieć nazwę i liczbę mandatów</div>}
    </div>
  );
};

export default AddDistrict;
