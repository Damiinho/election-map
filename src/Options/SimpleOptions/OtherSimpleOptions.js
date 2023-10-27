import { Button, ButtonGroup, Fab } from "@mui/material";

import UndoRoundedIcon from "@mui/icons-material/UndoRounded";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const OtherSimpleOptions = () => {
  const { correction, setCorrection, windowWidth } = useContext(AppContext);

  const handleCorrection = () => {
    setCorrection(!correction);
  };

  return (
    <div className="simpleOptions-other">
      <ButtonGroup>
        <Button
          size="small"
          color="info"
          onClick={handleCorrection}
          variant="contained"
          style={{ fontFamily: "Mukta" }}
          endIcon={<HelpOutlineOutlinedIcon style={{ cursor: "help" }} />}
          disabled={correction ? false : true}
          data-tooltip-id="correction-tooltip"
        >
          nie koryguj poparcia
        </Button>
        <Button
          color="error"
          variant="contained"
          disabled={correction ? true : false}
          onClick={handleCorrection}
        >
          <UndoRoundedIcon />
        </Button>
        {!(windowWidth > 550) && (
          <Fab
            color="primary"
            size="small"
            data-tooltip-id="options-tooltip"
            style={{ marginLeft: 5 }}
          >
            <span
              style={{
                textTransform: "lowercase",
                fontSize: 25,
                fontFamily: "Oleo Script, sans-serif",
              }}
            >
              i
            </span>
          </Fab>
        )}
      </ButtonGroup>
    </div>
  );
};

export default OtherSimpleOptions;
