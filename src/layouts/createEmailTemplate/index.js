import { Box, TextField, Typography, MenuItem, Grid, Select, FormControl, InputLabel, Switch, Button, Checkbox, FormGroup, InputAdornment } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import React from "react";
import { useRef } from "react";
import EmailEditor from "react-email-editor";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';

// // Soft UI Dashboard React examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormGroup, IconButton, InputLabel, Menu, MenuItem, Select, TextField, Typography } from "@mui/material";
// import dialog from "assets/theme/components/dialog";
// import SoftAlertCloseIcon from "components/SoftAlert/SoftAlertCloseIcon";
// import { useRef, useState } from "react";
// import EmailEditor from 'react-email-editor';

const createEmailTemplate = () => {
    // State to track the currently selected tab
    const [selectedTab, setSelectedTab] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [open, setOpen] = useState(false);
    
  
    const [category, setCategory] = useState("");
    const [languages, setLanguages] = useState([]);
    const [age, setAge] = React.useState('');
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  
    const [checked, setChecked] = useState(false); 
    const handleChange = () => {
        setChecked(!checked); 
  };
  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Malayalam', label: 'Malayalam' },
    { value: 'Tamil', label: 'Tamil' },
  ];

  const handleIconClick = () => {
    setOpen(!open);
  };
  

    // const handleChange = (event) => {
    //   setCountry(event.target.value);
    // };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };

      const selectOption = (option) => {
        console.log(`Selected: ${option}`);
      };
    const emailEditorRef = useRef(null);
  
    const exportHtml = () => {
      emailEditorRef.current.editor.exportHtml((data) => {
        const { design, html } = data;
        console.log("exportHtml", html);
      });
    };
    const onLoad = () => {};
  
    const onReady = () => {};
  
    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    const handleChanged = (event) => {
        setCategory(event.target.value); // Update the selected value
      };

      const handleChanges = (event) => {
        setLanguages(event.target.value);
      };

      
  const handleLanguageChange = (event) => {
    const value = event.target.value;

    if (languages.includes(value)) {
      // Deselect the language if it's already selected
      setLanguages(languages.filter((lang) => lang !== value));
    } else {
      // Select the language if it's not already selected
      setLanguages([...languages, value]);
    }
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
            //   m="40px"
              width="590px"
              sx={{
                fontSize: "16px", 
              }}
            >
              <Box>
                <label htmlFor="name" style={{fontSize:"13px"}}>Template Name:</label>
              </Box>
              <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
              <div>
            <Box>
                <label htmlFor="name" style={{fontSize:"13px"}}>Language(s):</label>
              </Box>
              <TextField
                select
                value={languages}
                onChange={handleLanguageChange}
                fullWidth
                variant="filled"
                type="text"
                multiple
                sx={{
                  gridColumn: "span 2",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                }}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowDropDownIcon />
                      </InputAdornment>
                    ),
                  }}
              >
                
                {/* <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={languages.includes('English')}
                onChange={handleLanguageChange}
                value="English"
              />
            }
            label="English"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={languages.includes('Malayalam')}
                onChange={handleLanguageChange}
                value="Malayalam"
              />
            }
            label="Malayalam"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={languages.includes('Tamil')}
                onChange={handleLanguageChange}
                value="Tamil"
              />
            }
            label="Tamil"
          />
        </FormGroup> */}

            {languageOptions.map((option) => (
                <FormControlLabel 
                key={option.value}
                control={
                    <Checkbox 
                        checked={languages.includes(option.value)}
                        onChange={handleLanguageChange}
                        value={option.value}
                    />
                }
                label={option.label}
                />
            ))}
               
              </TextField>
              <Box sx={{ display: 'flex', flexWrap:'wrap'}}>
                {languages.map((language) => (
                    <Chip 
                    key={language}
                    label={language}
                    onDelete={()=>{
                        setLanguages(languages.filter((lang)=> lang!==language));
                    }}
                    />
                ))}

              </Box>
              </div>
              <div>
              <Box>
                <label htmlFor="name" style={{fontSize:"13px"}}>Category:</label>
              </Box>
              <TextField
                select
                value={category}
                onChange={handleChanged}
                fullWidth
                variant="filled"
                type="text"
                sx={{
                  gridColumn: "span 2",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#ffff",

                }}
                InputProps={{
                    endAdornment: (
                      <ExpandMoreIcon
                        onClick={handleIconClick}
                        sx={{
                          cursor: 'pointer',
                          marginRight: '8px',
                          width: '24px',
                          height: '24px',
                        }}
                      />
                    ),
                  }}
                // SelectProps={{
                //     IconComponent: () => <ExpandMoreIcon />,
                //   }}
              >
                <MenuItem value="No Category">No Category</MenuItem>
                <MenuItem value="Bills">Bills</MenuItem>
                <MenuItem value="Cloud Services">Cloud Services</MenuItem>
                <MenuItem value="Delivery">Delivery</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Government">Government</MenuItem>
                <MenuItem value="Internal">Internal</MenuItem>
                <MenuItem value="News & Entertainment">News & Entertainment</MenuItem>
                <MenuItem value="Shopping">Shopping</MenuItem>
                <MenuItem value="Social Media">Social Media</MenuItem>
                <MenuItem value="Travel">Travel</MenuItem>
              </TextField>
              </div>
              <Box>
                <label htmlFor="name" style={{fontSize:"13px"}}>Title Image:</label>
              </Box>
              <TextField fullWidth variant="filled" type="file" sx={{ gridColumn: "span 2" }} />
              <Box>
                <label htmlFor="name" style={{fontSize:"13px"}}>Subject:</label>
              </Box>
              <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
              <Box>
                <label htmlFor="name" style={{fontSize:"13px"}}>Sender Name:</label>
              </Box>
              <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box>
                        <label htmlFor="name" style={{ fontSize: "13px" }}>Sender:</label>
                        </Box>
                        <TextField fullWidth variant="filled" type="text" />
                    </Grid>
                    <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h5" component="span" style={{fontSize:"10px"}}>@</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box>
                        <label htmlFor="dropdown" style={{ fontSize: "13px" }}>Recipient:</label>
                        </Box>
                        
                        <Select fullWidth>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                
            </Box>
            {/* <Box>
              <label htmlFor="name" style={{fontSize:"13px"}}>Content:</label>
            </Box> */}
            <Box style={{marginTop:'15px'}}>
                <label htmlFor="name" style={{fontSize:"13px"}}>Use a custom sender email address:</label>
                <Switch {...label} />
            </Box>
              {/* <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />  */}
              
              <Box style={{marginTop:"15px"}}>
                <label htmlFor="name" style={{fontSize:"13px"}}>Additional sender Domains:</label>
              </Box>
              <TextField variant="filled" type="text" sx={{ gridColumn: "span 2" }} style={{width:"500px", marginTop:'15px'}} />
              
              <Button 
              variant="contained" 
              sx={{
                marginLeft:"6px", 
                marginTop:'15px',
                color:'#fff',
                backgroundColor: 'blue',
                }}>
                + Add
            </Button>
            <div>
                <p style={{fontSize:'15px', marginTop:'15px'}}>Content:</p>
              <button onClick={exportHtml}></button>
              <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
            </div>
            <div style={{marginTop:'15px'}}>
            <Button 
                variant="outlined" 
                sx={{
                    mx: 'auto',
                    borderColor: 'blue',
                    color: 'blue',
                    margin: "10px"
                }} 
            >
            SAVE
            </Button>
            <Button 
                variant="outlined" 
                sx={{
                    mx: 'auto',
                    borderColor: 'red',
                    color:"red" ,
                    margin: "10px"
                }} 
            >
            CANCEL
            </Button>
            </div>
          </form>
        );
      } else {
        // Render content for other tabs
        return <div>
             <Box
              display="grid"
              gap="30px"
              marginTop="45px"
              sx={{
                fontSize: "8px", // Adjust the font size as needed
              }}
            >
          {/* <Typography>Do you wish to make this landing page available to all of your Customers?</Typography>
        {tabIndex + 1} */}
        <p style={{fontSize:'15px'}}>Do you wish to make this email template available to all of your Customers?:</p>
        <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
          </Box>
        <div style={{marginTop:'15px'}}>
            <p style={{ color:'gray', fontSize:'15px', fontWeight:'lighter'}}>
                Checking this box will make this email template available to all Customers belonging to your MSP.
            </p>
        </div>
        <div>
        <Box style={{marginTop:'15px'}}>
                <label htmlFor="name" style={{fontSize:"13px"}}>Customer Access:</label>
              </Box>
              <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} style={{marginTop:'15px', width:'900px'}} />
              <p style={{fontSize:'15px', marginTop:'8px', fontWeight:'lighter', color:'gray'}}>This email template will be visible to the Customers selected</p>
        </div>
        <div style={{marginTop:'55px'}}>
            <Button 
                variant="outlined" 
                sx={{
                    mx: 'auto',
                    borderColor: 'blue',
                    color: 'blue',
                    margin: "10px"
                }} 
            >
            SAVE
            </Button>
            <Button 
                variant="outlined" 
                sx={{
                    mx: 'auto',
                    borderColor: 'red',
                    color:"red" ,
                    margin: "10px"
                }} 
            >
            CANCEL
            </Button>
        </div>
          </div>;
      }
    };
  
    return (
      <DashboardLayout>
        <Typography variant="h4">Uphish-Create Email Template</Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered // This centers the tabs horizontally
          textColor="secondary"
          style={tabStyle}
        >
          <Tab
            label="Landing Page"
            sx={{
              color: selectedTab === 0 ? "rgb(30, 123, 228)" : "inherit",
            }}
          />
          <Tab
            label="Access Control"
            sx={{
              color: selectedTab === 1 ? "rgb(30, 123, 228)" : "inherit",
            }}
          />
        </Tabs>
        {renderTabContent(selectedTab)}
  
      </DashboardLayout>
    );
  };
  
  export default createEmailTemplate;
  


// function createEmailTemplate() {
//     const [showAccessControl, setAccessControl] = useState(false);
//     const emailTemplateSelected = !showAccessControl;
//     const emailEditorRef = useRef(null);
    
//     const [languages, setLanguages] = useState([]); 
//     const [menuOpen, setMenuOpen] = useState(false); 
//     const [category, setCategory] = useState("");
//     const [menuCatOpen, setMenuCatOpen] = useState(false); 

//     const [checked, setChecked] = useState(false); 
//     const handleChange = () => {
//         setChecked(!checked); 
//   };

//     const exportHtml = () => {
//         emailEditorRef.current.editor.exportHtml((data) => {
//         const { design, html } = data;
//         console.log('exportHtml', html);
//         });
//     };

//   const onLoad = () => {
//     // editor instance is created
//     // you can load your template here;
//     // const templateJson = {};
//     // emailEditorRef.current.editor.loadDesign(templateJson);
//   }

//   const onReady = () => {
//     // editor is ready
//     console.log('onReady');
//   };
//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <div style={{marginBottom: '30px'}}>
//         <h1 style={{fontSize:'25px', marginBottom: '30px'}}>Uphish Create Email Template</h1>
       
//         <div style={{ display: 'flex', alignItems: 'center'}}>
//             <div onClick={() =>setAccessControl(false)} 
//             style={{ 
//                 marginRight: '45px',
//                 color: emailTemplateSelected ? 'blue':'black',
//             }}
//             >
//                 <h2 style={{fontSize:'15px'}}>Email Template</h2>
//             </div>
//             <div onClick={() => setAccessControl(true)} 
//             style={{ 
//                 marginRight: '10px',
//                 color: emailTemplateSelected ? 'black':'blue',
//                 cursor: 'pointer',
//                 }}>
//                 <h2 style={{fontSize:'15px'}}>Access Control</h2>
//             </div>
//         </div>
//         { showAccessControl ? (
//             <div>
//                 <form>
//                     <div style={{ marginBottom: '30px' }}>
//                         <p 
//                             style={{
//                                 fontSize:'15px', 
//                                 marginTop:"15px"
//                                 }}
//                                 >
//                                     Do you wish to make this email template available to all of your Customers?:
//                         </p>
//                     <Checkbox
//                     checked={checked}
//                     onChange={handleChange}
//                     inputProps={{ 'aria-label': 'controlled' }}
//                     />
//                     </div>
//                     <div>
//                         <p style={{ color:'gray', fontSize:'15px'}}>
//                         Checking this box will make this email template available to all Customers belonging to your MSP.
//                         </p>
//                     </div>
//                     <div>
//                         <p style={{marginTop:"20px", fontSize:"15px"}}>Customer access:</p>
//                         <div style={{ marginBottom: '30px', marginTop:'30px', width: '550px'}}>
//                             <TextField
//                                 required
//                                 id="outlined-required"
//                                 defaultValue="Customers"
//                                 fullWidth
//                             />
//                         </div>
//                         <p style={{fontSize:"15px", color:"gray"}}>This email template will be visible to the Customers selected</p>
//                     </div>
//                     <div>
//                         <button
//                         style={{ marginRight: '10px', color:'blue' }}
                        
//                         >
//                         Save
//                         </button>
//                         <button style={{color:"red"}}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         ) : (
//             <div>
//                 <form>
//                     <div>
//                         <div style={{ marginBottom: '30px', marginTop:'30px', width: '550px'}}>
//                             <TextField
//                                 required
//                                 id="outlined-required"
//                                 defaultValue="Template Name"
//                                 fullWidth
//                             />
//                         </div>
//                         <FormControl style={{ marginBottom: '30px', width: '550px'}}>
//                             <InputLabel htmlFor="languages" style={{fontSize:"15px"}}>Language(s)</InputLabel>
//                             <Select
//                                 labelId="languages"
//                                 id="languages"
//                                 multiple 
//                                 value={languages} 
//                                 fullWidth
//                                 onClick={() => {
//                                 setAccessControl(false);
//                                 setMenuOpen(true);
//                                 }}
//                                 onChange={(e) => setLanguages(e.target.value)} 
//                             >
//                                 <MenuItem value="english">English</MenuItem>
//                                 <MenuItem value="spanish">Spanish</MenuItem>
//                             </Select>
//                             {menuOpen && ( 
//                                 <Menu
//                                 open={menuOpen}
//                                 onClose={() => setMenuOpen(false)} 
//                                 anchorEl={document.getElementById("languages")} 
//                                 >
//                                 <MenuItem onClick={() => setLanguages(["english"])}>English</MenuItem>
//                                 <MenuItem onClick={() => setLanguages(["spanish"])}>Spanish</MenuItem>
//                                 </Menu>
//                             )}
//                             </FormControl>
                        
//                         <div>
//                         <FormControl style={{ marginBottom: '30px', width: '550px'}}>
//                             <InputLabel style={{fontSize:"15px"}} htmlFor="category">Category</InputLabel>
//                             <Select
                                
//                                 labelId="category"
//                                 id="category"
//                                 value={category}
//                                 fullWidth
//                                 onClick={() => {
//                                 setAccessControl(false);
//                                 setMenuCatOpen(true); 
//                                 }}
//                             >

//                             </Select>
//                             {menuCatOpen && ( 
//                                 <Menu
//                                 open={menuCatOpen}
//                                 onClose={() => setMenuCatOpen(false)} 
//                                 anchorEl={document.getElementById("category")} 
//                                 >
//                                 <MenuItem onClick={() => setCategory("No Category")}>No Category</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Bills")}>Bills</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Cloud Services")}>Cloud Services</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Delivery")}>Delivery</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Finances")}>Finances</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Government")}>Government</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Intrenal")}>Intrenal</MenuItem>
//                                 <MenuItem onClick={() => setCategory("News & Entertainment")}>News & Entertainment</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Shopping")}>Shopping</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Social Media")}>Social Media</MenuItem>
//                                 <MenuItem onClick={() => setCategory("Travel")}>Travel</MenuItem>
//                                 </Menu>
//                             )}
//                         </FormControl>
//                         </div>
//                     </div>
//                     <div>
//         <div>
//           <button onClick={exportHtml}>Content</button>
//         </div>

//         <EmailEditor
//           ref={emailEditorRef}
//           onLoad={onLoad}
//           onReady={onReady}
//         />
//       </div>
//                 </form>
//             </div>

            
//         )}
        
//     </div>
      
      
//     </DashboardLayout>
//   );
 
// }

// export default createEmailTemplate;
