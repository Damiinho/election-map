import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import District from "./DistrictList/District";
import SearchDistrict from "./DistrictList/SearchDistrict";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DataContext } from "./contexts/DataContext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReplayIcon from "@mui/icons-material/Replay";
import MyEyeSwitch from "./Components/MyEyeSwitch";
const DistrictList = () => {
  const {
    showDistricts,
    setShowDistricts,
    searchDistrictValue,
    setShowAddDistrict,
    setShowAddParty,
    setRegenerateAllFlag,
    setStartAllFlag,
    windowWidth,
  } = useContext(AppContext);
  const { districts, setDistricts } = useContext(DataContext);

  const handleRegenerateAll = () => {
    const newDistricts = [...districts];
    newDistricts.map((district) => (district.showFinalResult = false));
    setDistricts(newDistricts);
    setRegenerateAllFlag(true);
    setTimeout(() => {
      setRegenerateAllFlag(false);
    }, 500);
  };
  const handleStartAll = () => {
    setStartAllFlag(true);
    setTimeout(() => {
      setStartAllFlag(false);
    }, 500);
  };

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
          {/* <MySwitch
            onClick={() => handleShowDistricts("switch")}
            imgDisplay
            thumbDisplay={false}
            value={showDistricts}
          /> */}
          <MyEyeSwitch
            onChange={() => handleShowDistricts("switch")}
            // imgDisplay
            // thumbDisplay={false}
            checked={showDistricts}
          />
        </div>
      </div>

      <div className="App__districtlist-handler">
        <SearchDistrict />
        <span className="App__districtlist-handler__text">
          {windowWidth > 430 ? "liczba okręgów: " : "wszystkie: "}
          <span className="App__districtlist-handler__text-number">
            {districts.length}
          </span>
        </span>
        <Button
          variant="contained"
          color="error"
          size="small"
          style={{ textTransform: "lowercase" }}
          onClick={() => {
            setDistricts([]);
            setShowAddDistrict(true);
            setShowAddParty(true);
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: windowWidth > 900 ? "column" : "row",
              fontSize: 12,
              gap: windowWidth > 900 ? 0 : 4,
              fontFamily: "Mukta, sans-serif",
              textAlign: "right",
              marginRight: 10,
            }}
          >
            <span>Usuń</span>
            {windowWidth > 430 ? <span>wszystkie</span> : null}
          </div>
          <DeleteForeverIcon fontSize={windowWidth > 900 ? "large" : "small"} />
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="small"
          style={{ textTransform: "lowercase" }}
          onClick={handleRegenerateAll}
          disabled={!districts.some((district) => district.showFinalResult)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: windowWidth > 900 ? "column" : "row",
              fontSize: 12,
              gap: windowWidth > 900 ? 0 : 4,
              fontFamily: "Mukta, sans-serif",
              textAlign: "right",
              marginRight: 10,
            }}
          >
            <span>popraw</span>
            {windowWidth > 430 ? <span>wszystkie</span> : null}
          </div>
          <ReplayIcon fontSize={windowWidth > 900 ? "large" : "small"} />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ textTransform: "lowercase" }}
          onClick={handleStartAll}
          disabled={districts.every((district) => district.showFinalResult)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: windowWidth > 900 ? "column" : "row",
              fontSize: 12,
              gap: windowWidth > 900 ? 0 : 4,
              fontFamily: "Mukta, sans-serif",
              textAlign: "right",
              marginRight: 10,
            }}
          >
            <span>Generuj</span>
            {windowWidth > 430 ? <span>wszystkie</span> : null}
          </div>
          <PlayCircleOutlineIcon
            fontSize={windowWidth > 900 ? "large" : "small"}
          />
        </Button>
        {/* <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ textTransform: "lowercase" }}
          startIcon={<PlayCircleOutlineIcon />}
          onClick={handleGenerate}
        >
          generuj wszystkie
        </Button> */}
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
