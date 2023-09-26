import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import DistrictSimple from "./DistrictSimple";
import { AppContext } from "../../contexts/AppContext";

const DistrictListSimple = () => {
  const { simpleDistricts } = useContext(DataContext);
  const { simpleSearchValue, simpleByName } = useContext(AppContext);

  // Funkcja do sortowania wg nazw
  const sortedDistricts = simpleDistricts.slice().sort((a, b) => {
    if (simpleByName) {
      return a.name.localeCompare(b.name);
    }
    return 0; // Jeśli simpleByName nie jest true, zachowaj obecny porządek
  });

  return (
    <>
      {sortedDistricts.map(
        (item, index) =>
          (simpleSearchValue === "" ||
            item.name
              .toLowerCase()
              .includes(simpleSearchValue.toLowerCase())) && (
            <DistrictSimple key={index} district={item} />
          )
      )}
    </>
  );
};

export default DistrictListSimple;
