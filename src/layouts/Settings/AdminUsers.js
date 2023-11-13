import React, { useState } from 'react'
import { Button, Card, FormControl, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import { Add, DeleteForever, Edit } from '@mui/icons-material'
import Paper from "@mui/material/Paper";
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system'
import './AdminUsers.css'
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

const timezones = [
    "(GMT-12:00) Etc/UTC-12",
    "(GMT-11:00) Pacific/Midway",
    "(GMT-10:00) Pacific/Honolulu",
    "(GMT-09:00) America/Anchorage",
    "(GMT-08:00) America/Los_Angeles",
    "(GMT-07:00) America/Denver",
    "(GMT-06:00) America/Chicago",
    "(GMT-05:00) America/New_York",
    "(GMT-04:00) America/Caracas",
    "(GMT-03:30) America/St_Johns",
    "(GMT-03:00) America/Argentina/Buenos_Aires",
    "(GMT-02:00) Etc/GMT+2",
    "(GMT-01:00) Etc/GMT+1",
    "(GMT+00:00) Europe/London",
    "(GMT+01:00) Europe/Paris",
    "(GMT+02:00) Europe/Athens",
    "(GMT+03:00) Asia/Dubai",
    "(GMT+03:30) Asia/Tehran",
    "(GMT+04:00) Asia/Yerevan",
    "(GMT+04:30) Asia/Kabul",
    "(GMT+05:00) Asia/Karachi",
    "(GMT+05:30) Asia/Kolkata",
    "(GMT+05:45) Asia/Kathmandu",
    "(GMT+06:00) Asia/Almaty",
    "(GMT+06:30) Asia/Yangon",
    "(GMT+07:00) Asia/Bangkok",
    "(GMT+08:00) Asia/Hong_Kong",
    "(GMT+08:45) Australia/Eucla",
    "(GMT+09:00) Asia/Tokyo",
    "(GMT+09:30) Australia/Adelaide",
    "(GMT+09:30) Pacific/Marquesas",
    "(GMT+10:00) Australia/Sydney",
    "(GMT+10:30) Australia/Lord_Howe",
    "(GMT+11:00) Asia/Magadan",
    "(GMT+11:30) Pacific/Norfolk",
    "(GMT+12:00) Pacific/Fiji",
    "(GMT+12:45) Pacific/Chatham",
    "(GMT+13:00) Pacific/Apia",
    "(GMT+14:00) Pacific/Kiritimati",
];

const AdminUsers = () => {
    const [open, setOpen] = useState(false);
    const [deleteUserModal, setDeleteUserModal] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const deleteUser = () => setDeleteUserModal(true);
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <Card sx={{ minHeight: '75vh', padding: 3 }}>
                    <Typography
                        variant="h4"
                        sx=
                        {{
                            fontWeight: '500',
                            fontSize: "1.3rem"
                        }}
                    >
                        Manage your Admin User
                    </Typography>
                    <div>
                        <Button
                            variant="contained"
                            onClick={handleOpen}
                            style=
                            {{
                                float: 'inline-end',
                                marginTop: '20px',
                                color: '#fff',
                                background: 'rgb(30, 123, 228)',
                                fontWeight: 'lighter'
                            }}
                        >
                            <Add style={{ marginRight: '3px' }} />
                            Add Admin Users
                        </Button>
                    </div>
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <form>
                                    <Box style={{ marginTop: "15px" }}>
                                        <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                                            First Name:
                                        </label>
                                    </Box>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="firstname"
                                        sx={{ gridColumn: "span 2" }}
                                        placeholder='First name'

                                    />
                                    <Box style={{ marginTop: "15px" }}>
                                        <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                                            Last Name:
                                        </label>
                                    </Box>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="lastname"
                                        sx={{ gridColumn: "span 2" }}
                                        placeholder='Last name'
                                    />

                                    <Box style={{ marginTop: "15px" }}>
                                        <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                                            Email:
                                        </label>
                                    </Box>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        name="email"
                                        sx={{ gridColumn: "span 2" }}
                                        placeholder='Email'
                                    />
                                    <Box style={{ marginTop: "15px" }}>
                                        <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                                            Preferred Language:
                                        </label>
                                    </Box>
                                    <TextField
                                        select
                                        name="preferredlanguage"
                                        fullWidth
                                        type="text"
                                        sx={{ gridColumn: "span 2" }}
                                        defaultValue="English(UK)"
                                    >
                                        <MenuItem value="English(UK)">English(UK)</MenuItem>
                                        <MenuItem value="Italian">Italian</MenuItem>
                                        <MenuItem value="Polish">Polish</MenuItem>
                                        <MenuItem value="Malaysian">Malaysian</MenuItem>
                                    </TextField>

                                    <Box style={{ marginTop: "15px" }}>
                                        <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                                            Preferred Timezone:
                                        </label>
                                    </Box>
                                    <TextField
                                        select
                                        name="preferredlanguage"
                                        fullWidth
                                        type="text"
                                        sx={{ gridColumn: "span 2" }}
                                        defaultValue="(GMT+05:30) Asia/Kolkata"
                                    >

                                        {timezones.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </TextField>
                                    <Button style={{
                                        color: "black",
                                        backgroundColor: "white",
                                        width: '120px',
                                        marginTop: "5px",
                                        border: '1px solid #d2d6da',
                                        fontWeight: '400',
                                        fontSize: '10px'
                                    }}>
                                        Detect Timezone
                                    </Button>
                                    <Box style={{ marginTop: "15px" }}>
                                        <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                                            How would you like to describe this person ?
                                        </label>
                                    </Box>
                                    <TextField
                                        select
                                        name="person"
                                        fullWidth
                                        type="text"
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <MenuItem value="English(UK)">A bit of everything</MenuItem>
                                        <MenuItem value="Italian">Sales</MenuItem>
                                        <MenuItem value="Polish">Marketing</MenuItem>
                                        <MenuItem value="Malaysian">Technical</MenuItem>
                                    </TextField>
                                </form>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        style={{
                                            border: "0.5px solid #1C7AE4",
                                            color: "white",
                                            backgroundColor: "#1b7ae4",
                                            marginTop: "15px",
                                        }}
                                    >
                                        Create User
                                    </Button>
                                </Box>
                            </Box>
                        </Modal>
                    </div>
                    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                        <Table sx={{ width: "100%" }} aria-label="simple table">
                            <TableHead sx={{ display: "table-header-group" }}>
                                <TableRow sx={{ width: "20px" }}>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Communication Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>
                                        Velayutham Selvaraj
                                    </TableCell>
                                    <TableCell style={{ fontSize: "13px" }}>
                                        velayutham@twintechsolution.com
                                    </TableCell>
                                    <TableCell style={{ fontSize: "13px" }}>
                                        All
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            sx={{ border: '1px solid' }}
                                            onClick={handleOpen}
                                        >
                                            <Edit /> Edit
                                        </Button>
                                        <Button
                                            style={{
                                                color: "white",
                                                backgroundColor: "red",
                                                marginLeft: '10px'
                                            }}
                                            onClick={deleteUser}
                                        >
                                            <DeleteForever /> Delete
                                        </Button>
                                        <Modal
                                            open={deleteUserModal}
                                            onClose={()=>setDeleteUserModal(false)}
                                            aria-labelledby="send-test-email-modal-title"
                                            aria-describedby="send-test-email-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography
                                                    id="send-test-email-modal-title"
                                                    variant="h6"
                                                    component="h2"
                                                >
                                                   Are you sure you want to delete the selected user?
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "flex-end",
                                                        mt: 2,
                                                        gap: 2,
                                                    }}
                                                >
                                                    <Button
                                                        variant="outlined"
                                                        style={{ color: "black" }}
                                                        >
                                                        No
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        style={{ marginRight: "5px", color: "#fff" }}
                                                    >
                                                        Yes
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Modal>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </SoftBox>
        </DashboardLayout>
    )
}

export default AdminUsers
