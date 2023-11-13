import { Button, MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

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

const ChangeDetails = () => {
    return (
        <Box >
            <form>
                <Box style={{ marginTop: "15px" }}>
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                        First Name:
                    </label>
                </Box>
                <TextField
                    sx={{ minWidth: '500px' }}
                    type="text"
                    name="firstname"
                    placeholder='First name'

                />
                <Box style={{ marginTop: "15px" }}>
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                        Last Name:
                    </label>
                </Box>
                <TextField
                    sx={{ minWidth: '500px' }}
                    type="text"
                    name="lastname"
                    placeholder='Last name'
                />
                <Box style={{ marginTop: "15px" }}>
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                        Address:
                    </label>
                </Box>
                <TextField
                    type="text"
                    name="lastname"
                    sx={{ minWidth: '500px' }}
                    placeholder='First line of Address'
                />
                <Box style={{ marginTop: "15px" }}>
                </Box>
                <TextField
                    type="text"
                    name="lastname"
                    sx={{ minWidth: '500px' }}
                    placeholder='Second line of Address'
                />
                <Box style={{ marginTop: "15px" }}>
                </Box>
                <TextField
                    type="text"
                    name="lastname"
                    sx={{ minWidth: '500px' }}
                    placeholder='Postcode'
                />

                <Box style={{ marginTop: "15px" }}>
                    <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                        Email:
                    </label>
                </Box>
                <TextField
                    type="email"
                    name="email"
                    sx={{ minWidth: '500px' }}
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
                    type="text"
                    sx={{ minWidth: '500px' }}
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
                    type="text"
                    sx={{ minWidth: '500px' }}
                    defaultValue="(GMT+05:30) Asia/Kolkata"
                >

                    {timezones.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <Box style={{ marginTop: "5px" }}>
                </Box>
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
                    sx={{ minWidth: '500px' }}
                    type="text"
                >
                    <MenuItem value="English(UK)">A bit of everything</MenuItem>
                    <MenuItem value="Italian">Sales</MenuItem>
                    <MenuItem value="Polish">Marketing</MenuItem>
                    <MenuItem value="Malaysian">Technical</MenuItem>
                </TextField>
            </form>
            <Box sx={{ mt: 2 }}>
                <Button
                    variant="contained"
                    style={{
                        border: "0.5px solid #1C7AE4",
                        color: "white",
                        backgroundColor: "#1b7ae4",
                        marginTop: "15px",
                    }}
                >
                    Update Details
                </Button>
            </Box>
        </Box>
    )
}

export default ChangeDetails
