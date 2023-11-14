import { Typography, Switch, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SaveIcon from "@mui/icons-material/Save";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { TimePicker } from "material-ui-time-picker";
import TimePickerViewRenderers from "./TimePicker";
import TimePickerViewRenderersTo from "./TimePickerTo";

const WorkingHours = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
 

  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Hind Guntur",
          fontWeight: "500",
          fontSize: "1.6rem",
        }}
      >
        Working Hours
      </Typography>
      <p
        style={{
          marginTop: "40px",
          fontSize: "15px",
          fontWeight: "lighter",
          color: "gray",
          fontFamily: "sans-serif",
        }}
      >
        Configure the working hours used when scheduling your phishing simulations.
      </p>
      <p
        style={{
          marginTop: "40px",
          fontSize: "15px",
          fontWeight: "lighter",
          color: "gray",
          fontFamily: "sans-serif",
        }}
      >
        Set your working hours:
      </p>
      <div>
      <div>
        <TimePickerViewRenderers />
      </div>
      <div>
        <TimePickerViewRenderersTo />
      </div>
      </div>
      
      <Button
        variant="contained"
        style={{
          float: "inline-end",
          marginTop: "60px",
          color: "#fff",
          background: "rgb(30, 123, 228)",
          marginRight: "100px",
          fontWeight: "lighter",
        }}
      >
        <SaveIcon style={{ marginRight: "3px" }} />
        Save
      </Button>
    </DashboardLayout>
  );
};

export default WorkingHours;
