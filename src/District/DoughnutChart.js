import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  return (
    <div className="districts-list__element-doughnut__item">
      <Doughnut
        data={props.data}
        style={{ cursor: "pointer" }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
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
