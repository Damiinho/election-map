import { Button, ButtonGroup, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const SearchDistrict = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchDistrictValue, setSearchDistrictValue, setShowDistricts } =
    useContext(AppContext);
  const handleSubmit = () => {
    setSearchDistrictValue(searchValue);
    setShowDistricts(true);
  };

  return (
    <div className="App__districtlist-title__search">
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
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="error"
      >
        {/* {!props.showFinalResult && ( */}
        <Button
          variant="contained"
          color={"info"}
          size="small"
          style={{
            marginLeft: 1,
            textTransform: "lowercase",
            height: 38,
          }}
          onClick={handleSubmit}
        >
          <SearchSharpIcon />
        </Button>
        {/* )} */}
        <Button
          variant="contained"
          color="warning"
          size="small"
          onClick={() => {
            setSearchDistrictValue("");
            setSearchValue("");
          }}
        >
          <DeleteForeverIcon color="string" fontSize="medium" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SearchDistrict;
