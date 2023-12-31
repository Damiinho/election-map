import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

const SearchDistrictSimple = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setSimpleSearchValue, simpleByName, setSimpleByName, windowWidth } =
    useContext(AppContext);
  const handleSubmit = () => {
    setSimpleSearchValue(searchValue);
  };

  return (
    <div className="simpleSummary-main__details-header__search">
      <Button
        color="primary"
        variant="contained"
        style={{
          fontFamily: "Mukta",
          fontSize: windowWidth > 810 ? "" : windowWidth > 500 ? 12 : 10,
          width: windowWidth > 500 ? "" : 145,
        }}
        disabled={simpleByName ? false : true}
        onClick={() => {
          setSimpleByName(false);
        }}
      >
        {windowWidth > 810 ? "uszereguj" : ""} według numerów list
      </Button>
      <TextField
        color="error"
        label="szukaj okręgu"
        hiddenLabel
        variant="outlined"
        size="small"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        sx={{
          input: {
            backgroundColor: "#50402923",
            borderRadius: 1,
          },
        }}
      />
      <Button
        color="primary"
        variant="contained"
        style={{
          fontFamily: "Mukta",

          fontSize: windowWidth > 810 ? "" : windowWidth > 500 ? 12 : 10,
        }}
        disabled={simpleByName ? true : false}
        onClick={() => {
          setSimpleByName(true);
        }}
      >
        {windowWidth > 810 ? "uszereguj" : ""} według alfabetu
      </Button>
    </div>
  );
};

export default SearchDistrictSimple;
