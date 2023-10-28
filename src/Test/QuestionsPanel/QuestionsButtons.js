import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Button } from "@mui/material";
import { useContext } from "react";
import { TestContext } from "../../contexts/TestContext";

const QuestionsButtons = () => {
  const { questions, currentQuestion, setCurrentQuestion } =
    useContext(TestContext);
  return (
    <>
      <div className="test__questions-buttons">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "lowercase",
            fontFamily: "Ysabeau Office, sans-serif",
            fontSize: 15,
            border: "1px solid black",
            padding: "7px 0",
            borderRadius: 4,
            boxShadow:
              "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            width: currentQuestion > 0 ? 185 : "auto",
          }}
        >
          <span style={{ padding: "0 15px" }}>
            pytanie {currentQuestion + 1}/{questions.length}
          </span>
          {currentQuestion > 0 && (
            <Button
              size="small"
              variant="outlined"
              style={{
                textTransform: "lowercase",
                fontFamily: "Ysabeau Office, sans-serif",
                marginRight: 5,
              }}
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
              }}
            >
              cofnij
            </Button>
          )}
        </div>
        {currentQuestion > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "lowercase",
              fontFamily: "Ysabeau Office, sans-serif",
              fontSize: 15,
              border: "1px solid black",
              padding: "5px 5px",
              gap: 5,
              borderRadius: 4,
              boxShadow:
                "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            }}
          >
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              style={{
                textTransform: "lowercase",
                fontFamily: "Ysabeau Office, sans-serif",
              }}
              // className="test__questions-item__effect"
              data-tooltip-id={"question-tooltip"}
              endIcon={<TipsAndUpdatesIcon />}
            >
              efekt
            </Button>

            <Button
              size="medium"
              variant="contained"
              style={{
                textTransform: "lowercase",
                fontFamily: "Ysabeau Office, sans-serif",
              }}
              data-tooltip-id={"info-tooltip"}
              endIcon={<HelpOutlineIcon />}
              disabled={questions[currentQuestion].info ? false : true}
            >
              info
            </Button>
          </div>
        ) : (
          <>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              style={{
                textTransform: "lowercase",
                fontFamily: "Ysabeau Office, sans-serif",
              }}
              // className="test__questions-item__effect"
              data-tooltip-id={"question-tooltip"}
              endIcon={<TipsAndUpdatesIcon />}
            >
              efekt
            </Button>

            <Button
              size="medium"
              variant="contained"
              style={{
                textTransform: "lowercase",
                fontFamily: "Ysabeau Office, sans-serif",
              }}
              data-tooltip-id={"info-tooltip"}
              endIcon={<HelpOutlineIcon />}
              disabled={questions[currentQuestion].info ? false : true}
            >
              info
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default QuestionsButtons;
