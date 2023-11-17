// import * as React from "react";
// import { LineChart } from "@mui/x-charts/LineChart";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const pData = [5, 5, 5, 5, 15, 15];
// const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];

// const theme = createTheme({
//   components: {
//     MuiLine: {
//       styleOverrides: {
//         fill: {
//           pv: "red", // Light red for pv
//         },
//       },
//     },
//   },
// });

// export default function SimpleLineChart() {
//   return (
//     <ThemeProvider theme={theme}>
//       <LineChart
//         width={600}
//         height={500}
//         series={[
//           {
//             data: pData,
//             label: "pv",

//             area: { backgroundColor: "rgba(255, 0, 0, 0.3)" }, // Light red for area
//           },
//         ]}
//         xAxis={[{ scaleType: "point", data: xLabels }]}
//       />
//     </ThemeProvider>
//   );
// }

import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const SimpleLineChart = () => {
  return (
    <div style={{ height: "400px", width: "600px" }}>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default SimpleLineChart;
