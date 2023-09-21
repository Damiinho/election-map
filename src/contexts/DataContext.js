import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [parties, setParties] = useState([]);

  const [simpleParties, setSimpleParties] = useState([
    {
      name: "Prawo i Sprawiedliwość",
      shortName: "PiS",
      isOverThreshold: true,
      color: "#175aa7",
      result: 0,
    },
    {
      name: "Koalicja Obywatelska",
      shortName: "KO",
      isOverThreshold: true,
      color: "#f9641d",
      result: 0,
    },
    {
      name: "Konfederacja",
      shortName: "KWiN",
      isOverThreshold: true,
      color: "#1a2e4d",
      result: 0,
    },
    {
      name: "Trzecia Droga",
      shortName: "TD",
      isOverThreshold: true,
      color: "#96cc22",
      result: 0,
    },
    {
      name: "Lewica",
      shortName: "Lewica",
      isOverThreshold: true,
      color: "#e0002a",
      result: 0,
    },
    {
      name: "Bezpartyjni Samorządowcy",
      shortName: "BS",
      isOverThreshold: false,
      color: "#000000",
      result: 0,
    },
    {
      name: "Pozostałe komitety",
      shortName: "inne",
      isOverThreshold: false,
      color: "#999999",
      result: 0,
    },
  ]);
  const [districts, setDistricts] = useState([]);
  const [simpleDistricts, setSimpleDistricts] = useState([]);

  const providerValue = {
    parties,
    setParties,
    districts,
    setDistricts,
    simpleParties,
    setSimpleParties,
    simpleDistricts,
    setSimpleDistricts,
  };

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
