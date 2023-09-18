import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import District from "./District";
import MySwitch from "./MySwitch";
import SearchDistrict from "./SearchDistrict";

const DistrictList = () => {
  const { districts, showDistricts, setShowDistricts, searchDistrictValue } =
    useContext(AppContext);

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
        <SearchDistrict />
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
