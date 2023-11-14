import {
  Box,
  Button,
  Checkbox,
  Chip,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItemText,
  MenuItem,
  Modal,
  Paper,
  Popover,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineMail, AiOutlineReload } from "react-icons/ai";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ChartBar from "./chartBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleCourse = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "50%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

import { BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Legend, Tooltip } from 'recharts';
import { Stack } from "@mui/system";
import { AiOutlineSearch } from "react-icons/ai";
import SendIcon from "@mui/icons-material/Send";

  const data = [
    { name: "08/11/2021", Opens: 0, Visits: 0, Comprises:0, Reports:0},
    { name: "an hour", Opens: 1, Visits: 1.2, Comprises:0.8, Reports:0 },
    { name: "2 hours", Opens: 0, Visits: 0, Comprises:0, Reports:0 },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ViewSimulationData = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [uPolicyChartBar, setUPolicyChartBar] = useState(false);
  const [status, setStatus] = useState("All Users");
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [sendTestEmailModalOpen, setSendTestEmailModalOpen] = useState(false);
  const [enrolCoursesModalOpen, setEnrolCoursesModalOpen] = useState(false);
  const [subject, setSubject] = useState("All");
  const [selectedCourses, setSelectedCourses] = useState([
    "Home Network Security Awareness: Robes Routine(Beginner)",
    
  ]);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  const courses = [
    "Mobile Device Security Awareness: Terrys Tech Tragedy(Beginner)",
    "Home Network Security Awareness: Robs Router Routine(Beginner)",
    "Security Email Use",
  ];

  const handleDeleteCourses = (itemToDelete) => (event) => {
    console.log(itemToDelete);
    event.preventDefault();
    const updatedSelection = selectedCourses.filter((item) => item !== itemToDelete);
    setSelectedCourses(updatedSelection);
  };

  const handleChangeCourses = (event) => {
    setSelectedCourses(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const openEnrolCoursesModal = () => {
    setEnrolCoursesModalOpen(true);
  };

  const closeEnrolCoursesModal = () => {
    setEnrolCoursesModalOpen(false);
  };

  const enrolCourses = () => {
    closeEnrolCoursesModal();
  };


  const openUserForm = () => {
    setUserFormOpen(true);
  };

  const closeUserForm = () => {
    setUserFormOpen(false);
  };

  const closeGroupForm = () => {
    setGroupFormOpen(false);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [popover, setPopover] = useState({ index: '', bool: false })
  const handleClickPopOver = (index) => {
    setPopover({ index: index, bool: !popover.bool })
    console.log(popover, 'popover')
  };

  const openSendTestEmailModal = () => {
    setSendTestEmailModalOpen(true);
  };

  const closeSendTestEmailModal = () => {
    setSendTestEmailModalOpen(false);
  };

  const sendTestEmail = () => {
    closeSendTestEmailModal();
  };

  const openAnchor = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box sx={style}>
      <div style={{ width: "100%", height: "3rem" }}>
        <h5 style={{ fontWeight: 400 }}>Viewing 1 of 39</h5>
      </div>
      <div style={{ border: "1px solid #e8e9e9", width: "100%", height: "90%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 10,
          }}
        >
          <h3 style={{ fontWeight: 500 }}>Auto Phish - 01/11/2023 (01/11/2023 05:31)</h3>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
            <Button
              variant="outline"
              style={{
                border: "0.5px solid #1C7AE4",
                color: "white",
                backgroundColor: "#1b7ae4",
                width: "125px",
              }}
              size="small"
            >
              <AiOutlineReload fontSize={15} />
              <p>&nbsp;&nbsp;Refresh</p>
            </Button>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
            </FormGroup>
          </Box>
        </div>
        <Box sx={{ width: "100%", padding: 1 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Details" {...a11yProps(0)} />
              <Tab label="Recipients" {...a11yProps(1)} />
              <Tab label="Result" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div style={{ height: "54vh", overflowY: "scroll", paddingBottom: 30 }}>
              <div style={{ display: "flex", gap: 100 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>Configuration</h5>
                  <p style={{ fontSize: 15 }}>Start Date/Time:</p>
                  <p style={{ fontSize: 15 }}>01/11/2023 05:31</p>
                  <p style={{ fontSize: 15 }}>Restrict to Working Hours:</p>
                  <p style={{ fontSize: 15 }}>Yes</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                  <p style={{ fontSize: 15 }}>End Date/Time:</p>
                  <p style={{ fontSize: 15 }}>15/11/2023 05:31</p>
                  <p style={{ fontSize: 15 }}>Preferred Delivery Method:</p>
                  <p style={{ fontSize: 15 }}>SMPT</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                  <p style={{ fontSize: 15 }}>Spread:</p>
                  <p style={{ fontSize: 15 }}>2 weeks</p>
                </Box>
              </div>
              <div style={{ marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>Landing Page</h5>
                  <p style={{ fontSize: 15 }}>Landing Page URL:</p>
                  <p style={{ fontSize: 15 }}>https://amzwon.net</p>
                  <div
                    style={{
                      width: "fit-content",
                      border: "1px solid #e8e9e9",
                      padding: 5,
                    }}
                  >
                    <img
                      src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg"
                      height="150px"
                      alt="name"
                      style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 5 }}
                    />
                    <h5 style={{ fontWeight: 500 }}>ANZ | Halaxy</h5>
                  </div>
                  <Button
                    sx={{
                      border: "1px solid #e8e9e9",
                      width: "fit-content",
                      borderRadius: "2px",
                      color: "grey !important",
                    }}
                  >
                    View Landing Page
                  </Button>
                </Box>
              </div>
              <div style={{ display: "flex", gap: 100, marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>Email</h5>
                  <p style={{ fontSize: 15 }}>Sender Name:</p>
                  <p style={{ fontSize: 15 }}>Halaxy Support</p>
                  <p style={{ fontSize: 15 }}>Subject:</p>
                  <p style={{ fontSize: 15 }}>Important information about your Halaxy account</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                  <p style={{ fontSize: 15 }}>Sender Email Address:</p>
                  <p style={{ fontSize: 15 }}>support@amzwon.net</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                  <p style={{ fontSize: 15 }}>Using Custom Sender:</p>
                  <p style={{ fontSize: 15 }}>No</p>
                </Box>
              </div>
              <div style={{ marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <h5 style={{ marginBottom: 5 }}>Email Template: ANZ | Halaxy</h5>
                  <div
                    style={{
                      // width:'fit-content',
                      border: "1px solid #e8e9e9",
                      padding: 5,
                    }}
                  >
                    <img
                      src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg"
                      height="100%"
                      width="100%"
                      alt="name"
                      style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 5 }}
                    />
                  </div>
                  <Button
                    sx={{
                      border: "1px solid #e8e9e9",
                      width: "fit-content",
                      borderRadius: "2px",
                      color: "grey !important",
                    }}
                  >
                    <MarkEmailReadIcon />
                    &nbsp;&nbsp; Send Test Email
                  </Button>
                </Box>
              </div>
              <div
                style={{
                  border: "0.5px solid #d2d6da",
                  width: "30%",
                  borderRadius: "4px",
                  height: "20rem",
                  marginTop: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  padding: 5,
                }}
              >
                <IconButton
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    justifyContent: "end",
                  }}
                  // onClick={handleOpenTemplate}
                >
                  <LanguageIcon fontSize="small" />
                </IconButton>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "100px",
                  }}
                >
                  <img
                    src=""
                    height="150px"
                    style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 5 }}
                  />
                  <h5>Russia & Ukraine: Staying safe in ...</h5>
                  <Button
                    sx={{
                      border: "1px solid #e8e9e9",
                      width: "fit-content",
                      borderRadius: "2px",
                      color: "grey !important",
                    }}
                  >
                    All Levels
                  </Button>
                  <div
                    style={{
                      width: "100%",
                      background: "#EEEEEE",
                      padding: "10px",
                      color: "white",
                      textAlign: "center",
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <VisibilityIcon color="black" />
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >

              <div style={{ display: "flex", gap: 200 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* <h5 style={{ marginBottom: 5 }}>Configuration</h5> */}
                  <p style={{ fontSize: 15, color:'green' }}>Send</p>
                  <p style={{ fontSize: 15 }}><strong style={{fontSize:'25px', color:'green' }}>1</strong>/1</p>
                 
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5> */}
                  <p style={{ fontSize: 15, color:'rgb(30, 123, 228)' }}>Opened</p>
                  <p style={{ fontSize: 15 }}><strong style={{fontSize:'25px', color:'rgb(30, 123, 228)' }}>1</strong>/1</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5> */}
                  <p style={{ fontSize: 15, color:'rgb(253, 170, 13)' }}>Visited</p>
                  <p style={{ fontSize: 15 }}><strong style={{fontSize:'25px', color:'rgb(253, 170, 13)' }}>1</strong>/1</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5> */}
                  <p style={{ fontSize: 15, color:'rgb(246, 66, 52)' }}>Compromised</p>
                  <p style={{ fontSize: 15 }}><strong style={{fontSize:'25px', color:'rgb(246, 66, 52)'}}>1</strong>/1</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5> */}
                  <p style={{ fontSize: 15, color:'rgb(55, 123, 89' }}>Reported</p>
                  <p style={{ fontSize: 15 }}><strong style={{fontSize:'25px', color:'rgb(55, 123, 89'}}>1</strong>/1</p>
                </Box>
              </div>
              <Divider />
                <div style={{ display: "flex", alignItems: "end", gap: 5 }}>
                  <Typography sx={{ fontSize: "medium" }}>Status:</Typography>
                  <FormControl sx={{ minWidth: 150 }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      onChange={handleStatusChange}
                    >
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Inactive"}>Inactive</MenuItem>
                      <MenuItem value={"Managers"}>Managers</MenuItem>
                      <MenuItem value={"Group Managers"}>Group Managers</MenuItem>
                      <MenuItem value={"All Users"}>All Users</MenuItem>
                    </Select>
                  </FormControl>
                  <div style={{marginTop:'30px', marginLeft:'10px'}}>
                    <Switch {...label} />
                    <span 
                        style=
                        {{
                            fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
                        }}
                        >
                            Show Engaged Users
                    </span>
                    </div>
                    <div>
                    <Stack>
                    <Stack spacing={2} direction="row" justifyContent="flex-end">
                      <Button
                        style={{
                          border: "0.5px solid grey",
                          color: "#d4d4d4",
                          fontSize: "10px",
                          marginTop: "1px",
                          marginLeft:'380px'
                          
                        }}
                        size="medium"
                        onClick={openUserForm}
                      >
                        Search for a user
                        <AiOutlineSearch style={{ color: "gray", fontSize: "15px" }} />
                      </Button>
                      <Dialog open={isUserFormOpen} onClose={closeUserForm}></Dialog>
                    </Stack>
                  </Stack>
                    </div>
                    <div>
                      <Stack>
                      <Button
                      variant="outline"
                      style={{ border: "0.5px solid grey", color: "#585958", marginLeft:'30px' }}
                      size="small"
                      disabled
                    >
                      Actions
                    </Button>
                      </Stack>
                    </div>
                  </div>
                

            <div style={{marginTop:'30px'}}>
              <TableContainer component={Paper}>
                <Table sx={{ width: "100%" }} aria-label="simple table">
                  <TableHead sx={{ display: "table-header-group" }}>
                    <TableRow sx={{ width: "20px" }}>
                      <TableCell sx={{ textAlign: "center" }}></TableCell>
                      <TableCell>Recipients</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Scheduled / Send At</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Reported</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Delivery Method</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Updates</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell>
                        <Checkbox {...label} />
                      </TableCell>
                      <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>
                        Vedieshwaran R<br />
                        <p style={{ color: "grey" }}>vedieshwaran@twintechsolution.com</p>
                      </TableCell>
                      <TableCell style={{ fontSize: "13px", textAlign: "center" }}>
                        01/11/2023 05:31
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "13px", textAlign: "center", textAlign: "center" }}
                      >
                        Not Sent
                      </TableCell>
                      <TableCell style={{ fontSize: "13px", textAlign: "center" }}>N/A</TableCell>
                      <TableCell style={{ fontSize: "13px", textAlign: "center" }}></TableCell>
                      {/* <TableCell>
                        <SoftButton onClick={handleClick} variant="outlined" color="info">
                          <AiOutlineArrowRight />
                        </SoftButton>
                        <Popover
                          id={id}
                          open={openAnchor}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        ></Popover>
                      </TableCell> */}

                      <TableCell>
                        <SoftButton
                         aria-controls="simple-menu"
                         aria-haspopup="true"
                         onClick={handleClick}
                        >
                          <AiOutlineArrowRight />
                        </SoftButton>
                        {/* {index == popover.index && popover.bool &&  */}
                        <div style={{ position: 'absolute', backgroundColor: 'white', zIndex: 100 }}   
                          >

                          <MenuItem
                                    onClick={openEnrolCoursesModal}
                                    style={{ background: "#fff" }}
                                  >
                                    <SendIcon />
                                    Enrol on Course
                                  </MenuItem>

                                  <Modal
                                    open={enrolCoursesModalOpen}
                                    onClose={closeEnrolCoursesModal}
                                    aria-labelledby="send-test-email-modal-title"
                                    aria-describedby="send-test-email-modal-description"
                                  >
                                

                                    <Box sx={styleCourse} style={{ width: "500px" }}>
                                      <Typography
                                        id="send-test-email-modal-title"
                                        variant="h6"
                                        component="h2"
                                      >
                                        Enrol Vedieshwaran R on Course(s)
                                      </Typography>
                                      <FormControl sx={{ width: "350px" }}>
                                        <Typography
                                          sx={{
                                            fontSize: "",
                                            marginBottom: "5px",
                                            marginLeft: "2px",
                                            marginTop: "15px",
                                          }}
                                        >
                                          Subject:
                                        </Typography>
                                        <Select
                                          labelId="subject-label"
                                          id="subject-label"
                                          value={subject}
                                          label="Status"
                                          MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                          onChange={handleSubject}
                                          endAdornment={
                                            <InputAdornment position="end">
                                              <ExpandMoreIcon />
                                            </InputAdornment>
                                          }
                                        >
                                          <MenuItem value={"All"}>All</MenuItem>
                                          <MenuItem value={"InfoSec"}>InfoSec</MenuItem>
                                          <MenuItem value={"Video"}>Video</MenuItem>
                                          <MenuItem value={"Compliance"}>Compliance</MenuItem>
                                          <MenuItem value={"Custom"}>Custom</MenuItem>
                                        </Select>
                                      </FormControl>
                                      <FormControl sx={{ width: "350px", height: "auto" }}>
                                        <Typography
                                          sx={{
                                            fontSize: "",
                                            marginBottom: "5px",
                                            marginLeft: "2px",
                                            marginTop: "15px",
                                          }}
                                        >
                                          Course(s)
                                        </Typography>
                                        <Select
                                          labelId="multiple-select-label"
                                          id="multiple-select"
                                          multiple
                                          label="Select courses"
                                          value={selectedCourses}
                                          onChange={handleChangeCourses}
                                          MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                          renderValue={(selected) => (
                                            <div>
                                              {selected.map((item) => (
                                                <Chip
                                                  key={item}
                                                  label={item}
                                                  onDelete={handleDeleteCourses(item)}
                                                  sx={{
                                                    marginRight: "5px",
                                                    height: "20px",
                                                  }}
                                                />
                                              ))}
                                            </div>
                                          )}
                                        >
                                          {courses.map((item) => (
                                            <MenuItem key={item} value={item}>
                                              <Checkbox
                                                checked={selectedCourses.indexOf(item) > -1}
                                              />
                                              <ListItemText secondary={item} />
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </FormControl>
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
                                          onClick={enrolCourses}
                                          style={{ color: "#fff" }}
                                        >
                                          Enrol
                                        </Button>
                                        <Button
                                          variant="outlined"
                                          onClick={closeEnrolCoursesModal}
                                          style={{ marginRight: "5px", color: "black" }}
                                        >
                                          Cancel
                                        </Button>
                                      </Box>
                                    </Box>
                                  </Modal>

                                  <MenuItem  style={{background:'#fff'}}>
                                    {/* <EditIcon /> */}
                                    EXport Simulation Data
                                  </MenuItem>

                        </div>
                      </TableCell>
                      
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              </div>
            </SoftBox>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            
          <div style={{ height: "54vh", overflowY: "scroll", paddingBottom: 30 }}>
          <Box>
                <div style={{ display: "flex", gap: 100 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <BarChart width={600} height={400} data={data} >
                        <CartesianGrid />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Comprises" stackId="a" fill="rgb(246, 66, 52)" />
                        <Bar dataKey="Reports" stackId="a" fill="green" />
                        <Bar dataKey="Visits" stackId="a" fill="rgb(253, 170, 13)" />
                        <Bar dataKey="Opens" stackId="a" fill="rgb(30, 123, 228)" />
                      </BarChart>
                      <p style={{fontSize:'13px', marginLeft:'250px'}}>Time Since Simulation Starts</p>
                    </Box>
                </div>
            </Box>
            

            <Box style={{marginTop:'40px'}}>
            <div style={{ display: "flex", gap: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 290,
                padding: 10,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "0px" }}
                >
                  Open Rate
                </Typography>
                <span>
                  {/* <AiFillInfoCircle /> */}
                </span>
              </div>

              <div>
                <h1><strong style={{color:'rgb(30, 123, 228)'}}>100</strong>%</h1>
              </div>
              <div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}></h5>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>of users opened an email</h6>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 290,
                padding: 10,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "0px" }}
                >
                  Compromise Rate
                </Typography>
                <span>
                  {/* <AiFillInfoCircle /> */}
                </span>
              </div>

              <div>
                <h1><strong style={{color:'rgb(246, 66, 52)'}}>100</strong>%</h1>
              </div>
              <div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}></h5>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>of users revealed information</h6>
            </div>
           
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 290,
                padding: 10,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 25,
                marginTop:'35px'
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h5 style={{ margin: "0px" }}>Trends</h5>
                <span>
                  {/* <AiFillInfoCircle /> */}
                </span>
              </div>
              <div style={{ width: 150, height: "100%" }}>
              
              </div>
              {/* <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                is the average score for all courses
              </h5>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total Courses Enrolled - 8</h6> */}
              <div
                        style={{
                          width: "100%",
                          height: 700,
                        }}
                      >
                        <ChartBar uPolicyChartBar={uPolicyChartBar} />
                      </div>
            </div>
          </div>
            </Box>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </Box>
  );
};

export default ViewSimulationData;
