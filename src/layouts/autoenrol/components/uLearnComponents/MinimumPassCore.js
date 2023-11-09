import {
    Typography,
    Switch,
    Button,
    TextField,
  } from "@mui/material";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import React, { useState } from "react";
  import SaveIcon from '@mui/icons-material/Save';
  
  const MinimumPassCore = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isSettingEnabled, setIsSettingEnabled] = useState(false);

    const handleSwitchChange = () => {
        setIsSettingEnabled(!isSettingEnabled);
    }

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
                Minimum Pass Score
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
                Here you can configure a minimum pass score and make your users retry the course if they score below the percent you configure.
        </p>
        <div style={{marginTop:'30px'}}>
        <Switch {...label} onChange={handleSwitchChange}  />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                Enable a minimum percentage pass score
        </span>
        </div>

        {isSettingEnabled && (
            <div style={{marginTop: '30px'}}>
                <Typography variant="subtitle1" sx={{fontSize:'15px', fontWeight: 'lighter'}}>
                Set your minimum percentage pass score:
                </Typography>
                <TextField
                type="number"
                inputProps={{ min: 0, max: 100}}
                variant="outlined"
                style={{width:'80px', marginTop:'20px'}}             
                />                
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
  
  export default MinimumPassCore;