import { Button } from "@mui/material";
import Questions from "./Questions";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const TestList = () => {
  const navigate = useNavigate();
  const { windowWidth } = useContext(AppContext);
  return (
    <div className="test">
      <div className="test__list">
        <div className="test__list-title">
          <p>lista pytań</p>
          <Button
            variant="contained"
            color="info"
            size="small"
            style={{
              textTransform: "lowercase",
              position: windowWidth > 450 ? "absolute" : "static",
              bottom: windowWidth > 450 ? 10 : "auto",
              right: windowWidth > 450 ? 10 : "auto",
              margin: "0 auto",
            }}
            onClick={() => {
              navigate(-1);
            }}
            startIcon={<ReplySharpIcon />}
          >
            powrót
          </Button>
        </div>
        <Questions />
      </div>
    </div>
  );
};

export default TestList;
