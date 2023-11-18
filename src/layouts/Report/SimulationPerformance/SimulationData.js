import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Paper,
  Popover,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import RefreshIcon from "@mui/icons-material/Refresh";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DataTable from "./TableData";
import SimpleLineChart from "../ReportHub/PerformanceReport/ViewReport/ViewChart";

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

const SimulationData = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [nfrAccount, setNfrAccount] = React.useState("");
  const [isUserFormOpen, setUserFormOpen] = useState(false);

  const handleChangeNfr = (event) => {
    setNfrAccount(event.target.value);
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
  const openUserForm = () => {
    setUserFormOpen(true);
  };

  const closeUserForm = () => {
    setUserFormOpen(false);
  };

  const openAnchor = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box>
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
            <div style={{ height: "25vh", overflowY: "scroll", paddingBottom: 30 }}>
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

          {/* <CustomTabPanel value={value} index={1}>
            <div style={{ width: "100%", height: "3rem" }}>
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
              <Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    Sent
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    Opened
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    Visited
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    Compromised
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    Visited
                  </Typography>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    2/ 2
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    2/ 2
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    1/ 2
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    1/ 2
                  </Typography>
                  <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                    1/ 2
                  </Typography>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <Typography sx={{ fontSize: "large", color: "black", m: 4, minWidth: 50 }}>
                    Status:{" "}
                  </Typography>
                  <FormControl sx={{ m: 4, minWidth: 50 }}>
                    <Select
                      value={nfrAccount}
                      onChange={handleChangeNfr}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      id="demo-simple-select-autowidth"
                    >
                      <MenuItem value="">
                        <em>All Users</em>
                      </MenuItem>
                      <MenuItem value={10}>Active</MenuItem>
                      <MenuItem value={20}>Inactive</MenuItem>
                      <MenuItem value={30}>Managers</MenuItem>
                      <MenuItem value={30}>Group Managers</MenuItem>
                      <MenuItem value={30}>All Users</MenuItem>
                    </Select>
                  </FormControl>
                  <FormGroup>
                    <FormControlLabel control={<Switch />} label="Show Engaged Users" />
                  </FormGroup>
                  <Button
                    variant="outline"
                    style={{
                      border: "0.5px solid grey",
                      color: "#d4d4d4",
                      fontSize: "10px",
                      marginRight: "10px",
                    }}
                    size="small"
                    onClick={openUserForm}
                  >
                    Search for a Report
                    <AiOutlineSearch
                      style={{ color: "gray", fontSize: "15px", marginRight: "10px" }}
                    />
                  </Button>
                  <Button
                    variant="outline"
                    style={{
                      border: "0.5px solid grey",
                      color: "#d4d4d4",
                      fontSize: "medium",
                    }}
                    size="small"
                    onClick={openUserForm}
                  >
                    <ArrowDropDownIcon style={{ fontSize: "large", marginRight: "5px" }} />
                    Actions
                  </Button>
                </div>
                <DataTable />
              </Box>
            </SoftBox>
            </div>
          </CustomTabPanel> */}
          <CustomTabPanel value={value} index={1}>
            <div style={{ height: "25vh", overflowY: "scroll", paddingBottom: 30 }}>
              <div style={{ marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      Sent
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      Opened
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      Visited
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      Compromised
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      Visited
                    </Typography>
                  </div>
                </Box>
              </div>

              <div style={{ marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      2/ 2
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      2/ 2
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      1/ 2
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      1/ 2
                    </Typography>
                    <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                      1/ 2
                    </Typography>
                  </div>
                </Box>
              </div>
              <div style={{ display: "flex", gap: 100, marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "large", color: "black", m: 4, minWidth: 50 }}>
                      Status:{" "}
                    </Typography>
                    <FormControl sx={{ m: 4, minWidth: 50 }}>
                      <Select
                        value={nfrAccount}
                        onChange={handleChangeNfr}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        id="demo-simple-select-autowidth"
                      >
                        <MenuItem value="">
                          <em>All Users</em>
                        </MenuItem>
                        <MenuItem value={10}>Active</MenuItem>
                        <MenuItem value={20}>Inactive</MenuItem>
                        <MenuItem value={30}>Managers</MenuItem>
                        <MenuItem value={30}>Group Managers</MenuItem>
                        <MenuItem value={30}>All Users</MenuItem>
                      </Select>
                    </FormControl>
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Show Engaged Users" />
                    </FormGroup>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid grey",
                        color: "#d4d4d4",
                        fontSize: "10px",
                        marginRight: "10px",
                      }}
                      size="small"
                      onClick={openUserForm}
                    >
                      Search for a Report
                      <AiOutlineSearch
                        style={{ color: "gray", fontSize: "15px", marginRight: "10px" }}
                      />
                    </Button>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid grey",
                        color: "#d4d4d4",
                        fontSize: "medium",
                      }}
                      size="small"
                      onClick={openUserForm}
                    >
                      <ArrowDropDownIcon style={{ fontSize: "large", marginRight: "5px" }} />
                      Actions
                    </Button>
                  </div>
                </Box>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "100px",
                }}
              >
                <DataTable />
              </div>
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <div style={{ height: "25vh", overflowY: "scroll", paddingBottom: 30 }}>
              <div style={{ marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid grey",
                        color: "blue",
                        fontSize: "medium",
                      }}
                      size="small"
                      onClick={openUserForm}
                    >
                      <RefreshIcon style={{ fontSize: "large", marginRight: "5px" }} />
                      Refresh
                    </Button>
                  </div>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
                    </FormGroup>
                  </div>
                </Box>
              </div>

              <div style={{ marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <SimpleLineChart />
                  </div>
                </Box>
              </div>
              <div style={{ display: "flex", gap: 100, marginTop: 18 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  ></div>
                </Box>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </Box>
  );
};

export default SimulationData;
