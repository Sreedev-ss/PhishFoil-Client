import { LineChart } from "@mui/x-charts/LineChart";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

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
import ViewSimulationData from "layouts/viewSimulation/components/viewSimulationData";
import SimulationData from "./SimulationData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 36,
  borderRadius: "8px",
  p: 5,
};

const uData = [
  100, 25, 0, 0, 0, 15, 0, 0, 0, 100, 0, 0, 80, 0, 0, 70, 80, 0, 70, 50, 0, 35, 0, 0, 0, 75, 45, 65,
  0, 0, 75,
];
const pData = [
  100, 0, 0, 0, 45, 15, 0, 0, 0, 100, 75, 0, 0, 80, 0, 0, 0, 100, 0, 0, 0, 50, 0, 100, 75, 0, 0,
  100, 70, 0, 100,
];
const qData = [
  100, 20, 75, 50, 0, 15, 0, 60, 0, 80, 0, 75, 0, 65, 0, 85, 90, 50, 100, 0, 95, 65, 100, 90, 75,
  80, 55, 0, 0, 80, 0,
];
const rData = [
  100, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 65, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 90,
  0, 80, 100,
];
const xLabels = [
  "23 Feb",
  "27 Feb",
  "03 Mar",
  "13 Mar",
  "23 Mar",
  "24 Mar",
  "27 Mar",
  "04 Apr",
  "10 Apr",
  "13 Apr",
  "20 Apr",
  "24 Apr",
  "08 May",
  "22 May",
  "05 Jun",
  "19 Jun",
  "27 Jun",
  "03 Jul",
  "07 Jul",
  "17 Jul",
  "18 Jul",
  "31 Jul",
  "04 Aug",
  "14 Aug",
  "28 Aug",
  "11 Sep",
  "16 Sep",
  "04 Oct",
  "18 Oct",
  "01 Nov",
  "08 Nov",
];
const customTheme = createTheme({
  palette: {
    lineColors: {
      opened: "#0000ff", // Blue
      visited: "yellow", // Yellow
      compromised: "red", // Red
      reported: "green", // Green
    },
  },
});

export default function InteractiveLineChart() {
  const [chartData, setChartData] = useState([
    { data: pData, label: "Opened", visible: true },
    { data: uData, label: "Visited", visible: true },
    { data: qData, label: "Compromised", visible: true },
    { data: rData, label: "Reported", visible: true },
  ]);

  const [selectedPointDetails, setSelectedPointDetails] = useState(null);
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleLine = (index) => {
    setChartData((prevChartData) =>
      prevChartData.map((line, i) => (i === index ? { ...line, visible: !line.visible } : line))
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePointClick = () => {
    // You can set specific details for the selected point here
    setSelectedPointDetails({ type: "Point", data: "Your point data" });
    handleOpenModal(); // Open the modal when a point is clicked
  };

  const handleChartClick = () => {
    setSelectedPointDetails({ type: "Chart", data: "Your chart data" });
    handleOpenModal(); // Open the modal when the chart is clicked
  };

  return (
    <ThemeProvider theme={customTheme}>
      <SoftBox>
        <div onClick={handleChartClick}>
          <LineChart
            width={1000}
            height={400}
            series={chartData
              .filter((line) => line.visible)
              .map((line, index) => ({
                data: line.data,
                label: line.label,
                color: customTheme.palette.lineColors[line.label.toLowerCase()],
              }))}
            xAxis={[{ scaleType: "point", data: xLabels }]}
          />
        </div>
      </SoftBox>
      <Divider />
      <div>
        <Stack>
          <Box>
            <div>
              <Typography sx={{ fontSize: "large", color: "black", m: 1, minWidth: 200 }}>
                Metrics Shown
              </Typography>
              <div>
                {chartData.map((line, index) => (
                  <Button
                    key={index}
                    style={{
                      margin: "16px",
                      backgroundColor: line.visible
                        ? customTheme.palette.primary.main
                        : customTheme.palette.grey[400],
                      color: line.visible
                        ? customTheme.palette.getContrastText(customTheme.palette.primary.main)
                        : undefined,
                    }}
                    variant="contained"
                    onClick={() => toggleLine(index)}
                  >
                    {line.label}
                  </Button>
                ))}
              </div>
            </div>
          </Box>
        </Stack>
        {/* Modal is rendered outside the loop */}
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box sx={style}>
            <SimulationData />
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
