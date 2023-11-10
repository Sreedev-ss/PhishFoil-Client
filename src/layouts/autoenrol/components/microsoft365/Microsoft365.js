import { Typography, Switch, Button } from "@mui/material";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";
const style = {
  marginLeft: "20px",
  fontSize: "15px",
  marginTop: "10px",
  color: "gray",
  fontWeight: "lighter",
};

const Microsoft365 = () => {
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
        Microsoft 365 Integration
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
        Here you can setup and configure your Microsoft 365 Integration.
      </p>
      <Typography
        sx={{
          fontFamily: "Hind Guntur",
          fontWeight: "500",
          fontSize: "1.6rem",
          marginTop: "30px",
        }}
      >
        Setup
      </Typography>
      <div style={{ marginTop: "30px" }}>
        <ul style={style}>
          <li>
            A new tab will open asking you to sign into your Microsoft account and authorise this
            application to access your Microsoft 365 user and group data.
          </li>
          <li>Once completed, you will be redirected back to this application.</li>
          <li>
            If the authorisation was successful you can then configure your Microsoft 365 sync as
            follows
          </li>
          <ul style={style}>
            <li>Choose whether you want the sync to run automatically</li>
            <li>Choose whether or not to include groups as part of the sync</li>
            <li>Choose which groups you want to sync users from</li>
            <li>Map your Microsoft 365 groups users to your existing groups in this application</li>
            <li>Populate an email deny list of Microsoft 365 users you do not wish to be synced</li>
            <li>Choose whether you want to exclude unlicensed users from the sync</li>
            <li>Choose whether you would like to set your users managers via the sync</li>
          </ul>
          <li>You can run a test sync at the end of this process</li>
        </ul>
      </div>
      <div style={{marginTop:"30px"}}>
        <Button
          variant="contained"
          style={{
            color: "#fff",
            background: "black",
            marginTop: "9px",
            fontWeight: "lighter",
            display: "inline-block",
            backgroundSize: "contain",
            borderRadius: 0,
          }}
        >
          <MicrosoftIcon style={{ marginRight: "3px" }} />
          Sign in with Microsoft
        </Button>
      </div>
      
    </DashboardLayout>
  );
};

export default Microsoft365;
