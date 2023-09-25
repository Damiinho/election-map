import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import District from "./DistrictList/District";
import MySwitch from "./Components/MySwitch";
import SearchDistrict from "./DistrictList/SearchDistrict";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DataContext } from "./contexts/DataContext";

const DistrictList = () => {
  const {
    showDistricts,
    setShowDistricts,
    searchDistrictValue,
    setShowAddDistrict,
    setShowAddParty,
  } = useContext(AppContext);
  const { districts, setDistricts } = useContext(DataContext);

  const handleShowDistricts = (event, value) => {
    if (value === "switch") {
      setShowDistricts(!showDistricts);
      return;
    }
    let target = event.target;
    let isSearchDistrictClicked = false;

    while (target) {
      if (target.classList.contains("App__districtlist-title__search")) {
        isSearchDistrictClicked = true;
        break;
      }
      target = target.parentElement;
    }

    if (!isSearchDistrictClicked) {
      setShowDistricts(!showDistricts);
    }
  };

  return districts.length > 0 ? (
    <div className="App__districtlist">
      <div
        className="App__districtlist-title"
        style={{ cursor: "pointer" }}
        onClick={handleShowDistricts}
      >
        3. wpisz wyniki
        <div className="App__districtlist-title__side">
          <MySwitch
            onClick={() => handleShowDistricts("switch")}
            imgDisplay
            thumbDisplay={false}
            value={showDistricts}
          />
        </div>
      </div>

      <div className="App__districtlist-handler">
        <SearchDistrict />
        <span className="App__districtlist-handler__text">
          liczba okręgów:{" "}
          <span className="App__districtlist-handler__text-number">
            {districts.length}
          </span>
        </span>
        <Button
          variant="contained"
          color="error"
          size="small"
          style={{ textTransform: "lowercase" }}
          endIcon={<DeleteForeverIcon />}
          onClick={() => {
            setDistricts([]);
            setShowAddDistrict(true);
            setShowAddParty(true);
          }}
        >
          Usuń wszystkie
        </Button>
        {/* <Button>Pokaż tylko nieuzupełnione</Button> */}
      </div>
      <div className={`App__districtlist-main ${showDistricts ? "" : "hide"}`}>
        {/* <DistrictListButton /> */}
        <div className="list">
          {districts.map(
            (item, index) =>
              (searchDistrictValue === "" ||
                item.name
                  .toLowerCase()
                  .includes(searchDistrictValue.toLowerCase())) && (
                <District
                  key={index}
                  name={item.name}
                  deputies={item.deputies}
                  method={item.method}
                  index={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default DistrictList;
