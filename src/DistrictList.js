import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import District from "./District";
import DistrictListButton from "./DistrictListButtons";
import MySwitch from "./MySwitch";

const DistrictList = () => {
  const { districts, showDistricts, setShowDistricts } = useContext(AppContext);
  const handleShowDistricts = () => {
    setShowDistricts(!showDistricts);
  };

  return districts.length > 0 ? (
    <div className="App__districtlist">
      <div className="App__districtlist-title">
        3. wpisz wyniki
        <div className="App__districtlist-title__side">
          <MySwitch
            onClick={handleShowDistricts}
            imgDisplay
            thumbDisplay={false}
            value={showDistricts}
          />
        </div>
      </div>
      <div className={`App__districtlist-main ${showDistricts ? "" : "hide"}`}>
        {/* <DistrictListButton /> */}
        <div className="list">
          {districts.map((item, index) => (
            <District
              key={index}
              name={item.name}
              deputies={item.deputies}
              method={item.method}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default DistrictList;
