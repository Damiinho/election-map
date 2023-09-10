import { Button, ButtonGroup } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

const TopButtons = (props) => {
  return (
    <div className="districts-list__element-buttons">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="error"
      >
        <Button
          variant="contained"
          startIcon={
            props.addLocal ? <CancelIcon /> : <AddCircleOutlinedIcon />
          }
          color={props.addLocal ? "warning" : "success"}
          size="small"
          style={{
            textTransform: "lowercase",
            width: 130,
          }}
          onClick={props.handleAddLocalParty}
        >
          {props.addLocal ? "nie dodawaj" : "lokalny komitet"}
        </Button>{" "}
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={props.handleRemove}
        >
          <DeleteForeverIcon color="string" fontSize="medium" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TopButtons;
