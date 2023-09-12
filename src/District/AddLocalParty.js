import { Button, TextField } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AddLocalParty = (props) => {
  return (
    <label className="list__element-addlocal">
      <TextField
        color="warning"
        label="Nowy komitet"
        hiddenLabel
        variant="outlined"
        size="small"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.handleSubmitAddLocalParty();
          }
        }}
        sx={{
          input: {
            backgroundColor: "#50402923",
            borderRadius: 1,
          },
        }}
        style={{ width: 150 }}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={props.handleSubmitAddLocalParty}
        style={{ minWidth: 40 }}
      >
        <CheckCircleIcon color="string" fontSize="medium" />
      </Button>
    </label>
  );
};

export default AddLocalParty;
