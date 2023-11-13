import {
    Typography,
    Switch,
    Button,
    TextField,
    FormControl,
    Select,
    MenuItem,
    Chip,
    Checkbox,
    ListItemText,
    Modal,
  } from "@mui/material";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import React from "react";
  import SaveIcon from '@mui/icons-material/Save';
  import { useState } from "react";
  import DownloadIcon from "@mui/icons-material/Download";
  import AccessTimeIcon from '@mui/icons-material/AccessTime';
  import { AiFillInfoCircle, AiOutlineSearch } from 'react-icons/ai'
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Box, Stack } from "@mui/system";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    p: 4,
    maxHeight: "400px",
  };

  const style1 = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    p: 4,
    maxHeight: "400px",
  };

const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];
const courses = ['Phishing (Beginner)', 'Physical Security (Beginner)', 'Public Wi-Fi (Beginner)', 'Cloud Security (Beginner)', 'Removable Media (Beginner)'];
  
  const AutoEnrol = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isSettingEnabled, setIsSettingEnabled] = useState(false);
    const [type, setType] = useState('1');
    const [openType, setOpenType] = useState(false);
    const [category, setCategory] = useState('Monday');
    const [openCategory, setOpenCategory] = useState(false);
    const [selectedItems, setSelectedItems] = useState(['Phishing (Beginner)']);
    const [continueModalOpen, setCountinueModalOpen] = useState(false)

    const handleSwitchChange = () => {
        setIsSettingEnabled(!isSettingEnabled);
    };
    const handleType = (event) => {
        setType(event.target.value);
    };
    const handleCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleChange = (event) => {
        setSelectedItems(event.target.value);
    };

    const handleDelete = (itemToDelete) => (event) => {
        console.log(itemToDelete);
        event.preventDefault();
        const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
        setSelectedItems(updatedSelection);
    };

    const openContinueModal = () => {
        setCountinueModalOpen(true);
    };
    const closeContinueModal = () => {
        setCountinueModalOpen(false);
    };
    const removeContinueModal = () => {
        closeContinueModal();
    };

    return (
      <DashboardLayout>
        <DashboardNavbar/>
        <Typography 
            variant="h4" 
            sx=
            {{
                fontFamily:"Hind Guntur", 
                fontWeight:'500', 
                fontSize:"1.6rem"
                }}
            >
                Auto Enrol
        </Typography>
        <p 
            style=
            {{
                marginTop:'40px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
                Here you can automatically subscribe people to security awareness training courses.
        </p>
        <p 
            style=
            {{
                marginTop:'10px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif",
            }}
            >
                Once you enable this setting and press save you will automatically enroll all your users.
        </p>
        <div style={{marginTop:'30px'}}>
        <Switch {...label} defaultChecked onChange={handleSwitchChange}  />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                Automatically subscribe people to courses
        </span>
        </div>

        {!isSettingEnabled && (
            <div style={{marginTop: '30px'}}>
                <hr></hr>
                <h5 style={{color:'rgb(30, 123, 228)'}}>When would you like to send it?</h5>
                <div
            style={{
              backgroundColor: "#d9f3fa",
              marginTop: "40px",
              padding: "10px",
              width: "60%",
              border: "1px solid #568ce3",
              fontSize: "15px",
              fontWeight: "lighter",
              color: "black",
              fontFamily: "sans-serif",
              borderRadius:'5px'
            }}
          >
            <p style={{marginRight:'10px', marginTop:'10px'}}><AccessTimeIcon style={{color:'blue'}}/>Send outs</p>

            <ul style={{marginTop:'10px', marginLeft:'14px', color:'gray'}}>Last sendout: 07/11/2023 11:30</ul>
            <ul style={{marginTop:'10px', marginLeft:'14px', color:'gray', marginBottom:'18px'}}>Next sendout: 14/11/2023 10:30</ul>                       
          </div>
          <Stack direction="row" justifyContent="space-between" alignItems="end">
                <div style={{ display: 'flex', marginTop: '1rem', gap: 15 }}>
                    <FormControl sx={{ minWidth: 50, }}>
                        <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Event</Typography>
                        <Select
                            labelId="type-label"
                            id="type-label"
                            select
                            value={type}
                            onChange={handleType}
                            open={openType}
                            onOpen={() => setOpenType(true)}
                            onClose={() => setOpenType(false)}
                            endAdornment={
                                <div
                                    style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                >
                                    {openType ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                </div>
                            }
                        >
                            <MenuItem value={'1'} >1</MenuItem>
                            <MenuItem value={'2'}>2</MenuItem>
                            <MenuItem value={'3'}>3</MenuItem>
                            <MenuItem value={'4'}>4</MenuItem>
                            <MenuItem value={'5'}>5</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'7'}>7</MenuItem>
                            <MenuItem value={'8'}>8</MenuItem>
                            <MenuItem value={'9'}>9</MenuItem>
                            <MenuItem value={'10'}>10</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 150 }}>
                        <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>weeks on</Typography>
                        <Select
                            labelId="category-label"
                            id="category-label"
                            value={category}
                            label="Status"
                            MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                            onChange={handleCategory}
                            open={openCategory}
                            onOpen={() => setOpenCategory(true)}
                            onClose={() => setOpenCategory(false)}
                            endAdornment={
                                <div
                                    style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                >
                                    {openCategory ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                </div>
                            }

                        >
                            <MenuItem value={'Monday'}>Monday</MenuItem>
                            <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                            <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                            <MenuItem value={'Thursday'}>Thursday</MenuItem>
                            <MenuItem value={'Friday'}>Friday</MenuItem>
                            <MenuItem value={'Saturday'}>Saturday</MenuItem>
                            <MenuItem value={'Sunday'}>Sunday</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 230, maxWidth: 300, height: 'auto' }}>
                        <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>starting at</Typography>
                        {/* <Select
                            labelId="multiple-select-label"
                            id="multiple-select"
                            multiple
                            label='Select languages'
                            value={selectedItems}
                            onChange={handleChange}
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
                                                height: '20px', // Adjust the height as needed
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
                        </Select> */}
                    </FormControl>                   
                </div>                
            </Stack>
            <p style={{color:'red', fontSize:'15px', marginTop:'10px', fontWeight:'lighter'}}>We recommend that Auto Enrol is set to send out courses every 4 weeks or more to spread out training.</p>
            <p style={{fontSize:'15px', fontWeight:'lighter', marginTop:'20px'}}>If you would like to subscribe your users outside of the automated programme, you can press the button below.</p>
            <Button 
                variant="outlined" 
                style=
                {{
                    color:'#fff', 
                    background:'rgb(30, 123, 228)',
                    marginTop:'9px', 
                    fontWeight:'lighter'
                }}
                onClick={openContinueModal}
                >
                <MailOutlineIcon style={{marginRight:'3px'}}/>
                    Subscribe people now
            </Button>
            <Modal
            open={continueModalOpen}
            onClose={closeContinueModal}
            aria-labelledby="send-test-email-modal-title"
            aria-describedby="send-test-email-modal-description"
            >
            <Box sx={style}>
                <Typography
                    id="send-test-email-modal-title"
                    variant="h6"
                    component="h2"
                    style=
                    {{
                        fontWeight:'lighter', 
                        color:'black'
                    }}
                >
                <HelpOutlineIcon style={{color:'orange'}} />
                Are you sure you wish to continue?
                <p 
                    style=
                    {{
                        marginTop:'5px', 
                        color:'gray', 
                        fontSize:'13px', 
                        marginLeft:'15px'
                        }}
                    >
                        <br/>
                        This will enrol all users on their next Auto Enrol course immediately.<br/><br/>
                        You should only use this feature if an Auto Enrol sendout has failed or you wish to run one sooner than scheduled.
                </p>
                </Typography>
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 2,
                    gap: 2,
                }}
                >
                <Button
                    variant="contained"
                    onClick={removeContinueModal}
                    style={{ color: "#fff" }}
                >
                    No
                </Button>
                <Button
                    variant="outlined"
                    onClick={closeContinueModal}
                    style={{ marginRight: "5px", color: "black" }}
                >
                    Yes
                </Button>
                </Box>
            </Box>
            </Modal>
            <hr style={{marginTop:'20px'}}/>
            <h5 style={{color:'rgb(30, 123, 228)', marginTop:'10px'}}>Course Deny List</h5>
            <FormControl 
            sx={{ 
                width: "90%", 
                height: 'auto' 
                }}
            >
            <Typography 
                sx={{ 
                    fontSize: '', 
                    marginBottom: "5px", 
                    marginLeft: "2px", 
                    marginTop: "25px", 
                    }}
                    >
                        Select courses to exclude from Auto Enrol
            </Typography>
            <Select
                labelId="multiple-select-label"
                id="multiple-select"
                multiple
                label='Select languages'
                value={selectedItems}
                onChange={handleChange}
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
                {courses.map((item) => (
                    <MenuItem key={item} value={item}>
                        <Checkbox checked={selectedItems.indexOf(item) > -1} />
                        <ListItemText secondary={item} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <hr style={{marginTop:'20px'}}/>
        <h5 style={{color:'rgb(30, 123, 228)', marginTop:'10px'}}>Course Re-enrolment</h5>
        <p 
            style=
            {{
                marginTop:'40px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
               When users complete the Auto Enrol programme, they will automatically restart the programme. If you disable the option below, 
               users will not be automatically re-enrolled and will only have to complete the Auto Enrol programme once.
        </p>
        <div style={{marginTop:'30px'}}>
        <Switch {...label} defaultChecked />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                Enable course re-enrolment
        </span>
        </div>
        <hr style={{marginTop:'20px'}}/>
        <h5 style={{color:'rgb(30, 123, 228)', marginTop:'10px'}}>Regenerate Course Schedule</h5>
        <p style={{fontSize:'15px', fontWeight:'lighter', marginTop:'20px'}}>You can use the button below to regenerate the course schedules on your users if you have had any issues with Auto Enrol.</p>
            <Button 
                // variant="outlined" 
                style=
                {{
                    color:'#fff', 
                    background:'rgb(30, 123, 228)',
                    marginTop:'15px', 
                    fontWeight:'lighter'
                }}
                onClick={openContinueModal}
                >
                <CalendarTodayIcon style={{marginRight:'3px'}}/>
                    Regenerate Course Schedule
            </Button>
            <Modal
            open={continueModalOpen}
            onClose={closeContinueModal}
            aria-labelledby="send-test-email-modal-title"
            aria-describedby="send-test-email-modal-description"
            >
            <Box sx={style1}>
                <Typography
                    id="send-test-email-modal-title"
                    variant="h6"
                    component="h2"
                    style=
                    {{
                        fontWeight:'lighter', 
                        color:'black'
                    }}
                >
                <HelpOutlineIcon style={{color:'orange'}} />
                Are you sure you wish to continue?
                {/* <p 
                    style=
                    {{
                        marginTop:'5px', 
                        color:'gray', 
                        fontSize:'13px', 
                        marginLeft:'15px'
                        }}
                    >
                        <br/>
                        This will enrol all users on their next Auto Enrol course immediately.<br/><br/>
                        You should only use this feature if an Auto Enrol sendout has failed or you wish to run one sooner than scheduled.
                </p> */}
                </Typography>
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 2,
                    gap: 2,
                }}
                >
                <Button
                    variant="contained"
                    onClick={removeContinueModal}
                    style={{ color: "#fff" }}
                >
                    No
                </Button>
                <Button
                    variant="outlined"
                    onClick={closeContinueModal}
                    style={{ marginRight: "5px", color: "black" }}
                >
                    Yes
                </Button>
                </Box>
            </Box>
            </Modal>
        </div>   
        )}

        <Button 
            variant="contained" 
            style=
            {{
                float:'inline-end', 
                marginTop:'60px', 
                color:'#fff', 
                background:'rgb(30, 123, 228)',
                marginRight:'100px',
                fontWeight:'lighter'
            }}
        >
            <SaveIcon style={{marginRight:'3px'}}/>
                Save
        </Button>
      </DashboardLayout>
    );
  };
  
  export default AutoEnrol;