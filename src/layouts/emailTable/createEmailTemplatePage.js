import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Grid,
  Switch,
  Button,
  Checkbox,
  ListItemText,
  Select,
  FormControl,
  InputAdornment
} from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import React from "react";
import { useRef } from "react";
import EmailEditor from "react-email-editor";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];

const host = 'http://localhost:8081';

// const emailTemplateData = [
//   {
//     "templatename":"abode join my account",
//     "subject":"join the account",
//     "sendername":"lilly",
//     "emailid":"fds@adobe.uk",
//     "design":"gggggggggggggggggggggggggggggggggggggggggggg",    //string
//     "html":"gggggggggggggggggggggggggggggggggggggggggggggg"      //string
//     },
// ];

const data = localStorage.getItem('loginData')
  const loginData = JSON.parse(data)

const createEmailTemplatePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [category, setCategory] = useState("No Category");
  const [languages, setLanguages] = useState([]);
  const [clients, setClients] = useState([]);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [receipient, setReceipient] = useState('');
  const [checked, setChecked] = useState(false);
  const [customerAccess, setCustomerAccess] = useState(false);
  const [customSenderEmail, setCustomSenderEmail] = useState(false);
  const [selectedItems, setSelectedItems] = useState(['English']);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [allEmailTemplateData, setAllEmailTemplateData] = useState([]);
  const [html, setHtml] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    clients:clients
  });

  const [file, setFile] = useState(null);
  const handleChangeEmailTemplate = (e) => {
    const { name, value } = e.target;  
    // setFormData({ ...formData, [name]: value, design: file });
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setError(null);
  };
  const imageData = new FormData()

  const handleImageUpload = (e) => {
    setFile(e.target.files[0]);
    imageData.append("file",file)

  }

  const removeImage = () => {
    setFile(null);
  }

  const isFormValid = () => {
    const {
      templatename,
      language,
      category,
      html,
    } = formData;
    return (
      templatename !== "" &&
      language !== "" &&
      category !== ""
      //  &&
      // html !== "" 
    );
  };
  const [count, setCount] = useState(0)

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
            toast.success("Successfully created");
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
            setSuccess("Email Template Created Successfully");
          }
        }
      } catch (err) {
        console.log(err);
        setError(err)
      }
    }
  }

  const handleChange = () => {
    setChecked(!checked);
    setCustomerAccess(!customerAccess)
  };

  const handleDelete = (itemToDelete) => (event) => {
    console.log(itemToDelete);
    event.preventDefault();
    const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
    setSelectedItems(updatedSelection);
  };
  const handleDeleteClients = (itemToDelete) => (event) => {
    console.log(itemToDelete);
    event.preventDefault();
    const updatedSelection = clients.filter((item) => item !== itemToDelete);
    setClients(updatedSelection);
  };

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Malayalam', label: 'Malayalam' },
    { value: 'Tamil', label: 'Tamil' },
  ];

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeReceipient = (event) => {
    setReceipient(event.target.value);
  };

  const handleCustomSenderEmailChange = () => {
    setCustomSenderEmail(!customSenderEmail);
  };

  const emailEditorRef = useRef(null);

  const exportHtml = (e) => {
    e.preventDefault()
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      const designElement = JSON.stringify(design)
      let obj = {
        design: '',
        html: ''
      }

      obj.design = designElement
      obj.html = html

      setHtml(obj)
    });
  };
  const onLoad = () => { };

  const onReady = () => { };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChanged = (event) => {
    setCategory(event.target.value);
  };

  //   const handleChangesItems = (event) => {
  //     setSelectedItem(event.target.value);
  // };
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
                Template Name:
              </label>
            </Box>
            <TextField
              fullWidth
              name="templatename"
              type="text"
              value={formData.templatename}
              onChange={handleChangeEmailTemplate}
              sx={{ gridColumn: "span 2" }} />
            <div>
              <FormControl sx={{ minWidth: 230, maxWidth: 330, height: 'auto' }}>
                <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Language(s)</Typography>
                <Select
                  labelId="multiple-select-label"
                  id="multiple-select"
                  multiple
                  label='Select languages'
                  name="language"
                  value={formData.language}
                  onChange={handleChangeEmailTemplate}
                  // value={selectedItems}
                  // onChange={handleChangeItems}
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
                  // value={category}
                  label="Status"
                  MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                  // onChange={handleCategory}
                  name="category"
                  value={formData.category}
                  onChange={handleChangeEmailTemplate}
                  endAdornment={
                    <InputAdornment sx={{position:'absolute', right:3}}>
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
                style={{ fontSize: "13px" }}
              >
                Title Image:
              </label>
            </Box>
            <TextField
              fullWidth
              type="file"
              sx={{ gridColumn: "span 2" }}
              name="image"
              // value={formData.design}
              accept="image/*"
              onChange={handleImageUpload}
            />
            {file && (
              <div>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected Image"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
                <Box></Box>
                <Button
                  variant="contained"
                  onClick={removeImage}
                  style=
                  {{
                    marginLeft: '5px',
                    color: '#fff',
                    background: 'red',
                  }}
                >
                  <DeleteOutlineIcon />
                  Remove Image
                </Button>
              </div>
            )}
            <Box></Box>
            <Box></Box>
            <Box>
              <label
                htmlFor="name"
                style={{ fontSize: "13px" }}
              >
                Subject:
              </label>
            </Box>
            <TextField
              fullWidth
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChangeEmailTemplate}
              sx={{ gridColumn: "span 2" }}
            />
            <Box>
              <label
                htmlFor="name"
                style={{ fontSize: "13px" }}
              >
                Sender Name:
              </label>
            </Box>
            <TextField
              fullWidth
              type="text"
              name="sendername"
              value={formData.sendername}
              onChange={handleChangeEmailTemplate}
              sx={{ gridColumn: "span 2" }}
            />
            <Box>
              <p
                style={{
                  fontSize: '12px',
                  color: 'gray',
                  fontWeight: 'lighter'
                }}
              >
                This name will be displayed in the users inbox. If left blank, the sender email address will be shown instead.
              </p>
            </Box>
            <Box></Box>

            <Box style={{ marginTop: '15px' }}>
              <label
                htmlFor="name"
                style={{ fontSize: "13px" }}
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
                  name="emailid"
                  value={formData.emailid}
                  onChange={handleChangeEmailTemplate}
                  sx={{ gridColumn: "span 2" }}
                />
                <Box>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "gray",
                      fontWeight: "lighter"
                    }}
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
                    <TextField
                      fullWidth
                      type="text"
                      name="sender"
                      value={formData.sender}
                      onChange={handleChangeEmailTemplate}
                    />
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
                      name="receipient"
                      sx={{
                        gridColumn: "span 2",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        backgroundColor: "#ffff",

                      }}
                      SelectProps={{
                        IconComponent: () => <ExpandMoreIcon sx={{position:'absolute', right:3}}/>,
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
          <Box style={{ marginTop: "15px" }}>
            <label
              htmlFor="name"
              style={{ fontSize: "13px" }}
            >
              Additional sender Domains:
            </label>
          </Box>
          <TextField
            fullWidth
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChangeEmailTemplate}
            sx={{ gridColumn: "span 2" }}
            style={{ width: "500px", marginTop: '15px' }}
          />

          {/* <Button 
              variant="contained" 
              sx={{
                marginLeft:"6px", 
                marginTop:'15px',
                color:'#fff',
                backgroundColor: 'blue',
                }}>
                + Add
            </Button> */}
          <Box>
            <p
              style={{
                fontSize: '12px',
                color: 'gray',
                fontWeight: 'lighter'
              }}
            >
              Domains added here will be included in the sender domains dropdown when creating a simulation.<br />
              Please note that the use of custom domains will increase the likelihood of emails being marked as spam.
            </p>
          </Box>
          <Box></Box>
          <div>
            <p
              style={{
                fontSize: '15px',
                marginTop: '15px'
              }}
            >
              Content:
            </p>
            <button name="html" onClick={exportHtml}>Add</button>
            <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
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
              SAVE
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
            {success && (
              <Typography
                variant="success-message"
                sx={{ fontSize: "12px", paddingX: "10px", textAlign: "center" }}
              >
                {success}
              </Typography>
            )}
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
            style={{ fontSize: '15px' }}
          >
            Do you wish to make this email template available to all of your Customers?:
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
            Checking this box will make this email template available to all Customers belonging to your MSP.
          </p>
        </div>
        {!customerAccess && <div>
          <div>
            <FormControl sx={{ minWidth: 150 }}>
              <Typography
                sx={{
                  fontSize: '',
                  marginBottom: "5px",
                  marginLeft: "2px",
                  marginTop: '15px',
                  fontSize: "13px",
                }}
              >
                Customer Access:</Typography>
              <Select
                labelId="customer-label"
                id="customer-label"
                // value={category}
                multiple
                label="Customers"
                MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                // onChange={handleCategory}
                name="clients"
                value={formData.clients}
                onChange={handleChangeEmailTemplate}
                endAdornment={
                  <InputAdornment sx={{position:'absolute', right:3}}>
                    <ExpandMoreIcon />
                  </InputAdornment>
                }
                renderValue={(selected) => (
                  <div>
                    {selected.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        onDelete={handleDeleteClients(item)}
                        sx={{
                          marginRight: '5px',
                          height: '20px',
                        }}
                      />
                    ))}
                  </div>
                )}
              >
                <MenuItem value={'Dastute'}>Dastute</MenuItem>
                <MenuItem value={'IBM'}>IBM</MenuItem>
                <MenuItem value={'IBM.COM'}>IBM.COM</MenuItem>
                <MenuItem value={'SysArc Infomatix Pvt Ltd'}>SysArc Infomatix Pvt Ltd</MenuItem>
                <MenuItem value={'TestNew,PVT.LTD'}>TestNew,PVT.LTD</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>}
        <div style={{ marginTop: '55px' }}>
          <Button
            variant="outlined"
            onClick={handleChangeEmailTemplate}
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
              color: "red",
              margin: "10px"
            }}
            onClick={()=>navigate('/uphish/email-template-builder')}
          >
            CANCEL
          </Button>
        </div>
      </div>;
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h4">Uphish - Create Email Template</Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        textColor="secondary"
        style={tabStyle}
      >
        <Tab
          label="Email Template"
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

export default createEmailTemplatePage;