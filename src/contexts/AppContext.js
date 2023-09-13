import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [parties, setParties] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const [showAddDistrict, setShowAddDistrict] = useState(true);
  const [showAddParty, setShowAddParty] = useState(true);
  const [showDistricts, setShowDistricts] = useState(true);

  const providerValue = {
    parties,
    setParties,
    districts,
    setDistricts,
    showOptions,
    setShowOptions,
    showAddDistrict,
    setShowAddDistrict,
    showAddParty,
    setShowAddParty,
    showDistricts,
    setShowDistricts,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
