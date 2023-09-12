import React, { useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AppContext } from "../contexts/AppContext";

const DoughnutDescription = (props) => {
  const { districts, setDistricts } = useContext(AppContext);

  const handleArrowClick = (currentIndex, targetIndex) => {
    const updatedDistricts = [...districts];
    const currentDistrict = updatedDistricts[props.districtIndex];
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
          <th>Nazwa</th>
          <th>Wynik</th>
          <th>Miejsca</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.finalResult.map((item, index) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.result}</td>
            <td>{item.seats}</td>
            <td>
              <KeyboardArrowDownIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (index < props.finalResult.length - 1) {
                    handleArrowClick(index, index + 1);
                  }
                }}
              />
              <KeyboardArrowUpIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (index > 0) {
                    handleArrowClick(index, index - 1);
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
