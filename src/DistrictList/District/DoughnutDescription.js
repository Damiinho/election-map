import React, { useContext } from "react";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import { DataContext } from "../../contexts/DataContext";
const DoughnutDescription = (props) => {
  const { districts, setDistricts } = useContext(DataContext);

  const handleArrowClick = (currentIndex, targetIndex) => {
    const updatedDistricts = [...districts];
    const currentDistrict = props.currentDistrict;
    const finalResultCopy = [...currentDistrict.finalResult];
    const forChartCopy = { ...currentDistrict.forChart }; // Skopiuj obiekt forChart

    // Swap the items in finalResultCopy
    const temp = finalResultCopy[currentIndex];
    finalResultCopy[currentIndex] = finalResultCopy[targetIndex];
    finalResultCopy[targetIndex] = temp;

    // Swap the items in forChartCopy.datasets[0]
    const datasetsCopy = [...forChartCopy.datasets];
    const datasetCopy = { ...datasetsCopy[0] }; // Skopiuj pierwszy (i jedyny) zestaw danych
    const tempData = datasetCopy.data[currentIndex];
    datasetCopy.data[currentIndex] = datasetCopy.data[targetIndex];
    datasetCopy.data[targetIndex] = tempData;
    const tempBgc = datasetCopy.backgroundColor[currentIndex];
    datasetCopy.backgroundColor[currentIndex] =
      datasetCopy.backgroundColor[targetIndex];
    datasetCopy.backgroundColor[targetIndex] = tempBgc;

    datasetsCopy[0] = datasetCopy; // Umieść zaktualizowany zestaw danych w kopii

    forChartCopy.datasets = datasetsCopy; // Umieść zaktualizowane dane w kopii forChart

    // Aktualizuj również kolejność etykiet
    const labelsCopy = [...forChartCopy.labels];
    const tempLabel = labelsCopy[currentIndex];
    labelsCopy[currentIndex] = labelsCopy[targetIndex];
    labelsCopy[targetIndex] = tempLabel;
    forChartCopy.labels = labelsCopy;

    currentDistrict.forChart = forChartCopy;
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
