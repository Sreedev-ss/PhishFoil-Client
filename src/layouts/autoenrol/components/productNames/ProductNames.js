import { 
    Box, 
    Button, 
    Card, 
    TextField, 
    Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { AiOutlineReload } from 'react-icons/ai'

const ProductNames = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <Card 
                    sx={{ 
                        minHeight: '80vh', 
                        padding: 3 
                        }}
                    >
                    <Box>
                        <Typography
                            variant="h4"
                            sx=
                            {{
                                fontWeight: '500',
                                fontSize: "1.3rem"
                            }}
                        >
                            Product Names
                        </Typography>
                        <div style={{ marginTop: 20 }}>
                            <p 
                                style={{ 
                                    fontSize: '14px', 
                                    color: 'gray', 
                                    marginBottom: '10px', 
                                    fontFamily: "sans-serif" 
                                    }}
                                    >
                                        You can use the settings on this page to customise the names of the products that appear in the system.
                            </p>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <p 
                                style={{ 
                                    fontSize: '14px', 
                                    color: 'gray',
                                    marginBottom: '10px', 
                                    fontFamily: "sans-serif" 
                                    }}
                                    >
                                        Any product name customisations will apply to both your NFR and your customers.
                            </p>
                        </div>                       
                    </Box>
                    <Box>
                        <p 
                            style={{ 
                                fontSize: '14px', 
                                marginBottom: '10px', 
                                marginTop:'35px' 
                                }}
                                >
                                    * uPhish - Simulated Phishing:
                        </p>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <TextField
                                fullWidth
                                defaultValue='uPhish'
                            />
                            <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                }}
                            >
                                <AiOutlineReload style={{ marginRight: '5px' }} />
                                Reset
                            </Button>
                        </div>
                    </Box>
                    <Box>
                        <p 
                            style={{ 
                                fontSize: '14px', 
                                marginBottom: '10px', 
                                marginTop:'35px' 
                                }}
                                >
                                    * uLearn - Security Awareness Training & Custom Courses:
                        </p>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <TextField
                                fullWidth
                                defaultValue='uLearn'
                            />
                            <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                }}
                            >
                                <AiOutlineReload style={{ marginRight: '5px' }} />
                                Reset
                            </Button>
                        </div>
                    </Box>
                    <Box>
                        <p 
                            style={{ 
                                fontSize: '14px', 
                                marginBottom: '10px', 
                                marginTop:'35px' 
                                }}
                                >
                                    * uPolicy - Policy Management:
                        </p>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <TextField
                                fullWidth
                                defaultValue='uPolicy'
                            />
                            <Button
                                variant="contained"
                                style=
                                {{
                                    color: '#fff',
                                    background: 'rgb(30, 123, 228)',
                                }}
                            >
                                <AiOutlineReload style={{ marginRight: '5px' }} />
                                Reset
                            </Button>
                        </div>
                    </Box>                   
                    <Box sx={{ marginTop: 4 }}>                                                                      
                        <Button
                            variant="contained"
                            style=
                            {{
                                marginTop: '40px',
                                color: '#fff',
                                background: 'rgb(30, 123, 228)',
                                float:'inline-end',
                                fontWeight:'lighter',
                            }}
                        >
                            <SaveIcon style={{ marginRight: '3px' }} />
                            Save
                        </Button>                                               
                    </Box>                   
                </Card>
            </SoftBox>
        </DashboardLayout >
    )
}

export default ProductNames;
