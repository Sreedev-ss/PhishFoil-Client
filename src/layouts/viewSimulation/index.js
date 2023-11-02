import { Card, Checkbox, Divider, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'
import ReviewsBar from './components/ReviewsBar'
import { AiFillInfoCircle, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
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
    TextField,
} from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SoftButton from "components/SoftButton";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';

import EditIcon from "@mui/icons-material/Edit";
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { DownloadDoneOutlined, DownloadOutlined, RoundaboutLeft, SendOutlined, ViewDayOutlined } from '@mui/icons-material'
import ViewSimulationData from './components/viewSimulationData'

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

const languageOptions = [
    'English',
    'Spanish',
    'French',
    'German',
];

const ViewSimulation = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isUserFormOpen, setUserFormOpen] = useState(false);
    const [isGroupFormOpen, setGroupFormOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [sendTestEmailModalOpen, setSendTestEmailModalOpen] = useState(false);
    const [addLangModalOpen, setAddLangModalOpen] = useState(false);
    const [removeLangModalOpen, setRemoveLangModalOpen] = useState(false);
    const [deleteEmailTempModalOpen, setDeleteEmailTempModalOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [sendAllEmailsModalOpen, setSendAllEmailsModalOpen] = useState(false);
    const [sendEmailSimulationModalOpen, setSendEmailSimulationModalOpen] = useState(false);
    const [deleteSimulationModalOpen, setDeleteSimulationModalOpen] = useState(false);
    const [viewSimulationsModalOpen, setViewSimulationModalOpen] = useState(false)

    const openViewSimulationsModal = () => {
        setViewSimulationModalOpen(true)
    }

    const closeViewSimulationsModal = () => {
        setViewSimulationModalOpen(false)
    }

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

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <DashboardLayout>
            {/* <DashboardNavbar /> */}
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: 'space-between', padding: '50px', height: '5rem', backgroundColor: 'white' }}>
                        <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
                            uPhish - Simulations
                        </Typography>
                        <FormGroup>
                            <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
                        </FormGroup>
                    </div>
                    <Divider />
                    <div style={{ display: "flex", gap: "30px" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Total</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={55} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 12</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Visited</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={16} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 9</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Compromised</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={15} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 8</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Reported</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={9} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 5</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Total Simulations</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <h2>55</h2>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Unopened - 43</h6>
                        </div>
                    </div>
                    <Card sx={{ marginTop: 3 }}>
                        <SoftBox
                            display="flex"
                            flexDirection="row"
                            justifyContent="end"
                            alignItems="flex-end"
                            p={3}
                        >
                            <Stack>
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
                                        Search for a simulation<AiOutlineSearch style={{ color: 'gray', fontSize: "15px" }} />
                                    </Button>
                                    <Dialog
                                        open={isUserFormOpen}
                                        onClose={closeUserForm}
                                    >
                                        {/* User form content here */}
                                    </Dialog>
                                    <Link to="/uphish/create-simulation">
                                        <Button
                                            variant="outline"
                                            style={{
                                                border: "0.5px solid #1C7AE4",
                                                color: "white",
                                                backgroundColor: "#1b7ae4",
                                                fontWeight: 'lighter'
                                            }}
                                        >
                                            + Create Simulation
                                        </Button>
                                    </Link>
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
                            <TableContainer component={Paper}>
                                <Table sx={{ width: "100%" }} aria-label="simple table">
                                    <TableHead sx={{ display: "table-header-group" }}>
                                        <TableRow sx={{ width: "20px" }}>
                                            <TableCell ></TableCell>
                                            <TableCell >Simulation</TableCell>
                                            <TableCell >Recipients</TableCell>
                                            <TableCell >Status</TableCell>
                                            <TableCell >Start<br />Date/Time</TableCell>
                                            <TableCell >End<br />Date/Time</TableCell>
                                            <TableCell >Sent</TableCell>
                                            <TableCell >Opened</TableCell>
                                            <TableCell >Visited</TableCell>
                                            <TableCell >Compromised</TableCell>
                                            <TableCell >Reported</TableCell>
                                            <TableCell ></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                        >
                                            <TableCell><Checkbox {...label} /></TableCell>
                                            <TableCell style={{ fontSize: "13px", color: "#209ce8", textAlign: 'center' }}>Auto Phish - 01/11/2023</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>3</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>Started</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>01/11/2023<br />05:31</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>15/11/2023<br />05:30</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>0</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>0</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>0</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>0</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign: 'center' }}>0</TableCell>
                                            <TableCell>
                                                <SoftButton
                                                    onClick={handleClick}
                                                    variant="outlined"
                                                    color="info"
                                                >
                                                    <AiOutlineArrowRight />
                                                </SoftButton>
                                                <Popover
                                                    id={id}
                                                    open={openAnchor}
                                                    anchorEl={anchorEl}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                >
                                                    {/* edit-email-template */}
                                                    <MenuItem onClick={openViewSimulationsModal} style={{background:'#fff'}}>
                                                        <RoundaboutLeft />
                                                        View Simulation
                                                    </MenuItem>

                                                    <Modal
                                                        open={viewSimulationsModalOpen}
                                                        onClose={closeViewSimulationsModal}
                                                        >
                                                       <ViewSimulationData/>
                                                    </Modal>


                                                    {/* send-test-email-template */}
                                                    <MenuItem onClick={openSendTestEmailModal} style={{background:'#fff'}}>
                                                        <DownloadOutlined />
                                                        Download Simulation Report
                                                    </MenuItem>

                                                    <Modal
                                                        open={sendTestEmailModalOpen}
                                                        onClose={closeSendTestEmailModal}
                                                        aria-labelledby="send-test-email-modal-title"
                                                        aria-describedby="send-test-email-modal-description"
                                                    >
                                                        {/* Content for the "Send Test Email" modal */}

                                                        <Box sx={style}>
                                                            <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                                                Clone Simulation
                                                            </Typography>
                                                            <Box>
                                                                <label
                                                                    htmlFor="name"
                                                                    style={{ fontSize: "13px" }}
                                                                >
                                                                    To:
                                                                </label>
                                                            </Box>
                                                            <TextField
                                                                fullWidth
                                                                variant="filled"
                                                                type="text"
                                                                sx={{ gridColumn: "span 2" }}
                                                            />
                                                            <Box>
                                                                <label
                                                                    htmlFor="name"
                                                                    style={{ fontSize: "13px" }}
                                                                >
                                                                    First Name:
                                                                </label>
                                                            </Box>
                                                            <TextField
                                                                fullWidth
                                                                variant="filled"
                                                                type="text"
                                                                sx={{ gridColumn: "span 2" }}
                                                            />
                                                            <Box>
                                                                <label
                                                                    htmlFor="name"
                                                                    style={{ fontSize: "13px" }}
                                                                >
                                                                    Last Name:
                                                                </label>
                                                            </Box>
                                                            <TextField
                                                                fullWidth
                                                                variant="filled"
                                                                type="text"
                                                                sx={{ gridColumn: "span 2" }}
                                                            />
                                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                                                <Button variant="contained" onClick={sendTestEmail} style={{ color: '#fff' }} >
                                                                    <MailOutlineIcon sx={{ marginRight: '5px', color: '#fff' }} />
                                                                    Send
                                                                </Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    onClick={closeSendTestEmailModal}
                                                                    style={{ marginRight: '5px', color: 'black' }}
                                                                >
                                                                    Cancel
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Modal>

                                                    {/* clone-simulation */}
                                                    <MenuItem component={Link} to="/clone-simulation" style={{background:'#fff'}}>
                                                        <FileCopyOutlinedIcon style={{ fontSize: 'small' }} />
                                                        Clone Simulation
                                                    </MenuItem>

                                                    {/* delete simulation*/}
                                                    <MenuItem onClick={openDeleteSimulationModal} style={{background:'#fff'}}>
                                                        <SendIcon style={{ fontSize: '15px' }} />
                                                        Delete Simulation
                                                    </MenuItem>
                                                    <Modal
                                                        open={deleteSimulationModalOpen}
                                                        onClose={closeDeleteSimulationModal}
                                                        aria-labelledby="send-test-email-modal-title"
                                                        aria-describedby="send-test-email-modal-description"
                                                    >
                                                        <Box sx={style}>
                                                            <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                                                Are you sure you want to delete this simulation?
                                                            </Typography>
                                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                                                <Button
                                                                    variant="contained"
                                                                    onClick={closeDeleteSimulationModal}
                                                                    style={{ color: '#fff' }}
                                                                >
                                                                    No
                                                                </Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    onClick={removeDeleteSimulation}
                                                                    style={{ marginRight: '5px', color: 'black' }}
                                                                >
                                                                    Yes
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Modal>

                                                    {/* View-landing-page */}
                                                    <MenuItem onClick={openRemoveLangModal} style={{background:'#fff'}}>
                                                        <SendOutlined style={{ fontSize: 'small' }} />
                                                        View Landing Page
                                                    </MenuItem>

                                                    {/* send-test-email */}
                                                    <MenuItem onClick={openSendEmailSimulationModal} style={{background:'#fff'}}>
                                                        <SendIcon />
                                                        Send Test Email
                                                    </MenuItem>

                                                    <Modal
                                                        open={sendEmailSimulationModalOpen}
                                                        onClose={closeSendEmailSimulationModal}
                                                        aria-labelledby="send-test-email-modal-title"
                                                        aria-describedby="send-test-email-modal-description"
                                                    >
                                                        {/* Content for the "Send Test Email" modal */}

                                                        <Box sx={style}>
                                                            <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                                                Send Test Simulation Email
                                                            </Typography>
                                                            <Box>
                                                                <label
                                                                    htmlFor="name"
                                                                    style={{ fontSize: "13px" }}
                                                                >
                                                                    To:
                                                                </label>
                                                            </Box>
                                                            <TextField
                                                                fullWidth
                                                                type="text"
                                                                sx={{ gridColumn: "span 2" }}
                                                            />
                                                            <Box>
                                                                <label
                                                                    htmlFor="name"
                                                                    style={{ fontSize: "13px" }}
                                                                >
                                                                    First Name:
                                                                </label>
                                                            </Box>
                                                            <TextField
                                                                fullWidth
                                                                type="text"
                                                                sx={{ gridColumn: "span 2" }}
                                                            />
                                                            <Box>
                                                                <label
                                                                    htmlFor="name"
                                                                    style={{ fontSize: "13px" }}
                                                                >
                                                                    Last Name:
                                                                </label>
                                                            </Box>
                                                            <TextField
                                                                fullWidth
                                                                type="text"
                                                                sx={{ gridColumn: "span 2" }}
                                                            />
                                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                                                <Button variant="contained" onClick={sendEmailSimulation} style={{ color: '#fff' }} >
                                                                    <MailOutlineIcon sx={{ marginRight: '5px', color: '#fff' }} />
                                                                    Send
                                                                </Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    onClick={closeSendEmailSimulationModal}
                                                                    style={{ marginRight: '5px', color: 'black' }}
                                                                >
                                                                    Cancel
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Modal>

                                                    {/* send all emails*/}
                                                    <MenuItem onClick={openSendAllEmailsModal} style={{background:'#fff'}}>
                                                        <SendIcon style={{ fontSize: '15px' }} />
                                                        Send All Emails Now
                                                    </MenuItem>
                                                    <Modal
                                                        open={sendAllEmailsModalOpen}
                                                        onClose={closeSendAllEmailsModal}
                                                        aria-labelledby="send-test-email-modal-title"
                                                        aria-describedby="send-test-email-modal-description"
                                                    >
                                                        <Box sx={style}>
                                                            <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                                                Are you sure you want to send all emails for this simulation?
                                                            </Typography>
                                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                                                <Button
                                                                    variant="contained"
                                                                    onClick={closeSendAllEmailsModal}
                                                                    style={{ color: '#fff' }}
                                                                >
                                                                    No
                                                                </Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    onClick={removeAllSendEmails}
                                                                    style={{ marginRight: '5px', color: 'black' }}
                                                                >
                                                                    Yes
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Modal>
                                                </Popover>
                                            </TableCell>
                                        </TableRow>
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
    )
}

export default ViewSimulation


