import { Button, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const PartyItem = (props) => {
  console.log(props);
  return (
    <div className="list__element-parties__item">
      <p>{props.item.name}</p>
      <div className="list__element-parties__item-handle">
        <Button
          variant="contained"
          size="medium"
          color="error"
          sx={{
            minWidth: "20px",
            width: "20px",
            height: "30px",
            minHeight: "30px",
            "&:hover": {
              opacity: 1,
            },
            opacity: 0.6,
          }}
          onClick={() =>
            props.handleLocalDelete(props.index, props.currentDistrictIndex)
          }
        >
          <CancelIcon />
        </Button>
        <TextField
          color="info"
          type="number"
          label="wynik"
          InputProps={{
            inputProps: {
              style: {
                textAlign: "center",
                color: "#ffffff",
                textShadow: "1px 1px black",
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            input: {
              backgroundColor: "#dfdfdf86",
              borderRadius: 1,
            },
            label: {
              color: "#ffffff",
              "&.Mui-focused": {
                color: "#ffffff",
                letterSpacing: 1.5,
              },
            },
          }}
          size="small"
          onChange={(e) =>
            props.handleResultChange(props.index, e.target.value)
          }
          value={props.currentResults[props.index]}
          variant="outlined"
          style={{ width: 80 }}
        />
      </div>
    </div>
  );
};

export default PartyItem;
