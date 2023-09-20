import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import SimpleSummaryDistrict from "./SimpleSummaryDistrict";

const SimpleSummary = () => {
  const { setSimpleDistricts, simpleDistricts, simpleParties } =
    useContext(DataContext);

  useEffect(() => {
    setSimpleDistricts((prevSimpleDistricts) => {
      const newSimpleDistricts = [...prevSimpleDistricts];
      newSimpleDistricts.forEach((district) => {
        district.parties.forEach((party) => {
          if (district.id === "op" && party.shortName === "MN") {
            party.result = 0;
          }
        });
      });
      return newSimpleDistricts;
    });

    // Tutaj możesz dodać logikę związaną z nową tablicą newSimpleDistricts, jeśli to konieczne.
  }, [simpleParties, setSimpleDistricts]);

  return (
    <div className="simpleSummary">
      <div className="simpleSummary-header">Podsumowanie</div>
      <div className="simpleSummary-main">
        <div className="simpleSummary-main__summary">ogólne wyniki</div>
        <div className="simpleSummary-main__details">
          {simpleDistricts.map((item) => {
            return <SimpleSummaryDistrict parties={item.parties} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SimpleSummary;
