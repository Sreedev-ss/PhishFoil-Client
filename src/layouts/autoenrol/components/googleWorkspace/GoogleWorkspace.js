import {
    Typography,
    Button,
    Modal,
    IconButton,
    Grid,
    Radio,
  } from "@mui/material";
  
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import { Box } from "@mui/system";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import GoogleIcon from '@mui/icons-material/Google';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    p: 4,
    maxHeight: "600px",
  };
  
const GoogleWorkspace = () => {
    const [addLangModalOpen, setAddLangModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const openAddLangModal = () => {
        setAddLangModalOpen(true);
    };

    const closeAddLangModal = () => {
    setAddLangModalOpen(false);
    };

    return (
      <DashboardLayout>
        <Typography 
            variant="h4" 
            sx=
            {{
                fontFamily:"Hind Guntur", 
                fontWeight:'500', 
                fontSize:"1.6rem"
                }}
            >
                Google Workspace Integration
        </Typography>
        <p 
            style=
            {{
                marginTop:'40px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
                Here you can setup and configure your Google Workspace integration.
        </p>
        <div style={{marginTop:'25px'}}>
            <h4>Setup</h4>
            <ul 
                style={{ 
                    marginTop:'10px', 
                    color:'gray', 
                    fontSize:'14px', 
                    marginLeft:'35px', 
                    fontWeight:'lighter'
                    }}
                >
                <li>
                    A new tab will open asking you to sign into your Google account and 
                    authorise this application to access your Google Workspace user and group data.
                </li>
                <li style={{marginTop:'4px'}}>
                    Once completed, you will be redirected back to this application
                </li>
                <li style={{marginTop:'4px'}}>
                    If the authorisation was successful you can then configure your Google Workspace sync as follows:
                    <ul style={{marginLeft:'35px', marginTop:'4px'}}>
                        <li style={{marginTop:'4px'}}>Choose whether you want the sync to run automatically</li>
                        <li style={{marginTop:'4px'}}>Choose whether or not to include groups as part of the sync</li>
                        <li style={{marginTop:'4px'}}>Choose which groups you want to sync users from</li>
                        <li style={{marginTop:'4px'}}>Map your Google Workspace groups users to your existing groups in this application</li>
                        <li style={{marginTop:'4px'}}>Populate an email deny list of Google Workspace users you do not wish to be synced</li>
                        <li style={{marginTop:'4px'}}>Choose whether you want to exclude users without a mailbox from the sync</li>
                        <li style={{marginTop:'4px'}}>Choose whether you would like to set your users managers via the sync</li>
                    </ul>
                </li>
                <li style={{marginTop:'4px'}}>You can run a test sync at the end of this process</li>
            </ul>
        </div>
        <Button 
            variant="contained" 
            style=
            {{
                color:'#fff', 
                background:'rgb(30, 123, 228)',
                marginTop:'20px', 
                fontWeight:'lighter'
            }}
            onClick={openAddLangModal}
            >
            <GoogleIcon style={{marginRight:'3px', color:'orange'}}/>
                Sign in with Google
        </Button>

        <Modal
        open={addLangModalOpen}
        onClose={closeAddLangModal}
        aria-labelledby="send-test-email-modal-title"
        aria-describedby="send-test-email-modal-description"
        >
        <Box sx={style}>
            <IconButton
            aria-label="Close"
            sx={{
                position: "absolute",
                top: 0,
                right: 0,
            }}
            onClick={closeAddLangModal}
            >
            <HighlightOffOutlinedIcon style={{ fontSize: "medium" }} />
            </IconButton>
            
            <Typography
            id="send-test-email-modal-title"
            variant="h6"
            component="h2"
            >
            Generate Magic Link
            </Typography>
            <hr style={{marginTop:'10px'}}/>

            <Grid container spacing={2}>
                <Grid item xs={6} style={{ borderRight: '1px solid #ccc', padding: '15px', marginTop:'10px' }}>
                    <h6>
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            />
                            Delegated User
                    </h6>
                    <ul 
                        style={{
                            color:'gray', 
                            fontSize:'14px', 
                            marginLeft:'20px', 
                            fontWeight:'lighter'
                            }}
                        >
                        <li>The platform will seek delegated permissions for the sync integration to act as the authenticating user.</li>
                        <li>You will need an account with Users Read, Groups Read and Organisational Units Read Admin API privileges.</li>
                    </ul>
                </Grid>
                <Grid item xs={6} style={{ padding: '10px', marginTop:'15px'  }}>
                <h6>
                    <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                        />
                        Service Account
                </h6>
                    <ul style={{color:'gray', fontSize:'14px', marginLeft:'20px', fontWeight:'lighter'}}>
                        <li>
                            The platform will use a service account attached to a Google Cloud Application.
                        </li>
                        <li>
                            The service account will need to set up prior to setting up your sync.
                        </li>
                        <li>
                            You will need to upload a JSON containing the service accounts client email and private key. 
                            This is provided by the Google Cloud Console when you set up the key.
                        </li>
                        <li>
                            An email address is required for a delegated user that the service account will mimic.
                        </li>
                        <li>
                            This delegated user will need the Users Read, Groups Read and Organisational 
                            Units Read Admin API privileges for the sync to work.
                        </li>
                    </ul>
                </Grid>
                </Grid>        
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 2,
                        gap: 2,
                    }}
                    >
                <Button
                    variant="contained"
                    onClick={closeAddLangModal}
                    style={{ color: "#fff" }}
                >
                    Cancel
                </Button>
                <Button
                    variant="outlined"
                    onClick={closeAddLangModal}
                    style={{ marginRight: "5px", color: "black" }}
                >
                    Continue
                </Button>
                </Box> 
            </Box>
            </Modal>
      </DashboardLayout>
    );
  };
  
export default GoogleWorkspace;