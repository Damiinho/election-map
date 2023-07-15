import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [howMany, setHowMany] = useState(5);
  const [parties, setParties] = useState([]);

  const providerValue = {
    parties,
    setParties,
    howMany,
    setHowMany,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
