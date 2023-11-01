import {
    Box,
    TextField,
    Typography,
    MenuItem,
    Grid,
    Select,
    FormControl,
    InputLabel,
    Switch,
    Button,
    Checkbox,
    FormGroup,
    InputAdornment,
  } from "@mui/material";
  import FormControlLabel from "@mui/material/FormControlLabel";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import Tabs from "@mui/material/Tabs";
  import Tab from "@mui/material/Tab";
  import { useState } from "react";
  import React from "react";
  import { useRef } from "react";
  import EmailEditor from "react-email-editor";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
  import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
  import Chip from "@mui/material/Chip";
  
  const CloneLandingPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [open, setOpen] = useState(false);
  
    const [category, setCategory] = useState("");
    const [languages, setLanguages] = useState([]);
    const [age, setAge] = React.useState("");
    const label = { inputProps: { "aria-label": "Switch demo" } };
  
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked(!checked);
    };
    const languageOptions = [
      { value: "English", label: "English" },
      { value: "Malayalam", label: "Malayalam" },
      { value: "Tamil", label: "Tamil" },
    ];
  
    const handleIconClick = () => {
      setOpen(!open);
    };
  
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
      setCategory(event.target.value);
    };
  
    const handleChanges = (event) => {
      setLanguages(event.target.value);
    };
  
    const handleLanguageChange = (event) => {
      const value = event.target.value;
  
      if (languages.includes(value)) {
        setLanguages(languages.filter((lang) => lang !== value));
      } else {
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
              width="590px"
              sx={{
                fontSize: "16px",
              }}
            >
              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Template Name:
                </label>
              </Box>
              <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />

              <div>
                <Box>
                    <label htmlFor="name" style={{fontSize:"13px"}}>
                        Language(s):
                    </label>
                </Box>
                <TextField
                    select
                    value={languages}
                    onChange={handleLanguageChange}
                    width="250px"
                    variant="filled"
                    type="text"
                    multiple
                    sx={{
                    gridColumn: "span 2",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    }}
                >

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
                    <label 
                        htmlFor="name" 
                        style={{fontSize:"13px"}}
                        >
                            Category:
                    </label>
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
                    SelectProps={{
                        IconComponent: () => <ExpandMoreIcon />,
                      }}
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
  
              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Page Title :
                </label>
              </Box>
              <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
  
              <Box>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Title Image:
                </label>
              </Box>
              <TextField fullWidth variant="filled" type="file" sx={{ gridColumn: "span 2" }} />
  
              <Button
                variant="contained"
                href="#contained-buttons"
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  height: "5px",
                  fontWeight: "lighter",
                  width:"200px",
                }}
              >
                <DeleteOutlineIcon style={{ marginLeft: "10px" }} />
                Remove Image
              </Button>
  
              <Box></Box>
              <Box>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Associated Email Templates
                </label>
              </Box>
              <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
            </Box>
  
            <div>
              <p
                style={{
                  fontSize: "15px",
                  marginTop: "15px",
                }}
              >
                Content:
              </p>
              <button onClick={exportHtml}></button>
              <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
            </div>
            <div style={{ marginTop: "15px" }}>
              <Button
                variant="outlined"
                sx={{
                  mx: "auto",
                  borderColor: "blue",
                  color: "blue",
                  margin: "10px",
                }}
              >
                SAVE
              </Button>
              <Button
                variant="outlined"
                sx={{
                  mx: "auto",
                  borderColor: "red",
                  color: "red",
                  margin: "10px",
                }}
              >
                CANCEL
              </Button>
            </div>
          </form>
        );
      } else {
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
              <p style={{ fontSize: "15px" }}>
              Do you wish to make this landing page available to all of your Customers?:
              </p>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <div style={{ marginTop: "15px" }}>
              <p
                style={{
                  color: "gray",
                  fontSize: "15px",
                  fontWeight: "lighter",
                }}
              >
              Checking this box will make this landing page available to all Customers belonging to your MSP.
              </p>
            </div>
           
            <div style={{ marginTop: "55px" }}>
              <Button
                variant="outlined"
                sx={{
                  mx: "auto",
                  borderColor: "blue",
                  color: "blue",
                  margin: "10px",
                }}
              >
                SAVE
              </Button>
              <Button
                variant="outlined"
                sx={{
                  mx: "auto",
                  borderColor: "red",
                  color: "red",
                  margin: "10px",
                }}
              >
                CANCEL
              </Button>
            </div>
          </div>
        );
      }
    };
  
    return (
      <DashboardLayout>
        <Typography variant="h4">uPhish - Clone Landing Page</Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
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
  
  export default CloneLandingPage;
  