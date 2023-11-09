import { FileCopyTwoTone } from '@mui/icons-material';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Card, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';

const AllowListing = () => {
    const [emailchecked, setEmailchecked] = useState(true)

    const handleEnableEmail = () => {
        setEmailchecked(!emailchecked)
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <Card sx={{ minHeight: '80vh', padding: 3 }}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx=
                            {{
                                fontWeight: '500',
                                fontSize: "1.3rem"
                            }}
                        >
                            Email Allow Listing
                        </Typography>
                        <div style={{ marginTop: 20 }}>
                            <p style={{ fontSize: '14px', color: 'gray', marginBottom: '10px', fontFamily: "sans-serif" }}>To ensure emails from the system including phishing simulations are delivered successfully, we recommend that you add this IP to your allow list:
                                <br />99.80.168.14</p>
                            <p style={{ fontSize: '14px', color: 'gray', marginBottom: '10px', fontFamily: "sans-serif" }}>You can also add a message header to your emails for use in allow listing.</p>
                        </div>
                        <FormGroup sx={{ marginLeft: 1, marginTop: 4 }}>
                            <FormControlLabel checked={emailchecked} onChange={handleEnableEmail} control={<Switch />} label="Enable email message header" />
                        </FormGroup>
                    </Box>
                    {emailchecked && <Box sx={{ marginTop: 2 }}>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}>* Sender Email Address :</p>
                        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                            <TextField
                                fullWidth
                                defaultValue='X-USECURE-EMAIL'
                            />
                                <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                    width:'250px'
                                }}
                            >
                                <FileCopyTwoTone style={{ marginRight: '5px' }} />
                                Copy to Clipboard
                            </Button>
                                <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                    width:'auto'
                                }}
                            >
                                <ReplayIcon style={{ marginRight: '5px' }} />
                               Reset
                            </Button>
                        </div>
                        <p style={{ fontSize: '14px',marginTop:'20px', marginBottom: '10px' }}>* Header Value :</p>
                        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                            <TextField
                                fullWidth
                            />
                                <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                    width:'300px'
                                }}
                            >
                                <FileCopyTwoTone style={{ marginRight: '5px' }} />
                                Copy to Clipboard
                            </Button>
                                <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                    width:'350px'
                                }}
                            >
                                <ReplayIcon style={{ marginRight: '5px' }} />
                               Generate Random Code
                            </Button>
                        </div>
                    </Box>}
                    <div>
                    <Button
                        variant="contained"
                        style=
                        {{
                            float:'inline-end',
                            marginTop:'60px',
                            width:'100px',
                            color: '#fff',
                            background: 'rgb(30, 123, 228)',
                        }}
                    >
                        <SaveIcon style={{ marginRight: '3px' }} />
                        Save
                    </Button>
                    </div>
                </Card>
            </SoftBox>
        </DashboardLayout>
    )
}

export default AllowListing
