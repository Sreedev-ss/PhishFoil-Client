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
import { Link } from "react-router-dom";
const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];
import createEmailTemplate from "layouts/createEmailTemplate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ResetTv } from "@mui/icons-material";
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


// const style = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   bgcolor: 'background.paper',
//   border: '1px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const host = 'http://localhost:8081';

function Prospects() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isUserFormOpen, setUserFormOpen] = useState(false);
    const [isGroupFormOpen, setGroupFormOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [sendTestEmailModalOpen, setSendTestEmailModalOpen] = useState(false);
    const [addLangModalOpen, setAddLangModalOpen] = useState(false);
    const [removeLangModalOpen, setRemoveLangModalOpen] = useState(false);
    const [deleteEmailTempModalOpen, setDeleteEmailTempModalOpen] = useState(false);
    const [emailTemplateData, setAllEmailTemplateData] = useState([])

    // const [sendAllEmailsModalOpen, setSendAllEmailsModalOpen] = useState(false);
    //   const [sendEmailSimulationModalOpen, setSendEmailSimulationModalOpen] = useState(false);
    //   const [deleteSimulationModalOpen, setDeleteSimulationModalOpen] = useState(false);
    const [viewSimulationsModalOpen, setViewSimulationModalOpen] = useState(false);

    // const [addLangModalOpen, setAddLangModalOpen] = useState(false);

    const [createCustomerModalOpen, setCreateCustomerModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [selectedTab, setSelectedTab] = useState(0);
    const [reminder, setReminder] = useState("(GMT+00:00) Europe/Isle_of_Man");
    const [selectedItems, setSelectedItems] = useState(["English(UK)"]);
    const [headerChecked, setHeaderChecked] = useState(false);
    const [image, setImage] = useState(null);
    const [selectedHeaderColor, setSelectedHeaderColor] = useState("#0f75bc");
    const [selectedButtonColor, setSelectedButtonColor] = useState("#ffffff");
    const [isOpenHeader, setIsOpenHeader] = useState(false);
    const [isOpenButton, setIsOpenButton] = useState(false);
    const toggleHeaderDropdown = () => setIsOpenHeader(!isOpenHeader);

    const toggleButtonDropdown = () => setIsOpenButton(!isOpenButton);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => setImage(null);

    const handleChangedReminders = (event) => {
        setReminder(event.target.value);
    };
    const tabStyle = {
        marginTop: "30px",
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleChangeCustomer = (event) => {
        setSelectedValue(event.target.value);
    };

    const openCreateCustomerModal = () => {
        setCreateCustomerModalOpen(true);
    };

    const closeCraeteCustomerModal = () => {
        setCreateCustomerModalOpen(false);
    };



    const openViewSimulationsModal = () => {
        setViewSimulationModalOpen(true)
    }

    const closeViewSimulationsModal = () => {
        setViewSimulationModalOpen(false)
    }

    const handleChange = (event) => {
        setSelectedItems(event.target.value);
    };

    const handleDelete = (itemToDelete) => (event) => {
        event.preventDefault();
        const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
        setSelectedItems(updatedSelection);
    };


    // const openSendTestEmailModal = () => {
    //     setSendTestEmailModalOpen(true);
    // };

    // const closeSendTestEmailModal = () => {
    //     setSendTestEmailModalOpen(false);
    // };

    // const sendTestEmail = () => {
    //     closeSendTestEmailModal();
    // };

    // const openAddLangModal = () => {
    //     setAddLangModalOpen(true);
    // };
    // const openSendTestEmailModal = () => {
    //   setSendTestEmailModalOpen(true);
    // };


    const data = localStorage.getItem('loginData')
    const loginData = JSON.parse(data)
    useEffect(() => {
        axios.get(`${host}/emailtemplate/all/${loginData?.clientid}`).then((res) => {
            if (res.data) {
                setAllEmailTemplateData(res.data)
            } else {
                console.log(res)
                toast.error('Failed fetching users')
            }
        }).catch(e => {
            console.log(e)
        })
    }, [])

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

    // const deleteEmailTemp = () => {
    //   closeDeleteEmailTempModal();
    // };
    const deleteEmailTemp = (id) => {
        console.log(id, "idddddddddddddd");
        axios.post(`${host}/emailtemplate/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    setAllEmailTemplateData(res.data)
                    closeDeleteEmailTempModal()
                } else {
                    console.error('Error deleting template');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
        closeDeleteEmailTempModal();
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
    const id = open ? 'simple-popover' : undefined;


    const [popover, setPopover] = useState({ index: '', bool: false })
    const handleClickPopOver = (index) => {
        setPopover({ index: index, bool: !popover.bool })
        console.log(popover, 'popover')
    };
    const label = { inputProps: { "aria-label": "Switch demo" } };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card sx={{ minHeight: '100vh' }}>
                        <SoftBox
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            p={3}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1px'
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '5px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 'large',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        uService - Prospects
                                    </Typography>
                                </div>
                                <Divider />
                            </div>
                            <Stack>
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    justifyContent="flex-end"
                                >
                                    <div style={{ marginTop: '15px' }}>

                                        <Button
                                            variant="outlined"
                                            sx={{
                                                mx: 'auto',
                                                borderColor: 'red',
                                                color: "red",
                                                margin: "10px"
                                            }}

                                        >
                                            <FilterAltIcon />
                                            Clear All Filters
                                        </Button>
                                        <Button
                                            variant="outlined"

                                            sx={{
                                                mx: 'auto',
                                                borderColor: 'blue',
                                                color: 'blue',
                                                margin: "10px"
                                            }}
                                        >
                                            <RefreshIcon />

                                            Refresh
                                        </Button>

                                        {/* <Typography
                variant="success-message"
                sx={{ fontSize: "12px", paddingX: "10px", textAlign: "center" }}
              >
              
              </Typography> */}

                                    </div>

                                </Stack>
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    justifyContent="flex-end"
                                >



                                    <Button
                                        variant="outline"
                                        style={{
                                            border: '0.5px solid grey',
                                            color: '#d4d4d4',
                                            fontSize: "10px"
                                        }}
                                        size="small"
                                        onClick={openUserForm}
                                    >
                                        Search for an item...<AiOutlineSearch style={{ color: 'gray', fontSize: "15px" }} />
                                    </Button>
                                    <Dialog
                                        open={isUserFormOpen}
                                        onClose={closeUserForm}
                                    >
                                        {/* User form content here */}
                                    </Dialog>
                                    {/* <Link to="/uphish/create-email-template"> */}
                                    <Button
                                        variant="outline"
                                        style={{
                                            border: "0.5px solid #1C7AE4",
                                            color: "white",
                                            backgroundColor: "#1b7ae4",
                                            fontWeight: 'lighter'
                                        }}
                                        onClick={openCreateCustomerModal}
                                    >
                                        + Create Prospect
                                    </Button>

                                    <Dialog
                                        fullWidth

                                        maxWidth={"lg"}
                                        open={createCustomerModalOpen}
                                        onClose={closeCraeteCustomerModal}
                                    >
                                        <DialogTitle> Create Prospect</DialogTitle>
                                        <DialogContent>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                                            </Box>
                                            <Box>
                                                <label
                                                    htmlFor="name"
                                                    style={{ fontSize: "13px" }}
                                                >
                                                    * Company Name:
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
                                            <Box>
                                                <label
                                                    htmlFor="name"
                                                    style={{ fontSize: "13px" }}
                                                >
                                                    * Domain:
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
                                            <Box>
                                                <label
                                                    htmlFor="name"
                                                    style={{ fontSize: "13px" }}
                                                >
                                                    First Name:
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
                                            <Box>
                                                <label
                                                    htmlFor="name"
                                                    style={{ fontSize: "13px" }}
                                                >
                                                    Last Name:
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
                                            <Box>
                                                <label
                                                    htmlFor="name"
                                                    style={{ fontSize: "13px" }}
                                                >
                                                    * Email:
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

                                            <div style={{ marginTop: '17px' }}>
                                                <Box>
                                                    <label
                                                        htmlFor="name"
                                                        style={{ fontSize: "13px" }}
                                                    >
                                                        *  Preferred Language:
                                                    </label>
                                                </Box>
                                                <TextField
                                                    select
                                                    value={reminder}
                                                    onChange={handleChangedReminders}
                                                    type="text"
                                                    sx={{
                                                        gridColumn: "span 2",
                                                        backgroundColor: "#ffff",
                                                        marginTop: '9px',
                                                        width: "500px"
                                                    }}
                                                    SelectProps={{
                                                        IconComponent: () => <ExpandMoreIcon />,
                                                    }}
                                                >
                                                    <MenuItem value="English(Australia)">English(Australia)</MenuItem>
                                                    <MenuItem value="English(China)">English(China)</MenuItem>
                                                    <MenuItem value="English(UK)">English(UK)</MenuItem>
                                                    <MenuItem value="German">German</MenuItem>
                                                </TextField>
                                            </div>
                                            <div style={{ marginTop: '25px' }}>

                                                <Box>
                                                    <label
                                                        htmlFor="name"
                                                        style={{ fontSize: "13px" }}
                                                    >
                                                        Preferred Timezone:
                                                    </label>
                                                </Box>
                                                <TextField
                                                    select
                                                    value={reminder}
                                                    onChange={handleChangedReminders}
                                                    type="text"
                                                    sx={{
                                                        gridColumn: "span 2",
                                                        backgroundColor: "#ffff",
                                                        marginTop: '9px',
                                                        width: "500px"
                                                    }}
                                                    SelectProps={{
                                                        IconComponent: () => <ExpandMoreIcon />,
                                                    }}
                                                >
                                                    <MenuItem value="(GMT+00:00) Europe/Isle_of_Man">(GMT+00:00) Europe/Isle_of_Man</MenuItem>
                                                    <MenuItem value="(GMT+00:00) Europe/Jersy">(GMT+00:00) Europe/Jersy</MenuItem>
                                                    <MenuItem value="(GMT+00:00) Europe/London">(GMT+00:00) Europe/London</MenuItem>
                                                    <MenuItem value="(GMT+00:00) Europe/Lisbon">(GMT+00:00) Europe/Lisbon</MenuItem>
                                                </TextField>
                                            </div>
                                            <div>
                                                <Button
                                                    variant="outlined"
                                                    style=
                                                    {{
                                                        color: 'black',
                                                        fontWeight: 'lighter',
                                                        marginTop: '15px',
                                                        borderColor: 'gray'
                                                    }}
                                                >
                                                    Detect Timezone
                                                </Button>
                                            </div>
                                            <div style={{ marginTop: '5px' }}>
                                                <FormControl
                                                    sx={{
                                                        width: "90%",
                                                        height: 'auto'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: '',
                                                            marginBottom: "5px",
                                                            marginLeft: "2px",
                                                            marginTop: "10px",
                                                        }}
                                                    >
                                                        Preferred Content Language(s) :
                                                    </Typography>
                                                    <Select
                                                        labelId="multiple-select-label"
                                                        id="multiple-select"
                                                        multiple
                                                        label='Select languages'
                                                        value={selectedItems}
                                                        onChange={handleChange}
                                                        MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                                        renderValue={(selected) => (
                                                            <div>
                                                                {selected.map((item) => (
                                                                    <Chip
                                                                        key={item}
                                                                        label={item}
                                                                        onDelete={handleDelete(item)}
                                                                        sx={{
                                                                            marginRight: '5px',
                                                                            height: '20px',
                                                                        }}
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                    >
                                                        {items.map((item) => (
                                                            <MenuItem key={item} value={item}>
                                                                <Checkbox checked={selectedItems.indexOf(item) > -1} />
                                                                <ListItemText secondary={item} />
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: "13px" }}>This controls which language(s) this company will see content for such as email templates for by default.</p>
                                            </div>



                                        </DialogContent>
                                        {/* <DialogActions> */}
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button
                                                variant="outlined"
                                                onClick={closeCraeteCustomerModal}
                                                style={{ marginRight: "5px", color: "black" }}
                                            >
                                                Create Prospect
                                            </Button>
                                        </div>
                                        {/* </DialogActions> */}
                                    </Dialog>




                                    {/* </Link> */}
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
                                                    transformOrigin:
                                                        placement === 'bottom' ? 'center top' : 'center bottom',
                                                }}
                                            >
                                            </Grow>
                                        )}
                                    </Popper>
                                </Stack>
                                <Stack spacing={2} margin={2} direction="row" justifyContent="flex-end">
                                    <Dialog
                                        open={isGroupFormOpen}
                                        onClose={closeGroupForm}
                                    >
                                        {/* Group form content here */}
                                    </Dialog>
                                </Stack>
                            </Stack>
                        </SoftBox>
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
                            <TableContainer component={Paper} sx={{ minHeight: '100vh' }}>
                                <Table sx={{ width: "100%" }} aria-label="simple table">
                                    <TableHead sx={{ display: "table-header-group" }}>
                                        <TableRow sx={{ width: "20px" }}>
                                            <TableCell >Name</TableCell>
                                            <TableCell >Contact</TableCell>
                                            <TableCell >Added At</TableCell>
                                            <TableCell >Last Updated At</TableCell>
                                            <TableCell >Active Users</TableCell>
                                            <TableCell >Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {emailTemplateData ? emailTemplateData?.map((t, index) => (

                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}
                                            >

                                                <TableCell>IBM</TableCell>
                                                <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>vijaya rajeswaran
                                                    vijaya@kibalabs.in</TableCell>
                                                <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>27/06/2023 12:17</TableCell>
                                                <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>27/06/2023 12:17</TableCell>
                                                <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>1</TableCell>

                                                <TableCell style={{ fontSize: "13px" }}>Domain Scan Completed</TableCell>
                                                {/* <TableCell style={{ fontSize: "13px" }}>
                                                    2 Days Remaining
                                                </TableCell> */}
                                                <TableCell>
                                                    <div>
                                                        <Button
                                                            variant="outline"
                                                            style={{
                                                                border: '0.5px solid grey',
                                                                color: 'black',
                                                                fontSize: "10px",
                                                                marginRight: "10px"
                                                            }}
                                                            size="small"
                                                        >
                                                            Edit

                                                            <EditIcon

                                                                style={{ color: 'black', fontSize: "15px" }} />
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            style={{
                                                                border: '0.5px solid grey',
                                                                color: 'black',
                                                                fontSize: "10px",
                                                                marginRight: "10px"
                                                            }}
                                                            size="small"

                                                        >
                                                            Admin<ArrowCircleRightIcon style={{ color: 'black', fontSize: "15px" }} />
                                                        </Button>
                                                    </div>
                                                    <div style={{ marginTop: "10px" }}>

                                                        <SoftButton
                                                            onClick={() => handleClickPopOver(index)}
                                                            variant="outlined"
                                                            color="info"
                                                        >
                                                            <AiOutlineArrowRight />
                                                        </SoftButton>
                                                    </div>

                                                    {index == popover.index && popover.bool && <div style={{ position: 'absolute', backgroundColor: 'white', zIndex: 100 }}
                                                        key={index}
                                                    >
                                                        {/* send-test-email-template */}
                                                        <MenuItem onClick={openSendTestEmailModal} style={{ background: '#fff' }}>
                                                            <SendIcon />
                                                            Start Breach Scan
                                                        </MenuItem>

                                                        <Modal
                                                            open={sendTestEmailModalOpen}
                                                            onClose={closeSendTestEmailModal}
                                                            aria-labelledby="send-test-email-modal-title"
                                                            aria-describedby="send-test-email-modal-description"
                                                        >
                                                            {/* Content for the "Send Test Email" modal */}

                                                            <Box sx={style}>
                                                                <Typography
                                                                    id="send-test-email-modal-title"
                                                                    variant="h6"
                                                                    component="h2"
                                                                    style={{
                                                                        fontWeight: "lighter",
                                                                        color: "black",
                                                                    }}
                                                                >
                                                                    <HelpOutlineIcon style={{ color: "orange" }} />
                                                                    Would you like to start a breach scan for Dastute?

                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        display: "flex",
                                                                        justifyContent: "flex-end",
                                                                        mt: 2,
                                                                        gap: 2,
                                                                    }}
                                                                >
                                                                    <Button variant="contained"
                                                                        onClick={sendTestEmail}
                                                                        style={{ color: "#fff" }}>
                                                                        No
                                                                    </Button>
                                                                    <Button
                                                                        variant="outlined"
                                                                        onClick={closeSendTestEmailModal}
                                                                        style={{ marginRight: "5px", color: "black" }}
                                                                    >
                                                                        Yes
                                                                    </Button>
                                                                </Box>
                                                            </Box>


                                                        </Modal>

                                                        {/* add-languages */}
                                                        <MenuItem onClick={openAddLangModal} style={{ background: '#fff' }}>
                                                            <AddCircleOutlineOutlinedIcon style={{ fontSize: 'small' }} />
                                                            Upgrade to Paid Plan
                                                        </MenuItem>

                                                        <Modal
                                                            open={addLangModalOpen}
                                                            onClose={closeAddLangModal}
                                                            aria-labelledby="send-test-email-modal-title"
                                                            aria-describedby="send-test-email-modal-description"
                                                        >
                                                            {/* Content for the "Send Test Email" modal */}

                                                            <Box sx={style}>
                                                                <IconButton
                                                                    aria-label="Close"
                                                                    sx={{
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        right: 0,
                                                                    }}
                                                                    onClick={closeAddLangModal}
                                                                >
                                                                    <HighlightOffOutlinedIcon style={{ fontSize: 'medium' }} />
                                                                </IconButton>
                                                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                                                    Upgrade to Paid Plan - Dastute
                                                                </Typography>
                                                                <div>
                                                                    <FormControl sx={{ width: "330px", height: 'auto' }}>
                                                                        <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px", marginTop: '15px' }}>Domain Lock :</Typography>

                                                                    </FormControl>
                                                                </div>
                                                                <div style={{ marginTop: "10px" }}>
                                                                    <Switch {...label} defaultChecked />
                                                                    <div>
                                                                        <div>
                                                                            <FormControl sx={{ width: "330px", height: 'auto' }}>
                                                                                <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px", marginTop: '15px' }}>User Limit : :</Typography>

                                                                            </FormControl>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                <Button
                                                                    variant="outline"
                                                                    style={{ border: "0.5px solid grey", color: "#585958", color: "#585958" }}
                                                                    size="small"
                                                                // onClick={openRestoreUser}
                                                                >
                                                                    Upgrade to Paid Plan
                                                                </Button>
                                                            </Box>
                                                        </Modal>


                                                        {/* Remove-languages */}
                                                        <MenuItem onClick={openRemoveLangModal} style={{ background: '#fff' }}>
                                                            <RemoveCircleOutlineOutlinedIcon style={{ fontSize: 'small' }} />
                                                            Start Risk Report
                                                        </MenuItem>
                                                        <Modal
                                                            open={removeLangModalOpen}
                                                            onClose={closeRemoveLangModal}
                                                            aria-labelledby="send-test-email-modal-title"
                                                            aria-describedby="send-test-email-modal-description"
                                                        >
                                                            {/* Content for the "Send Test Email" modal */}

                                                            <Box sx={style}>
                                                                <IconButton
                                                                    aria-label="Close"
                                                                    sx={{
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        right: 0,
                                                                    }}
                                                                    onClick={closeRemoveLangModal}
                                                                >
                                                                    <HighlightOffOutlinedIcon style={{ fontSize: 'medium' }} />
                                                                </IconButton>
                                                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                                                    Start Risk Report - IBM.COM
                                                                </Typography>
                                                                <Box>
                                                                    <label
                                                                        htmlFor="name"
                                                                        style={{ fontSize: "13px" }}
                                                                    >
                                                                        * Email :
                                                                    </label>
                                                                </Box>
                                                                <TextField
                                                                    fullWidth
                                                                    // defaultValue="1"
                                                                    type="text"
                                                                    sx={{ gridColumn: "span 2" }}
                                                                />

                                                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                                                    <Button variant="contained" onClick={removeLang} style={{ color: '#fff' }} >
                                                                        Start Report
                                                                    </Button>
                                                                </Box>
                                                            </Box>
                                                        </Modal>

                                                        {/* Delete-Email-Temp */}
                                                        <MenuItem key={index} onClick={openDeleteEmailTempModal} style={{ background: '#fff' }}>
                                                            <DeleteOutlineOutlinedIcon style={{ fontSize: '15px' }} />
                                                            Delete Customer
                                                        </MenuItem>

                                                        <Modal
                                                            key={index}
                                                            open={deleteEmailTempModalOpen}
                                                            onClose={closeDeleteEmailTempModal}
                                                            aria-labelledby="send-test-email-modal-title"
                                                            aria-describedby="send-test-email-modal-description"
                                                        >
                                                            {/* Content for the "Send Test Email" modal */}

                                                            <Box sx={style}>
                                                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                                                    Are you sure you want to delete the selected customer?
                                                                </Typography>

                                                                <Box>
                                                                    <label
                                                                        htmlFor="name"
                                                                        style={{ fontSize: "13px" }}
                                                                    >
                                                                        This will delete:
                                                                        <li>All users, simulations, policies and course results belonging to this customer</li>

                                                                    </label>
                                                                </Box>
                                                                <Box>
                                                                    <label
                                                                        htmlFor="name"
                                                                        style={{ fontSize: "13px" }}
                                                                    >
                                                                        Number of customers to delete :
                                                                    </label>
                                                                </Box>
                                                                <TextField
                                                                    fullWidth
                                                                    defaultValue="1"
                                                                    type="text"
                                                                    sx={{ gridColumn: "span 2" }}
                                                                />

                                                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                                                    <Button
                                                                        variant="contained"
                                                                        onClick={closeDeleteEmailTempModal}
                                                                        style={{ color: '#fff' }}
                                                                    >
                                                                        No
                                                                    </Button>
                                                                    <Button
                                                                        variant="outlined"
                                                                        onClick={() => deleteEmailTemp(t.templateid)}
                                                                        style={{ marginRight: '5px', color: 'black' }}
                                                                    >
                                                                        Yes
                                                                    </Button>
                                                                </Box>
                                                            </Box>
                                                        </Modal>
                                                    </div>}
                                                </TableCell>
                                            </TableRow>

                                        )) : <div>No Data</div>}
                                    </TableBody>
                                </Table>
                                <Menu
                                >
                                </Menu>
                            </TableContainer>
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Prospects;
