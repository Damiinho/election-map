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
          {/* <Button
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
          </Button> */}
          <Button
            size="small"
            style={{
              color: "white",
              textTransform: "lowercase",
              fontFamily: "Ysabeau Office, sans-serif",
              fontWeight: 600,
              gap: 10,
              position: "absolute",
              bottom: 5,
              right: 5,
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <span
              style={{
                justifyContent: "right",
                alignItems: "center",
                width: "100%",
                display: "flex",
                gap: 10,
              }}
            >
              <span style={{ position: "relative", top: 2 }}>powrót</span>
              <ReplySharpIcon fontSize="medium" />
            </span>
          </Button>
        </div>
        <Questions />
      </div>
    </div>
  );
};

export default TestList;
