import { ChartType } from "chart.js";

const myChartType: ChartType = "line";

export const upcomingHoursData = {
  type: myChartType,
  data: {
    labels: ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"],
    datasets: [
      {
        data: [23, 29, 58, 75, 33, 20, 73, 49],
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: "#5f9be4",
        borderWidth: 0,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgb(0,0,0)",
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
};

export default upcomingHoursData;
