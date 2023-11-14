import {
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import ReviewsBar from "layouts/viewSimulation/components/ReviewsBar";
import { AiFillInfoCircle, AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
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
  Stack,
  TextField,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import SoftButton from "components/SoftButton";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";

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
// import ViewSimulationData from "./ReportSimulationData";
import InputLabel from "@mui/material/InputLabel";

import FormHelperText from "@mui/material/FormHelperText";
import SimpleLineChart from "./LineChart";
// import ReportSimulationData from "./ReportSimulationData";

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

const SimulationPerformance = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [landingPage, setLandingPage] = useState("");

  const handleChange = (event) => {
    setLandingPage(event.target.value);
  };

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

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

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <SoftBox>
        <SoftBox>
          <div>
            <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
              uPhish - Simulation Performance
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography sx={{ fontSize: "small", color: "black", m: 1, minWidth: 200 }}>
              Landing Page
            </Typography>
            <Typography sx={{ fontSize: "small", color: "black", m: 1, minWidth: 200 }}>
              Email Templates
            </Typography>
            <Typography sx={{ fontSize: "small", color: "black", m: 1, minWidth: 200 }}>
              Groups
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={landingPage}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Any</em>
                </MenuItem>

                <MenuItem value={20}>ANZ | Halaxy</MenuItem>
                <MenuItem value={30}>ANZ | Microsoft</MenuItem>
                <MenuItem value={30}>Bit Warden</MenuItem>
                <MenuItem value={30}>Hub Spot</MenuItem>
                <MenuItem value={30}>Inter Parcel</MenuItem>
                <MenuItem value={30}>Newzealanad | Google</MenuItem>
                <MenuItem value={30}>Inter Parcel</MenuItem>
                <MenuItem value={30}>Inter Parcel</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={landingPage}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Any</em>
                </MenuItem>

                <MenuItem value={20}>ANZ | Halaxy</MenuItem>
                <MenuItem value={30}>ANZ | Microsoft</MenuItem>
                <MenuItem value={30}>Bit Warden</MenuItem>
                <MenuItem value={30}>Hub Spot</MenuItem>
                <MenuItem value={30}>Inter Parcel</MenuItem>
                <MenuItem value={30}>Newzealanad | Google</MenuItem>
                <MenuItem value={30}>Inter Parcel</MenuItem>
                <MenuItem value={30}>Inter Parcel</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={landingPage}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <TextField />

                <MenuItem value={20}>Administration</MenuItem>
                <MenuItem value={30}>Sample</MenuItem>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={landingPage}
                  onChange={handleChange}
                >
                  <MenuItem>test</MenuItem>
                </Select>

                <MenuItem value={30}>Technical</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
            }}
          >
            <SimpleLineChart />
          </div>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
};

export default SimulationPerformance;
