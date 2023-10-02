import { Button } from "@mui/material";
import Questions from "./Questions";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { useNavigate } from "react-router-dom";

const TestList = () => {
  const navigate = useNavigate();
  return (
    <div className="test__list">
      <div className="test__list-title">
        Test – lista pytań
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
            navigate("/test");
          }}
          startIcon={<ReplySharpIcon />}
        >
          Wróć do testu
        </Button>
      </div>
      <Questions />
    </div>
  );
};

export default TestList;
