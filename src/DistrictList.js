import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import District from "./District";
import DistrictListButton from "./DistrictListButtons";
import MySwitch from "./MySwitch";

const DistrictList = () => {
  const { districts } = useContext(AppContext);
  const [showDistricts, setShowDistricts] = useState(true);
  const handleShowDistricts = () => {
    setShowDistricts(!showDistricts);
  };

  return (
    <div className="App__districtlist">
      <div className="App__districtlist-title">
        <span>Okręgi</span>
        <div className="App__districtlist-title__side">
          <MySwitch
            onClick={handleShowDistricts}
            imgDisplay
            thumbDisplay={false}
            defaultValue
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
  );
};

export default DistrictList;
