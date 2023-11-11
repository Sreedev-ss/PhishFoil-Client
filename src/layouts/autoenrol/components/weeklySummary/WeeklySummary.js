import {
  Typography,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Switch,
  Modal,
} from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Divider from "@mui/material/Divider";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "400px",
};
const styles = {
  marginLeft: "20px",
  fontSize: "15px",
  marginTop: "10px",
  color: "gray",
  fontWeight: "lighter",
};
const dividerStyle = {
  color: "rgb(30, 123, 228)",
// color:'blue',
  fontSize: "18px",
  textAlign: "center",
  marginTop: "50px",
};
const label = { inputProps: { "aria-label": "Switch demo" } };

const WeeklySummary = () => {
  const [reminder, setReminder] = useState("");
  const [continueModalOpen, setCountinueModalOpen] = useState(false);

  const[OpenModal, setOpenModal] = useState(false);

  const ModalOpen = ()=> {
    setOpenModal(true);
  }
  const CloseModal = () => {
    setOpenModal(false);
  }
  const removeCloseModal = () => {
    CloseModal();
  }


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
        * Weekly Summary
      </Typography>
      <div>
        <p style={styles}>
          Admins, Group Managers and User Managers will receive a Weekly Summary report containing
          information on how your security awareness programme is progressing. Managers will only
          receive information specific to their team.
        </p>
      </div>
      <div>
        <p style={styles}>
          The Weekly Summary report is sent automatically via email every Friday at 6am UTC.
        </p>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Switch {...label} defaultChecked />
        <span
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            marginLeft: "20px",
          }}
        >
          Enable the Weekly Summary report
        </span>
      </div>
      <div>
        <Divider style={dividerStyle}>Report Audience</Divider>
      </div>
      <div style={{ marginTop: "50px" }}>
        <p style={styles}>
          Please select the user types that the Weekly Summary report will be sent to. You must
          select at least one to enable the Weekly Summary report.
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Switch {...label} defaultChecked />
        <span
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            marginLeft: "20px",
          }}
        >
          Send the report to Admin Users
        </span>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Switch {...label} defaultChecked />
        <span
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            marginLeft: "20px",
          }}
        >
          Send the report to Group Managers
        </span>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Switch {...label} defaultChecked />
        <span
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            marginLeft: "20px",
          }}
        >
          Send the report to User Managers
        </span>
      </div>
      <div>
        <Divider style={dividerStyle}>Send Weekly Summary Manually</Divider>
      </div>
      <div style={{ marginTop: "50px" }}>
        <p style={styles}>
          You can use the button below to send the Weekly Summary report manually. You should only
          use this option if you want to send a one off report or reissue the report because a
          recent send out failed.
        </p>
      </div>

      <Button
        variant="contained"
        style={{
          color: "#fff",
          background: "rgb(30, 123, 228)",
          marginTop: "9px",
          fontWeight: "lighter",
        }}
        onClick={openContinueModal}
      >
        <MailOutlineIcon style={{ marginRight: "3px" }} />
        Send a one off reminder now
      </Button>
      <Modal
        open={continueModalOpen}
        onClose={closeContinueModal}
        aria-labelledby="send-test-email-modal-title"
        aria-describedby="send-test-email-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="send-test-email-modal-title"
            variant="h6"
            component="h2"
            style={{
              fontWeight: "lighter",
              color: "black",
            }}
          >
            Send Weekly Summary Manually
            <p
              style={{
                marginTop: "5px",
                color: "gray",
                fontSize: "13px",
                marginLeft: "15px",
              }}
            >
              Please select the user types you wish to send the Weekly Summary report to.
            </p>
          </Typography>

          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Admin Users" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Group Managers" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="User Managers" />
            {/* <FormControlLabel required control={<Checkbox />} label="Required" /> */}
            {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
          </FormGroup>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              style={{
                color: "#fff",
                background: "rgb(30, 123, 228)",
                marginTop: "9px",
                fontWeight: "lighter",
              }}
              onClick={ModalOpen}
            >
              <MailOutlineIcon style={{ marginRight: "3px" }} />
              Send Weekly Summary now
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={OpenModal}
        onClose={CloseModal}
        aria-labelledby="send-test-email-modal-title"
        aria-describedby="send-test-email-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="send-test-email-modal-title"
            variant="h6"
            component="h2"
            style={{
              fontWeight: "lighter",
              color: "black",
            }}
          >
            <HelpOutlineIcon style={{ color: "orange" }} />
            Are you sure you wish to continue?
            <p
              style={{
                marginTop: "5px",
                color: "gray",
                fontSize: "13px",
                marginLeft: "15px",
              }}
            >
              Please note that one off reminders will only be sent to those enrolled on an
              outstanding course 7 or more days ago
            </p>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              gap: 2,
            }}
          >
            <Button variant="contained" onClick={removeCloseModal} style={{ color: "#fff" }}>
              No
            </Button>
            <Button
              variant="outlined"
              onClick={CloseModal}
              style={{ marginRight: "5px", color: "black" }}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>

      <div>
        <Button
          variant="contained"
          style={{
            float: "inline-end",
            marginTop: "60px",
            color: "#fff",
            background: "rgb(30, 123, 228)",
            marginRight: "115px",
            fontWeight: "lighter",
          }}
        >
          <SaveIcon style={{ marginRight: "3px" }} />
          Save
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default WeeklySummary;
