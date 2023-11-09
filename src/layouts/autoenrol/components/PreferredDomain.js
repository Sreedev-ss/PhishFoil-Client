import { Button, Card, FormControl, MenuItem, Select, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import styled from 'styled-components'
import SaveIcon from '@mui/icons-material/Save';

const pStyle = {
    fontSize: '14px',
    color: 'grey',
    marginBottom:'40px'
}

const elemtStyle = {
    marginBotton:'20px'
}

const PreferredDomain = () => {

    const [preferredDomain, SetPrefferedDomain] = useState("usecure.io")

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
                        Preferred Domains
                    </Typography>
                    <div style={{ marginTop: 20 }}>

                        <p style={pStyle}>This will set the domain used by the system in all links and in the sender email address used by all system emails.</p>
                        <p style={{ fontSize: '14px', marginBottom:'10px' }}>Set your preferred domain :</p>
                        <FormControl sx={{ width: 200 }}>
                            <Select
                                value={preferredDomain}
                                label="preferred domain"
                            >
                                <MenuItem selected={true} value={"usecure.io"}>usecure.io</MenuItem>
                                <MenuItem value={"user-training.com"}>user-training.com</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            style=
                            {{
                                float: 'inline-end',
                                marginTop: '60px',
                                color: '#fff',
                                background: 'rgb(30, 123, 228)',
                                marginRight: '115px',
                                fontWeight: 'lighter'
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

export default PreferredDomain
