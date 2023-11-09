import {
    Typography,
    Button,
  } from "@mui/material";
  
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileCopyIcon from '@mui/icons-material/FileCopy';

const link = 'https://app.usecure.io/company/bfa982ab-6356-47af-8b0f-d2867667cc75/';
  
const UserIdAccess = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(link);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
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
                User ID Access
        </Typography>

            <div style={{marginTop: '30px'}}>
                <Typography 
                    variant="subtitle1" 
                    sx={{
                        fontSize:'15px', 
                        fontWeight: 'lighter'
                        }}
                >
                Your users can use the link below to access their outstanding courses and policies via their User ID
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
                </div>        
            </div>
      </DashboardLayout>
    );
};
  
export default UserIdAccess;