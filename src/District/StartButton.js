import ReplayIcon from "@mui/icons-material/Replay";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Button } from "@mui/material";

const StartButton = (props) => {
  return (
    <div className="districts__element-start">
      <Button
        variant="contained"
        color={`${
          props.currentDistrict.showFinalResult ? "warning" : "secondary"
        }`}
        size="small"
        style={{
          textTransform: "lowercase",
        }}
        onClick={
          props.currentDistrict.showFinalResult
            ? props.handleRegenerate
            : props.handleStart
        }
        startIcon={
          props.currentDistrict.showFinalResult ? (
            <ReplayIcon />
          ) : (
            <PlayCircleOutlineIcon />
          )
        }
      >
        {`${
          props.currentDistrict.showFinalResult
            ? "popraw wyniki"
            : "generuj mandaty"
        }`}
      </Button>
    </div>
  );
};

export default StartButton;
