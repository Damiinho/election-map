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
          <p>Test – lista pytań</p>
          <Button
            variant="contained"
            color="info"
            size="small"
            style={{
              textTransform: "lowercase",
              position: "absolute",
              bottom: 10,
              right: 10,
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
