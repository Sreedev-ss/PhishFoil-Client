import {
    Box,
    TextField,
    Typography,
    MenuItem,
    Select,
    FormControl,
    Button,
    Checkbox,
    InputAdornment,
    ListItemText,
  } from "@mui/material";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import Tabs from "@mui/material/Tabs";
  import Tab from "@mui/material/Tab";
  import { useState } from "react";
  import React from "react";
  import { useRef } from "react";
  import EmailEditor from "react-email-editor";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
  import Chip from "@mui/material/Chip";
  const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];
  
  const CloneLandingPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState(['English']);
    const [category, setCategory] = useState("No Category");
    const [languages, setLanguages] = useState([]);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    const handleChangeItems = (event) => {
      setSelectedItems(event.target.value);
    };
  
    const handleCategory = (event) => {
      setCategory(event.target.value);
    };
  
    const handleDelete = (itemToDelete) => (event) => {
      console.log(itemToDelete);
      event.preventDefault();
      const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
      setSelectedItems(updatedSelection);
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
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />              
            <div>
              <FormControl sx={{ minWidth: 230, maxWidth: 330, height: 'auto' }}>
                <Typography sx={{ fontSize: '13px', marginBottom: "5px", marginLeft: "2px" }}>Language(s):</Typography>
                <Select
                    labelId="multiple-select-label"
                    id="multiple-select"
                    multiple
                    label='Select languages'
                    value={selectedItems}
                    onChange={handleChangeItems}
                    MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                    renderValue={(selected) => (
                        <div>
                            {selected.map((item) => (
                                <Chip
                                    key={item}
                                    label={item}
                                    onDelete={handleDelete(item)}
                                    sx={{
                                        marginRight: '5px',
                                        height: '20px', 
                                    }}
                                />
                            ))}
                        </div>
                    )}
                >
                    {items.map((item) => (
                        <MenuItem key={item} value={item}>
                            <Checkbox checked={selectedItems.indexOf(item) > -1} />
                            <ListItemText secondary={item} />
                        </MenuItem>
                    ))}
                </Select>
              </FormControl>
              </div>          
            <div>
              <FormControl sx={{ minWidth: 150 }}>
                    <Typography sx={{ fontSize: '13px', marginBottom: "5px", marginLeft: "2px" }}>Category:</Typography>
                    <Select
                        labelId="category-label"
                        id="category-label"
                        value={category}
                        label="Status"
                        MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                        onChange={handleCategory}
                        endAdornment={  
                          <InputAdornment position="end">
                            <ExpandMoreIcon />
                          </InputAdornment>
                        }
                    >
                        <MenuItem value={'No Category'}>No Category</MenuItem>
                        <MenuItem value={'Bills'}>Bills</MenuItem>
                        <MenuItem value={'Cloud Services'}>Cloud Services</MenuItem>
                        <MenuItem value={'Delivery'}>Delivery</MenuItem>
                        <MenuItem value={'Finance'}>Finance</MenuItem>
                        <MenuItem value={'Government'}>Government</MenuItem>
                        <MenuItem value={'Internal'}>Internal</MenuItem>
                        <MenuItem value={'News & Entertainment'}>News & Entertainment</MenuItem>
                        <MenuItem value={'Shopping'}>Shopping</MenuItem>
                        <MenuItem value={'Social Media'}>Social Media</MenuItem>
                        <MenuItem value={'Travel'}>Travel</MenuItem>
                    </Select>
                </FormControl>
              </div>
  
              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Page Title :
                </label>
              </Box>
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
  
              <Box>
                <label htmlFor="name" style={{ fontSize: "13px" }}>
                  Title Image:
                </label>
              </Box>
              <TextField fullWidth type="file" sx={{ gridColumn: "span 2" }} />
  
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
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
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
  