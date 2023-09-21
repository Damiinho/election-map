import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import SimpleSummaryDistrict from "./SimpleSummaryDistrict";

const SimpleSummary = () => {
  const {
    setSimpleDistricts,
    simpleDistricts,
    simpleParties,
    setSimpleParties,
  } = useContext(DataContext);

  const districtsWithResults = [
    {
      name: "Legnica (1)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "dl",
    },
    {
      name: "Wałbrzych (2)",
      deputies: 8,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "db",
    },
    {
      name: "Wrocław (3)",
      deputies: 14,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "dw",
    },
    {
      name: "Bydgoszcz (4)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "cb",
    },
    {
      name: "Toruń (5)",
      deputies: 13,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ct",
    },
    {
      name: "Lublin (6)",
      deputies: 15,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "lu",
    },
    {
      name: "Chełm (7)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "lc",
    },
    {
      name: "Zielona Góra (8)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "fz",
    },
    {
      name: "Łódź (9)",
      deputies: 10,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "el",
    },
    {
      name: "Piotrków Trybunalski (10)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ep",
    },
    {
      name: "Sieradz (11)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "esi",
    },
    {
      name: "Chrzanów (12)",
      deputies: 8,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kch",
    },
    {
      name: "Kraków	(13)",
      deputies: 14,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kr",
    },
    {
      name: "Nowy Sącz (14)",
      deputies: 10,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kn",
    },
    {
      name: "Tarnów	(15)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "kt",
    },
    {
      name: "Płock (16)",
      deputies: 10,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wp",
    },
    {
      name: "Radom (17)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wr",
    },
    {
      name: "Siedlce (18)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ws",
    },
    {
      name: "Warszawa (19)",
      deputies: 20,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wa",
    },
    {
      name: "Warszawa – obwarzanek (20)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "wb",
    },
    {
      name: "Opole (21)",
      deputies: 12,
      method: "dhondt",
      parties: [
        ...simpleParties,
        {
          name: "Mniejszość Niemiecka",
          shortName: "MN",
          isOverThreshold: true,
          color: "#b1bb20",
          result: 0,
        },
      ],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "op",
    },
    {
      name: "Krosno (22)",
      deputies: 11,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "rk",
    },
    {
      name: "Rzeszów (23)",
      deputies: 15,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "rz",
    },
    {
      name: "Białystok (24)",
      deputies: 14,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "bi",
    },
    {
      name: "Gdańsk (25)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "gd",
    },
    {
      name: "Słupsk / Gdynia (26)",
      deputies: 14,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "gs",
    },
    {
      name: "Bielsko-Biała (27)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sb",
    },
    {
      name: "Częstochowa (28)",
      deputies: 7,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sc",
    },
    {
      name: "Gliwice (29)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sg",
    },
    {
      name: "Rybnik (30)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sr",
    },
    {
      name: "Katowice	(31)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "sk",
    },
    {
      name: "Sosnowiec (32)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "so",
    },
    {
      name: "Kielce	(33)",
      deputies: 16,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "tk",
    },
    {
      name: "Elbląg (34)",
      deputies: 8,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "ne",
    },
    {
      name: "Olsztyn (35)",
      deputies: 10,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},

      id: "no",
    },
    {
      name: "Kalisz (36)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "pk",
    },
    {
      name: "Konin (37)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "pn",
    },
    {
      name: "Piła (38)",
      deputies: 9,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "pp",
    },
    {
      name: "Poznań (39)",
      deputies: 10,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "po",
    },
    {
      name: "Koszalin (40)",
      deputies: 8,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "zk",
    },
    {
      name: "Szczecin (41)",
      deputies: 12,
      method: "dhondt",
      parties: [...simpleParties],
      showFinalResult: false,
      finalResult: [],
      forChart: {},
      id: "zs",
    },
  ];

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
          {districtsWithResults.map((item, index) => {
            return <SimpleSummaryDistrict key={index} parties={item.parties} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SimpleSummary;
