import {
    Typography,
    Button,
    TextField,
    MenuItem,
    Modal,
    ListItemText,
    Checkbox,
    Chip,
    Select,
    FormControl,
  } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { Box } from "@mui/system";

const TimeZone = () => {

    const [reminder, setReminder] = useState("(GMT+00:00) Europe/Isle_of_Man");

    const handleChangedReminders = (event) => {
        setReminder(event.target.value);
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
                Timezone
        </Typography>
        <p 
            style={{
                marginTop:'20px', 
                color:'gray', 
                fontSize:'15px', 
                fontWeight:'lighter'
                }}
            >
            Configure the timezone used when calculating dates and times in reports.
        </p>
        <div style={{marginTop:'25px'}}>
            <Box>
                <label 
                    htmlFor="name" 
                    style={{ fontSize: "13px" }}
                    >
                        Preferred Timezone:
                </label>
            </Box>
            <TextField
                select
                value={reminder}
                onChange={handleChangedReminders}
                type="text"
                sx={{
                  gridColumn: "span 2",
                  backgroundColor: "#ffff",
                  marginTop:'9px',
                  width:"500px"
                }}
                SelectProps={{
                  IconComponent: () => <ExpandMoreIcon />,
                }}
              >
                <MenuItem value="(GMT+00:00) Europe/Isle_of_Man">(GMT+00:00) Europe/Isle_of_Man</MenuItem>
                <MenuItem value="(GMT+00:00) Europe/Jersy">(GMT+00:00) Europe/Jersy</MenuItem>
                <MenuItem value="(GMT+00:00) Europe/London">(GMT+00:00) Europe/London</MenuItem>
                <MenuItem value="(GMT+00:00) Europe/Lisbon">(GMT+00:00) Europe/Lisbon</MenuItem>
              </TextField>
            </div>
            <div>
            <Button 
                variant="outlined" 
                style=
                {{ 
                    color:'black',
                    fontWeight:'lighter',
                    marginTop:'15px',
                    borderColor:'gray'
                }}               
            >                
                Detect Timezone
            </Button>
            </div>
        <div>
            <Button 
                variant="contained" 
                style=
                {{
                    float:'inline-end', 
                    marginTop:'60px', 
                    color:'#fff', 
                    background:'rgb(30, 123, 228)',
                    marginRight:'115px',
                    fontWeight:'lighter'
                }}               
            >
                <SaveIcon style={{marginRight:'3px'}} />
                    Save
            </Button>
        </div>
      </DashboardLayout>
    );
};
  
export default TimeZone;