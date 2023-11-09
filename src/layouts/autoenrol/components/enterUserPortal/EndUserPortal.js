import {
    Typography,
    Switch,
    Button,
    TextField,
    Modal,
    IconButton,
  } from "@mui/material";
  
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { Link } from "react-router-dom";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Box } from "@mui/system";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const link = 'https://app.usecure.io/portal/bfa982ab-6356-47af-8b0f-d2867667cc75';
const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    p: 4,
    maxHeight: "400px",
  };
  
const EndUserPortal = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isSettingEnabled, setIsSettingEnabled] = useState(true);
    const [isCopied, setIsCopied] = useState(false);
    const [addLangModalOpen, setAddLangModalOpen] = useState(false);

    const handleSwitchChange = () => {
        setIsSettingEnabled(!isSettingEnabled);
    };
    const handleCopyClick = () => {
        navigator.clipboard.writeText(link);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
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
                End User Portal
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
                Here you can enable/disable the End User Portal for your customers
        </p>
        <div style={{marginTop:'30px'}}>
        <Switch {...label}  defaultChecked onChange={handleSwitchChange}  />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                End User Portal
        </span>
        </div>

        {isSettingEnabled && (
            <div style={{marginTop: '30px'}}>
                <Typography variant="subtitle1" sx={{fontSize:'15px', fontWeight: 'lighter'}}>
                    Your users can use the link below to access the End User Portal
                </Typography>
                <Link style={{fontSize:'15px'}}>
                    {link}
                </Link>
                <div>
                    <Button 
                        onClick={handleCopyClick} 
                        sx={{ 
                            marginLeft: '3px', 
                            marginTop:'20px', 
                            background:'rgb(30, 123, 228)' ,
                            color:'#fff',
                            fontWeight:'lighter'
                            }}
                            >
                        <FileCopyIcon style={{color:'#fff'}}/> 
                            {isCopied ? 'Link Copied' : 'Copy to Clipboard'}
                    </Button>
                    <p style={{fontSize:'14px', color:'gray', fontWeight:'lighter', marginTop:'45px'}}>
                        In the event a user is unable to receive the magic link email, you can use the button 
                        below to generate a temporary link to grant them access to the End User Portal.
                    </p>
                    <Button 
                        variant="contained" 
                        style=
                        {{
                            color:'#fff', 
                            background:'rgb(30, 123, 228)',
                            marginTop:'9px', 
                            fontWeight:'lighter'
                        }}
                        onClick={openAddLangModal}
                        >
                        <MailOutlineIcon style={{marginRight:'3px'}}/>
                            Click to generate magic link to user
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
                        <Box style={{marginTop:'20px'}}>
                        <label 
                            htmlFor="name" 
                            style={{fontSize:"13px"}}
                        >
                            Please enter the users email to generate their personal access link
                        </label>
                        </Box>
                        <TextField 
                        fullWidth 
                        type="text" 
                        sx={{ gridColumn: "span 2" , marginTop:'10px'}} 
                        />
                        
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            style={{
                            border: "0.5px solid #1C7AE4",
                            color: "white",
                            backgroundColor: "#1b7ae4",
                            marginTop: "15px",
                            }}
                        >
                            Generate Magic Link
                        </Button>
                        </Box>
                    </Box>
                    </Modal>
                </div>        
            </div>
        )}
        <Button 
            variant="contained" 
            style=
            {{
                float:'inline-end', 
                marginTop:'60px', 
                color:'#fff', 
                background:'rgb(30, 123, 228)',
                marginRight:'100px',
                fontWeight:'lighter'
            }}
        >
            <SaveIcon style={{marginRight:'3px'}}/>
                Save
        </Button>
      </DashboardLayout>
    );
  };
  
  export default EndUserPortal;