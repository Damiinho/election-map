import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DataContext } from "../contexts/DataContext";
import MyEyeSwitch from "../Components/MyEyeSwitch";

const AddDistrict = () => {
  const [name, setName] = useState("");
  const [deputies, setDeputies] = useState("");
  const [method, setMethod] = useState("dhondt");
  const [error, setError] = useState(false);
  const [addDistrictSuccess, setAddDistrictSuccess] = useState(false);
  const {
    showAddDistrict,
    setShowAddDistrict,
    setShowAddParty,

    setShowDistricts,
    setStrictSejm,
  } = useContext(AppContext);
  const { districts, setDistricts, parties } = useContext(DataContext);
  const { windowWidth } = useContext(AppContext);

  const polishDistricts = [
    {
      name: "Legnica (1)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "dl",
    },
    {
      name: "Wałbrzych (2)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "db",
    },
    {
      name: "Wrocław (3)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "dw",
    },
    {
      name: "Bydgoszcz (4)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "cb",
    },
    {
      name: "Toruń (5)",
      deputies: 13,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ct",
    },
    {
      name: "Lublin (6)",
      deputies: 15,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "lu",
    },
    {
      name: "Chełm (7)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "lc",
    },
    {
      name: "Zielona Góra (8)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "fz",
    },
    {
      name: "Łódź (9)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "el",
    },
    {
      name: "Piotrków Trybunalski (10)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ep",
    },
    {
      name: "Sieradz (11)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "esi",
    },
    {
      name: "Chrzanów (12)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kch",
    },
    {
      name: "Kraków	(13)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kr",
    },
    {
      name: "Nowy Sącz (14)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kn",
    },
    {
      name: "Tarnów	(15)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kt",
    },
    {
      name: "Płock (16)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wp",
    },
    {
      name: "Radom (17)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wr",
    },
    {
      name: "Siedlce (18)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ws",
    },
    {
      name: "Warszawa (19)",
      deputies: 20,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wa",
    },
    {
      name: "Warszawa – obwarzanek (20)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wb",
    },
    {
      name: "Opole (21)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "op",
    },
    {
      name: "Krosno (22)",
      deputies: 11,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "rk",
    },
    {
      name: "Rzeszów (23)",
      deputies: 15,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "rz",
    },
    {
      name: "Białystok (24)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "bi",
    },
    {
      name: "Gdańsk (25)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "gd",
    },
    {
      name: "Słupsk / Gdynia (26)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "gs",
    },
    {
      name: "Bielsko-Biała (27)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sb",
    },
    {
      name: "Częstochowa (28)",
      deputies: 7,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sc",
    },
    {
      name: "Gliwice (29)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sg",
    },
    {
      name: "Rybnik (30)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sr",
    },
    {
      name: "Katowice	(31)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sk",
    },
    {
      name: "Sosnowiec (32)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "so",
    },
    {
      name: "Kielce	(33)",
      deputies: 16,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "tk",
    },
    {
      name: "Elbląg (34)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ne",
    },
    {
      name: "Olsztyn (35)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},

      id: "no",
    },
    {
      name: "Kalisz (36)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "pk",
    },
    {
      name: "Konin (37)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "pn",
    },
    {
      name: "Piła (38)",
      deputies: 9,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "pp",
    },
    {
      name: "Poznań (39)",
      deputies: 10,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "po",
    },
    {
      name: "Koszalin (40)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "zk",
    },
    {
      name: "Szczecin (41)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "zs",
    },
  ];
  const testDistricts = [
    {
      name: "Legnica (1)",
      deputies: 12,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Wałbrzych (2)",
      deputies: 8,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
    },
    {
      name: "Wrocław (3)",
      deputies: 14,
      method: "dhondt",
      parties: [...parties],
      localParties: [],
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
      localParties: [],
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
    setStrictSejm(false);
  };

  const handlePredefined = (item) => {
    if (item === "2023Poland") {
      setDistricts(polishDistricts);
      setName("");
      setDeputies("");
      setMethod("dhondt");
      setStrictSejm(true);
    } else if (item === "test") {
      setDistricts(testDistricts);
      setName("");
      setDeputies("");
      setMethod("dhondt");
    }
    setShowAddDistrict(false);
    setShowAddParty(false);
    setShowDistricts(true);
  };

  const handleShowAddDistrict = () => {
    setShowAddDistrict(!showAddDistrict);
  };

  return (
    <div className="adddistrict">
      <div
        className="adddistrict__title"
        style={{ cursor: "pointer" }}
        onClick={handleShowAddDistrict}
      >
        2. generuj okręgi{" "}
        <div className="addparty__title__side">
          {/* <MySwitch
            onClick={handleShowAddDistrict}
            imgDisplay
            value={showAddDistrict}
            thumbDisplay={false}
          /> */}
          <MyEyeSwitch
            onChange={handleShowAddDistrict}
            checked={showAddDistrict}
          />
        </div>
      </div>
      <div className={`adddistrict__main ${showAddDistrict ? "" : "hide"}`}>
        <div>
          <div className="adddistrict__main-label">
            <div className="adddistrict__main-label-name">
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
          </div>
          <Alert
            style={{
              borderRadius: 0,
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
              margin: windowWidth > 600 ? "0 5px 5px" : "0",
              backgroundColor: `${
                error
                  ? "#9c00008c"
                  : addDistrictSuccess
                  ? "#0d9c008c"
                  : "#1988e48c"
              }`,
            }}
            variant="filled"
            severity={error ? "error" : addDistrictSuccess ? "success" : "info"}
          >
            {!error && !addDistrictSuccess && (
              <p>
                Wpisz nazwę nowego okręgu, ustal opcje i{" "}
                <strong>dodaj go</strong>
              </p>
            )}
            {error && (
              <p>
                Okręg{" "}
                <strong>musi mieć nazwę i ustaloną liczbę mandatów</strong>
              </p>
            )}
            {addDistrictSuccess && (
              <p>
                <strong>Okręg dodany!</strong>
              </p>
            )}
          </Alert>
          <div className="adddistrict__main-predefined">
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
      </div>
    </div>
  );
};

export default AddDistrict;
