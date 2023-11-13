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
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const languageOptions = ["English", "Spanish", "French", "German"];

const PerformanceReport = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);

  const [viewSimulationsModalOpen, setViewSimulationModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [reportName, setReportName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportType, setReportType] = useState("");
  const [tableData, setTableData] = useState([]);
  const [recipientEmails, setRecipientEmails] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);
  const [viewPerfomReportOpen, setViewPerformReportOpen] = useState(false);

  //Schedule report

  const [scheduleReportName, setScheduleReportName] = useState("");
  const [scheduleReportType, setScheduleReportType] = useState("");
  const [scheduleFrequency, setScheduleFrequency] = useState("");
  const [viewReport, setViewReport] = React.useState("");
  const handlesetViewChange = (event) => {
    setViewReport(event.target.value);
  };

  const handleViewPerformReportOpen = () => {
    setViewPerformReportOpen(true);
  };

  const handleViewPerformReportClose = () => {
    setViewPerformReportOpen(false);
  };

  const handleOpenModal = (report) => {
    setSelectedReport(report);
    setOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedReport(null);
    setRecipientEmails("");
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

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

  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleAddClose = () => {
    setAddOpen(false);
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

  const handleCreateReport = () => {
    const newReport = {
      name: reportName,
      reportType: reportType,
      startDate: startDate,
      endDate: endDate,
    };

    // Update table data state
    setTableData((prevData) => [...prevData, newReport]);

    // Clear form fields
    setReportType("");
    setReportName("");
    setStartDate("");
    setEndDate("");

    // Close the modal
    handleClose();
  };

  // useEffect(() => {
  //   const storedData = localStorage.getItem("tableData");
  //   if (storedData) {
  //     setTableData(JSON.parse(storedData));
  //   }
  // }, []);

  const openViewSimulationsModal = () => {
    setViewSimulationModalOpen(true);
  };

  const closeViewSimulationsModal = () => {
    setViewSimulationModalOpen(false);
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

  const openAddLangModal = () => {
    setAddLangModalOpen(true);
  };

  const closeAddLangModal = () => {
    setAddLangModalOpen(false);
  };

  const addLang = () => {
    closeAddLangModal();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openRemoveLangModal = () => {
    setRemoveLangModalOpen(true);
  };

  const closeRemoveLangModal = () => {
    setRemoveLangModalOpen(false);
  };

  const removeLang = () => {
    closeRemoveLangModal();
  };

  const openDeleteEmailTempModal = () => {
    setDeleteEmailTempModalOpen(true);
  };

  const closeDeleteEmailTempModal = () => {
    setDeleteEmailTempModalOpen(false);
  };

  const deleteEmailTemp = () => {
    closeDeleteEmailTempModal();
  };

  const openSendAllEmailsModal = () => {
    setSendAllEmailsModalOpen(true);
  };

  const closeSendAllEmailsModal = () => {
    setSendAllEmailsModalOpen(false);
  };

  const removeAllSendEmails = () => {
    closeSendAllEmailsModal();
  };

  const openSendEmailSimulationModal = () => {
    setSendEmailSimulationModalOpen(true);
  };

  const closeSendEmailSimulationModal = () => {
    setSendEmailSimulationModalOpen(false);
  };

  const sendEmailSimulation = () => {
    closeSendEmailSimulationModal();
  };

  const openDeleteSimulationModal = () => {
    setDeleteSimulationModalOpen(true);
  };

  const closeDeleteSimulationModal = () => {
    setDeleteSimulationModalOpen(false);
  };

  const removeDeleteSimulation = () => {
    closeDeleteSimulationModal();
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const anchorRef = useRef(null);

  const openUserForm = () => {
    setUserFormOpen(true);
  };

  const closeUserForm = () => {
    setUserFormOpen(false);
  };

  const closeGroupForm = () => {
    setGroupFormOpen(false);
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
                <h3>Performance Report</h3>
              </div>
              <div>
                <p style={{ color: "gray" }}>
                  You can view and download the Performance Report from this page. The report
                  summarises performance across the platform to help you understand your
                  organizations progress and highlight any areas for improvement.
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
                    color: "blue",
                  }}
                  onClick={openUserForm}
                >
                  <RefreshIcon style={{ fontSize: "large", marginRight: "5px" }} size="large" />
                  Refresh
                </Button>

                <div>
                  <Button
                    onClick={handleOpen}
                    style={{
                      border: "0.5px solid #1C7AE4",
                      color: "white",
                      backgroundColor: "#1b7ae4",
                      fontWeight: "lighter",
                      padding: "16px",
                    }}
                  >
                    + Create New Report
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
                      <form style={{ width: "800px" }}>
                        <Fade in={open}>
                          <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                              Create Performance Report
                            </Typography>
                            <Typography
                              id="transition-modal-description"
                              sx={{ mt: 2 }}
                              color="textSecondary"
                            >
                              Report Name:
                            </Typography>
                            <TextField
                              fullWidth
                              value={reportName}
                              onChange={(e) => setReportName(e.target.value)}
                            />
                            <Typography
                              id="transition-modal-description"
                              sx={{ mt: 2 }}
                              color="textSecondary"
                            >
                              Report Type:
                            </Typography>
                            <TextField
                              fullWidth
                              value={reportType}
                              onChange={(e) => setReportType(e.target.value)}
                            />

                            <Typography
                              id="transition-modal-description"
                              sx={{ mt: 2 }}
                              color="textSecondary"
                            >
                              Report Period:
                            </Typography>
                            <TextField
                              type="date"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              fullWidth
                              placeholder="Start Date"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />

                            <TextField
                              type="date"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              sx={{ mt: 2 }}
                              fullWidth
                              placeholder="End Date"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />
                            <div>
                              <Button
                                variant="outline"
                                onClick={handleCreateReport}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-end",
                                  border: "0.5px solid #d4d4d4",
                                  color: "#d4d4d4",
                                  margin: "16px",
                                  fontWeight: "lighter",
                                  fontSize: "medium",
                                }}
                              >
                                Create
                              </Button>
                            </div>
                          </Box>
                        </Fade>
                      </form>
                    </Box>
                  </Modal>
                </div>

                <Button
                  onClick={handleViewPerformReportOpen}
                  variant="outline"
                  style={{
                    border: "0.5px solid #1C7AE4",
                    color: "white",
                    backgroundColor: "#1b7ae4",
                    fontWeight: "lighter",
                  }}
                >
                  <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
                  View Report
                </Button>
                <Modal
                  open={viewPerfomReportOpen}
                  onClose={handleViewPerformReportClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="send-test-email-modal-title"
                      variant="h6"
                      component="h2"
                      style={{ margin: "16px" }}
                    >
                      View Performance Report for Date Range
                    </Typography>

                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      sx={{ gridColumn: "span 2" }}
                    />
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                      color="textSecondary"
                    >
                      Report Period:
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        style={{ marginRight: "16px" }}
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ mt: 2 }}
                        fullWidth
                        placeholder="Start Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />

                      <TextField
                        style={{ marginRight: "16px" }}
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ mt: 2 }}
                        fullWidth
                        placeholder="End Date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        variant="outline"
                        onClick={handleCreateReport}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          border: "0.5px solid #d4d4d4",
                          color: "#d4d4d4",

                          margin: "16px",
                          fontWeight: "lighter",
                        }}
                      >
                        Cancel
                      </Button>
                      {/* <Link>
                        <Button
                          variant="outline"
                          onClick={handleCreateReport}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            border: "0.5px solid #d4d4d4",
                            color: "#d4d4d4",
                            backgroundColor: " #1C7AE4",

                            margin: "16px",
                            fontWeight: "lighter",
                          }}
                        >
                          View Report
                        </Button>
                      </Link> */}
                      <Link to="/Report/ReportHub/PerformanceReport/ViewReport">
                        <Button
                          variant="outline"
                          onClick={handleCreateReport}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            border: "0.5px solid #d4d4d4",
                            color: "#d4d4d4",
                            backgroundColor: " #1C7AE4",

                            margin: "16px",
                            fontWeight: "lighter",
                          }}
                        >
                          View Report
                        </Button>
                      </Link>
                    </div>
                  </Box>
                </Modal>
                {/* <Popper
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
                  </Popper> */}
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
                    <TableHead>
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
                        {tableData.map((report, index) => (
                          <TableRow key={index}>
                            <TableCell style={{ fontSize: "16px", width: "80px" }}>
                              {report.name}
                            </TableCell>
                            <TableCell style={{ fontSize: "16px", width: "80px" }}>
                              {report.reportType}
                            </TableCell>
                            <TableCell style={{ fontSize: "16px", width: "80px" }}>
                              {report.startDate}
                            </TableCell>
                            <TableCell style={{ fontSize: "16px", width: "80px" }}>
                              {report.endDate}
                            </TableCell>

                            <TableCell style={{ fontSize: "16px", width: "80px" }}>
                              <Button
                                variant="outline"
                                style={{
                                  border: "0.5px solid #d4d4d4",
                                  color: "#d4d4d4",
                                  fontWeight: "400",
                                  fontSize: "medium",
                                }}
                              >
                                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
                                View
                              </Button>
                            </TableCell>
                            <TableCell style={{ fontSize: "16px", width: "80px" }}>
                              <Button
                                variant="outline"
                                style={{
                                  border: "0.5px solid #d4d4d4",
                                  color: "#d4d4d4",
                                  fontWeight: "400",
                                  fontSize: "large",
                                }}
                              >
                                <FileDownloadOutlinedIcon style={{ marginRight: "5px" }} />
                                Download
                              </Button>
                            </TableCell>
                            <TableCell style={{ fontSize: "16px", width: "80px" }}>
                              <Button
                                onClick={handleSendOpen}
                                variant="outline"
                                style={{
                                  border: "0.5px solid #d4d4d4",
                                  color: "#d4d4d4",
                                  fontWeight: "400",
                                  fontSize: "large",
                                }}
                              >
                                <MailOutlinedIcon style={{ marginRight: "5px" }} />
                                Send
                              </Button>
                              <Modal
                                open={sendOpen}
                                onClose={handleSendClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box>
                                  <form style={{ width: "800px" }}>
                                    <Box sx={style}>
                                      <Typography
                                        id="transition-modal-title"
                                        variant="h6"
                                        component="h2"
                                      >
                                        Send -{report.name}
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
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "blue",
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
                                          size="small"
                                        >
                                          + Add
                                        </Button>
                                      </div>

                                      <Button
                                        // onClick={handleOpen}
                                        style={{
                                          border: "0.5px solid #d4d4d4",
                                          color: "#d4d4d4",

                                          fontWeight: "lighter",
                                          marginTop: "10px",
                                        }}
                                        size="small"
                                      >
                                        Send Report
                                      </Button>
                                    </Box>
                                  </form>
                                </Box>
                              </Modal>
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
                                <MenuItem onClick={handleEditOpen} style={{ background: "#fff" }}>
                                  Edit Report
                                </MenuItem>

                                <Modal
                                  open={editOpen}
                                  onClose={handleEditClose}
                                  aria-labelledby="modal-modal-title"
                                  aria-describedby="modal-modal-description"
                                >
                                  <Box sx={style}>
                                    <Typography
                                      id="send-test-email-modal-title"
                                      variant="h6"
                                      component="h2"
                                    >
                                      Edit Performance Report - {report.name}
                                    </Typography>
                                    <Box>
                                      <label htmlFor="name" style={{ fontSize: "13px" }}>
                                        Report Name
                                      </label>
                                    </Box>
                                    <TextField
                                      fullWidth
                                      variant="filled"
                                      type="text"
                                      sx={{ gridColumn: "span 2" }}
                                    />
                                    <Typography
                                      id="transition-modal-description"
                                      sx={{ mt: 2 }}
                                      color="textSecondary"
                                    >
                                      Report Period:
                                    </Typography>
                                    <TextField
                                      type="date"
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                      fullWidth
                                      placeholder="Start Date"
                                      value={startDate}
                                      onChange={(e) => setStartDate(e.target.value)}
                                    />

                                    <TextField
                                      type="date"
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                      sx={{ mt: 2 }}
                                      fullWidth
                                      placeholder="End Date"
                                      value={endDate}
                                      onChange={(e) => setEndDate(e.target.value)}
                                    />

                                    <Button
                                      variant="outline"
                                      onClick={handleCreateReport}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        border: "0.5px solid blue",
                                        color: "blue",
                                        margin: "16px",
                                        fontWeight: "lighter",
                                        fontSize: "medium",
                                      }}
                                    >
                                      Update
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
                                        onClick={sendTestEmail}
                                        style={{ color: "#fff" }}
                                      >
                                        <MailOutlineIcon
                                          sx={{ marginRight: "5px", color: "#fff" }}
                                        />
                                        Yes
                                      </Button>
                                      <Button
                                        variant="outlined"
                                        onClick={closeSendTestEmailModal}
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
                        ))}
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
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "8px" }}>
        <Pagination count={4} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default PerformanceReport;
