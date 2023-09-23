import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import SimpleSummaryDistrict from "./SimpleSummaryDistrict";
import { AppContext } from "../contexts/AppContext";
import MySmallInfoBox from "../Components/MySmallInfoBox";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import MyBar from "../Components/MyBar";
import SimpleMap from "./SimpleMap";

const SimpleSummary = () => {
  const { simpleDistricts, simpleParties, setSimpleParties } =
    useContext(DataContext);
  const { simpleFinalResultSummary, setSimpleFinalResultSummary } =
    useContext(AppContext);

  const handleArrowClick = (currentIndex, targetIndex, shortName) => {
    const finalResultCopy = [...simpleFinalResultSummary];
    const temp = finalResultCopy[currentIndex];

    finalResultCopy[currentIndex] = finalResultCopy[targetIndex];
    finalResultCopy[targetIndex] = temp;
    setSimpleFinalResultSummary(finalResultCopy);
  };

  useEffect(() => {
    const updatedFinalResultSummary = [];
    const nameColorMap = {};

    simpleDistricts.forEach((district) => {
      if (district.finalResult && Array.isArray(district.finalResult)) {
        district.finalResult.forEach((item) => {
          if (item.name && item.color) {
            const key = `${item.name}_${item.color}`;

            if (nameColorMap[key]) {
              nameColorMap[key].result += item.result;
              nameColorMap[key].seats += item.seats;
            } else {
              nameColorMap[key] = { ...item };
              updatedFinalResultSummary.push(nameColorMap[key]);
            }
          }
        });
      }
    });

    // Sortowanie tablicy według wartości seats od największej do najmniejszej
    updatedFinalResultSummary.sort((a, b) => b.seats - a.seats);

    setSimpleFinalResultSummary(updatedFinalResultSummary);
  }, [simpleDistricts, setSimpleFinalResultSummary]);

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
        <div className="simpleSummary-main__summary">
          <div className="simpleSummary-main__summary-box">
            {simpleFinalResultSummary.map((party, index) => {
              // if (party.shortName === "inne") return null;

              return (
                <div
                  key={index}
                  className="simpleSummary-main__summary-box__item"
                >
                  <ArrowLeftRoundedIcon
                    onClick={() => {
                      if (index > 0) {
                        handleArrowClick(index, index - 1, party.shortName);
                      }
                    }}
                    style={{
                      cursor: index > 0 ? "pointer" : "",
                      borderRadius: 5,
                      color: index > 0 ? "#777777" : "transparent",
                      margin: "0 auto",
                      position: "absolute",
                      top: "50%",
                      left: "-10px",
                    }}
                    fontSize="large"
                  />
                  <MySmallInfoBox
                    txt={party.shortName}
                    value={party.seats}
                    backgroundTop={party.isOverThreshold ? party.color : "grey"}
                    allWidth={70}
                    radius="0px"
                    title={party.name}
                  />
                  <ArrowRightRoundedIcon
                    onClick={() => {
                      if (index < simpleFinalResultSummary.length - 1) {
                        handleArrowClick(index, index + 1, party.shortName);
                      }
                    }}
                    style={{
                      cursor:
                        index < simpleFinalResultSummary.length - 1
                          ? "pointer"
                          : "",
                      borderRadius: 5,
                      color:
                        index < simpleFinalResultSummary.length - 1
                          ? "#777777"
                          : "transparent",
                      margin: "0 auto",
                      position: "absolute",
                      top: "50%",
                      right: "-10px",
                    }}
                    fontSize="large"
                  />
                </div>
              );
            })}
          </div>

          <MyBar
            result={simpleFinalResultSummary}
            value="seats"
            name="Liczba mandatów"
            tooltip={false}
            barWidth="100%"
            borderRadius={0}
            boxShadow
            fontSize={20}
            height={70}
          />
          <MyBar
            result={simpleParties}
            value="result"
            name="Wynik procentowy"
            barWidth="100%"
            borderRadius={0}
            boxShadow
            fontSize={20}
            height={70}
          />
        </div>
        <div className="simpleSummary-main__summary-map">
          <SimpleMap />
        </div>
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
