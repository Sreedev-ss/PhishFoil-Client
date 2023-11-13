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
import PerformanceReport from "./PerformanceReport";
import ScheduleReport from "./ScheduleReport";
import ExcelReport from "./ExcelReport";

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

const languageOptions = ["English", "Spanish", "French", "German"];

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

  //Schedule report

  const [scheduleReportName, setScheduleReportName] = useState("");
  const [scheduleReportType, setScheduleReportType] = useState("");
  const [scheduleFrequency, setScheduleFrequency] = useState("");
  const [viewReport, setViewReport] = React.useState("");
  const handlesetViewChange = (event) => {
    setViewReport(event.target.value);
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

  //   const openAnchor = Boolean(anchorEl);
  //   const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab
          label="Performance Report"
          {...a11yProps(0)}
          style={{ color: setValue === 0 ? "blue" : "inherit" }}
        />
        <Tab
          label="Schedule Report"
          {...a11yProps(1)}
          style={{ color: setValue === 1 ? "blue" : "inherit" }}
        />
        <Tab
          label="Excel Report"
          {...a11yProps(2)}
          style={{ color: setValue === 2 ? "blue" : "inherit" }}
        />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <PerformanceReport />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <ScheduleReport />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <ExcelReport />
      </CustomTabPanel>
    </div>
  );
};

export default ViewSimulationData;
