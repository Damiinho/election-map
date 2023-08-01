import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";

const AddDistrict = () => {
  const [name, setName] = useState("");
  const [deputies, setDeputies] = useState(0);
  const [method, setMethod] = useState("dhondt");
  const { districts, setDistricts } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const district = {
      name,
      deputies,
      method,
    };
    const newDistricts = [...districts];
    newDistricts.push(district);
    setDistricts(newDistricts);
    setName("");
    setDeputies(0);
    setMethod("dhondt");
  };

  return (
    <div className="options__adddistrict">
      <h1 className="options__adddistrict-title">generuj okręg</h1>
      <label className="options__adddistrict-label">
        <div>
          Nazwa:
          <input
            type="text"
            placeholder="Nazwa okręgu"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          Liczba mandatów:{" "}
          <input
            type="number"
            placeholder="Liczba mandatów"
            value={deputies}
            onChange={(e) => setDeputies(e.target.value)}
          />
        </div>
        <div>
          Metoda podziału mandatów:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="dhondt">d'Hondt</option>
            <option value="normal">bez dzielenia</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Dodaj</button>
      </label>
    </div>
  );
};

export default AddDistrict;
