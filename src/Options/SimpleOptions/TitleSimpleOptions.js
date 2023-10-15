import Select from "react-select";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const TitleSimpleOptions = () => {
  const { selectOptions, simpleElectionsType, setSimpleElectionsType } =
    useContext(AppContext);

  const navigate = useNavigate();
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "20px", // Rozmiar liter
      cursor: "pointer",
    }),
  };

  return (
    <div className="simpleOptions-handler__title">
      <p>Wybory do</p>
      <Select
        styles={selectStyles}
        options={selectOptions}
        value={simpleElectionsType}
        onChange={(simpleElectionsType) => {
          navigate(`/prosty/${simpleElectionsType.value}`);
          setSimpleElectionsType(simpleElectionsType);
        }}
      />
    </div>
  );
};

export default TitleSimpleOptions;
