// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from "@mui/icons-material/Save";
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";
import { ChromePicker } from "react-color";
import { IoMdArrowDropdown } from "react-icons/io";
import { Email } from "@mui/icons-material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {
    Box,
    Button,
    Checkbox,
    Chip,
    Dialog,
    Divider,
    FormControl,
    Grow,
    IconButton,
    ListItemText,
    Menu,
    MenuItem,
    Modal,
    Switch,
    Grid,
    Radio,
    Popover,
    Popper,
    Select,
    Stack,
    TextField,
    Typography,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText
} from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import axios from "axios";

import EditIcon from "@mui/icons-material/Edit";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


import SoftButton from "components/SoftButton";
import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];
// import createEmailTemplate from "layouts/createEmailTemplate";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { ResetTv } from "@mui/icons-material";
// import RefreshIcon from '@mui/icons-material/Refresh';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];




function InvoicesCustomer() {




    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card sx={{ minHeight: '100vh' }}>
                    <Typography sx={{marginLeft:"20px", margintop:"50px"}}>uService - Invoice</Typography>
                        <SoftBox
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            p={3}
                        >
                          
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead sx={{ display: "table-header-group" }}>
                                        <TableRow sx={{ width: "20px" }}>
                                            <TableCell>Item</TableCell>
                                            <TableCell>Units</TableCell>
                                            <TableCell>Unit Cost</TableCell>
                                            <TableCell >Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    Platform Usage
                                                </TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>N/A</TableCell>
                                                <TableCell>$0.00</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>




                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default InvoicesCustomer;
