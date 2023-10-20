import React, { useContext } from "react";
import ReactECharts from "echarts-for-react";
import "echarts-gl";
import { AppContext } from "../contexts/AppContext";

const TestResultBox = (props) => {
  const { windowWidth } = useContext(AppContext);
  const anaSocTraColor = "rgba(230, 130, 255, 0.36)";
  const anaSocProColor = "rgba(255, 0, 135, 0.36)";
  const autSocTraColor = "rgba(68, 0, 145, 0.36)";
  const autSocProColor = "rgba(68, 0, 145, 0.5)";
  const autCapProColor = "rgba(115, 255, 102, 0.36)";
  const autCapTraColor = "rgba(232, 255, 102, 0.36)";
  const anaCapProColor = "rgba(108, 255, 255, 0.5)";
  const anaCapTraColor = "rgba(108, 109, 255, 0.36)";
  const fontSizeForLabel = `${
    windowWidth < 300
      ? 7
      : windowWidth < 400
      ? 10
      : windowWidth < 500
      ? 12
      : windowWidth < 650
      ? 14
      : 16
  }`;
  const fontSizeForAxis = `${
    windowWidth < 300 ? 6 : windowWidth < 400 ? 8 : windowWidth < 500 ? 10 : 12
  }`;

  const option = {
    grid3D: {},
    xAxis3D: {
      min: -10,
      max: 10,
      name: "oś ekonomiczna",
      nameTextStyle: {
        fontSize: fontSizeForLabel,
      },

      axisLine: {
        lineStyle: {
          color: "red",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          // color: "#ffff0001",
        },
      },
      axisLabel: {
        show: true,
        formatter: (value) => {
          // Mapuj wartość -1 na etykietę "socjalizm"
          if (value === -5) {
            return "socjalizm";
          } else if (value === 5) {
            return "kapitalizm";
          }
          // Domyślnie użyj wartości liczbowej
          return value;
        },
        textStyle: {
          fontSize: fontSizeForAxis, // Domyślny rozmiar czcionki
        },
      },
    },
    yAxis3D: {
      min: -10,
      max: 10,
      name: "oś cywilizacyjna",
      nameTextStyle: {
        fontSize: fontSizeForLabel,
      },
      axisLine: {
        lineStyle: {
          color: "green",
        },
      },

      splitArea: {
        show: true,
        areaStyle: {
          // color: "ff000001",
        },
      },
      axisLabel: {
        show: true,
        formatter: (value) => {
          // Mapuj wartość -1 na etykietę "socjalizm"
          if (value === -5) {
            return "tradycja";
          } else if (value === 5) {
            return "postęp";
          }
          // Domyślnie użyj wartości liczbowej
          return value;
        },
        textStyle: {
          fontSize: fontSizeForAxis, // Domyślny rozmiar czcionki
        },
      },
    },
    zAxis3D: {
      min: -10,
      max: 10,
      name: "oś zarządcza",
      nameTextStyle: {
        fontSize: fontSizeForLabel,
      },
      axisLine: {
        lineStyle: {
          color: "blue",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          // color: "#0000ff01",
        },
      },
      axisLabel: {
        show: true,
        formatter: (value) => {
          // Mapuj wartość -1 na etykietę "socjalizm"
          if (value === -5) {
            return "anarchizm";
          } else if (value === 5) {
            return "autorytaryzm";
          }
          // Domyślnie użyj wartości liczbowej
          return value;
        },
        textStyle: {
          fontSize: fontSizeForAxis, // Domyślny rozmiar czcionki
        },
      },
    },
    series: [
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [10, 0, 0],
          [10, 10, 0],
        ],
        itemStyle: {
          color: autCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 10],
          [0, 10, 10],
          [10, 0, 10],
          [10, 10, 10],
        ],
        itemStyle: {
          color: autCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [0, 0, 10],
          [0, 10, 10],
        ],
        itemStyle: {
          color: autCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [10, 0, 0],
          [10, 10, 0],
          [10, 0, 10],
          [10, 10, 10],
        ],
        itemStyle: {
          color: autCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [10, 0, 0],
          [0, 0, 10],
          [10, 0, 10],
        ],
        itemStyle: {
          color: autCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 10, 0],
          [10, 10, 0],
          [0, 10, 10],
          [10, 10, 10],
        ],
        itemStyle: {
          color: autCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      // ANA, SOC, TRA BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [-10, 0, 0],
          [-10, -10, 0],
        ],
        itemStyle: {
          color: anaSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, -10],
          [0, -10, -10],
          [-10, 0, -10],
          [-10, -10, -10],
        ],
        itemStyle: {
          color: anaSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [0, 0, -10],
          [0, -10, -10],
        ],
        itemStyle: {
          color: anaSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [-10, 0, 0],
          [-10, -10, 0],
          [-10, 0, -10],
          [-10, -10, -10],
        ],
        itemStyle: {
          color: anaSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-10, 0, 0],
          [0, 0, -10],
          [-10, 0, -10],
        ],
        itemStyle: {
          color: anaSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, -10, 0],
          [-10, -10, 0],
          [0, -10, -10],
          [-10, -10, -10],
        ],
        itemStyle: {
          color: anaSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      // AUT, SOC, TRA BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [-10, 0, 0],
          [-10, -10, 0],
        ],
        itemStyle: {
          color: autSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 10],
          [0, -10, 10],
          [-10, 0, 10],
          [-10, -10, 10],
        ],
        itemStyle: {
          color: autSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [0, 0, 10],
          [0, -10, 10],
        ],
        itemStyle: {
          color: autSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [-10, 0, 0],
          [-10, -10, 0],
          [-10, 0, 10],
          [-10, -10, 10],
        ],
        itemStyle: {
          color: autSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-10, 0, 0],
          [0, 0, 10],
          [-10, 0, 10],
        ],
        itemStyle: {
          color: autSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, -10, 0],
          [-10, -10, 0],
          [0, -10, 10],
          [-10, -10, 10],
        ],
        itemStyle: {
          color: autSocTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      //   AUT, SOC, PRO BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [-10, 0, 0],
          [-10, 10, 0],
        ],
        itemStyle: {
          color: autSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 10],
          [0, 10, 10],
          [-10, 0, 10],
          [-10, 10, 10],
        ],
        itemStyle: {
          color: autSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [0, 0, 10],
          [0, 10, 10],
        ],
        itemStyle: {
          color: autSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [-10, 0, 0],
          [-10, 10, 0],
          [-10, 0, 10],
          [-10, 10, 10],
        ],
        itemStyle: {
          color: autSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-10, 0, 0],
          [0, 0, 10],
          [-10, 0, 10],
        ],
        itemStyle: {
          color: autSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 10, 0],
          [-10, 10, 0],
          [0, 10, 10],
          [-10, 10, 10],
        ],
        itemStyle: {
          color: autSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      // ANA, SOC, PRO BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [-10, 0, 0],
          [-10, 10, 0],
        ],
        itemStyle: {
          color: anaSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, -10],
          [0, 10, -10],
          [-10, 0, -10],
          [-10, 10, -10],
        ],
        itemStyle: {
          color: anaSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [0, 0, -10],
          [0, 10, -10],
        ],
        itemStyle: {
          color: anaSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [-10, 0, 0],
          [-10, 10, 0],
          [-10, 0, -10],
          [-10, 10, -10],
        ],
        itemStyle: {
          color: anaSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-10, 0, 0],
          [0, 0, -10],
          [-10, 0, -10],
        ],
        itemStyle: {
          color: anaSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 10, 0],
          [-10, 10, 0],
          [0, 10, -10],
          [-10, 10, -10],
        ],
        itemStyle: {
          color: anaSocProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      // ORANGE BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [10, 0, 0],
          [10, 10, 0],
        ],
        itemStyle: {
          color: anaCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, -10],
          [0, 10, -10],
          [10, 0, -10],
          [10, 10, -10],
        ],
        itemStyle: {
          color: anaCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 10, 0],
          [0, 0, -10],
          [0, 10, -10],
        ],
        itemStyle: {
          color: anaCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [10, 0, 0],
          [10, 10, 0],
          [10, 0, -10],
          [10, 10, -10],
        ],
        itemStyle: {
          color: anaCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [10, 0, 0],
          [0, 0, -10],
          [10, 0, -10],
        ],
        itemStyle: {
          color: anaCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 10, 0],
          [10, 10, 0],
          [0, 10, -10],
          [10, 10, -10],
        ],
        itemStyle: {
          color: anaCapProColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      // PINK BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [10, 0, 0],
          [10, -10, 0],
        ],
        itemStyle: {
          color: anaCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, -10],
          [0, -10, -10],
          [10, 0, -10],
          [10, -10, -10],
        ],
        itemStyle: {
          color: anaCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [0, 0, -10],
          [0, -10, -10],
        ],
        itemStyle: {
          color: anaCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [10, 0, 0],
          [10, -10, 0],
          [10, 0, -10],
          [10, -10, -10],
        ],
        itemStyle: {
          color: anaCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [10, 0, 0],
          [0, 0, -10],
          [10, 0, -10],
        ],
        itemStyle: {
          color: anaCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, -10, 0],
          [10, -10, 0],
          [0, -10, -10],
          [10, -10, -10],
        ],
        itemStyle: {
          color: anaCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      // BROWN BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [10, 0, 0],
          [10, -10, 0],
        ],
        itemStyle: {
          color: autCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 10],
          [0, -10, 10],
          [10, 0, 10],
          [10, -10, 10],
        ],
        itemStyle: {
          color: autCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -10, 0],
          [0, 0, 10],
          [0, -10, 10],
        ],
        itemStyle: {
          color: autCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [10, 0, 0],
          [10, -10, 0],
          [10, 0, 10],
          [10, -10, 10],
        ],
        itemStyle: {
          color: autCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [10, 0, 0],
          [0, 0, 10],
          [10, 0, 10],
        ],
        itemStyle: {
          color: autCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      {
        type: "surface",
        data: [
          [0, -10, 0],
          [10, -10, 0],
          [0, -10, 10],
          [10, -10, 10],
        ],
        itemStyle: {
          color: autCapTraColor,
          opacity: 0.2,
        },
        dataShape: [2, 2],
      },
      // DOTT
      {
        type: "scatter3D",
        symbolSize: windowWidth > 650 ? 15 : 12,
        data: [[props.right, props.prog, props.auth]],
        itemStyle: {
          opacity: 1,
          color: "#ff0000bb",
          borderWidth: 1, // Grubość krawędzi
          borderColor: "#00000055", // Kolor krawędzi
          borderType: "dotted", // Typ krawędzi
          borderDashOffset: 5, // Przesunięcie przerywanej linii
          borderCap: "round", // Styl zakończenia linii
        },
      },
    ],
  };
  return (
    <div>
      <ReactECharts
        option={option}
        style={{
          height:
            windowWidth < 400
              ? 150
              : windowWidth < 500
              ? 200
              : windowWidth < 650
              ? 300
              : 400,
        }}
      />
    </div>
  );
};

export default TestResultBox;
