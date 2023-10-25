import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { DataContext } from "../contexts/DataContext";
import MyEyeSwitch from "../Components/MyEyeSwitch";
import PredefinedAddDistrict from "./AddDistrict/PredefinedAddDistrict";
import LabelAddDistrict from "./AddDistrict/LabelAddDistrict";
import AlertAddDistrict from "./AddDistrict/AlertAddDistrict";

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
  const { setDistricts, parties } = useContext(DataContext);

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
          <MyEyeSwitch
            onChange={handleShowAddDistrict}
            checked={showAddDistrict}
          />
        </div>
      </div>
      <div className={`adddistrict__main ${showAddDistrict ? "" : "hide"}`}>
        <div>
          <LabelAddDistrict
            setError={setError}
            setAddDistrictSuccess={setAddDistrictSuccess}
            name={name}
            setName={setName}
            method={method}
            setMethod={setMethod}
            deputies={deputies}
            setDeputies={setDeputies}
          />
          <AlertAddDistrict
            error={error}
            addDistrictSuccess={addDistrictSuccess}
          />
          <PredefinedAddDistrict handlePredefined={handlePredefined} />
        </div>
      </div>
    </div>
  );
};

export default AddDistrict;
