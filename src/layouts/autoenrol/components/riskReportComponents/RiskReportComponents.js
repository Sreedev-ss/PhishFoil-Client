import {
    Typography,
    Button,
    TextField,
    MenuItem,
  } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { Box } from "@mui/system";

const RiskReportComponent = () => {
    const [reminder, setReminder] = useState("Always");

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
                Risk Report
        </Typography>
        <p 
            style={{
                marginTop:'15px', 
                color:'gray', 
                fontSize:'15px', 
                fontWeight:'lighter'
                }}
                >
                    Configure settings related to the risk report process.
        </p>
        <div style={{marginTop:'25px'}}>
            <Box>
                <label 
                    htmlFor="name" 
                    style={{ fontSize: "13px" }}
                    >
                        Automatic Phishing Campaign Completion:
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
                  marginTop:'15px',
                  width:"600px"
                }}
                SelectProps={{
                  IconComponent: () => <ExpandMoreIcon />,
                }}
              >
                <MenuItem value="Always">Always</MenuItem>
                <MenuItem value="Above Engagement Threshold">Above Engagement Threshold</MenuItem>
                <MenuItem value="Never">Never</MenuItem>
            </TextField>
            <ul 
                style={{
                    color:'gray', 
                    fontSize:'13px', 
                    marginLeft:'40px', 
                    fontWeight:'lighter', 
                    marginTop:'5px'
                    }}
                    >
                <li>
                    Always - The phishing campaign will be marked as completed<br/> 
                    automatically 24 hours after it finishes.
                </li>
                <li>
                    Above Engagement Threshold - Same as Always except that the<br/>
                    phishing campaign is only completed if its compromise rate is 10% or<br/> 
                    above or its visit rate is 20% or above.
                </li>
                <li>
                    Never - You must mark the phishing campaign as complete manually.
                </li>
            </ul>
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
                <SaveIcon style={{marginRight:'3px'}}/>
                    Save
            </Button>
        </div>
    </DashboardLayout>
    );
};
  
  export default RiskReportComponent;