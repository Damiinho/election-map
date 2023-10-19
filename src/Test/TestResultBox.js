import React from "react";
import ReactECharts from "echarts-for-react";
import "echarts-gl";

const TestResultBox = () => {
  const option = {
    grid3D: {},
    xAxis3D: {
      min: -1,
      max: 1,
      name: "oś ekopnomiczna",
      axisLine: {
        lineStyle: {
          color: "red",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          //   color: "#005544",
        },
      },
    },
    yAxis3D: {
      min: -1,
      max: 1,
      name: "oś cywilizacyjna",
      axisLine: {
        lineStyle: {
          color: "green",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          //   color: "#ddffbb",
        },
      },
    },
    zAxis3D: {
      min: -1,
      max: 1,
      name: "oś zarządcza",
      axisLine: {
        lineStyle: {
          color: "blue",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          //   color: "#fffffddf",
        },
      },
    },
    series: [
      // BLUE BOX
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, 1, 0],
      //       [1, 0, 0],
      //       [1, 1, 0],
      //     ],
      //     itemStyle: {
      //       color: mergeColors([capColor, autColor, proColor]),
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 1],
      //       [0, 1, 1],
      //       [1, 0, 1],
      //       [1, 1, 1],
      //     ],
      //     itemStyle: {
      //       color: mergeColors([capColor, autColor, proColor]),
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, 1, 0],
      //       [0, 0, 1],
      //       [0, 1, 1],
      //     ],
      //     itemStyle: {
      //       color: mergeColors([capColor, autColor, proColor]),
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [1, 0, 0],
      //       [1, 1, 0],
      //       [1, 0, 1],
      //       [1, 1, 1],
      //     ],
      //     itemStyle: {
      //       color: mergeColors([capColor, autColor, proColor]),
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [1, 0, 0],
      //       [0, 0, 1],
      //       [1, 0, 1],
      //     ],
      //     itemStyle: {
      //       color: mergeColors([capColor, autColor, proColor]),
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 1, 0],
      //       [1, 1, 0],
      //       [0, 1, 1],
      //       [1, 1, 1],
      //     ],
      //     itemStyle: {
      //       color: mergeColors([capColor, autColor, proColor]),
      //       opacity: 0.2,
      //     },
      //   },
      // ANARCHISM, SOCIALISM< TRADITION BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -1, 0],
          [-1, 0, 0],
          [-1, -1, 0],
        ],
        itemStyle: {
          color: "rgba(230, 130, 255, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, -1],
          [0, -1, -1],
          [-1, 0, -1],
          [-1, -1, -1],
        ],
        itemStyle: {
          color: "rgba(230, 130, 255, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -1, 0],
          [0, 0, -1],
          [0, -1, -1],
        ],
        itemStyle: {
          color: "rgba(230, 130, 255, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [-1, 0, 0],
          [-1, -1, 0],
          [-1, 0, -1],
          [-1, -1, -1],
        ],
        itemStyle: {
          color: "rgba(230, 130, 255, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-1, 0, 0],
          [0, 0, -1],
          [-1, 0, -1],
        ],
        itemStyle: {
          color: "rgba(230, 130, 255, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, -1, 0],
          [-1, -1, 0],
          [0, -1, -1],
          [-1, -1, -1],
        ],
        itemStyle: {
          color: "rgba(230, 130, 255, 0.36)",
          opacity: 0.2,
        },
      },
      // AUT, SOC, TRA BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -1, 0],
          [-1, 0, 0],
          [-1, -1, 0],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 1],
          [0, -1, 1],
          [-1, 0, 1],
          [-1, -1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, -1, 0],
          [0, 0, 1],
          [0, -1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [-1, 0, 0],
          [-1, -1, 0],
          [-1, 0, 1],
          [-1, -1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-1, 0, 0],
          [0, 0, 1],
          [-1, 0, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, -1, 0],
          [-1, -1, 0],
          [0, -1, 1],
          [-1, -1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.36)",
          opacity: 0.2,
        },
      },
      //   AUT, SOC, PRO BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 1, 0],
          [-1, 0, 0],
          [-1, 1, 0],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.5)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 1],
          [0, 1, 1],
          [-1, 0, 1],
          [-1, 1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.5)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
          [0, 1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.5)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [-1, 0, 0],
          [-1, 1, 0],
          [-1, 0, 1],
          [-1, 1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.5)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-1, 0, 0],
          [0, 0, 1],
          [-1, 0, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.5)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 1, 0],
          [-1, 1, 0],
          [0, 1, 1],
          [-1, 1, 1],
        ],
        itemStyle: {
          color: "rgba(68, 0, 145, 0.5)",
          opacity: 0.2,
        },
      },
      // ANA, SOC, PRO BOX
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 1, 0],
          [-1, 0, 0],
          [-1, 1, 0],
        ],
        itemStyle: {
          color: "rgba(255, 0, 135, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, -1],
          [0, 1, -1],
          [-1, 0, -1],
          [-1, 1, -1],
        ],
        itemStyle: {
          color: "rgba(255, 0, 135, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, -1],
          [0, 1, -1],
        ],
        itemStyle: {
          color: "rgba(255, 0, 135, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [-1, 0, 0],
          [-1, 1, 0],
          [-1, 0, -1],
          [-1, 1, -1],
        ],
        itemStyle: {
          color: "rgba(255, 0, 135, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 0, 0],
          [-1, 0, 0],
          [0, 0, -1],
          [-1, 0, -1],
        ],
        itemStyle: {
          color: "rgba(255, 0, 135, 0.36)",
          opacity: 0.2,
        },
      },
      {
        type: "surface",
        data: [
          [0, 1, 0],
          [-1, 1, 0],
          [0, 1, -1],
          [-1, 1, -1],
        ],
        itemStyle: {
          color: "rgba(255, 0, 135, 0.36)",
          opacity: 0.2,
        },
      },
      //   // ORANGE BOX
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, 1, 0],
      //       [1, 0, 0],
      //       [1, 1, 0],
      //     ],
      //     itemStyle: {
      //       color: "orange",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, -1],
      //       [0, 1, -1],
      //       [1, 0, -1],
      //       [1, 1, -1],
      //     ],
      //     itemStyle: {
      //       color: "orange",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, 1, 0],
      //       [0, 0, -1],
      //       [0, 1, -1],
      //     ],
      //     itemStyle: {
      //       color: "orange",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [1, 0, 0],
      //       [1, 1, 0],
      //       [1, 0, -1],
      //       [1, 1, -1],
      //     ],
      //     itemStyle: {
      //       color: "orange",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [1, 0, 0],
      //       [0, 0, -1],
      //       [1, 0, -1],
      //     ],
      //     itemStyle: {
      //       color: "orange",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 1, 0],
      //       [1, 1, 0],
      //       [0, 1, -1],
      //       [1, 1, -1],
      //     ],
      //     itemStyle: {
      //       color: "orange",
      //       opacity: 0.2,
      //     },
      //   },
      //   // PINK BOX
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, -1, 0],
      //       [1, 0, 0],
      //       [1, -1, 0],
      //     ],
      //     itemStyle: {
      //       color: socColor,
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, -1],
      //       [0, -1, -1],
      //       [1, 0, -1],
      //       [1, -1, -1],
      //     ],
      //     itemStyle: {
      //       color: "pink",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, -1, 0],
      //       [0, 0, -1],
      //       [0, -1, -1],
      //     ],
      //     itemStyle: {
      //       color: "pink",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [1, 0, 0],
      //       [1, -1, 0],
      //       [1, 0, -1],
      //       [1, -1, -1],
      //     ],
      //     itemStyle: {
      //       color: "pink",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [1, 0, 0],
      //       [0, 0, -1],
      //       [1, 0, -1],
      //     ],
      //     itemStyle: {
      //       color: "pink",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, -1, 0],
      //       [1, -1, 0],
      //       [0, -1, -1],
      //       [1, -1, -1],
      //     ],
      //     itemStyle: {
      //       color: "pink",
      //       opacity: 0.2,
      //     },
      //   },
      //   // BROWN BOX
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, -1, 0],
      //       [1, 0, 0],
      //       [1, -1, 0],
      //     ],
      //     itemStyle: {
      //       color: "brown",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 1],
      //       [0, -1, 1],
      //       [1, 0, 1],
      //       [1, -1, 1],
      //     ],
      //     itemStyle: {
      //       color: "brown",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [0, -1, 0],
      //       [0, 0, 1],
      //       [0, -1, 1],
      //     ],
      //     itemStyle: {
      //       color: "brown",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [1, 0, 0],
      //       [1, -1, 0],
      //       [1, 0, 1],
      //       [1, -1, 1],
      //     ],
      //     itemStyle: {
      //       color: "brown",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, 0, 0],
      //       [1, 0, 0],
      //       [0, 0, 1],
      //       [1, 0, 1],
      //     ],
      //     itemStyle: {
      //       color: "brown",
      //       opacity: 0.2,
      //     },
      //   },
      //   {
      //     type: "surface",
      //     data: [
      //       [0, -1, 0],
      //       [1, -1, 0],
      //       [0, -1, 1],
      //       [1, -1, 1],
      //     ],
      //     itemStyle: {
      //       color: "brown",
      //       opacity: 0.2,
      //     },
      //   },
      //   // DOTT
      //   {
      //     type: "scatter3D",
      //     symbolSize: 20,
      //     data: [[0, 0, 0]],
      //     itemStyle: {
      //       opacity: 1,
      //       color: "black",
      //     },
      //   },
    ],
  };

  return (
    <>
      <ReactECharts option={option} style={{ height: 400 }} />

      <div>eloelo</div>
    </>
  );
};

export default TestResultBox;
