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
import ThumbDownOffAltSharpIcon from "@mui/icons-material/ThumbDownOffAltSharp";
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
import BasicLineChart from "./ViewChart";
import SimpleLineChart from "./ViewChart";

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

const ViewReport = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);
  const overallCompromiseRate = 14.5;
  const previousCompromiseRate = 7.1;

  //Schedule report

  const openAnchor = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <DashboardLayout>
        <SoftBox py="3">
          <SoftBox mb="3">
            <Card style={{ margin: "16px", padding: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                  >
                    Performance Report
                  </Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    onClick={handleChange}
                    style={{
                      color: "white",
                      border: "0.5px solid #d4d4d4",
                      color: "#d4d4d4",
                      fontWeight: "lighter",
                      padding: "16px",
                      marginRight: "16px",
                    }}
                  >
                    Return to Report Hub
                  </Button>
                  <Button
                    onClick={handleChange}
                    style={{
                      border: "0.5px solid #1C7AE4",
                      color: "white",
                      backgroundColor: "#1b7ae4",
                      fontWeight: "lighter",
                      padding: "16px",
                      marginRight: "16px",
                    }}
                  >
                    Download Report
                  </Button>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <Typography
                  sx={{ fontSize: "small", color: "black", fontWeight: "bold", marginLeft: "16px" }}
                >
                  01/10/2023 - 31/10/2023
                </Typography>
              </div>
            </Card>
          </SoftBox>
          <Divider />
          <Card style={{ margin: "16px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <Typography
                sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
              >
                Executive Summary
              </Typography>
            </div>
          </Card>
          <Divider />

          <Divider />
          <Stack>
            <Box>
              <Card style={{ margin: "16px", padding: "20px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                  >
                    Simulated Phishing
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "small",
                      color: "black",
                      fontWeight: "bold",
                      marginRight: "35%",
                    }}
                  >
                    Overall Compromise Rate
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px",
                  }}
                >
                  <div>
                    <Typography
                      sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                    >
                      This section shows the overall compromise rate of your users in phishing
                      simulations they have been sent. The figure takes into account all simulations
                      and compromises since the inception of your account. The graph shows change in
                      the overall compromise rate over the reporting period.
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        padding: "4px",
                        borderRadius: "4px",
                        padding: "16px",
                        margin: "16px",
                        width: "50%",
                        position: "relative", // Add this line
                      }}
                    >
                      {/* Position the ThumbDownOffAltSharpIcon */}
                      <ThumbDownOffAltSharpIcon
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          color: "red", // You can set the color you want
                          fontSize: "large",
                          // You can set the color you want
                        }}
                      />

                      <Typography
                        variant="h6"
                        sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                      >
                        Overall Compromise Rate
                      </Typography>
                      <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                        {overallCompromiseRate}%
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: "grey" }}>
                        Previous: {previousCompromiseRate}%
                      </Typography>
                    </Box>
                  </div>

                  <div>
                    <SimpleLineChart />
                  </div>
                </div>
              </Card>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Card style={{ margin: "16px", padding: "20px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                  >
                    Course
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "small",
                      color: "black",
                      fontWeight: "bold",
                      marginRight: "35%",
                    }}
                  >
                    Average Score
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px",
                  }}
                >
                  <div>
                    <Typography
                      sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                    >
                      This section summarises the participation and performance of your users in
                      their training courses. The Average Score and Overall Completion Rate take
                      into account all course completions from the beginning of your training
                      programme to the end of the reporting period. The graph shows the change in
                      Average Score over the reporting period.
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Average Score
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Overall Completion rate
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                    </div>
                  </div>

                  <div>
                    <SimpleLineChart />
                  </div>
                </div>
              </Card>
            </Box>
          </Stack>
          <Divider />
          <Stack>
            <Box>
              <Card style={{ margin: "16px", padding: "20px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                  >
                    Policies
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "small",
                      color: "black",
                      fontWeight: "bold",
                      marginRight: "35%",
                    }}
                  >
                    Policy Requests Signed %
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px",
                  }}
                >
                  <div>
                    <Typography
                      sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                    >
                      This section summarises policy activity. The number figures take into account
                      policies created and updated, and policy requests sent and signed during the
                      reporting period. The graph shows the signature rate of all policy requests
                      sent since the inception of your account.
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Average Score
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Overall Completion rate
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Average Score
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Overall Completion rate
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                    </div>
                  </div>

                  <div>
                    <SimpleLineChart />
                  </div>
                </div>
              </Card>
            </Box>
          </Stack>
          <Divider />
          <Stack>
            <Box>
              <Card style={{ margin: "16px", padding: "20px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                  >
                    Breaches
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "small",
                      color: "black",
                      fontWeight: "bold",
                      marginRight: "35%",
                    }}
                  >
                    New User Breaches
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px",
                  }}
                >
                  <div>
                    <Typography
                      sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                    >
                      This section shows the overall number of user breaches detected as well as new
                      ones detected within the reporting period. User breaches represent each unique
                      user and breached service combination within the breach scans performed on
                      your account.
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Average Score
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "4px",
                          padding: "16px",
                          margin: "16px",
                          width: "50%",
                          position: "relative", // Add this line
                        }}
                      >
                        {/* Position the ThumbDownOffAltSharpIcon */}

                        <Typography
                          variant="h6"
                          sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                        >
                          Overall Completion rate
                        </Typography>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                          {overallCompromiseRate}%
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          Previous: {previousCompromiseRate}%
                        </Typography>
                      </Box>
                    </div>
                  </div>

                  <div>
                    <SimpleLineChart />
                  </div>
                </div>
              </Card>
            </Box>
          </Stack>
          <Divider />
          <Stack>
            <Box>
              <Card style={{ margin: "16px", padding: "20px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                  >
                    Simulated Phishing
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "small",
                      color: "black",
                      fontWeight: "bold",
                      marginRight: "35%",
                    }}
                  >
                    Overall Compromise Rate
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px",
                  }}
                >
                  <div>
                    <Typography
                      sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "16px" }}
                    >
                      This section shows the overall compromise rate of your users in phishing
                      simulations they have been sent. The figure takes into account all simulations
                      and compromises since the inception of your account. The graph shows change in
                      the overall compromise rate over the reporting period.
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        padding: "4px",
                        borderRadius: "4px",
                        padding: "16px",
                        margin: "16px",
                        width: "50%",
                        position: "relative", // Add this line
                      }}
                    >
                      {/* Position the ThumbDownOffAltSharpIcon */}
                      <ThumbDownOffAltSharpIcon
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          color: "red", // You can set the color you want
                          fontSize: "large",
                          // You can set the color you want
                        }}
                      />

                      <Typography
                        variant="h6"
                        sx={{ color: "black", fontWeight: "bold", paddingBottom: "16px" }}
                      >
                        Overall Compromise Rate
                      </Typography>
                      <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                        {overallCompromiseRate}%
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: "grey" }}>
                        Previous: {previousCompromiseRate}%
                      </Typography>
                    </Box>
                  </div>

                  <div>
                    <SimpleLineChart />
                  </div>
                </div>
              </Card>
            </Box>
          </Stack>
        </SoftBox>
      </DashboardLayout>
    </div>
  );
};

export default ViewReport;
