import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import District from "./District";

const DistrictList = () => {
  const { districts } = useContext(AppContext);

  return (
    <div className="districts">
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
  );
};

export default DistrictList;
