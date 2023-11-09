import {
    Typography,
    Switch,
    Button,
    TextField,
  } from "@mui/material";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import React from "react";
  import SaveIcon from '@mui/icons-material/Save';
  
  const WorkingHours = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
               Working Hours
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
               Configure the working hours used when scheduling your phishing simulations.
        </p>
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
              Set your working hours
        </p>
       
          <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
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
  
  export default WorkingHours;