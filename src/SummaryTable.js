import React, { useContext } from "react";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import { AppContext } from "./contexts/AppContext";

const SummaryTable = (props) => {
  const { finalResultSummary, setFinalResultSummary } = useContext(AppContext);

  const handleArrowClick = (currentIndex, targetIndex) => {
    const finalResultCopy = [...finalResultSummary];
    const temp = finalResultCopy[currentIndex];
    finalResultCopy[currentIndex] = finalResultCopy[targetIndex];
    finalResultCopy[targetIndex] = temp;
    setFinalResultSummary(finalResultCopy);
  };

  return (
    <table className="list__element-doughnut__description">
      <thead>
        <tr>
          <th>nazwa</th>
          <th>wynik</th>
          <th>miejsca</th>
          <th>pozycja</th>
        </tr>
      </thead>
      <tbody>
        {finalResultSummary.map((item, index) => (
          <tr style={{ backgroundColor: `${item.color}aa` }} key={item.name}>
            <td>{item.name}</td>
            <td>{item.result}</td>
            <td>{item.seats}</td>
            <td>
              <ArrowDropUpSharpIcon
                fontSize="small"
                style={{
                  cursor: index > 0 ? "pointer" : "",
                  backgroundColor: "#061a8b46",
                  borderRadius: 5,
                  color: index > 0 ? "white" : "#061a8b46",
                  margin: "0 auto",
                }}
                onClick={() => {
                  if (index > 0) {
                    handleArrowClick(index, index - 1);
                  }
                }}
                aria-label="Przesuń w górę"
              />
              <ArrowDropDownSharpIcon
                fontSize="small"
                style={{
                  cursor:
                    index < finalResultSummary.length - 1 ? "pointer" : "",
                  backgroundColor: "#061a8b46",
                  borderRadius: 5,
                  color:
                    index < finalResultSummary.length - 1
                      ? "white"
                      : "#061a8b46",
                  margin: "0 auto",
                }}
                onClick={() => {
                  if (index < finalResultSummary.length - 1) {
                    handleArrowClick(index, index + 1);
                  }
                }}
                aria-label="Przesuń w dół"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;
