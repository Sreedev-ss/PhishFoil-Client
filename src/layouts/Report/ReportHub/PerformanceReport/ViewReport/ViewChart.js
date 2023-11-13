import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pData = [5, 5, 5, 5, 15, 15];
const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];

const theme = createTheme({
  components: {
    MuiLine: {
      styleOverrides: {
        fill: {
          pv: "red", // Light red for pv
        },
      },
    },
  },
});

export default function SimpleLineChart() {
  return (
    <ThemeProvider theme={theme}>
      <LineChart
        width={600}
        height={500}
        series={[
          {
            data: pData,
            label: "pv",

            area: { backgroundColor: "rgba(255, 0, 0, 0.3)" }, // Light red for area
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </ThemeProvider>
  );
}
