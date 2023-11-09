import { Typography, Button, TextField, MenuItem, Modal } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import Divider from "@mui/material/Divider";
import { SignIn } from "layouts/authentication/sign-in";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "400px",
};

const MessageInjection = () => {
  const [reminder, setReminder] = useState("");
  const [continueModalOpen, setCountinueModalOpen] = useState(false);

  const handleChangedReminders = (event) => {
    setReminder(event.target.value);
  };
  const openContinueModal = () => {
    setCountinueModalOpen(true);
  };
  const closeContinueModal = () => {
    setCountinueModalOpen(false);
  };
  const removeContinueModal = () => {
    closeContinueModal();
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
        Message Injection
      </Typography>
      <div style={{ marginTop: "17px" }}>
        <Box>
          <label htmlFor="name" style={{ fontSize: "13px" }}>
            You can setup our Message Injection integration for email delivery on this page. The
            integration will allow emails to be added directly to users mailbox. This significantly
            increases email deliverability and removes the need for allow listing. The integration
            has both Microsoft 365 and Google Workspace support which you can setup below.
          </label>
        </Box>
        <div style={{ width: "100%", marginTop: "theme.spacing(2)" }}></div>
        <Divider>Microsoft</Divider>
        <div style={{ marginTop: "37px" }}>
          <Box>
            <label
              htmlFor="name"
              style={{
                fontSize: "13px",
              }}
            >
              Click the button below to authorise use of the Microsoft 365 Message Injection
              integration.
            </label>
          </Box>
        </div>

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
      <Divider>Google Workspace</Divider>
      <div style={{ marginTop: "37px" }}>
        <Box>
          <label
            htmlFor="name"
            style={{
              fontSize: "13px",
            }}
          >
            Click the button below to provide service account credentials for the Google Workspace
            Message Injection integration.
          </label>
        </Box>
      </div>
      <Button
        variant="contained"
        style={{
          color: "#fff",
          background: "rgb(30, 123, 228)",
          marginTop: "9px",
          fontWeight: "lighter",
        }}
      >
        <GoogleIcon style={{ marginRight: "3px" }} />
        Configure Service Account
      </Button>
    </DashboardLayout>
  );
};

export default MessageInjection;
