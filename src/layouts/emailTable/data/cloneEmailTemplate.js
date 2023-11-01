import { 
    Box, 
    TextField, 
    Typography, 
    MenuItem, 
    Grid, 
    Switch, 
    Button, 
    Checkbox,  
    InputAdornment, 
    ListItemText,
    Select,
    FormControl} from "@mui/material";

const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];

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
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const cloneEmailTemplate = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [category, setCategory] = useState("No Category");
    const [languages, setLanguages] = useState([]);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [customSenderEmail, setCustomSenderEmail] = useState(false);
    const [receipient, setReceipient] = useState('');
    const [checked, setChecked] = useState(false); 

    const [selectedItems, setSelectedItems] = useState(['English']);

    const handleChange = () => {
        setChecked(!checked); 
    };
    const languageOptions = [
        { value: 'English', label: 'English' },
        { value: 'Malayalam', label: 'Malayalam' },
        { value: 'Tamil', label: 'Tamil' },
    ];

    const handleChangeReceipient = (event) => {
        setReceipient(event.target.value);
    };

    const handleChangeItems = (event) => {
      setSelectedItems(event.target.value);
  };

  const handleDelete = (itemToDelete) => (event) => {
      console.log(itemToDelete);
      event.preventDefault();
      const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
      setSelectedItems(updatedSelection);
  };

  const handleCategory = (event) => {
      setCategory(event.target.value);
  };
      
      const handleCustomSenderEmailChange = () => {
          setCustomSenderEmail(!customSenderEmail);
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
              <Box style={{marginTop:'15px'}}>
                <label htmlFor="name" style={{fontSize:"13px"}}>
                    Template Name:
                </label>
              </Box>
              <TextField 
                fullWidth 
                type="text" 
                sx={{ gridColumn: "span 2" }} />               
            <div>
              <FormControl sx={{ minWidth: 230, maxWidth: 330, height: 'auto' }}>
                <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Language (s)</Typography>
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
                    <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Category</Typography>
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
              <Box>
                <label 
                    htmlFor="name" 
                    style={{fontSize:"13px"}}
                    >
                        Title Image:
                </label>
              </Box>
              <TextField 
                fullWidth 
                type="file" 
                sx={{ gridColumn: "span 2" }} 
              />
              <Box>
            <Button 
                variant="contained" 
                href="#contained-buttons" 
                style={{
                    backgroundColor:'red', 
                    color:'#fff', 
                    height:'5px', 
                    fontWeight:'lighter'}}
                >
                <DeleteOutlineIcon style={{marginLeft:'10px'}}/>
                Remove Image
            </Button>
            </Box>
            <Box></Box>
              <Box>
                <label 
                    htmlFor="name" 
                    style={{fontSize:"13px"}}
                >
                    Subject:
                </label>
              </Box>
              <TextField 
                fullWidth 
                type="text" 
                sx={{ gridColumn: "span 2" }} 
              />
              <Box>
                <label 
                    htmlFor="name" 
                    style={{fontSize:"13px"}}
                >
                    Sender Name:
                </label>
              </Box>
              <TextField 
                fullWidth 
                type="text" 
                sx={{ gridColumn: "span 2" }} 
              />
              <Box>
                <p 
                    style={{
                        fontSize:'12px', 
                        color:'gray', 
                        fontWeight:'lighter'}}
                    >
                        This name will be displayed in the users inbox. If left blank, the sender email address will be shown instead.
                </p>
              </Box>
              <Box></Box>
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
                <Box>
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
                    fullWidth
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
            </Box>
              <Box style={{marginTop:"15px"}}>
                <label 
                    htmlFor="name" 
                    style={{fontSize:"13px"}}
                >
                    Additional sender Domains:
                </label>
              </Box>
              <TextField 
                type="text" 
                sx={{ gridColumn: "span 2" }} 
                style={{width:"500px", marginTop:'15px'}} 
              />
              
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
            <Box>
                <p 
                    style={{
                        fontSize:'12px', 
                        color:'gray', 
                        fontWeight:'lighter'}}
                    >
                        Domains added here will be included in the sender domains dropdown when creating a simulation.<br/>
                        Please note that the use of custom domains will increase the likelihood of emails being marked as spam.
                </p>
              </Box>
              <Box></Box>
            <div>
                <p 
                style={{
                    fontSize:'15px', 
                    marginTop:'15px'
                    }}
                    >
                        Content:
                    </p>
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
        return <div>
             <Box
              display="grid"
              gap="30px"
              marginTop="45px"
              sx={{
                fontSize: "8px", 
              }}
            >
        <p 
            style={{fontSize:'15px'}}
        >
            Do you wish to make this email template available to all of your Customers?:
        </p>
        <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
          </Box>
        <div style={{marginTop:'15px'}}>
            <p 
            style={{ 
                color:'gray', 
                fontSize:'15px', 
                fontWeight:'lighter'
                }}
                >
                Checking this box will make this email template available to all Customers belonging to your MSP.
            </p>
        </div>
        <div>
        <Box style={{marginTop:'15px'}}>
        </Box>
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
        <Typography variant="h4">Uphish - Clone Email Template</Typography>
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
  
  export default cloneEmailTemplate;