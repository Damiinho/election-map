import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // const [parties, setParties] = useState([]);
  // const [districts, setDistricts] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const [showAddDistrict, setShowAddDistrict] = useState(true);
  const [showAddParty, setShowAddParty] = useState(true);
  const [showDistricts, setShowDistricts] = useState(true);
  const [showSummary, setShowSummary] = useState(true);
  const [showAddPartyList, setShowAddPartyList] = useState(true);
  const [finalResultSummary, setFinalResultSummary] = useState([]);
  const [simpleFinalResultSummary, setSimpleFinalResultSummary] = useState([]);
  const [strictSejm, setStrictSejm] = useState(false);
  const [searchDistrictValue, setSearchDistrictValue] = useState("");
  const [simpleSearchValue, setSimpleSearchValue] = useState("");
  const [showMapByResults, setShowMapByResults] = useState(false);
  const [advancedVersion, setAdvancedVersion] = useState(false);
  const [showSimpleSummary, setShowSimpleSummary] = useState(false);
  const [correction, setCorrection] = useState(true);
  const [simpleByNumbers, setSimpleByNumbers] = useState(true);
  const [simpleByName, setSimpleByName] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTest, setIsTest] = useState(false);

  const providerValue = {
    simpleByNumbers,
    setSimpleByNumbers,
    simpleByName,
    setSimpleByName,
    simpleSearchValue,
    setSimpleSearchValue,
    showOptions,
    setShowOptions,
    showAddDistrict,
    setShowAddDistrict,
    showAddParty,
    setShowAddParty,
    showDistricts,
    setShowDistricts,
    showSummary,
    setShowSummary,
    showAddPartyList,
    setShowAddPartyList,
    finalResultSummary,
    setFinalResultSummary,
    strictSejm,
    setStrictSejm,
    searchDistrictValue,
    setSearchDistrictValue,
    showMapByResults,
    setShowMapByResults,
    advancedVersion,
    setAdvancedVersion,
    showSimpleSummary,
    setShowSimpleSummary,
    correction,
    setCorrection,
    simpleFinalResultSummary,
    setSimpleFinalResultSummary,
    windowWidth,
    setWindowWidth,
    isTest,
    setIsTest,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
