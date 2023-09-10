import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import District from "./District";
import DistrictListButton from "./DistrictListButtons";

const DistrictList = () => {
  const { districts } = useContext(AppContext);

  return (
    <div className="districts">
      {districts.length > 0 && <DistrictListButton />}
      <div className="districts-list">
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
  );
};

export default DistrictList;
