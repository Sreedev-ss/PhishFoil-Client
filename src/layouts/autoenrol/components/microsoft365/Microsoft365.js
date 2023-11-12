import { Typography, Switch, Button, Box, Modal, Grid, Radio, IconButton } from "@mui/material";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
const style = {
  marginLeft: "20px",
  fontSize: "15px",
  marginTop: "10px",
  color: "gray",
  fontWeight: "lighter",
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "800px",
};
const label = { inputProps: { "aria-label": "Switch demo" } };

const Microsoft365 = () => {
  const [microsoftOpenModal, setMicrosoftOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const OpenModal = () => {
    setMicrosoftOpenModal(true);
  };
  const CloseModal = () => {
    setMicrosoftOpenModal(false);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
      <div style={{ marginTop: "30px" }}>
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
          onClick={OpenModal}
        >
          <MicrosoftIcon style={{ marginRight: "3px" }} />
          Sign in with Microsoft
        </Button>
      </div>
      <Modal
        open={microsoftOpenModal}
        onClose={CloseModal}
        aria-labelledby="send-test-email-modal-title"
        aria-describedby="send-test-email-modal-description"
      >
        <Box sx={style1}>
          <IconButton
            aria-label="Close"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
            onClick={CloseModal}
          >
            <HighlightOffOutlinedIcon style={{ fontSize: "medium" }} />
          </IconButton>

          <Typography id="send-test-email-modal-title" variant="h6" component="h2">
            Please select your authentication type:
          </Typography>
          <hr style={{ marginTop: "10px" }} />

          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              style={{ borderRight: "1px solid #ccc", padding: "15px", marginTop: "10px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  mt: 2,
                  gap: 2,
                }}
              >
                <h6>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  Application Permissions
                </h6>
                <Button
                  variant="contained"
                  style={{
                    color: "#fff",
                    background: "rgb(30, 123, 228)",
                    marginRight: "20px",
                  }}
                >
                  Recommended
                </Button>
              </Box>
              <ul
                style={{
                  color: "gray",
                  fontSize: "14px",
                  marginLeft: "20px",
                  fontWeight: "lighter",
                }}
              >
                <li>
                  The platform will seek tenant-wide admin consent to gain application permissions
                  for the sync integration.
                </li>
                <li>
                  This will allow the sync to run as a background service without acting on behalf
                  of the authenticating user.
                </li>
                <li>
                  Using this method reduces the likelihood of authentication failures and is
                  intended for background services like this integration.
                </li>
                <li>
                  You will need a Microsoft account with the Global Adminstrator role to use this
                  authentication method.
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} style={{ padding: "10px", marginTop: "15px" }}>
              <h6>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                Delegated Permissions
              </h6>
              <ul
                style={{
                  color: "gray",
                  fontSize: "14px",
                  marginLeft: "20px",
                  fontWeight: "lighter",
                }}
              >
                <li>
                  The platform will seek delegated permissions for the sync integration to act as
                  the authenticating user.
                </li>
                <li>
                  Using this method significantly increases the chances of authentication failures
                  and should not be used if you wish to sync users/groups on regular basis.
                </li>
                <li>
                  You should only use this method if your Microsoft account lacks the Global
                  Administrator role or you cannot justify its use.
                </li>
                <li>
                  An email address is required for a delegated user that the service account will
                  mimic.
                </li>
                <li>
                  You will need an account with one of the following roles - Global Administrator,
                  Privileged Role Administrator, Cloud Application Administrator or Application
                  Administrator
                </li>
              </ul>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              gap: 2,
            }}
          >
            <Button variant="contained" onClick={CloseModal} style={{ color: "#fff" }}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              onClick={CloseModal}
              style={{ marginRight: "5px", color: "black" }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Modal>
    </DashboardLayout>
  );
};

export default Microsoft365;
