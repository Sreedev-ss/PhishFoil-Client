import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [{ label: "Group A", value: 3 }];

export default function PieChartWithPaddingAngle() {
  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 80,
            outerRadius: 120,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={800}
        height={500}
        legend={{ hidden: true }}
      />
    </Stack>
  );
}
