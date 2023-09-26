import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import DistrictSimple from "./DistrictSimple";

const DistrictListSimple = () => {
  const { simpleDistricts } = useContext(DataContext);

  return (
    <>
      {simpleDistricts.map((item, index) => {
        return <DistrictSimple key={index} district={item} />;
      })}
    </>
  );
};

export default DistrictListSimple;
