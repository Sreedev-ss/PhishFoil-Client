import { Card, Typography } from "@mui/material";

import SoftBox from "components/SoftBox";

import React from "react";

import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
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
const ScheduleReport = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [viewReportOpen, setViewReportOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);

  const [reportName, setReportName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportType, setReportType] = useState("");
  const [tableData, setTableData] = useState([]);

  //Schedule report

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleSendOpen = () => {
    setSendOpen(true);
  };

  const handleSendClose = () => {
    setSendOpen(false);
  };

  const handleDownloadOpen = () => {
    setDownloadOpen(true);
  };

  const handleDownloadClose = () => {
    setDownloadOpen(false);
  };

  const handleViewReportChangeOpen = () => {
    setViewReportOpen(true);
  };
  const handleViewReportChangeClose = () => {
    setViewReportOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddOpen = () => {
    setAddOpen(true);
  };
  const handleAddClose = () => {
    setAddOpen(false);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  const anchorRef = useRef(null);

  const openUserForm = () => {
    setUserFormOpen(true);
  };

  const closeUserForm = () => {
    setUserFormOpen(false);
  };

  const openAnchor = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
                  <h3>Scheduled Reports</h3>
                </div>
                <div>
                  <p style={{ color: "gray" }}>
                    Schedule reports to be generated on a regular basis. On this page you can see
                    all of the scheduled reports, enable/disable them, and set who they are sent to.
                  </p>
                </div>
              </Stack>

              <Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="flex-end"
                  style={{ padding: "26px" }}
                >
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
                  <Dialog open={isUserFormOpen} onClose={closeUserForm}>
                    {/* User form content here */}
                  </Dialog>
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
                  <Dialog open={isUserFormOpen} onClose={closeUserForm}>
                    {/* User form content here */}
                  </Dialog>
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
                  <Button
                    variant="outline"
                    onClick={handleAddOpen}
                    style={{
                      border: "0.5px solid #1C7AE4",
                      color: "white",
                      backgroundColor: "#1b7ae4",
                      fontWeight: "lighter",
                      fontSize: "medium",
                    }}
                  >
                    + Add
                  </Button>

                  <Modal open={addOpen} onClose={handleAddClose}>
                    <Box sx={style}>
                      <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                        Add Scheduled Report
                      </Typography>
                      <Box>
                        <label htmlFor="name" style={{ fontSize: "13px" }}>
                          Report Name:
                        </label>
                      </Box>
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        sx={{ gridColumn: "span 2" }}
                      />
                      <Box>
                        <label htmlFor="name" style={{ fontSize: "13px" }}>
                          Report Type:
                        </label>
                      </Box>
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        sx={{ gridColumn: "span 2" }}
                      />

                      <Box>
                        <label htmlFor="name" style={{ fontSize: "13px" }}>
                          Frequency:
                        </label>
                      </Box>
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        sx={{ gridColumn: "span 2" }}
                        placeholder="Montly"
                      />
                      <Typography id="send-test-email-modal-title" variant="h6" component="h6">
                        Enabled
                      </Typography>
                      <Switch {...label} defaultChecked />

                      <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                        When enabled this report will be sent to its recipients on the 1st of the
                        month at 7:00am UTC.
                      </Typography>
                      <Box>
                        <label htmlFor="name" style={{ fontSize: "13px" }}>
                          Recipients:
                        </label>
                      </Box>
                      <div
                        style={{
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextField
                          fullWidth
                          type="email"
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "26px",

                            color: "white",
                            margin: "8px",
                          }}
                        />
                        <Button
                          // onClick={handleOpen}
                          style={{
                            border: "0.5px solid #1C7AE4",
                            color: "white",
                            backgroundColor: "#1b7ae4",
                            fontWeight: "lighter",
                            marginTop: "10px",
                          }}
                          size="medium"
                        >
                          + Add
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        style={{
                          display: "flex",
                          marginLeft: "40%",

                          textAlign: "center",
                          border: "0.5px solid #d4d4d4",
                          color: "#d4d4d4",
                          fontWeight: "400",
                          fontSize: "large",
                        }}
                      >
                        Add
                      </Button>
                    </Box>
                  </Modal>

                  <Popper
                    sx={{
                      zIndex: 1,
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                        }}
                      ></Grow>
                    )}
                  </Popper>
                </Stack>
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
                  spacing={2}
                  margin={2}
                  direction="row"
                  justifyContent="flex-end"
                  style={{ padding: "26px" }}
                >
                  <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                      <TableHead sx={{ display: "table-header-group" }}>
                        <TableRow>
                          <TableCell style={{ fontSize: "16px", width: "80px" }}>Name</TableCell>
                          <TableCell style={{ fontSize: "16px", width: "80px" }}>
                            Period Type
                          </TableCell>
                          <TableCell style={{ fontSize: "16px", width: "80px" }}>
                            Period Start
                          </TableCell>
                          <TableCell style={{ fontSize: "16px", width: "80px" }}>
                            Period End
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell
                            style={{
                              fontSize: "16px",

                              width: "80px",
                            }}
                          >
                            john
                          </TableCell>
                          <TableCell style={{ fontSize: "16px", width: "80px" }}>3</TableCell>
                          <TableCell style={{ fontSize: "16px", width: "80px" }}>course</TableCell>
                          <TableCell style={{ fontSize: "16px", width: "80px" }}>
                            01/11/2023
                          </TableCell>
                          <TableCell>
                            <SoftButton onClick={handleClick} variant="outlined" color="info">
                              <AiOutlineArrowRight />
                            </SoftButton>
                            <Popover
                              id={id}
                              open={openAnchor}
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                              onClose={handleClose}
                            >
                              {/* edit-email-template */}
                              <MenuItem
                                onClick={handleViewReportChangeOpen}
                                style={{ background: "#fff" }}
                              >
                                View report
                              </MenuItem>

                              <Modal
                                open={viewReportOpen}
                                onClose={handleViewReportChangeClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    View Scheduled Report: john
                                  </Typography>

                                  <Typography
                                    id="transition-modal-description"
                                    sx={{ mt: 2 }}
                                    color="textSecondary"
                                  >
                                    Reporting Period:
                                  </Typography>
                                  <FormControl sx={{ m: 1 }} variant="standard">
                                    {/* <InputLabel htmlFor="demo-customized-select-native">
                                        Age
                                      </InputLabel> */}
                                    <NativeSelect
                                      id="demo-customized-select-native"
                                      //   value={viewReport}
                                      //   onChange={handlesetViewChange}
                                      input={<BootstrapInput />}
                                      defaultValue={10}
                                    >
                                      <option
                                        aria-label="None"
                                        value=""
                                        style={{ width: "100%" }}
                                      />
                                      <option value={10}>October 2023</option>
                                      <option value={20}>September 2023</option>
                                      <option value={20}>August 2023</option>
                                      <option value={20}>July 2023</option>
                                      <option value={20}>June 2023</option>
                                      <option value={20}>April 2023</option>
                                      <option value={20}>March 2023</option>
                                      <option value={30}>Febrauary 2023</option>
                                    </NativeSelect>
                                  </FormControl>
                                  <Button
                                    variant="outline"
                                    style={{
                                      display: "flex",
                                      marginLeft: "20%",
                                      marginTop: "10%",

                                      textAlign: "center",
                                      border: "0.5px solid #1C7AE4",
                                      color: "#1C7AE4",
                                      fontWeight: "400",
                                      fontSize: "large",
                                    }}
                                  >
                                    View Report
                                  </Button>
                                </Box>
                              </Modal>
                              <MenuItem onClick={handleDownloadOpen} style={{ background: "#fff" }}>
                                Download Report
                              </MenuItem>

                              <Modal
                                open={downloadOpen}
                                onClose={handleDownloadClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Download Scheduled Report: john
                                  </Typography>

                                  <Typography
                                    id="transition-modal-description"
                                    sx={{ mt: 2 }}
                                    color="textSecondary"
                                  >
                                    Reporting Period:
                                  </Typography>
                                  <FormControl sx={{ m: 1 }} variant="standard">
                                    {/* <InputLabel htmlFor="demo-customized-select-native">
                                        Age
                                      </InputLabel> */}
                                    <NativeSelect
                                      id="demo-customized-select-native"
                                      //   value={viewReport}
                                      //   onChange={handlesetViewChange}
                                      input={<BootstrapInput />}
                                      defaultValue={10}
                                    >
                                      <option
                                        aria-label="None"
                                        value=""
                                        style={{ width: "100%" }}
                                      />
                                      <option value={10}>October 2023</option>
                                      <option value={20}>September 2023</option>
                                      <option value={20}>August 2023</option>
                                      <option value={20}>July 2023</option>
                                      <option value={20}>June 2023</option>
                                      <option value={20}>April 2023</option>
                                      <option value={20}>March 2023</option>
                                      <option value={30}>Febrauary 2023</option>
                                    </NativeSelect>
                                  </FormControl>
                                  <Button
                                    variant="outline"
                                    style={{
                                      display: "flex",
                                      marginLeft: "20%",
                                      marginTop: "10%",

                                      textAlign: "center",
                                      border: "0.5px solid #1C7AE4",
                                      color: "#1C7AE4",
                                      fontWeight: "400",
                                      fontSize: "large",
                                    }}
                                  >
                                    Download Report
                                  </Button>
                                </Box>
                              </Modal>

                              <MenuItem onClick={handleSendOpen} style={{ background: "#fff" }}>
                                Send Report
                              </MenuItem>

                              <Modal
                                open={sendOpen}
                                onClose={handleSendClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Send Scheduled Report: vijay
                                  </Typography>

                                  <Typography
                                    id="transition-modal-description"
                                    sx={{ mt: 2 }}
                                    color="textSecondary"
                                  >
                                    Reporting Period:
                                  </Typography>
                                  <FormControl sx={{ m: 1 }} variant="standard">
                                    {/* <InputLabel htmlFor="demo-customized-select-native">
                                        Age
                                      </InputLabel> */}
                                    <NativeSelect
                                      id="demo-customized-select-native"
                                      //   value={viewReport}
                                      //   onChange={handlesetViewChange}
                                      input={<BootstrapInput />}
                                      defaultValue={10}
                                    >
                                      <option
                                        aria-label="None"
                                        value=""
                                        style={{ width: "100%" }}
                                      />
                                      <option value={10}>October 2023</option>
                                      <option value={20}>September 2023</option>
                                      <option value={20}>August 2023</option>
                                      <option value={20}>July 2023</option>
                                      <option value={20}>June 2023</option>
                                      <option value={20}>April 2023</option>
                                      <option value={20}>March 2023</option>
                                      <option value={30}>Febrauary 2023</option>
                                    </NativeSelect>
                                  </FormControl>
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Recipients:
                                    </label>
                                  </Box>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItem: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      type="email"
                                      variant="filled"
                                      sx={{ gridColumn: "span 2" }}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: "26px",

                                        color: "white",
                                        margin: "8px",
                                      }}
                                    />
                                    <Button
                                      // onClick={handleOpen}
                                      style={{
                                        border: "0.5px solid #1C7AE4",
                                        color: "white",
                                        backgroundColor: "#1b7ae4",
                                        fontWeight: "lighter",
                                        marginTop: "10px",
                                      }}
                                      size="medium"
                                    >
                                      + Add
                                    </Button>
                                  </div>
                                  <Button
                                    variant="outline"
                                    style={{
                                      display: "flex",
                                      marginLeft: "20%",
                                      marginTop: "10%",

                                      textAlign: "center",
                                      color: "white",
                                      backgroundColor: "red",
                                      fontWeight: "400",
                                      fontSize: "large",
                                    }}
                                  >
                                    Remove All
                                  </Button>

                                  <Button
                                    variant="outline"
                                    style={{
                                      display: "flex",
                                      marginLeft: "20%",
                                      marginTop: "10%",

                                      textAlign: "center",
                                      border: "0.5px solid #1C7AE4",
                                      color: "#1C7AE4",
                                      fontWeight: "400",
                                      fontSize: "large",
                                    }}
                                  >
                                    Send Report
                                  </Button>
                                </Box>
                              </Modal>

                              <MenuItem onClick={handleEditOpen} style={{ background: "#fff" }}>
                                Send Report
                              </MenuItem>

                              <Modal open={editOpen} onClose={handleEditClose}>
                                <Box sx={style}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Edit Scheduled Report
                                  </Typography>
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Report Name:
                                    </label>
                                  </Box>
                                  <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    sx={{ gridColumn: "span 2" }}
                                  />
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Report Type:
                                    </label>
                                  </Box>
                                  <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    sx={{ gridColumn: "span 2" }}
                                  />

                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Frequency:
                                    </label>
                                  </Box>
                                  <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    sx={{ gridColumn: "span 2" }}
                                    placeholder="Montly"
                                  />
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h6"
                                  >
                                    Enabled
                                  </Typography>
                                  <Switch {...label} defaultChecked />

                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    When enabled this report will be sent to its recipients on the
                                    1st of the month at 7:00am UTC.
                                  </Typography>
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Recipients:
                                    </label>
                                  </Box>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItem: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      type="email"
                                      variant="filled"
                                      sx={{ gridColumn: "span 2" }}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: "26px",

                                        color: "white",
                                        margin: "8px",
                                      }}
                                    />
                                    <Button
                                      // onClick={handleOpen}
                                      style={{
                                        border: "0.5px solid #1C7AE4",
                                        color: "white",
                                        backgroundColor: "#1b7ae4",
                                        fontWeight: "lighter",
                                        marginTop: "10px",
                                      }}
                                      size="medium"
                                    >
                                      + Add
                                    </Button>
                                  </div>
                                  <Button
                                    variant="outline"
                                    style={{
                                      display: "flex",
                                      marginLeft: "20%",
                                      marginTop: "10%",

                                      textAlign: "center",
                                      color: "white",
                                      backgroundColor: "red",
                                      fontWeight: "400",
                                      fontSize: "large",
                                    }}
                                  >
                                    Remove All
                                  </Button>
                                  <Button
                                    variant="outline"
                                    style={{
                                      display: "flex",
                                      marginLeft: "30%",
                                      marginTop: "16px",

                                      textAlign: "center",
                                      border: "0.5px solid #d4d4d4",
                                      color: "#d4d4d4",
                                      fontWeight: "400",
                                      fontSize: "large",
                                    }}
                                  >
                                    Save
                                  </Button>
                                </Box>
                              </Modal>

                              <MenuItem onClick={handleDeleteOpen} style={{ background: "#fff" }}>
                                Delete Report
                              </MenuItem>

                              <Modal open={deleteOpen} onClose={handleDeleteClose}>
                                <Box sx={style}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Are you sure you want to delete the selected report?
                                  </Typography>
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Number of Reports to delete:
                                    </label>
                                  </Box>
                                  <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    sx={{ gridColumn: "span 2" }}
                                    placeholder="1"
                                  />

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
                                      //   onClick={sendTestEmail}
                                      style={{ color: "#fff" }}
                                    >
                                      <MailOutlineIcon sx={{ marginRight: "5px", color: "#fff" }} />
                                      Yes
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      //   onClick={closeSendTestEmailModal}
                                      style={{ marginRight: "5px", color: "black" }}
                                    >
                                      No
                                    </Button>
                                  </Box>
                                </Box>
                              </Modal>
                            </Popover>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Menu></Menu>
                  </TableContainer>
                </Stack>
              </SoftBox>
            </Card>
          </div>
        </div>
      </SoftBox>
    </div>
  );
};
export default ScheduleReport;
