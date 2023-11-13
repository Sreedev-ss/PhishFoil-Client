import {
    Typography,
    Button,
    Snackbar,
    IconButton,
  } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { Link } from "react-router-dom";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Box } from "@mui/system";
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from "@mui/icons-material/Close";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const link = 'https://app.usecure.io/portal/bfa982ab-6356-47af-8b0f-d2867667cc75';
  
const ExternalPolicyAccess = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [showRegeneratePopup, setShowRegeneratePopup] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(link);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
    };

    const handleRegenerateClick = () => {
        setShowRegeneratePopup(true);
      };
    
      const handleSaveClick = () => {
        // Handle save logic here
        setShowRegeneratePopup(false); // Close the popup after saving
      };
    
      const handleCloseRegeneratePopup = () => {
        setShowRegeneratePopup(false);
      };

    return (
      <DashboardLayout>
        <DashboardNavbar/>
        <Typography 
            variant="h4" 
            sx=
            {{
                fontFamily:"Hind Guntur", 
                fontWeight:'500', 
                fontSize:"1.6rem"
                }}
            >
                External Policy Access
        </Typography>
            <div style={{marginTop: '30px'}}>
                <Typography 
                    variant="subtitle1" 
                    sx=
                    {{
                        fontSize:'15px', 
                        fontWeight: 'lighter'
                    }}
                >
                You can give this link to third parties to access your policies for auditing purposes.
                </Typography>
                <Link style={{fontSize:'15px'}}>
                    {link}
                </Link>
                <Typography 
                    variant="subtitle1" 
                    sx=
                    {{
                        fontSize:'15px', 
                        fontWeight: 'lighter'
                    }}
                >
                If you wish to revoke access you can remove the link completely or invalidate the existing link by regenerating.
                </Typography>
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
                    <Button
                        style={{
                            border: '0.5px solid rgb(30, 123, 228)',
                            color: '#d4d4d4',
                            fontSize: "10px",
                            marginLeft:'10px',
                            color:'rgb(30, 123, 228)',
                            marginTop:'20px'
                        }}
                        size="mediym"
                        onClick={handleRegenerateClick}
                    >
                        <RefreshIcon style={{marginRight:'5px'}}/>
                        Regenerate Link
                    </Button>  
                    <Button
                        style={{
                            border: '0.5px solid #ff4d4f',
                            color: '#d4d4d4',
                            fontSize: "10px",
                            marginLeft:'10px',
                            color:'#ff4d4f',
                            marginTop:'20px'
                        }}
                        size="medium"
                    >
                        <DeleteOutlineIcon style={{marginRight:'5px'}}/>
                        Delete Link
                    </Button>    
                </div>        
            </div>
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

        <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showRegeneratePopup}
        autoHideDuration={6000}
        onClose={handleCloseRegeneratePopup}
        message="These changes will not take effect until you click save."
        
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseRegeneratePopup}
            >
                <Button
                        style={{
                            border: '0.5px solid rgb(250, 173, 20)',
                            color: '#d4d4d4',
                            fontSize: "10px",
                            marginLeft:'10px',
                            color:'rgb(250, 173, 20)',
                            marginTop:'2px'
                        }}
                        size="mediym"
                    >
                        <RefreshIcon style={{marginRight:'5px'}}/>
                        Reset Changes
                    </Button> 
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      >
        
      </Snackbar>


      </DashboardLayout>
    );
};
  
export default ExternalPolicyAccess;