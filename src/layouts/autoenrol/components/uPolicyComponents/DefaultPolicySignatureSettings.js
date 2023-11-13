import {
    Typography,
    Button,
    TextField,
    Divider,
    FormControl,
    Select,
    MenuItem,
  } from "@mui/material";
  
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';

const DefaultPolicySignatureSettings = () => {
    const [status, setStatus] = useState("Non-Compulsory");
    const [signatureCycleStartDate, setSignatureCycleStartDate] = useState(new Date());
    const [signatureFrequency, setSignatureFrequency] = useState({
        number: 1,
        unit: "month",
      });
  
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
  
    return (
      <DashboardLayout>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Hind Guntur",
            fontWeight: "500",
            fontSize: "1.6rem"
          }}
        >
          Default Policy Signature Settings
        </Typography>
  
        <Divider />
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
          Save
        </Button>
      </DashboardLayout>
    );
};
  
export default DefaultPolicySignatureSettings;

