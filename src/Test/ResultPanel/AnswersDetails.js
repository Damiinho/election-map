import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { TestContext } from "../../contexts/TestContext";
import { Slider } from "@mui/material";

const AnswerDetails = () => {
  const { questions, answersValue } = useContext(TestContext);
  const { windowWidth } = useContext(AppContext);

  return (
    <div
      style={{
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns:
          windowWidth > 865
            ? "1fr 1fr 1fr"
            : windowWidth > 600
            ? "1fr 1fr"
            : "1fr",
      }}
    >
      {questions.map((question, index) => {
        const QuestionComponent = () => (
          <div
            style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              textAlign: "justify",
              padding: "10px 10px 20px",
              width: "100%",
              fontSize: windowWidth > 350 ? 20 : 16,
              fontWeight: 500,
            }}
          >
            {index + 1}. {question.question}
          </div>
        );

        const MarksComponent = () => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // flexWrap: "wrap",
              // columnGap: 10,
              // rowGap: 5,
              // justifyContent: "space-between",
              // alignItems: "center",
              width: "100%",
              //   height: "100%",
              fontSize: windowWidth > 350 ? 16 : 13,
            }}
          >
            {question.marks ? (
              question.marks.map((mark, index) => (
                <div
                  key={`mark${index}`}
                  style={{
                    padding: "0px 5px",
                    backgroundColor:
                      index % 2 === 0 ? "#88bfec55" : "#f4f4f43a",
                    boxShadow:
                      "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {mark.value} {mark.answer}
                </div>
              ))
            ) : (
              <>
                <div
                  key={`span${index}`}
                  style={{
                    padding: "0px 5px",
                    backgroundColor: "#88bfec55",
                    boxShadow:
                      "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  -0.99 Nie zgadzam się
                </div>
                <div
                  key={`span2${index}`}
                  style={{
                    padding: "0px 5px",
                    backgroundColor: "#f4f4f43a",
                    boxShadow:
                      "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  0 Nie wiem
                </div>
                <div
                  key={`span3${index}`}
                  style={{
                    padding: "0px 5px",
                    backgroundColor: "#88bfec55",
                    boxShadow:
                      "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  0.99 Zgadzam się
                </div>
              </>
            )}
          </div>
        );

        const SliderComponent = () => (
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#7396b599",
              height: 60,
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slider
                step={0.01}
                min={question.min || -1}
                max={question.max || 1}
                value={answersValue[index].value}
                readOnly
                sx={{
                  // color: "red",
                  height: 8,
                  width: "90%",
                  "span.MuiSlider-valueLabel": {
                    backgroundColor: "blue",
                    color: "white",
                  },
                  "& .MuiSlider-thumb": {
                    height: 24,
                    width: 24,
                    backgroundColor: "#fff",
                    border: "2px solid currentColor",
                    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                      boxShadow: "inherit",
                    },
                    "&:before": {
                      display: "none",
                    },
                  },

                  // "& .MuiSlider-valueLabel": {
                  //   lineHeight: 1.2,
                  //   fontSize: 12,
                  //   background: "unset",
                  //   padding: 0,
                  //   width: 40,
                  //   height: 40,
                  //   borderRadius: "50% 50% 50% 0",
                  //   backgroundColor: "#52af77",
                  //   transformOrigin: "bottom left",
                  //   transform:
                  //     "translate(50%, -100%) rotate(-45deg) scale(0)",
                  //   "&:before": { display: "none" },
                  //   "&.MuiSlider-valueLabelOpen": {
                  //     transform:
                  //       "translate(50%, -100%) rotate(-45deg) scale(1)",
                  //   },
                  //   "& > *": {
                  //     transform: "rotate(45deg)",
                  //   },
                  // },
                }}
              />
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              {answersValue[index].value}
            </div>
          </div>
        );

        const ValuesComponent = () => (
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: 15,
                backgroundColor: "#50ffdd55",
                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              wpływ
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "5fr 1fr",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#f0494955",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span>Socjalizm / wolny rynek</span>

                <span style={{ backgroundColor: "#ffffffaa" }}>
                  {answersValue[index].right}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "5fr 1fr",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#8349f055",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span>Tradycja / postęp</span>

                <span style={{ backgroundColor: "#ffffffaa" }}>
                  {answersValue[index].prog}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "5fr 1fr",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#fdfb7f55",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span>Anarchizm / autorytaryzm</span>
                <span style={{ backgroundColor: "#ffffffaa" }}>
                  {answersValue[index].auth}
                </span>
              </div>
            </div>
          </div>
        );

        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 10,
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
              padding: "10px 10px",

              fontFamily: "Ysabeau Office, sans-serif",
              backgroundColor: index % 2 === 0 ? "#d9e1e899" : "#c4d9ea99",
            }}
          >
            <QuestionComponent />
            <MarksComponent />

            <SliderComponent />
            <ValuesComponent />
          </div>
        );
      })}
    </div>
  );
};

export default AnswerDetails;
