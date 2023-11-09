import {
    Typography,
    Button,
    TextField,
    MenuItem,
    Modal,
  } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { Box } from "@mui/system";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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

  const GapAnalysisReminderEmails = () => {

    const [reminder, setReminder] = useState("");
    const [continueModalOpen, setCountinueModalOpen] = useState(false)

    const handleChangedReminders = (event) => {
        setReminder(event.target.value);
    };
    const openContinueModal = () => {
        setCountinueModalOpen(true);
    };
    const closeContinueModal = () => {
        setCountinueModalOpen(false);
    };
    const removeContinueModal = () => {
        closeContinueModal();
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
                Gap Analysis Reminders
        </Typography>
        <div style={{marginTop:'17px'}}>
              <Box>
                <label 
                    htmlFor="name" 
                    style={{ fontSize: "13px" }}
                    >
                        How often would you like us to send gap analysis reminder emails to your users?:
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
                  width:"1100px"

                }}
                SelectProps={{
                  IconComponent: () => <ExpandMoreIcon />,
                }}
              >
                <MenuItem value="No Category">Dont send reminders</MenuItem>
                <MenuItem value="Every 1 day">Every 1 day</MenuItem>
                <MenuItem value="Every 2 days">Every 2 days</MenuItem>
                <MenuItem value="Every 3 days">Every 3 days</MenuItem>
                <MenuItem value="Every 4 days">Every 4 days</MenuItem>
                <MenuItem value="Every 5 days">Every 5 days</MenuItem>
                <MenuItem value="Every 6 days">Every 6 days</MenuItem>
                <MenuItem value="Every 7 days">Every 7 days</MenuItem>
              </TextField>
            </div>
            <div style={{marginTop:'37px'}}>
                <Box>
                    <label 
                        htmlFor="name" 
                        style=
                        {{ 
                            fontSize: "13px",
                        }}
                        >
                            Alternatively you can:
                    </label>
                </Box>
            </div>
            <Button 
                variant="contained" 
                style=
                {{
                    color:'#fff', 
                    background:'rgb(30, 123, 228)',
                    marginTop:'9px', 
                    fontWeight:'lighter'
                }}
                onClick={openContinueModal}
                >
                <MailOutlineIcon style={{marginRight:'3px'}}/>
                    Send a one off reminder now
            </Button>
            <Modal
            open={continueModalOpen}
            onClose={closeContinueModal}
            aria-labelledby="send-test-email-modal-title"
            aria-describedby="send-test-email-modal-description"
            >
            <Box sx={style}>
                <Typography
                    id="send-test-email-modal-title"
                    variant="h6"
                    component="h2"
                    style=
                    {{
                        fontWeight:'lighter', 
                        color:'black'
                    }}
                >
                <HelpOutlineIcon style={{color:'orange'}} />
                Are you sure you wish to continue?
                <p 
                    style=
                    {{
                        marginTop:'5px', 
                        color:'gray', 
                        fontSize:'13px', 
                        marginLeft:'15px'
                        }}
                    >
                        Please note that one off gap analysis reminders will only be
                        sent to those with an outstanding questionnaire sent out 2 or more days ago
                </p>
                </Typography>
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
                    onClick={removeContinueModal}
                    style={{ color: "#fff" }}
                >
                    No
                </Button>
                <Button
                    variant="outlined"
                    onClick={closeContinueModal}
                    style={{ marginRight: "5px", color: "black" }}
                >
                    Yes
                </Button>
                </Box>
            </Box>
            </Modal>
            <p 
                style=
                {{
                    fontSize:'15px', 
                    color:'gray', 
                    fontFamily:'lighter', 
                    marginTop:'4px'
                    }}
                    >
                        Please note that one off gap analysis reminders will only be 
                        sent to those with an outstanding questionnaire sent out 2 or more days ago
            </p>
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
  
  export default GapAnalysisReminderEmails;