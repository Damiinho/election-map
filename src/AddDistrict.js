import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import {
  Alert,
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
  const [addDistrictSuccess, setAddDistrictSuccess] = useState(false);
  const { districts, setDistricts, parties } = useContext(AppContext);

  const polishDistricts = [
    {
      name: "Legnica (1)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Wałbrzych (2)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Wrocław (3)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Bydgoszcz (4)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Toruń (5)",
      deputies: 13,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Lublin (6)",
      deputies: 15,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Chełm (7)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Zielona Góra (8)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Łódź (9)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Piotrków Trybunalski (10)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Sieradz (11)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Chrzanów (12)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Kraków	(13)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Nowy Sącz (14)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Tarnów	(15)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Płock (16)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Radom (17)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Siedlce (18)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Warszawa (19)",
      deputies: 20,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Warszawa – obwarzanek (20)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Opole (21)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Krosno (22)",
      deputies: 11,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Rzeszów (23)",
      deputies: 15,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Białystok (24)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Gdańsk (25)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Słupsk / Gdynia (26)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Bielsko-Biała (27)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Częstochowa (28)",
      deputies: 7,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Gliwice (29)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Rybnik (30)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Katowice	(31)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Sosnowiec (32)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Kielce	(33)",
      deputies: 16,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Elbląg (34)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Olsztyn (35)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Kalisz (36)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Konin (37)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Piła (38)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Poznań (39)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Koszalin (40)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Szczecin (41)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
  ];
  const testDistricts = [
    {
      name: "Legnica (1)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Wałbrzych (2)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Wrocław (3)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
  ];

  const handleSubmit = (e) => {
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
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    };
    const newDistricts = [...districts];
    newDistricts.push(district);
    setDistricts(newDistricts);
    setName("");
    setDeputies("");
    setMethod("dhondt");
    setAddDistrictSuccess(true);
    setTimeout(() => {
      setAddDistrictSuccess(false);
    }, 2000);
  };

  const handlePredefined = (item) => {
    if (item === "2023Poland") {
      setDistricts(polishDistricts);
      setName("");
      setDeputies("");
      setMethod("dhondt");
    } else if (item === "test") {
      setDistricts(testDistricts);
      setName("");
      setDeputies("");
      setMethod("dhondt");
    }
  };

  return (
    <div className="options__adddistrict">
      <h1 className="options__adddistrict-title">generuj okręgi</h1>
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
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
      <Alert
        style={{
          margin: "0 5px",
          backgroundColor: `${
            error ? "#9c00008c" : addDistrictSuccess ? "#0d9c008c" : "#1988e48c"
          }`,
        }}
        variant="filled"
        severity={error ? "error" : addDistrictSuccess ? "success" : "info"}
      >
        {!error && !addDistrictSuccess && (
          <p>
            Wpisz nazwę nowego okręgu, ustal opcje i <strong>dodaj go</strong>
          </p>
        )}
        {error && (
          <p>
            Okręg <strong>musi mieć nazwę i ustaloną liczbę mandatów</strong>
          </p>
        )}
        {addDistrictSuccess && (
          <p>
            <strong>Okręg dodany!</strong>
          </p>
        )}
      </Alert>
      <div className="options__adddistrict-predefined">
        <p>Predefiniowane okręgi</p>
        <button
          className="electionPoland"
          onClick={() => handlePredefined("2023Poland")}
        >
          <p>sejm</p>
          <p>2023</p>
        </button>
        <button
          className="electionPoland"
          onClick={() => handlePredefined("test")}
        >
          <p>test</p>
          <p>test</p>
        </button>
      </div>
    </div>
  );
};

export default AddDistrict;
