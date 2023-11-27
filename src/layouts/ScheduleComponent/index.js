import { Typography, Switch, Button, TextField, Checkbox, MenuItem, Modal } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TimePickerViewRenderers from "layouts/autoenrol/components/uLearnComponents/TimePickerViewRenders";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

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

const ScheduleComponent = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [reminder, setReminder] = useState("");
  const [course, setCourse] = useState("");
  const [isSettingEnabled, setIsSettingEnabled] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [group, setGroup] = useState("");
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const handleChangedRecipients = (event) => {
    setRecipient(event.target.value);
  };

  const handleChangedGroups = (event) => {
    setGroup(event.target.value);
  };

  const handleAddRecipient = () => {
    if (recipient && !selectedRecipients.includes(recipient)) {
      setSelectedRecipients((prevRecipients) => [...prevRecipients, recipient]);
    }
    setRecipient("");
  };

  const handleAddGroup = () => {
    if (group && !selectedGroups.includes(group)) {
      setSelectedGroups((prevGroups) => [...prevGroups, group]);
    }
    setGroup("");
  };

  const handleRemoveRecipient = (index) => {
    const updatedRecipients = [...selectedRecipients];
    updatedRecipients.splice(index, 1);
    setSelectedRecipients(updatedRecipients);
  };

  const handleRemoveGroup = (index) => {
    const updatedGroups = [...selectedGroups];
    updatedGroups.splice(index, 1);
    setSelectedGroups(updatedGroups);
  };

  const handleRemoveFilters = () => {
    setSelectedRecipients([]);
    setSelectedGroups([]);
  };

  const handleSwitchChange = () => {
    setIsSettingEnabled(!isSettingEnabled);
  };
  const [value, setValue] = useState(0);
  const [signatureCycleStartDate, setSignatureCycleStartDate] = useState(new Date());
  const [signatureFrequency, setSignatureFrequency] = useState({
    number: 1,
    unit: "month",
  });

  const handleDateChange = (date) => {
    setSignatureCycleStartDate(date);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleChangedReminders = (event) => {
    setReminder(event.target.value);
  };
  const handleChangedCourses = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Hind Guntur",
          fontWeight: "500",
          fontSize: "1.6rem",
        }}
      >
        uPhish - Create Simulation
      </Typography>
      <Typography
        sx={{ fontSize: "25px", marginTop: "40px", marginBottom: "1px", marginLeft: "2px" }}
      >
        Schedule
      </Typography>

      <div style={{ marginTop: "30px" }}>
        <p style={{ fontSize: "15px", marginTop: "15px" }}>Send to All Users:</p>
        <Switch {...label} onChange={handleSwitchChange} />
      </div>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "lighter",
          color: "gray",
          fontFamily: "sans-serif",
        }}
      >
        Enabling this option will send this simulation to all of your active users. Their emails
        will be scheduled when you save this simulation so any users added after that will be
        missed.
      </p>
      {/* <p style={{ fontSize: "15px", marginTop: "15px" }}>* Select Recipients:</p> */}
      {/* <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <TextField defaultValue="Select Users" />

        <TextField defaultValue="Select Groups" />
        <p style={{ fontSize: "14px" }}></p>
      </div> */}

      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <p style={{ fontSize: "15px", marginTop: "15px" }}>* Select Recipients:</p>
        <p style={{ fontSize: "15px", marginTop: "15px" }}>* Select Groups:</p>
      </div>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <TextField
          defaultValue="Select Users"
          select
          value={recipient}
          onChange={handleChangedRecipients}
          type="text"
          sx={{
            gridColumn: "span 2",
            backgroundColor: "#ffff",
            marginTop: "9px",
            width: "200px",
          }}
          SelectProps={{
            IconComponent: () => null,
          }}
        >
          <MenuItem value="xyz.com">xyz.com</MenuItem>
          <MenuItem value="abc.com">abc.com</MenuItem>
        </TextField>
        <TextField
          defaultValue="Select Users"
          select
          value={group}
          onChange={handleChangedGroups}
          type="text"
          sx={{
            gridColumn: "span 2",
            backgroundColor: "#ffff",
            marginTop: "9px",
            width: "200px",
          }}
          SelectProps={{
            IconComponent: () => null,
          }}
        >
          <MenuItem value="group1">Group 1</MenuItem>
          <MenuItem value="group2">Group 2</MenuItem>
        </TextField>
        <Button onClick={handleAddRecipient} style={{ marginTop: "9px" }}>
          Add Recipient
        </Button>
        <Button onClick={handleAddGroup} style={{ marginTop: "9px" }}>
          Add Group
        </Button>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          {selectedRecipients.map((selectedRecipient, index) => (
            <Chip
              key={index}
              label={selectedRecipient}
              onDelete={() => handleRemoveRecipient(index)}
              style={{ marginRight: "8px" }}
            />
          ))}
          {selectedGroups.map((selectedGroup, index) => (
            <Chip
              key={index}
              label={selectedGroup}
              onDelete={() => handleRemoveGroup(index)}
              style={{ marginRight: "8px" }}
            />
          ))}
        </Stack>
        {selectedRecipients.length > 0 || selectedGroups.length > 0 ? (
          <Button
            variant="outlined"
            onClick={handleRemoveFilters}
            style={{ color: "red", marginTop: "8px" }}
          >
            Remove Filters
          </Button>
        ) : null}
      </div>

      <div>
        <p style={{ fontSize: "15px", marginTop: "15px" }}>
          * Choose a date and time to start sending out the emails:
        </p>
        <div style={{ display: "flex", alignItems: "center", marginleft: "10px" }}>
          <TextField
            id="signature-cycle-start-date"
            type="date"
            value={signatureCycleStartDate.toISOString().split("T")[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            style={{ marginRight: "10px" }}
          />

          <TimePickerViewRenderers />
          <Button
            variant="contained"
            style={{
              float: "inline-end",
              // marginTop:'60px',
              color: "#fff",
              background: "rgb(30, 123, 228)",
              // marginRight:'100px',
              fontWeight: "lighter",
            }}
          >
            Now
          </Button>
        </div>
      </div>

      <Box
        gap="15px"
        width="250px"
        sx={{
          fontSize: "16px",
        }}
      >
        <p style={{ fontSize: "15px", marginTop: "15px" }}>* Only send between working hours?</p>
        <div>
          <TextField
            type="number"
            value={signatureFrequency.number}
            onChange={(e) =>
              setSignatureFrequency({
                ...signatureFrequency,
                number: e.target.value,
              })
            }
            sx={{ width: "100px" }}
          />
        </div>
      </Box>
      <p style={{ fontSize: "15px", marginTop: "15px" }}>
        * How many hours should the emails be distributed over?:
      </p>
      <Checkbox inputProps={{ "aria-label": "controlled" }} />
      <Typography sx={{ fontSize: "", marginTop: "40px", marginBottom: "1px", marginLeft: "2px" }}>
        Inline Training
      </Typography>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "lighter",
          color: "gray",
          fontFamily: "sans-serif",
        }}
      >
        If you wish you can select a training course to send to users if they compromise themselves
        during an Auto Phish simulation.
      </p>
      <div style={{ marginTop: "17px" }}>
        <Box>
          <label htmlFor="name" style={{ fontSize: "13px" }}>
            Subject:
          </label>
        </Box>
        <TextField
          select
          value={reminder}
          onChange={handleChangedReminders}
          type="text"
          sx={{
            gridColumn: "span 2",
            backgroundColor: "#ffff",
            marginTop: "9px",
            width: "1100px",
          }}
          SelectProps={{
            IconComponent: () => <ExpandMoreIcon />,
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Video">Video</MenuItem>
          <MenuItem value="Customs">Custom</MenuItem>
          <MenuItem value="Infosec"> Infosec</MenuItem>
        </TextField>
      </div>
      <div style={{ marginTop: "17px" }}>
        <Box>
          <label htmlFor="name" style={{ fontSize: "13px" }}>
            Course:
          </label>
        </Box>
        <TextField
          select
          value={course}
          onChange={handleChangedCourses}
          type="text"
          sx={{
            gridColumn: "span 2",
            backgroundColor: "#ffff",
            marginTop: "9px",
            width: "1100px",
          }}
          SelectProps={{
            IconComponent: () => <ExpandMoreIcon />,
          }}
        >
          <MenuItem value="Cloud Security">Cloud Security(Beginner)</MenuItem>
          <MenuItem value="Phishing">Phishing(Beginner)</MenuItem>
          <MenuItem value="Online Payment">Online Payment</MenuItem>
        </TextField>
      </div>
      <div style={{ marginTop: "37px" }}></div>
      <Button
        variant="contained"
        style={{
          color: "#fff",
          background: "rgb(30, 123, 228)",
          marginTop: "9px",
          fontWeight: "lighter",
        }}
      >
        Create Simulation
      </Button>
    </div>
  );
};

export default ScheduleComponent;
