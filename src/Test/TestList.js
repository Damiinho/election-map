import { Button } from "@mui/material";
import Questions from "./Questions";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { useNavigate } from "react-router-dom";

const TestList = () => {
  const navigate = useNavigate();
  return (
    <div className="test">
      <div className="test__list">
        <div className="test__list-title">
          <p>lista pytań</p>

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
