import React, { useContext } from "react";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import { AppContext } from "../../contexts/AppContext";
const DoughnutDescription = (props) => {
  const { districts, setDistricts } = useContext(AppContext);

  const handleArrowClick = (currentIndex, targetIndex) => {
    const updatedDistricts = [...districts];
    const currentDistrict = props.currentDistrict;
    const finalResultCopy = [...currentDistrict.finalResult];

    // Swap the items in finalResultCopy
    const temp = finalResultCopy[currentIndex];
    finalResultCopy[currentIndex] = finalResultCopy[targetIndex];
    finalResultCopy[targetIndex] = temp;

    currentDistrict.finalResult = finalResultCopy;
    setDistricts(updatedDistricts);
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
        {props.finalResult.map((item, index) => (
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
              />
              <ArrowDropDownSharpIcon
                fontSize="small"
                style={{
                  cursor: index < props.finalResult.length - 1 ? "pointer" : "",
                  backgroundColor: "#061a8b46",
                  borderRadius: 5,
                  color:
                    index < props.finalResult.length - 1
                      ? "white"
                      : "#061a8b46",
                  margin: "0 auto",
                }}
                onClick={() => {
                  if (index < props.finalResult.length - 1) {
                    handleArrowClick(index, index + 1);
                  }
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoughnutDescription;
