import {
    Box,
    TextField,
    Typography,
    MenuItem,
    Button,
    Switch,
    Grid,
  } from "@mui/material";

  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import ArrowRightIcon from '@mui/icons-material/ArrowRight';
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import Tabs from "@mui/material/Tabs";
  import { useState } from "react";
  import React from "react";
  import { useRef } from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  const CloneSimulation = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedItems, setSelectedItems] = useState(['English']);
    const [checked, setChecked] = useState(false);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [customSenderEmail, setCustomSenderEmail] = useState(false);
    const [receipient, setReceipient] = useState('');

    const handleChangeReceipient = (event) => {
        setReceipient(event.target.value);
    };

    const handleCustomSenderEmailChange = () => {
        setCustomSenderEmail(!customSenderEmail);
    };
  
    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  
    const tabStyle = {
      marginTop: "30px",
    };
    const renderTabContent = (tabIndex) => {
      if (tabIndex === 0) {
        return (
          <form>
            <Box
              display="grid"
              gap="15px"
              width="590px"
              sx={{
                fontSize: "16px",
              }}
            >
              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Simulation Name:
                </label>
              </Box>
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />   
              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Subject:
                </label>
              </Box>
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Sender Name:
                </label>
              </Box>
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />          
            </Box>
            <Box>
                <p 
                    style={{
                        fontSize:'13px', 
                        color:'blue', 
                        fontWeight:'lighter', 
                        fontStyle:'italic'}}
                    >
                        This name will be displayed in the users inbox. If left blank, the sender email address will be shown instead.
                </p>
            </Box>
            
            <Box style={{marginTop:'15px'}}>
                    <label 
                        htmlFor="name" 
                        style={{fontSize:"13px"}}
                    >
                        Use a custom sender email address:
                    </label>
                    <Switch {...label} 
                    checked={customSenderEmail}
                    onChange={handleCustomSenderEmailChange}
                    />
                </Box> 

                {customSenderEmail ? (
                <Box >
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                    Sender Email Address:
                    </label>
                    <TextField
                    fullWidth
                    type="text"
                    sx={{ gridColumn: "span 2" }}
                    />
                    <Box>
                    <p 
                        style={{ 
                            fontSize: "12px", 
                            color: "gray", 
                            fontWeight: "lighter" }}
                        >
                            Please be aware that emails may be blocked due to the senders domain. 
                            You should test your email before setting up your phishing simulation to ensure it will reach the target users.
                    </p>
                    </Box>
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey'}} style={{fontWeight:'lighter', background:'#e6e2a3'}}>
                    <h6 style={{fontWeight:'lighter', color:'black'}}>You are using an unverified domain in your Sender Email Address</h6>
                    <li style={{fontSize:'13px'}}>The sender domain you selected/entered has not been verified for use with this system.</li>
                    <li style={{fontSize:'13px'}}>If you choose to continue this may reduce the deliverability of the emails from this simulation.</li>
                    <li style={{fontSize:'13px'}}>You should use the Send Test Email feature below to verify it can be delivered successfully.</li>
                    <li style={{fontSize:'13px'}}>If the emails fail, you should use a different Sender Email Address and/or 
                    review the allow listing configuration of your email service to increase the chances of success delivery.</li>
                    </Box>
                </Box>
                ) : (
                <Box>
                    <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box>
                        <label htmlFor="name" style={{ fontSize: "13px" }}>
                            Sender:
                        </label>
                        </Box>
                        <TextField fullWidth type="text" />
                    </Grid>
                    <Grid
                        item xs={1}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" component="span" style={{ fontSize: "10px" }}>
                        @
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box>
                        <label htmlFor="dropdown" style={{ fontSize: "13px" }}>
                            Recipient:
                        </label>
                        </Box>
                        <TextField
                            select
                            value={receipient}
                            onChange={handleChangeReceipient}
                            type="text"
                            sx={{
                            gridColumn: "span 2",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            backgroundColor: "#ffff",
                    }}
                    SelectProps={{
                        IconComponent: () => <ExpandMoreIcon />,
                      }}
                        >
                            <MenuItem value="1nfoclient.fr">1nfoclient.fr</MenuItem>
                            <MenuItem value="amzwon.net">amzwon.net</MenuItem>
                            <MenuItem value="asistencoahoy.com">asistencoahoy.com</MenuItem>
                            <MenuItem value="atencionalclenite.com">atencionalclenite.com</MenuItem>
                            <MenuItem value="banque-online.com">banque-online.com</MenuItem>
                            <MenuItem value="billing.net">billing.net</MenuItem>
                            <MenuItem value="Internal">Internal</MenuItem>
                            <MenuItem value="centre-assistance">centre-assistance</MenuItem>
                            <MenuItem value="centro-assistance.fr">centro-assistance.fr</MenuItem>
                            <MenuItem value="companylegal.co.uk">companylegal.co.uk</MenuItem>
                            <MenuItem value="companypolicy.ie">companypolicy.ie</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
            </Box>
            )}
            <Box style={{ marginTop: "15px" }}>
            <Grid item xs={7}>
                <Box>
                <label htmlFor="dropdown" style={{ fontSize: "13px" }}>
                    Landing Page Domain:
                </label>
                </Box>
                <TextField
                    select
                    value={receipient}
                    onChange={handleChangeReceipient}
                    
                    type="text"
                    sx={{
                    gridColumn: "span 2",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#ffff",
                    width:'200px'

                }}
                SelectProps={{
                    IconComponent: () => <ExpandMoreIcon />,
                    }}
                >
                    <MenuItem value="1nfoclient.fr">1nfoclient.fr</MenuItem>
                    <MenuItem value="amzwon.net">amzwon.net</MenuItem>
                    <MenuItem value="asistencoahoy.com">asistencoahoy.com</MenuItem>
                    <MenuItem value="atencionalclenite.com">atencionalclenite.com</MenuItem>
                    <MenuItem value="banque-online.com">banque-online.com</MenuItem>
                    <MenuItem value="billing.net">billing.net</MenuItem>
                    <MenuItem value="Internal">Internal</MenuItem>
                    <MenuItem value="centre-assistance">centre-assistance</MenuItem>
                    <MenuItem value="centro-assistance.fr">centro-assistance.fr</MenuItem>
                    <MenuItem value="companylegal.co.uk">companylegal.co.uk</MenuItem>
                    <MenuItem value="companypolicy.ie">companypolicy.ie</MenuItem>
                </TextField>
            </Grid>
        </Box>
        <Box>
            <p 
                style={{
                    fontSize:'13px', 
                    color:'blue', 
                    fontStyle:'italic', 
                    fontWeight:'lighter'}}
                >
                    This is the domain used on the links in your simulations emails.
                Mail providers and popular browsers<br/> (most notably Chrome) may report the landing page domain as suspicious, its always worth running a test simulation first.
            </p>
        </Box>
            <div style={{ marginTop: "15px" }}>
              <Button
                variant="outlined"
                sx={{
                  mx: "auto",
                  borderColor: "blue",
                  color: "blue",
                  margin: "10px",
                  fontWeight:'lighter',
                }}
              >
                <MailOutlineIcon />
                Send Test Email
              </Button>
              <Button
                variant="outlined"
                sx={{
                  mx: "auto",
                  borderColor: "red",
                  color: "red",
                  margin: "10px",
                  fontWeight:'lighter',
                }}
              >
                <ArrowRightIcon />
                Continue
              </Button>
            </div>
          </form>
        );
      } 
    };
  
    return (
      <DashboardLayout>
        <Typography variant="h4">uPhish - Clone Simulation</Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          textColor="secondary"
          style={tabStyle}
        >
            <div>
            <Typography variant="h6" sx={{justifyContent:'flex-start'}}>Configure your simulation</Typography>
            </div>
        </Tabs>
        {renderTabContent(selectedTab)}
      </DashboardLayout>
    );
  };
  
  export default CloneSimulation;
  