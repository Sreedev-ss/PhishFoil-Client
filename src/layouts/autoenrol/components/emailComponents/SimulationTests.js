import { Box, Button, Card, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import ReplayIcon from '@mui/icons-material/Replay';

const languages = [
    'Chinese (Simplified)',
    'Czech',
    'Danish',
    'Dutch',
    'English (Australia)',
    'English (China)',
    'English (Indonesia)',
    'English (Ireland)',
    'English (Malaysia)',
    'English (New Zealand)',
    'English (South Africa)',
    'English (UK)',
    'English (US)',
    'Finnish',
    'French',
    'French (Canada)',
    'French (Switzerland)',
    'German',
    'German (Switzerland)',
    'Indonesian',
    'Italian',
    'Malaysian',
    'Norwegian',
    'Polish',
    'Portuguese',
    'Romanian',
    'Spanish',
    'Swedish',
    'Thai',
    'Vietnamese',
];

const SimulationTests = () => {
    const [language, selectedLanguage] = useState('Vietnamese')
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
                            Simulation Tests Emails
                        </Typography>
                        <div style={{ marginTop: 20 }}>
                            <p style={{ fontSize: '14px', color: 'gray', marginBottom: '10px', fontFamily: "sans-serif" }}>You can set the default sender for simulation and email template test emails below. If the simulation or email template has a sender set that will be used instead.</p>
                        </div>
                        <div>
                            <FormControl sx={{ width: 180, float: 'inline-end' }}>
                                <Select
                                    value={language}
                                    label="preferred domain"
                                >
                                    {languages.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </Box>
                    <Box>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}>* Sender Name :</p>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <TextField
                                fullWidth
                            />
                            <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                    // fontWeight: 'lighter'
                                }}
                            >
                                <ReplayIcon style={{ marginRight: '5px' }} />
                                Reset
                            </Button>
                        </div>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}>* Sender Email Address :</p>
                        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                            <TextField
                                defaultValue='phishing-test'
                            />
                            <p style={{ fontSize: '14px' }}>@</p>
                            <TextField

                            />
                            <p style={{ fontSize: '14px' }}>.usecure.io</p>
                        </div>
                        <p style={{ fontSize: '13px', color: 'gray', fontFamily: "sans-serif" }}>You can set the email address domain from the Preferred Domain settings page.
                        </p>
                    </Box>
                </Card>
            </SoftBox>
        </DashboardLayout>
    )
}

export default SimulationTests
