import {
    Typography,
    Switch,
    Button,
    TextField,
  } from "@mui/material";
  import React, { useState } from 'react';
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import SaveIcon from '@mui/icons-material/Save';
  import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
  
  const WorkingHours = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
      setValue(value + 1);
    };
  
    const handleDecrement = () => {
      if (value > 0) {
        setValue(value - 1);
      }
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
       
        

          <TextField
      variant="outlined"
      value={value}
      InputProps={{
        endAdornment: (
          <React.Fragment>
            <IconButton onClick={handleIncrement} size="small">
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleDecrement} size="small">
              <RemoveIcon />
            </IconButton>
          </React.Fragment>
        ),
      }}
    />
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