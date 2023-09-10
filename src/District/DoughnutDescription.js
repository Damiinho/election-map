import React from "react";

const DoughnutDescription = (props) => {
  return (
    <table className="districts-list__element-doughnut__description">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Wynik</th>
          <th>Miejsca</th>
        </tr>
      </thead>
      <tbody>
        {props.finalResult.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.result}</td>
            <td>{item.seats}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoughnutDescription;
