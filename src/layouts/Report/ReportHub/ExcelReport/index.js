import { Card, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import PropTypes from "prop-types";
import ReviewsBar from "layouts/viewSimulation/components/ReviewsBar";
import { AiFillInfoCircle, AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import Pagination from "@mui/material/Pagination";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import {
  Box,
  Button,
  Dialog,
  FormControl,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Popover,
  Popper,
  Select,
  Stack,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SoftButton from "components/SoftButton";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import RefreshIcon from "@mui/icons-material/Refresh";

import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import {
  DownloadDoneOutlined,
  DownloadOutlined,
  RoundaboutLeft,
  SendOutlined,
  ViewDayOutlined,
} from "@mui/icons-material";
import ViewSimulation from "layouts/viewSimulation";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import NativeSelect from "@mui/material/NativeSelect";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ExcelReport = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  //Schedule report

  const openAnchor = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div>
            <Card sx={{ marginTop: 3 }}>
              <Stack style={{ padding: "26px" }}>
                <div>
                  <h3>Excel Reports</h3>
                </div>
                <div>
                  <p style={{ color: "gray" }}>
                    Here you can download all of the excel reports available in the rest of the
                    system.
                  </p>
                </div>
              </Stack>

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
                <Stack
                  style={{
                    padding: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Left horizontal line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                  {/* Right horizontal line */}
                  <div>
                    <h3>Users</h3>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Users Report</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      The Users Report lists all non-admin users on your platform with information
                      on their language, manager, creation date and groups they have been added to.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download User Report
                    </Button>
                  </div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Group Managers</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      The Group Managers report lists each group set up on your platform and their
                      associated group manager.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Group Managers Report
                    </Button>
                  </div>
                </Stack>

                <Stack
                  style={{
                    padding: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Left horizontal line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                  {/* Right horizontal line */}
                  <div>
                    <h3>uPhish</h3>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Simulations Data</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      The Simulations Report details the performance of each user on phishing
                      simulations they have been sent.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Simulations Report
                    </Button>
                  </div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Export Simulation Data - All Users</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      This report exports all records of user interactions with simulated phishing
                      emails sent from your account.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Simulations Report
                    </Button>
                  </div>
                </Stack>

                <Stack
                  style={{
                    padding: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Left horizontal line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                  {/* Right horizontal line */}
                  <div>
                    <h3>uLearn</h3>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Outstanding Courses</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      The Outstanding Courses report lists each outstanding course enrolment and
                      associated user, along with the link to complete the course.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Outstanding Courses
                    </Button>
                  </div>
                </Stack>

                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Course Participation Grid</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      The Course Participation Grid lists every user on your platform along with
                      their completion status and grade for each course they have been enrolled on.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Participation Grid Report
                    </Button>
                  </div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Export Course Data - All Users</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      This report exports each course your users have been enrolled on, along with
                      statistics on starting and completion rates as well as average time taken.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Courses Report
                    </Button>
                  </div>
                </Stack>

                <Stack
                  style={{
                    padding: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Left horizontal line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                  {/* Right horizontal line */}
                  <div>
                    <h3>uBreach</h3>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Breaches Report</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      The Breaches Report includes details of every breach recorded against your
                      users, including the name of the breached service, when the breach took place,
                      and what information became compromised.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Breaches Report
                    </Button>
                  </div>
                </Stack>
                <Stack
                  style={{
                    padding: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Left horizontal line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                  {/* Right horizontal line */}
                  <div>
                    <h3>uPolicy</h3>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      margin: "45px",
                      width: "40%", // Adjust the width as needed
                      height: "1px",
                      backgroundColor: "#d4d4d4", // Adjust the color as needed
                    }}
                  ></div>
                </Stack>
                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Outstanding Policies</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      The Outstanding Policy Report lists each outstanding policy signature request
                      and associated user.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Outstanding Policy Report
                    </Button>
                  </div>
                </Stack>

                <Stack style={{ padding: "26px" }}>
                  <div style={{}}>
                    <h4>Export Policy Data - All Users</h4>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>
                      This report exports each policy your users have interacted with, along with
                      statistics on when each policy was viewed and signed as well as which version.
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d4d4d4",
                        color: "#d4d4d4",
                        fontWeight: "400",

                        margin: "8px",
                      }}
                    >
                      <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                      Download Policies Report
                    </Button>
                  </div>
                </Stack>
              </SoftBox>
            </Card>
          </div>
        </div>
      </SoftBox>
    </div>
  );
};

export default ExcelReport;
