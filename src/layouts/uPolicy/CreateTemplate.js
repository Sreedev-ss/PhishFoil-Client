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
  import { AiOutlineDelete } from "react-icons/ai";

  import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
  
  const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];
  
  const host = 'http://localhost:8081';
  
  const data = localStorage.getItem('loginData')
    const loginData = JSON.parse(data)
  
  const CreateTemplate = () => {
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
    const [headerChecked, setHeaderChecked] = useState(false);
    const [image, setImage] = useState(null);
    const [type, setType] = useState("Editor");
    const [value, setValue] = useState('');
  
    const [formData, setFormData] = useState({
      templatename: '',
      language: selectedItems,
      category: '',
      subject: '',
      sendername: '',
      emailid: '',
      domain: '',
      design: '',
      html: '',
      clients:clients
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

      const handleRemoveImage = () => setImage(null);
  
    const [file, setFile] = useState(null);
    const handleChangeEmailTemplate = (e) => {
      const { name, value } = e.target;  
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

    const handleBackToTemplateBuilder = () => {
        // Replace '/template-library' with the actual route of your template library page
        navigate('/uPolicy/templatebuilder');
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
  
    const handleType = (event) => {
        setType(event.target.value);
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
                <FormControl >
                  <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Category</Typography>
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
                    >
                    <MenuItem value={'Editor'}>Editor</MenuItem>
                    <MenuItem value={'Compliance'}>Compliance</MenuItem>
                    <MenuItem value={'Essential'}>Essential</MenuItem>
                    <MenuItem value={'Encryption'}>Encryption</MenuItem>
                    <MenuItem value={'Mobile Devices'}>Mobile Devices</MenuItem>
                    <MenuItem value={'Server'}>Server</MenuItem>
                    <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                </FormControl>
            {/* </div> */}
              {/* <span></span> */}

              <div style={{ marginTop: "37px" }}>
            <Box>
            <label
                htmlFor="name"
                style={{
                fontSize: "13px",
                }}
            >
                Template Tile:
            </label>
            </Box>
        </div>
        
        <Box sx={{ marginTop: 2, alignItems: "start" }}>
            {!headerChecked && (
            <Box>
                <div
                style={{
                    width: "370px",
                    height: "140px",
                    border: "1px solid #ccc",
                    position: "relative",
                    overflow: "hidden",
                }}
                >
                <label
                    htmlFor="imageInput"
                    style={{ cursor: "pointer", display: "block", height: "100%" }}
                >
                    {image ? (
                    <div
                        style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        }}
                    >
                        <img
                        src={image}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
                        />
                    </div>
                    ) : (
                    <div
                        style={{
                        position: "absolute",
                        top: "45%",
                        color: "grey",
                        fontSize: "small",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        }}
                    >
                        + <br /> Upload
                    </div>
                    )}
                </label>
                <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                />
                </div>
                <Button
                onClick={handleRemoveImage}
                variant="contained"
                disabled={image ? false : true}
                style={{
                    marginTop: "10px",
                    backgroundColor: "#ff4c4f",
                    color: "#ffff",
                    marginRight: "115px",
                }}
                >
                <AiOutlineDelete style={{ marginRight: "3px" }} />
                Remove Image
                </Button>
                {!image && (
                <p style={{ fontSize: "13px", color: "red", fontFamily: "sans-serif" }}>
                    This is a required field
                </p>
                )}
            </Box>
            )}
        </Box>        
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
              Do you wish to make this template available to all of your Customers?
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
              Checking this box will make this template available to all Customers belonging to your MSP.
            </p>
          </div>
          {!customerAccess && <div>
            <div>
              <FormControl sx={{ minWidth: 250 }}>
                <Typography
                  sx={{
                    fontSize: '',
                    marginBottom: "5px",
                    marginLeft: "2px",
                    marginTop: '25px',
                    fontSize: "13px",
                  }}
                >
                  Customer Access:</Typography>
                <Select
                  labelId="customer-label"
                  id="customer-label"
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
              <p style={{color:'gray', fontSize:'14px', fontWeight:'lighter'}}>This template will be visible to the Customers selected</p>
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
        </div>;
      }
    };
  
    return (
      <DashboardLayout>
        <Typography variant="h4">Create Template</Typography>
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
            onClick={handleBackToTemplateBuilder}
        >
            Back to Template Builder
        </Button> 
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          textColor="secondary"
          style={tabStyle}
        >
          <Tab
            label="Template"
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
  
export default CreateTemplate;