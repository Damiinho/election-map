const DoughnutDescription = (props) => {
  return (
    <div className="districts__element-doughnut__description">
      {props.finalResult.map((item, index) => (
        <div key={index}>
          {item.name}, wynik: {item.result}, miejsca: {item.seats}
        </div>
      ))}
    </div>
  );
};

export default DoughnutDescription;
