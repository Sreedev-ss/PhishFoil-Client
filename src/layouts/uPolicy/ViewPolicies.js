import {
    Button,
    Card,
    Checkbox,
    Dialog,
    Divider,
    FormControlLabel,
    FormGroup,
    Menu,
    MenuItem,
    Switch,
    Typography,
  } from "@mui/material";
  import SoftBox from "components/SoftBox";
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import DashboardNavbar from "examples/Navbars/DashboardNavbar";
  import React from "react";
//   import ReviewsBar from "layouts/viewSimulation/components/ReviewsBar";
import ReviewsBar from "./ViewPolicyTableData/ReviewsBar";
  import { AiFillInfoCircle } from "react-icons/ai";
  import { styled } from "@mui/material/styles";
  import Paper from "@mui/material/Paper";
  import Grid from "@mui/material/Grid";
  
  import ChartBar from "layouts/uLearn/CourseReport/ChartBar";
  
  import { useRef, useState } from "react";
  import "react-circular-progressbar/dist/styles.css";
  
  import PieChartWithCenterLabel from "layouts/uLearn/CourseReport/PieChart";
  import ReportTableDisplay from "layouts/uPolicy/ViewPolicyTableData/viewPoliciesTableData";
  import RefreshIcon from '@mui/icons-material/Refresh';
import { Stack } from "@mui/system";
import { AiOutlineSearch } from 'react-icons/ai';
// import TemplateBuilderData from '../uPolicy/ReportTableData/templateBuildData'
import TemplateBuilderData from '../uPolicy/ReportTableData/viewPolicyData';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  
  
  const languageOptions = ["English", "Spanish", "French", "German"];
  
  const ViewPolicies = () => {
    const [report, setReport] = useState(true);
    const [uPolicyReport, setUPolicyReport] = useState(false);
    const [uPolicyChartBar, setUPolicyChartBar] = useState(false);

    const [isUserFormOpen, setUserFormOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const openUserForm = (event) => {
      setAnchorEl(event.currentTarget);
    };

    // const openUserForm = () => {
    //     setUserFormOpen(true);
    // };

    const closeUserForm = () => {
        setUserFormOpen(false);
    };

    const closeGroupForm = () => {
        setGroupFormOpen(false);
    };
  
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px",
                height: "5rem",
                backgroundColor: "white",
              }}
            >
              <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
              uPolicy - Policies
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
              </FormGroup>
            </div>
            <Divider />
            <div style={{ display: "flex", gap: "30px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                  height: 290,
                  padding: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 25,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "15px", color: "black", fontWeight: "bold", margin: "0px", fontWeight:'lighter' }}
                  >
                    Live Policies
                  </Typography>
                  <span>
                    <AiFillInfoCircle />
                  </span>
                </div>
  
                <div>
                  <h1>6</h1>
                </div>
                <div>
                  <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}></h5>
                </div>
                <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
                <h6 style={{ fontWeight: 400 }}>Drafts - 0</h6>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                  height: 290,
                  padding: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 25,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "15px", color: "black", fontWeight: "bold", margin: "0px", fontWeight:'lighter' }}
                  >
                    Total Recipients
                  </Typography>
                  <span>
                    <AiFillInfoCircle />
                  </span>
                </div>
  
                <div>
                  <h1>51</h1>
                </div>
                <div>
                  <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}></h5>
                </div>
                <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
                <h6 style={{ fontWeight: 400 }}>Policies with recipients - 6</h6>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                  height: 290,
                  padding: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 25,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  <h5 style={{ margin: "0px", fontSize:'15px', fontWeight:'lighter' }}>Total Visited</h5>
                  <span>
                    <AiFillInfoCircle />
                  </span>
                </div>
                <div style={{ width: 150, height: "100%" }}>
                  <ReviewsBar score={18} report={report} />
                </div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px", fontSize:'15px', fontWeight:'lighter' }}>
                of policies sent have been viewed
                </h5>
                <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
                <h6 style={{ fontWeight: 400 }}>Total - 9</h6>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                  height: 290,
                  padding: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 25,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  <h5 style={{ margin: "0px", fontSize:'15px',fontWeight:'lighter' }}>Signed</h5>
                  <span>
                    <AiFillInfoCircle />
                  </span>
                </div>
                <div style={{ width: 150, height: "100%" }}>
                  <ReviewsBar score={14} report={report} />
                </div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px", fontSize:'15px', fontWeight:'lighter' }}>
                of recipients have signed their policies
                </h5>
                <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
                <h6 style={{ fontWeight: 400 }}>Total - 7</h6>
              </div>
            </div>


              <SoftBox py={3}>
                <SoftBox mb={3}>
                    <div 
                        style=
                        {{ 
                            display: "flex", 
                            gap: "5px", 
                            alignItems: "center", 
                            justifyContent: 'space-between', 
                            padding: '50px', 
                            height: '9rem', 
                            backgroundColor: 'white' 
                            }}
                    >
                        <Button
                                style={{
                                    border: '0.5px solid rgb(30, 123, 228)',
                                    color: '#fff',
                                    fontSize: "10px",
                                    // marginLeft:'50px',
                                    background:'rgb(30, 123, 228)',
                                    fontWeight:'lighter',
                                    marginBottom:'-30px'
                                }}
                                variant="contained"
                                size="small"
                                onClick={openUserForm}
                            >
                                <DownloadIcon style={{marginRight:'5px'}}/>
                                Export Outstanding Policies
                            </Button> 
                        <div>                        
                            <Button
                                style={{
                                    border: '0.5px solid rgb(30, 123, 228)',
                                    color: '#d4d4d4',
                                    fontSize: "10px",
                                    marginLeft:'425px',
                                    color:'rgb(30, 123, 228)',
                                    // float:'inline-end'
                                }}
                                size="small"
                                onClick={openUserForm}
                            >
                                <RefreshIcon style={{marginRight:'5px'}}/>
                                Refresh
                            </Button>   
                            <span>                              
                        <SoftBox
                            display="flex"
                            flexDirection="row"
                            justifyContent="end"
                            alignItems="flex-end"
                            p={3}
                        >
                            <Stack>
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    justifyContent="flex-end"
                                >
                                
                                    <Button
                                        style={{
                                            border: "0.5px solid grey",
                                            color: "#585958" ,
                                            fontSize: "10px",
                                            marginTop: '1px',
                                            fontWeight:'lighter'
                                        }}
                                        variant="outlined"
                                        size="small"
                                        onClick={openUserForm}
                                    >
                                        
                                        Search for a policy<AiOutlineSearch style={{ color: 'grey', fontSize: "15px", marginLeft:'5px' }} />
                                    </Button> 
                                    <Dialog
                                        open={isUserFormOpen}
                                        onClose={closeUserForm}
                                    >                                        
                                    </Dialog> 
                                    <Button
                                        variant="outlined"
                                        style={{ border: "0.5px solid grey", color: "#585958" }}
                                        size="small"
                                        disabled
                                        >
                                        Action
                                    </Button>
                                    
                                    <Button
                                        style={{
                                            border: '0.5px solid rgb(30, 123, 228)',
                                            color: '#fff',
                                            fontSize: "10px",
                                            marginTop: '1px',
                                            background:'rgb(30, 123, 228)',
                                            fontWeight:'lighter'
                                        }}
                                        variant="contained"
                                        size="small"
                                        onClick={openUserForm}
                                    >
                                        <AddIcon style={{ fontSize: "15px", color:'#fff' }} />
                                        Create Policy
                                    </Button> 
                                    <Menu
                                      anchorEl={anchorEl}
                                      open={Boolean(anchorEl)}
                                      onClose={handleClose}
                                    >
                                      <MenuItem onClick={handleClose}>Temp</MenuItem>
                                      <Link to="/uPolicy/createPolicy"><MenuItem onClick={handleClose}>Scratch</MenuItem></Link>
                                    </Menu>
                                    {/* </Link> */}
                                    
                                    {/* <Link to="/uPolicy/createPolicy">
                                    <Button
                                      variant="outline"
                                      style={{
                                        border: "0.5px solid #1C7AE4",
                                        color: "white",
                                        backgroundColor: "#1b7ae4",
                                        fontWeight:'lighter'
                                      }}
                                      onClick={openUserForm}
                                    >
                                      + Create Policy 
                                    </Button>
                                    </Link> */}
                                    {/* <Button
                                        style={{
                                            border: '0.5px solid rgb(30, 123, 228)',
                                            color: '#fff',
                                            fontSize: "10px",
                                            marginTop: '1px',
                                            background:'rgb(30, 123, 228)',
                                            fontWeight:'lighter'
                                        }}
                                        variant="contained"
                                        size="small"
                                        onClick={openUserForm}
                                    >
                                        <AddIcon style={{ fontSize: "15px", color:'#fff' }} />
                                        Create Policy
                                    </Button>                                                                        */}
                                </Stack>
                                </Stack>
                        </SoftBox>
                        </span> 
                        </div>
                    </div>                    
                    <Card sx={{ marginTop: 3 }}>                      
                        <SoftBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <div>
                                <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",

                                }}
                                >
                                <TemplateBuilderData />
                                </div>
                            </div>
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </DashboardLayout>
    );
  };
  
  export default ViewPolicies;