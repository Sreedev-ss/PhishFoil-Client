import {
    Typography,
    Switch,
    Button,
  } from "@mui/material";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import React from "react";
  import SaveIcon from '@mui/icons-material/Save';
  
  const CourseSlideDelay = () => {

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
                Course Slide Delay
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
                Here you can set delay between a user opening a course slide and the next slide button being enabled.
        </p>
        <div style={{marginTop:'30px'}}>
        <Switch {...label} defaultChecked />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                Require at least 5 seconds to read course material
        </span>
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
      </DashboardLayout>
    );
  };
  
  export default CourseSlideDelay;