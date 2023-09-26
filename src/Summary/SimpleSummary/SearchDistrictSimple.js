import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

const SearchDistrictSimple = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setSimpleSearchValue } = useContext(AppContext);
  const handleSubmit = () => {
    setSimpleSearchValue(searchValue);
  };

  return (
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
  );
};

export default SearchDistrictSimple;
