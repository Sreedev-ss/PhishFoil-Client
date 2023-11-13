import {
    Box,
    TextField,
    Typography,
    MenuItem,
    Button,
    Checkbox,
    Select,
    FormControl,
    InputAdornment,
  } from "@mui/material";
  
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from "react-router-dom";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SaveIcon from '@mui/icons-material/Save';


const CreatePolicy = () => {

    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);
    const [category, setCategory] = useState("No Category");
    const [type, setType] = useState("Editor");
    const [value, setValue] = useState('');
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    const [status, setStatus] = useState("Non-Compulsory");
    const [signatureCycleStartDate, setSignatureCycleStartDate] = useState(new Date());
    const [signatureFrequency, setSignatureFrequency] = useState({
        number: 1,
        unit: "month",
      });
  
      const [checked, setChecked] = useState(false);
      const handleChange = () => {
        setChecked(!checked);
      };
    const handleStatusChange = (event) => {
      setStatus(event.target.value);
    };

    const handleDateChange = (date) => {
        setSignatureCycleStartDate(date);
      };

    const renderContentBasedOnStatus = () => {
        if (status === "Non-Compulsory") {
          return (
            <div >
              <h4 
                style=
                {{ 
                    fontWeight: "lighter", 
                    marginLeft: "20px" 
                    }}
                    >
                    How will policies be sent out?
              </h4>
              <hr style={{ marginTop: "10px" }} />
              <ul
                style={{
                  color: "rgba(0,0,0,.65);",
                  fontSize: "14px",
                  marginLeft: "10px",
                  fontWeight: "lighter",
                  padding: "25px",
                }}
              >
                <li>Policies will not be sent to any users<br/> automatically</li>
                <li>Any requests to sign policies will have to be sent<br/> manually</li>
              </ul>
            </div>
          );
        } else if (status === "Fixed Term") {
          return (
            <div>
                <h4 
                    style=
                    {{ 
                        fontWeight: "lighter", 
                        marginLeft: "20px" 
                        }}
                    >
                        How will policies be sent out?
                </h4>
                <hr style={{ marginTop: "10px" }} />
                <ul
                    style={{
                    color: "rgba(0,0,0,.65);",
                    fontSize: "14px",
                    marginLeft: "10px",
                    fontWeight: "lighter",
                    padding: "25px",
                    }}
                >
                    <li>
                        From 01/01/2023, policies will be sent to new<br/> 
                        users automatically when they are added to the<br/> platform
                    </li>
                    <li>
                        Policies will also be sent automatically to<br/> 
                        existing, active users who have yet to sign them<br/> 
                        from 01/01/2023 onwards
                    </li>
                    <li>
                        From 01/01/2023, policies will be sent to all active<br/> 
                        users every 1 year
                    </li>
                    <li>
                        The next batch for re-signature will be sent on<br/> 
                        01/01/2024
                    </li>
                </ul>     
            </div>            
          );
        } else if (status === "From Last Signature") {
            return (
              <div>
                <h4 
                    style=
                    {{ 
                        fontWeight: "lighter", 
                        marginLeft: "20px" 
                        }}
                        >
                    How will policies be sent out?
                </h4>
                <hr style={{ marginTop: "10px" }} />
                <ul
                  style={{
                    color: "rgba(0,0,0,.65);",
                    fontSize: "14px",
                    marginLeft: "10px",
                    fontWeight: "lighter",
                    padding: "25px",
                  }}
                >
                  <li>
                    Policies will be sent to new users automatically<br/> when they are added to the platform
                  </li>
                  <li>
                    Policies will also be sent automatically to<br/> existing, active users who have yet to sign them
                  </li>
                  <li>Users will sent policies again 1 year after they last<br/> signed them</li>                 
                </ul>                
              </div>
            );
        } else if (status === "New Users") {
            return (
              <div>
                <h4 style={{ fontWeight: "lighter", marginLeft: "20px" }}>
                  How will policies be sent out?
                </h4>
                <hr style={{ marginTop: "10px" }} />
                <ul
                  style={{
                    color: "rgba(0,0,0,.65);",
                    fontSize: "14px",
                    marginLeft: "10px",
                    fontWeight: "lighter",
                    padding: "25px",
                  }}
                >
                  <li>Policies will be sent to new users automatically<br/> when they are added to the platform</li>
                  <li>Policies will also be sent automatically to<br/> existing, active users who have yet to sign them</li>
                  <li>Policies will only be sent out to users<br/> automatically once</li>
                  <li>Any re-signature requests will need to be sent<br/> manually</li>                  
                </ul>
              </div>
            );
        }
        return (
          <div>
            <h4 style={{ fontWeight: "lighter", marginLeft: "20px" }}>
              Default Content
            </h4>
          </div>
        );
      };

    const handleSubmitEmailTemplate = async (e) => {
  
      e.preventDefault();
  
      if (!isFormValid()) {
        setError("Please fill out all the required fields.");
        return;
      } else {
        console.log(html, 'submit')
        setFormData((prevFormData) => ({
          ...prevFormData,
          design: html.design,
          html: html.html,
          image:imageData
        }));
        setCount(count + 1)
        console.log(count.current)
        try {
          console.log(formData, 'else handleSubmit')
          if (count != 0) {
            
            const res = await axios.post(`${host}/emailtemplate/new/${loginData.clientid}/${loginData.detailsid}`, formData);
            console.log("response", res);
            if (res.data) {
              // toast.success("Successfully created");
              setAllEmailTemplateData(res.data);
              setFormData({
                templatename: '',
                language: selectedItems,
                category: '',
                subject: '',
                sendername: '',
                emailid: '',
                domain: '',
                // sender: '',
                // receipient: '',
                design: '',
                html: '',
              })
              setTimeout(() => {
                navigate('/uphish/email-template-builder')
              }, 1000)
              // setSuccess("Email Template Created Successfully");
            }
          }
        } catch (err) {
          console.log(err);
          setError(err)
        }
      }
    }

    const handleType = (event) => {
      setType(event.target.value);
    };

    const handleCategory = (event) => {
      setCategory(event.target.value);
    };

    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
    const handleBackToViewPolicy = () => {
        navigate('/uPolicy/viewpolicies');
    };

    const tabStyle = {
      marginTop: "30px",
    };

    const renderTabContent = (tabIndex) => {
      switch (tabIndex) {
        case 0:
          return (
            <form>
            <ToastContainer />
            <Box
              display="grid"
              gap="15px"
              width="590px"
              sx={{
                fontSize: "16px",
              }}
            >
              <Box style={{ marginTop: '15px' }}>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                Policy Name:
                </label>
              </Box>
              <TextField
                fullWidth
                name="templatename"
                type="text"
                // value={formData.templatename}
                // onChange={handleChangeEmailTemplate}
                sx={{ gridColumn: "span 2" }} />
              <div>
                <FormControl >
                  <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Category:</Typography>
                  <Select
                    labelId="category-label"
                    id="category-label"
                    // value={category}
                    label="Status"
                    MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                    // onChange={handleCategory}
                    name="category"
                    value={category}
                    onChange={handleCategory}
                    // value={formData.category}
                    // onChange={handleChangeEmailTemplate}
                    endAdornment={
                      <InputAdornment sx={{position:'absolute', right:3}}>
                        <ExpandMoreIcon />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value={'No Category'}>No Category</MenuItem>
                    <MenuItem value={'Compliance'}>Compliance</MenuItem>
                    <MenuItem value={'Essential'}>Essential</MenuItem>
                    <MenuItem value={'Encryption'}>Encryption</MenuItem>
                    <MenuItem value={'Mobile Devices'}>Mobile Devices</MenuItem>
                    <MenuItem value={'Server'}>Server</MenuItem>
                    <MenuItem value={'Other'}>Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* <div> */}
                <FormControl>
                    <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px"}}>Type:</Typography>
                    <Select
                    labelId="type-label"
                    id="type-label"
                    MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                    // onChange={handleCategory}
                    name="type"
                    value={type}
                    fullWidth
                    onChange={handleType}
                    // value={formData.category}
                    // onChange={handleChangeEmailTemplate}
                    endAdornment={
                        <InputAdornment sx={{position:'absolute', right:3}}>
                        <ExpandMoreIcon />
                        </InputAdornment>
                    }
                    >
                    <MenuItem value={'Editor'}>Editor</MenuItem>
                    <MenuItem value={'Compliance'}>PDF Uoload</MenuItem>
                    {/* <MenuItem value={'Essential'}>Essential</MenuItem>
                    <MenuItem value={'Encryption'}>Encryption</MenuItem>
                    <MenuItem value={'Mobile Devices'}>Mobile Devices</MenuItem>
                    <MenuItem value={'Server'}>Server</MenuItem>
                    <MenuItem value={'Other'}>Other</MenuItem> */}
                    </Select>
                </FormControl>
            </Box>       
            <div>
              <p
                style={{
                  fontSize: '15px',
                  marginTop: '45px'
                }}
              >
                Create your template:
              </p>
                <div style={{height:'300px', marginTop:'20px'}}>
              <ReactQuill style={{height:'250px'}} theme="snow" value={value} onChange={setValue} />
              </div>

            </div>
            <div style={{ marginTop: '15px' }}>
              <Button
                variant="outlined"
                onClick={handleSubmitEmailTemplate}
                sx={{
                  mx: 'auto',
                  borderColor: 'blue',
                  color: 'blue',
                  margin: "10px"
                }}
              >
                Create Template
              </Button>
              <Button
                variant="outlined"
                sx={{
                  mx: 'auto',
                  borderColor: 'red',
                  color: "red",
                  margin: "10px"
                }}
                onClick={()=>navigate('/uphish/email-template-builder')}
              >
                CANCEL
              </Button>
            </div>
          </form>
          )
        case 1:
          return (
            <div>
              <div
          style={{
            display: "flex",
            alignItems: "center", 
            gap: "20px" ,
          }}
        >
          <div style={{position:'fixed', marginTop:'50px'}}>
            <Typography sx={{ fontSize: "medium" }}>Signature Type:</Typography>
            <FormControl sx={{ width: "180px" , position:'fixed'}}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleStatusChange}
              >
                <MenuItem value={"Non-Compulsory"}>Non-Compulsory</MenuItem>
                <MenuItem value={"Fixed Term"}>Fixed Term</MenuItem>
                <MenuItem value={"From Last Signature"}>From Last Signature</MenuItem>
                <MenuItem value={"New Users"}>New Users</MenuItem>
              </Select>
            </FormControl>
          </div>     
          {status === "Fixed Term" && ( 
            <div
            style={{
              marginTop: "350px",
              marginLeft: "5px",
              position:'fixed'
            }}
          >
            <h4 style={{ fontWeight: "lighter", fontSize:'15px' }}>
              Signature Cycle Start Date
            </h4>
            <TextField
              id="signature-cycle-start-date"
              type="date"
              value={signatureCycleStartDate.toISOString().split("T")[0]}
              onChange={(e) => handleDateChange(new Date(e.target.value))}
            />

            <div style={{ marginTop: "20px" }}>
                <h4 
                    style=
                    {{ 
                        fontWeight: "lighter", 
                        fontSize:'15px', 
                        marginLeft:'5px' 
                        }}
                        >
                            Signature Frequency
                </h4>
                <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                    type="number"
                    value={signatureFrequency.number}
                    onChange={(e) =>
                    setSignatureFrequency({
                        ...signatureFrequency,
                        number: e.target.value,
                    })                    
                    }
                />
                <Select
                    value={signatureFrequency.unit}
                    sx={{marginLeft:'10px'}}
                    onChange={(e) =>
                    setSignatureFrequency({
                        ...signatureFrequency,
                        unit: e.target.value,
                    })
                    }
                >
                    <MenuItem value="month">Months</MenuItem>
                    <MenuItem value="year">Years</MenuItem>
                </Select>
                </div>
            </div>
          </div>
            )}            
        </div> 
        {status === "From Last Signature" && ( 
            <div
            style={{
              marginTop: "100px",
              marginLeft: "5px",
              position:'fixed'
            }}
          >
            <div style={{ marginTop: "10px" }}>
                <h4 
                    style=
                    {{ 
                        fontWeight: "lighter", 
                        fontSize:'15px', 
                        marginLeft:'5px' 
                        }}
                        >
                            Signature Frequency
                </h4>
                <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                    type="number"
                    value={signatureFrequency.number}
                    onChange={(e) =>
                    setSignatureFrequency({
                        ...signatureFrequency,
                        number: e.target.value,
                    })                    
                    }
                />
                <Select
                    value={signatureFrequency.unit}
                    sx={{marginLeft:'10px'}}
                    onChange={(e) =>
                    setSignatureFrequency({
                        ...signatureFrequency,
                        unit: e.target.value,
                    })
                    }
                >
                    <MenuItem value="month">Months</MenuItem>
                    <MenuItem value="year">Years</MenuItem>
                </Select>
                </div>
            </div>
          </div>
            )}  
          <div
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              width: "50%",
              border: "1px solid gray",
              fontSize: "15px",
              fontWeight: "lighter",
              color: "black",
              fontFamily: "sans-serif",
              borderRadius: '5px',
              marginTop:'70px',
              marginLeft:'400px'
            }}
          >
            {renderContentBasedOnStatus()}
          </div>
          <p style={{fontSize:'15px'}}>Use Default Policy Signature Settings:<Checkbox {...label} /></p>
        <Button
          variant="contained"
          style={{
            float: 'inline-end',
            marginTop: '60px',
            color: '#fff',
            background: 'rgb(30, 123, 228)',
            marginRight: '100px',
            fontWeight: 'lighter'
          }}
        >
          <SaveIcon style={{ marginRight: '3px' }} />
          Update Policy
        </Button>
            </div>
          );
        case 2:
          return (
            <div>
        <Box
          display="grid"
          gap="30px"
          marginTop="45px"
          sx={{
            fontSize: "8px",
          }}
        >
          <div>
          <Box style={{ marginTop: '15px' }}>
            <label
              htmlFor="name"
              style={{ fontSize: "13px" }}
            >
             Policy Owner Name:
            </label>
          </Box>
          <TextField
            fullWidth
            type="text"
            sx={{ gridColumn: "span 2" }}
            style={{ marginTop: '15px', width: '900px' }}
          />
        </div>
        <div>
          <Box style={{ marginTop: '15px' }}>
            <label
              htmlFor="name"
              style={{ fontSize: "13px" }}
            >
             Policy Owner Email:
            </label>
          </Box>
          <TextField
            fullWidth
            type="text"
            sx={{ gridColumn: "span 2" }}
            style={{ marginTop: '15px', width: '900px' }}
          />
        </div>
          <p
            style={{ fontSize: '15px' }}
          >
            Allow External Access:
          </p>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
           
          />
        </Box>
        <div style={{ marginTop: '15px' }}>
          <p
            style={{
              color: 'gray',
              fontSize: '15px',
              fontWeight: 'lighter'
            }}
          >
            
          Checking this box will make this policy visible on the external policy access page if that feature is enabled on your account.
          </p>
        </div>
        
        
        <div style={{ marginTop: '55px' }}>
          <Button
            variant="outlined"
            sx={{
              mx: 'auto',
              borderColor: 'blue',
              color: 'blue',
              margin: "10px"
            }}
          >
            Update Policy
          </Button>
          <Button
            variant="outlined"
            sx={{
              mx: 'auto',
              borderColor: 'red',
              color: "red",
              margin: "10px"
            }}
          >
            CANCEL
          </Button>
        </div>
      </div>
          )
        default:
          return null;
      }
    }

    return (
      <DashboardLayout>
        <Typography variant="h4">Create Policy</Typography>
        <Button
            style={{
                border: '0.5px solid rgb(30, 123, 228)',
                color: '#fff',
                fontSize: "10px",
                marginTop: '15px',
                background:'rgb(30, 123, 228)',
                fontWeight:'lighter'
            }}
            variant="contained"
            size="small"
            onClick={handleBackToViewPolicy}
        >
            Back to Policies
        </Button> 

        <div>
        <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        textColor="secondary"
        style={tabStyle}
      >
        <Tab
          label="Policy"
          sx={{
            color: selectedTab === 0 ? "rgb(30, 123, 228)" : "inherit",
          }}
        />
        <Tab
            label="Signature Settings"
            sx={{
              color: selectedTab === 1 ? "rgb(30, 123, 228)" : "inherit",
            }}
          />
        <Tab
          label="Access Control"
          sx={{
            color: selectedTab === 2 ? "rgb(30, 123, 228)" : "inherit",
          }}
        />
      </Tabs>
      {renderTabContent(selectedTab)}
        </div>
      </DashboardLayout>
    );
};
  
export default CreatePolicy;