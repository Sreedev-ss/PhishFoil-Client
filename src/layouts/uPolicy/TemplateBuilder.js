import { Card, Checkbox, Dialog, Divider, Typography, Button } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import RefreshIcon from '@mui/icons-material/Refresh';
// import TemplateBuilderData from '../uPolicy/ReportTableData/templateBuildData'
import TemplateBuilderData from '../uPolicy/ReportTableData/templateBuildData';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import { Stack } from '@mui/system'

const TemplateBuilder = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [isUserFormOpen, setUserFormOpen] = useState(false);

    const openUserForm = () => {
        setUserFormOpen(true);
    };

    const closeUserForm = () => {
        setUserFormOpen(false);
    };

    const closeGroupForm = () => {
        setGroupFormOpen(false);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            {/* <SoftBox py={3}>
                <SoftBox mb={3}>
                    <div 
                        style=
                        {{ 
                            display: "flex", 
                            gap: "5px", 
                            alignItems: "center", 
                            justifyContent: 'space-between', 
                            padding: '50px', 
                            height: '9rem', 
                            backgroundColor: 'white' 
                            }}
                    >
                        <Typography 
                            sx=
                            {{ 
                                fontSize: "large", 
                                color: "black", 
                                fontWeight: "bold" 
                            }}
                        >
                        uPolicy - Template Builder
                        </Typography>
                        <div>                        
                            <Button
                                style={{
                                    border: '0.5px solid rgb(30, 123, 228)',
                                    color: '#d4d4d4',
                                    fontSize: "10px",
                                    marginLeft:'100px',
                                    color:'rgb(30, 123, 228)',
                                }}
                                size="small"
                                onClick={openUserForm}
                            >
                                <RefreshIcon style={{marginRight:'5px'}}/>
                                Refresh
                            </Button>   
                            <span>                              
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
                                        style={{
                                            border: '0.5px solid grey',
                                            color: '#d4d4d4',
                                            fontSize: "10px",
                                            marginTop: '1px',

                                        }}
                                        size="small"
                                        onClick={openUserForm}
                                    >
                                        Search for a template<AiOutlineSearch style={{ color: 'gray', fontSize: "15px" }} />
                                    </Button>
                                    <Dialog
                                        open={isUserFormOpen}
                                        onClose={closeUserForm}
                                    >                                        
                                    </Dialog>                                                                        
                                </Stack>
                                </Stack>
                        </SoftBox>
                        </span> 
                        </div>
                    </div>                    
                    <Card sx={{ marginTop: 3 }}>                      
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
                            <div>
                                <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",

                                }}
                                >
                                <TemplateBuilderData />
                                </div>
                            </div>
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox> */}
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <div 
                        style=
                        {{ 
                            display: "flex", 
                            gap: "5px", 
                            alignItems: "center", 
                            justifyContent: 'space-between', 
                            padding: '50px', 
                            height: '9rem', 
                            backgroundColor: 'white' 
                            }}
                    >
                        <Typography 
                            sx=
                            {{ 
                                fontSize: "large", 
                                color: "black", 
                                fontWeight: "bold" 
                            }}
                        >
                        uPolicy - Template Builder
                        </Typography>
                        {/* <Button
                                style={{
                                    border: '0.5px solid rgb(30, 123, 228)',
                                    color: '#fff',
                                    fontSize: "10px",
                                    // marginLeft:'50px',
                                    background:'rgb(30, 123, 228)',
                                    fontWeight:'lighter',
                                    marginBottom:'-30px'
                                }}
                                variant="contained"
                                size="small"
                                onClick={openUserForm}
                            >
                                <DownloadIcon style={{marginRight:'5px'}}/>
                                Export Outstanding Policies
                            </Button>  */}
                        <div>                        
                            <Button
                                style={{
                                    border: '0.5px solid rgb(30, 123, 228)',
                                    color: '#d4d4d4',
                                    fontSize: "10px",
                                    marginLeft:'425px',
                                    color:'rgb(30, 123, 228)',
                                    // float:'inline-end'
                                }}
                                size="small"
                                onClick={openUserForm}
                            >
                                <RefreshIcon style={{marginRight:'5px'}}/>
                                Refresh
                            </Button>   
                            <span>                              
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
                                        style={{
                                            border: "0.5px solid grey",
                                            color: "#585958" ,
                                            fontSize: "10px",
                                            marginTop: '1px',
                                            fontWeight:'lighter'
                                        }}
                                        variant="outlined"
                                        size="small"
                                        onClick={openUserForm}
                                    >
                                        
                                        Search for a template<AiOutlineSearch style={{ color: 'grey', fontSize: "15px", marginLeft:'5px' }} />
                                    </Button> 
                                    <Dialog
                                        open={isUserFormOpen}
                                        onClose={closeUserForm}
                                    >                                        
                                    </Dialog> 
                                    <Button
                                        variant="outlined"
                                        style={{ border: "0.5px solid grey", color: "#585958" }}
                                        size="small"
                                        disabled
                                        >
                                        Action
                                    </Button>
                                    <Link to="/uPolicy/createTemplate">
                                    <Button
                                        style={{
                                            border: '0.5px solid rgb(30, 123, 228)',
                                            color: '#fff',
                                            fontSize: "10px",
                                            marginTop: '1px',
                                            background:'rgb(30, 123, 228)',
                                            fontWeight:'lighter'
                                        }}
                                        variant="contained"
                                        size="small"
                                        onClick={openUserForm}
                                    >
                                        <AddIcon style={{ fontSize: "15px", color:'#fff' }} />
                                        Create Template
                                    </Button> 
                                    </Link>
                                </Stack>
                                </Stack>
                        </SoftBox>
                        </span> 
                        </div>
                    </div>                    
                    <Card sx={{ marginTop: 3 }}>                      
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
                            <div>
                                <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",

                                }}
                                >
                                <TemplateBuilderData />
                                </div>
                            </div>
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    )
}

export default TemplateBuilder;


