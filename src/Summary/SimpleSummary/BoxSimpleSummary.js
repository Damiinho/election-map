import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import MySmallInfoBox from "../../Components/MySmallInfoBox";

const BoxSimpleSummary = () => {
  const { simpleFinalResultSummary, setSimpleFinalResultSummary, windowWidth } =
    useContext(AppContext);

  const handleArrowClick = (currentIndex, targetIndex, shortName) => {
    const finalResultCopy = [...simpleFinalResultSummary];
    const temp = finalResultCopy[currentIndex];

    finalResultCopy[currentIndex] = finalResultCopy[targetIndex];
    finalResultCopy[targetIndex] = temp;
    setSimpleFinalResultSummary(finalResultCopy);
  };

  return (
    <div className="simpleSummary-main__summary-box">
      {simpleFinalResultSummary.map((party, index) => {
        // if (party.shortName === "inne") return null;

        return (
          <div key={index} className="simpleSummary-main__summary-box__item">
            <ArrowLeftRoundedIcon
              onClick={() => {
                if (index > 0) {
                  handleArrowClick(index, index - 1, party.shortName);
                }
              }}
              style={{
                cursor: index > 0 ? "pointer" : "",
                borderRadius: 5,
                color: index > 0 ? "#777777" : "transparent",
                margin: "0 auto",
                position: "absolute",
                top: "50%",
                left: "-10px",
              }}
              fontSize="large"
            />
            <MySmallInfoBox
              txt={party.shortName}
              value={party.seats}
              backgroundTop={party.isOverThreshold ? party.color : "grey"}
              allWidth={windowWidth > 350 ? 80 : 50}
              radius="0px"
              title={party.name}
              fontSizeTop={windowWidth > 350 ? "" : 10}
              fontSizeBottom={windowWidth > 350 ? "" : 15}
            />
            <ArrowRightRoundedIcon
              onClick={() => {
                if (index < simpleFinalResultSummary.length - 1) {
                  handleArrowClick(index, index + 1, party.shortName);
                }
              }}
              style={{
                cursor:
                  index < simpleFinalResultSummary.length - 1 ? "pointer" : "",
                borderRadius: 5,
                color:
                  index < simpleFinalResultSummary.length - 1
                    ? "#777777"
                    : "transparent",
                margin: "0 auto",
                position: "absolute",
                top: "50%",
                right: "-10px",
              }}
              fontSize="large"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BoxSimpleSummary;
