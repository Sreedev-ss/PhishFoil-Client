import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js";
import { Typography } from "@mui/material";

function ChartBar() {
  const [data, setData] = useState({
    labels: [
      "Opens",
      "Visits",
      "Compromises",
      "Reports",
    ],
    datasets: [
      {
        label: "data",
        data: [0, 20, 40, 60, 80, 100], // Set values to 0 for all initially

        borderWidth: 1,
        backgroundColor: "rgb(32, 156, 232)",
      },
    ],
  });

  useEffect(() => {
    // Update the values for specific categories
    const updateValues = () => {
      setData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: prevData.datasets[0].data.map((value, index) => {
              return value; // Keep the rest unchanged
            }),
          },
        ],
      }));
    };

    updateValues();
  }, []);

  return (
    <div>
      <Bar
        data={data}
        options={{
          scales: {
            x: {
              type: "category",
              title: {
                display: true,
                // text: "Score %",
              },
              grid: {
                display: false, // Hide vertical gridlines
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                // text: "Number of completed Courses",
              },
            },
          },
          animation: false, // Disable animation
        }}
        width={400}
        height={300}
      />
    </div>
  );
}

export default ChartBar;
