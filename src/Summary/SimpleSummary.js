import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import SimpleSummaryDistrict from "./SimpleSummaryDistrict";

const SimpleSummary = () => {
  const { simpleDistricts } = useContext(DataContext);

  // useEffect(() => {
  //   districtsWithResults.forEach((district) => {
  //     district.parties.forEach((party) => {
  //       if (district.id === "op" && party.shortName === "MN") {
  //         party.result = 0;
  //       }
  //     });
  //   });

  //   setSimpleDistricts(
  //     districtsWithResults

  //   newSimpleDistricts.forEach((district) => {

  //   })
  //   const currentDistrict = districts[props.index];
  //   const partiesWithResults = currentDistrict.parties.map((party, index) => ({
  //     ...party,
  //     result:
  //       currentResults[index] !== undefined ? Number(currentResults[index]) : 0,
  //   }));

  //   const totalMandates = currentDistrict.deputies;

  //   // Funkcja do przydzielania mandatów
  //   const distributeSeats = (parties, totalSeats) => {
  //     const partiesWithSeats = parties.map((party) => ({
  //       ...party,
  //       seats: 0,
  //     }));

  //     for (let i = 0; i < totalSeats; i++) {
  //       const adjustedResults = partiesWithSeats.map((party) => ({
  //         ...party,
  //         adjustedResult: party.result / (party.seats + 1),
  //       }));

  //       const nextMandateParty = adjustedResults.reduce(
  //         (maxParty, party) =>
  //           party.adjustedResult > maxParty.adjustedResult ? party : maxParty,
  //         adjustedResults[0]
  //       );

  //       partiesWithSeats.find((party) => party.name === nextMandateParty.name)
  //         .seats++;
  //     }

  //     return partiesWithSeats;
  //   };

  //   // Sprawdzenie, czy każda partia ma wynik 0 w results
  //   const allPartiesHaveZeroResults = partiesWithResults.every(
  //     (party) => party.result === 0
  //   );

  //   // Przydzielanie mandatów tylko jeśli nie wszystkie partie mają wynik 0
  //   const partiesWithMandates = allPartiesHaveZeroResults
  //     ? partiesWithResults.map((party) => ({ ...party, seats: 0 }))
  //     : distributeSeats(partiesWithResults, totalMandates);

  //   const booleanFinalResult = () => {
  //     if (partiesWithResults.every((party) => party.result === 0)) {
  //       return false;
  //     } else return true;
  //   };

  //   setDistricts((prevDistricts) => {
  //     const updatedDistricts = [...prevDistricts];
  //     updatedDistricts[props.index] = {
  //       ...updatedDistricts[props.index],
  //       finalResult: partiesWithMandates,
  //       parties: partiesWithResults, // Zachowujemy pierwotne wyniki
  //       showFinalResult: booleanFinalResult(),
  //       forChart: newForChart,
  //     };

  //     return updatedDistricts;
  //   });
  //   );
  // }, [simpleParties, setSimpleDistricts]);

  // console.log(districtsWithResults);

  return (
    <div className="simpleSummary">
      <div className="simpleSummary-header">Podsumowanie</div>
      <div className="simpleSummary-main">
        <div className="simpleSummary-main__summary">ogólne wyniki</div>
        <div className="simpleSummary-main__details">
          {simpleDistricts.map((item, index) => {
            return <SimpleSummaryDistrict key={index} district={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SimpleSummary;
