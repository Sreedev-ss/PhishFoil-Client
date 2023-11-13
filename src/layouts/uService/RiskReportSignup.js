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



import SoftButton from "components/SoftButton";
import React, { useRef, useState, useEffect } from "react";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import LinkIcon from '@mui/icons-material/Link';
import EmailEditor from "react-email-editor";
const label = { inputProps: { "aria-label": "Switch demo" } };




function RiskReportSignup() {


    const [value, setValue] = React.useState('1');
    const [html, setHtml] = useState({});
    const emailEditorRef = useRef(null);
    const [isOpenHeader, setIsOpenHeader] = useState(false);
    const [isOpenButton, setIsOpenButton] = useState(false);
    const [selectedHeaderColor, setSelectedHeaderColor] = useState("black");
    const [selectedButtonColor, setSelectedButtonColor] = useState("black");
    const [headerChecked, setHeaderChecked] = useState(false);
    const [signatureFrequency, setSignatureFrequency] = useState({
        number: 1,
        unit: "month",
    });


    const handleHeaderChecked = () => setHeaderChecked(!headerChecked);

    const toggleHeaderDropdown = () => setIsOpenHeader(!isOpenHeader);

    const toggleButtonDropdown = () => setIsOpenButton(!isOpenButton);

    const handleHeaderColorChange = (color) => setSelectedHeaderColor(color.hex);

    const handleButtonColorChange = (color) => setSelectedButtonColor(color.hex);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const exportHtml = (e) => {
        e.preventDefault()
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;

            const designElement = JSON.stringify(design)
            let obj = {
                design: '',
                html: ''
            }

            obj.design = designElement
            obj.html = html

            setHtml(obj)
        });
    };

    const onLoad = () => { };

    const onReady = () => { };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card sx={{ minHeight: '100vh' }}>
                        <Typography sx={{ marginLeft: "20px", margintop: "50px" }}>Risk Report Sign Up</Typography>
                        <SoftBox
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            p={3}
                        >
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Setup" value="1" />
                                            <Tab label="Widget Editor" value="2" />
                                            <Tab label="Success Message" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <div>
                                            <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px", marginTop: '15px' }}>Enable sign up widget:</Typography>
                                        </div>
                                        <div style={{ marginTop: "5px" }}>
                                            <Switch {...label} defaultChecked />
                                            <div>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '12px', marginBottom: "5px", marginLeft: "2px", marginTop: '15px' }}>Please click the button below to generate the URL for the risk report sing up widget. You will need this to embed it on your website</p>
                                            </div>
                                        </div>

                                        <Button
                                            variant="contained"
                                            style=
                                            {{
                                                color: '#fff',
                                                background: 'rgb(30, 123, 228)',
                                                width: '250px'
                                            }}
                                        > <LinkIcon style={{ color: '#fff' }} />
                                            Generate URL
                                        </Button>



                                    </TabPanel>
                                    <TabPanel value="2">
                                        <Box>
                                            <label htmlFor="name" style={{ fontSize: "13px" }}>
                                                Content:
                                            </label>
                                        </Box>
                                        <div>
                                            <button name="html" onClick={exportHtml}>Add</button>

                                            <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
                                        </div>
                                        <div
                                            style={{
                                                backgroundColor: "#fff1f0",
                                                marginTop: "40px",
                                                padding: "10px",
                                                width: "60%",
                                                border: "1px solid #ffa39e",
                                                fontSize: "15px",
                                                fontWeight: "lighter",
                                                color: "gray",
                                                fontFamily: "sans-serif",
                                            }}
                                        >
                                            <div>
                                                <p>Sign Up Form Missing or Invalid</p>
                                                <p>Your form is either missing completely or does not have a correctly configured email field.</p>
                                                <p>To address you need to either:</p>
                                                <div>

                                                    <li>Add a Form block</li>

                                                    <li>Add an Email field to your form by clicking on your form and using the Add New Field dropdown.</li>
                                                    <li>
                                                        Set the field name on your email field to email - You can do this by clicking on the form block and editing the field in the tools on the right of the editor.
                                                    </li>

                                                </div>
                                            </div>


                                        </div>
                                        <Box style={{ margintop: "30px" }}>
                                            <label
                                                htmlFor="name"
                                                style={{ fontSize: "13px" }}
                                            >
                                                Custom Font Value (CSS font-family) :
                                            </label>
                                        </Box>
                                        <TextField


                                            type="text"
                                            sx={{
                                                gridColumn: "span 2",
                                                backgroundColor: "#ffff",
                                                marginTop: '9px',
                                                width: "500px"
                                            }}

                                        >
                                        </TextField>
                                        <div>
                                            <p style={{ fontSize: "10px" }}>
                                                This corresponds to the CSS font-family for the font you wish to add e.g. Poppins, sans-serif.</p>
                                        </div>
                                        <Box style={{ margintop: "30px" }}>
                                            <label
                                                htmlFor="name"
                                                style={{ fontSize: "13px" }}
                                            >
                                                Custom Font URL :
                                            </label>
                                        </Box>
                                        <TextField


                                            type="text"
                                            sx={{
                                                gridColumn: "span 2",
                                                backgroundColor: "#ffff",
                                                marginTop: '9px',
                                                width: "500px"
                                            }}

                                        >
                                        </TextField>
                                        <div>
                                            <p style={{ fontSize: "10px" }}>
                                                You can add the URL for a custom font CSS file here to make it available in the widget editor.</p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button
                                                variant="outlined"

                                                style={{ marginRight: "5px", color: "black" }}
                                            >
                                                Save
                                            </Button>
                                        </div>

                                    </TabPanel>
                                    <TabPanel value="3">
                                        <div>
                                            <p style={{ fontSize: "13px" }}>
                                                The message below will appear when your prospect submits their sign up form successfully. You can configure the text, font size and colour of the messages header and body using the form on this tab. Please note that this preview may not reflect the exact appearance of the same message in your sign up widget.</p>
                                        </div>
                                        <TextField
                                            type="text"
                                            sx={{
                                                gridColumn: "span 2",
                                                backgroundColor: "#ffff",
                                                marginTop: '9px',
                                                width: "600px",
                                                height: "80px",
                                                fontSize: "20px",
                                            }}
                                            value="Thank you.You should receive the first stage of your risk report shortly."
                                        />
                                        <Box style={{ margintop: "30px" }}>
                                            <label
                                                htmlFor="name"
                                                style={{ fontSize: "13px" }}
                                            >
                                                * Success Message - Title :
                                            </label>
                                        </Box>
                                        <TextField


                                            type="text"
                                            sx={{
                                                gridColumn: "span 2",
                                                backgroundColor: "#ffff",
                                                marginTop: '9px',
                                                width: "500px"
                                            }}

                                        >
                                        </TextField>


                                        <div className="header-dropdown" style={{ position: "relative" }}>
                                            <div
                                                className="dropdown-header"
                                                onClick={toggleHeaderDropdown}
                                                style={{
                                                    display: "flex",
                                                    marginTop: "20px",
                                                    borderRadius: 5,
                                                    alignItems: "center",
                                                    border: "0.6px solid #d2d6da",
                                                    width: 270,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        marginLeft: "10px",
                                                        marginRight: "8px",
                                                        border: "0.5px solid #d2d6da",
                                                        borderRadius: 3,
                                                        width: "40px",
                                                        height: "20px",
                                                        backgroundColor: selectedHeaderColor,
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        fontSize: "11px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "20px",
                                                        fontFamily: "sans-serif",
                                                        float: "inline-end",
                                                    }}
                                                >
                                                    Success Message - Title Font Colour <IoMdArrowDropdown />{" "}
                                                </p>
                                            </div>

                                            {isOpenHeader && (
                                                <div className="header-content" style={{ position: "absolute", zIndex: 10 }}>
                                                    <ChromePicker color={selectedHeaderColor} onChange={handleHeaderColorChange} />
                                                </div>
                                            )}
                                        </div>

                                        <Box style={{ margintop: "30px" }}>
                                            <label
                                                htmlFor="name"
                                                style={{ fontSize: "13px" }}
                                            >
                                                * Success Message - Title Font Size :
                                            </label>
                                        </Box>

                                        <TextField
                                  type="number"
                                  value={signatureFrequency.number}
                                  onChange={(e) =>
                                    setSignatureFrequency({
                                      ...signatureFrequency,
                                      number: e.target.value,
                                    })
                                  }
                                  sx={{width: "100px"}}
                                 
                                />
                                        <Box style={{ margintop: "40px" }}>
                                            <label
                                                htmlFor="name"
                                                style={{ fontSize: "13px" }}
                                            >
                                                * Success Message - Body:
                                            </label>
                                        </Box>
                                        <TextField


                                            type="text"
                                            sx={{
                                                gridColumn: "span 2",
                                                backgroundColor: "#ffff",
                                                marginTop: '9px',
                                                width: "500px"
                                            }}

                                        >
                                        </TextField>

                                        <div className="button-dropdown" style={{ position: "relative" }}>
                                            <div
                                                className="dropdown-button"
                                                onClick={toggleButtonDropdown}
                                                style={{
                                                    display: "flex",
                                                    marginTop: "20px",
                                                    borderRadius: 5,
                                                    alignItems: "center",
                                                    border: "0.6px solid #d2d6da",
                                                    width: 250,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        marginLeft: "10px",
                                                        border: "0.5px solid #d2d6da",
                                                        borderRadius: 3,
                                                        marginRight: "8px",
                                                        width: "40px",
                                                        height: "20px",
                                                        backgroundColor: selectedButtonColor,
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        fontSize: "11px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "20px",
                                                        fontFamily: "sans-serif",
                                                        float: "inline-end",
                                                    }}
                                                >
                                                    Success Message - Body Font Colour <IoMdArrowDropdown />{" "}
                                                </p>
                                            </div>

                                            {isOpenButton && (
                                                <div className="button-content" style={{ position: "absolute", zIndex: 10 }}>
                                                    <ChromePicker color={selectedButtonColor} onChange={handleButtonColorChange} />
                                                </div>
                                            )}
                                        </div>


                                        <Box style={{ margintop: "30px" }}>
                                            <label
                                                htmlFor="name"
                                                style={{ fontSize: "13px" }}
                                            >
                                                * Success Message - Body Font Size :
                                            </label>
                                        </Box>

                                        <TextField
                                  type="number"
                                  value={signatureFrequency.number}
                                  onChange={(e) =>
                                    setSignatureFrequency({
                                      ...signatureFrequency,
                                      number: e.target.value,
                                    })
                                  }
                                  sx={{width: "100px"}}
                                 
                                />
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button
                                                variant="outlined"

                                                style={{ marginRight: "5px", color: "black" }}
                                            >
                                                Save
                                            </Button>
                                        </div>

                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default RiskReportSignup;
