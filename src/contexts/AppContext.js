import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [parties, setParties] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [showOptions, setShowOptions] = useState(true);

  const providerValue = {
    parties,
    setParties,
    districts,
    setDistricts,
    showOptions,
    setShowOptions,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
