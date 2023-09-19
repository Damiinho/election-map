import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [parties, setParties] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [simpleParties, setSimpleParties] = useState([
    {
      name: "Prawo i Sprawiedliwość",
      isOverThreshold: true,
      color: "#175aa7",
      result: 0,
    },
    {
      name: "Koalicja Obywatelska",
      isOverThreshold: true,
      color: "#f9641d",
      result: 0,
    },
    {
      name: "Konfederacja",
      isOverThreshold: true,
      color: "#1a2e4d",
      result: 0,
    },
    {
      name: "Trzecia Droga",
      isOverThreshold: true,
      color: "#96cc22",
      result: 0,
    },
    {
      name: "Lewica",
      isOverThreshold: true,
      color: "#e0002a",
      result: 0,
    },
    {
      name: "Bezpartyjni Samorządowcy",
      isOverThreshold: true,
      color: "#000000",
      result: 0,
    },
    {
      name: "Pozostałe komitety",
      isOverThreshold: true,
      color: "#999999",
      result: 0,
    },
  ]);

  const providerValue = {
    parties,
    setParties,
    districts,
    setDistricts,
    simpleParties,
    setSimpleParties,
  };

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
