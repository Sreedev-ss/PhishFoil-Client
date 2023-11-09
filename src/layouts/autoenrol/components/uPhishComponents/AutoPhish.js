import {
  Typography,
  Switch,
  Button,
  FormControl,
  Chip,
  MenuItem,
  ListItemText,
  Checkbox,
  Select,
  Box,
  TextField,
} from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { useState } from "react";

const items = ["Administration", "Technical", "Sample"];
const domainItem = ["Amzwon.net", "billing.net", "asistenciahoy"];
const prefferedlang = ["English", "Hindi", "Malayalam"];

const AutoPhish = () => {
  const [group, setGroup] = useState(["Administration"]);
  const [domain, setDomain] = useState(["Amzwon.net"]);
  const [language, setLanguage] = useState(["English"]);

  const [openType, setOpenType] = useState(false);
  const [type, setType] = useState("None");
  const [openCategory, setOpenCategory] = useState(false);
  const [category, setCategory] = useState("All");

  const [openCourse, setOpenCourse] = useState(false);
  const [course, setCourse] = useState("Phishing(beginner");

  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleCourse = (event) => {
    setCourse(event.target.value);
  };

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };

  const handleDeletegroup = (itemToDelete) => (event) => {
    event.preventDefault();
    const updatedGroup = group.filter((item) => item !== itemToDelete);
    setGroup(updatedGroup);
  };

  const handleDomain = (event) => {
    setDomain(event.target.value);
  };
  const handleDeleteDomain = (itemToDelete) => (event) => {
    event.preventDefault();
    const updatedDoamin = domain.filter((item) => item !== itemToDelete);
    setDomain(updatedDoamin);
  };

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleDeleteLanguage = (itemToDelete) => (event) => {
    event.preventDefault();
    const updatedLanguage = language.filter((item) => item !== itemToDelete);
    setLanguage(updatedLanguage);
  };

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
        Auto Phish
      </Typography>
      <Box
        sx={{
          maxHeight: "70vh", // Set a maximum height for the scrollable container
          overflowY: "auto", // Enable vertical scrolling when content exceeds maxHeight
          padding: "10px", // Add padding for spacing
        }}
      >
        <p
          style={{
            marginTop: "40px",
            fontSize: "15px",
            fontWeight: "lighter",
            color: "gray",
            fontFamily: "sans-serif",
          }}
        >
          Here you can set up the automated generation of phishing simulations. Simulations will be
          sent to your active users on an ongoing basis using randomly selected templates if
          enabled.
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            color: "gray",
            fontFamily: "sans-serif",
          }}
        >
          If you wish to send only a single simulation, or have more control over the content used
          and/or recipients involved, you should create a simulation manually via the Create
          Simulation page.
        </p>
        <div style={{ marginTop: "30px" }}>
          <Switch {...label} defaultChecked />
          <span
            style={{
              fontSize: "15px",
              fontWeight: "lighter",
              marginLeft: "20px",
            }}
          >
            Enable Auto Phish
          </span>
        </div>
        <div style={{ marginTop: "20px", fontSize: "15px" }}>
          <form>
            <Box
              display="grid"
              gap="15px"
              width="590px"
              sx={{
                fontSize: "16px",
              }}
            >
              <label>How many weeks between simulations</label>
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
            </Box>
            <p style={{ fontSize: "15px", marginTop: "15px" }}>Only send between working hours?</p>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            <div>
              <Box
                display="grid"
                gap="15px"
                width="600px"
                sx={{
                  fontSize: "16px",
                }}
              >
                <FormControl sx={{ height: "auto" }}>
                  <Typography
                    sx={{ fontSize: "", marginTop: "30px", marginBottom: "5px", marginLeft: "2px" }}
                  >
                    Exclude groups from receiving simulations? :
                  </Typography>
                  <Select
                    labelId="multiple-select-label"
                    id="multiple-select"
                    multiple
                    label="Select languages"
                    value={group}
                    onChange={handleGroup}
                    MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            onDelete={handleDeletegroup(item)}
                            sx={{
                              marginRight: "5px",
                              height: "20px", // Adjust the height as needed
                            }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {items.map((item) => (
                      <MenuItem key={item} value={item}>
                        <Checkbox checked={group.indexOf(item) > -1} />
                        <ListItemText secondary={item} />
                      </MenuItem>
                    ))}
                  </Select>

                  <Typography
                    sx={{ fontSize: "", marginTop: "30px", marginBottom: "5px", marginLeft: "2px" }}
                  >
                    Domain Allow List:
                  </Typography>
                  <Select
                    labelId="multiple-select-label"
                    id="multiple-select"
                    multiple
                    label="Select languages"
                    value={domain}
                    onChange={handleDomain}
                    MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            onDelete={handleDeleteDomain(item)}
                            sx={{
                              marginRight: "5px",
                              height: "20px", // Adjust the height as needed
                            }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {domainItem.map((item) => (
                      <MenuItem key={item} value={item}>
                        <Checkbox checked={domain.indexOf(item) > -1} />
                        <ListItemText secondary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "15px",
                      fontWeight: "lighter",
                      color: "gray",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Restrict the domains that can be used in simulations. If you use Microsoft 365
                    you should mirror this list in your Advanced Delivery settings. (Please note
                    that Advanced Delivery is limited to 20 allowed domains.)
                  </p>
                </FormControl>
              </Box>
              <p style={{ marginTop: "30px" }}>
                Restrict Templates to your Preferred Content Language(s)
              </p>
              <div style={{ marginTop: "10px" }}>
                <Switch {...label} defaultChecked />
                <div>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "lighter",
                      marginLeft: "20px",
                    }}
                  >
                    If enabled, Auto Phish will use the Preferred Content Language(s) on your
                    Language settings when selecting templates.
                  </span>
                </div>
              </div>
            </div>
            <Box
              display="grid"
              gap="15px"
              width="590px"
              sx={{
                fontSize: "16px",
              }}
            >
              <Typography
                sx={{ fontSize: "", marginTop: "30px", marginBottom: "5px", marginLeft: "2px" }}
              >
                Preferred Template Language(s) :
              </Typography>
              <Select
                labelId="multiple-select-label"
                id="multiple-select"
                multiple
                label="Select languages"
                value={language}
                onChange={handleLanguage}
                MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                renderValue={(selected) => (
                  <div>
                    {selected.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        onDelete={handleDeleteLanguage(item)}
                        sx={{
                          marginRight: "5px",
                          height: "20px", // Adjust the height as needed
                        }}
                      />
                    ))}
                  </div>
                )}
              >
                {prefferedlang.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Checkbox checked={language.indexOf(item) > -1} />
                    <ListItemText secondary={item} />
                  </MenuItem>
                ))}
              </Select>

              <FormControl sx={{ minWidth: 150 }}>
                <Typography
                  sx={{ fontSize: "", marginTop: "30px", marginBottom: "5px", marginLeft: "2px" }}
                >
                  Template Filtering
                </Typography>
                <Select
                  labelId="type-label"
                  id="type-label"
                  select
                  value={type}
                  onChange={handleType}
                  open={openType}
                  onOpen={() => setOpenType(true)}
                  onClose={() => setOpenType(false)}
                  endAdornment={
                    <div
                      style={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {openType ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                  }
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Include"}>Include Certain Template</MenuItem>
                  <MenuItem value={"Exclude"}>Exclude Certain Template</MenuItem>
                </Select>
              </FormControl>

              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "lighter",
                  color: "gray",
                  fontFamily: "sans-serif",
                }}
              >
                You must select at least 2 templates for Auto Phish to generate simulations on an
                ongoing basis.
              </p>
              <div
                style={{
                  backgroundColor: "#e6f7ff",
                  marginTop: "40px",
                  padding: "10px",
                  border: "1px solid #91d5ff",
                  fontSize: "15px",
                  fontWeight: "lighter",
                  color: "gray",
                  fontFamily: "sans-serif",
                }}
              >
                <p>Phishing Template Availability Check</p>

                <li>
                  You can use the button below to manually check if there templates matching your
                  Auto Phish settings.
                </li>
                <li>This can help diagnose issues where a simulation was not generated..</li>
                <li>This check will also be performed upon saving your settings.</li>
                <li>
                  Auto phish will fail to generate simulations if fewer than 2 matching templates
                  are present. Please contact support to help resolve the issue..
                </li>

                <Button
                  variant="contained"
                  style={{
                    color: "#fff",
                    background: "rgb(30, 123, 228)",
                    marginTop: "9px",
                    fontWeight: "lighter",
                  }}
                >
                  <BeenhereIcon style={{ marginRight: "3px" }} />
                  Check Availability
                </Button>
              </div>
              <Typography
                sx={{ fontSize: "", marginTop: "40px", marginBottom: "1px", marginLeft: "2px" }}
              >
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
                If you wish you can select a training course to send to users if they compromise
                themselves during an Auto Phish simulation.
              </p>
            </Box>
            <FormControl sx={{ minWidth: 150 }}>
              <Typography
                sx={{ fontSize: "", marginTop: "30px", marginBottom: "5px", marginLeft: "2px" }}
              >
                Subject
              </Typography>
              <Select
                labelId="category-label"
                id="category-label"
                value={category}
                label="Status"
                MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                onChange={handleCategory}
                open={openCategory}
                onOpen={() => setOpenCategory(true)}
                onClose={() => setOpenCategory(false)}
                endAdornment={
                  <div
                    style={{
                      position: "absolute",
                      right: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {openCategory ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </div>
                }
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"InfoSec"}>InfoSec</MenuItem>

                <MenuItem value={"Video"}>Video</MenuItem>
                <MenuItem value={"Compliance"}>Compliance</MenuItem>
                <MenuItem value={"Custom"}>Custom</MenuItem>
              </Select>
            </FormControl>
            <div>
              <FormControl sx={{ minWidth: 150 }}>
                <Typography
                  sx={{ fontSize: "", marginTop: "30px", marginBottom: "5px", marginLeft: "2px" }}
                >
                  Course
                </Typography>
                <Select
                  labelId="category-label"
                  id="category-label"
                  value={course}
                  label="Status"
                  MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                  onChange={handleCourse}
                  open={openCourse}
                  onOpen={() => setOpenCourse(true)}
                  onClose={() => setOpenCourse(false)}
                  endAdornment={
                    <div
                      style={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {openCourse ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                  }
                >
                  <MenuItem value={"Phishing Beginner"}>Phishing (Beginner)</MenuItem>
                  <MenuItem value={"Mobile Device"}>Mobile Device Security</MenuItem>

                  <MenuItem value={"Cloud Security"}>Cloud Security</MenuItem>
                  <MenuItem value={"Online Payments"}>Online Payments(Advanced)</MenuItem>
                  <MenuItem value={"Home Network"}>Home Network Security</MenuItem>
                </Select>
              </FormControl>
            </div>
          </form>
        </div>
      </Box>

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

export default AutoPhish;
