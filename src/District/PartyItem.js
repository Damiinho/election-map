import { Button, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const PartyItem = (props) => {
  return (
    <div className="districts-list__element-list__item">
      <p>{props.item.name}</p>
      <div className="districts-list__element-list__item-handle">
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
          onClick={() => props.handleLocalDelete(props.index, props.index)}
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
                color: "#cccccc",
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
              backgroundColor: "#d6c93855",
              borderRadius: 1,
            },
            label: {
              color: "#cccccc",
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