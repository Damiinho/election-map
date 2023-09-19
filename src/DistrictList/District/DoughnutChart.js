import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  return (
    <div className="list__element-doughnut__item">
      <Doughnut
        data={props.data}
        style={{ cursor: "pointer" }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "left", // Ustaw pozycję legendy na lewo
              align: "center", // Ustawienie align na "start" pozwoli umieścić legendę po lewej
              labels: {
                color: "white",
                letterSpacing: "10px",
              },
            },
          },
        }}
      ></Doughnut>
    </div>
  );
};

export default DoughnutChart;
