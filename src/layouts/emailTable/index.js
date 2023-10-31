/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Table from "examples/Tables/Table";
import { Box, Button, ButtonGroup, Checkbox, ClickAwayListener, Dialog, Divider, FormControl, FormControlLabel, FormGroup, Grow, IconButton, InputLabel, List, ListItem, ListItemText, Menu, MenuItem, MenuList, Modal, Popover, Popper, Select, Stack, TextField, Typography } from '@mui/material'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiFillPlusCircle, AiOutlineArrowDown, AiOutlineDelete, AiOutlineArrowRight, AiOutlinePlus, AiOutlineReload, AiOutlineSearch, AiOutlineEdit } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';
import { FaRegClone } from 'react-icons/fa';
import { BiMessageAltAdd } from 'react-icons/bi';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import  SendIcon  from '@mui/icons-material/Send';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const languageOptions = [
  'English',
  'Spanish',
  'French',
  'German',
];


// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import SoftButton from "components/SoftButton";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//const options = ['Download Group Managers Reports', '+ Create Email Template'];

function emailTable() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('Active');
  const navigate = useNavigate();

  const [sendTestEmailModalOpen, setSendTestEmailModalOpen] = useState(false);
  const [addLangModalOpen, setAddLangModalOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const openSendTestEmailModal = () => {
    setSendTestEmailModalOpen(true);
  };
  const closeSendTestEmailModal = () => {
    setSendTestEmailModalOpen(false);
  };
  const sendTestEmail = () => {
    closeSendTestEmailModal();
  };
  
  const openAddLangModal = () => {
    setAddLangModalOpen(true);
  };
  const closeAddLangModal = () => {
    setAddLangModalOpen(false);
  };
  const addLang = () => {
    closeAddLangModal();
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleEditClick = () => {
    navigate('/uphish/email-template-builder/edit-email-template'); 
  };
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

//   const handleClickbtn = () => {
//     console.info(`You clicked ${options[selectedIndex]}`);
//   };



  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClosebtn = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const openUserForm = () => {
    setUserFormOpen(true);
  };

  const closeUserForm = () => {
    setUserFormOpen(false);
  };

  const openGroupForm = () => {
    setGroupFormOpen(true);
  };

  const closeGroupForm = () => {
    setGroupFormOpen(false);
  };

  const openAnchor = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-end" p={3}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <div style={{ display:'flex', gap:'5px', alignItems:'center'}}><Typography sx={{ fontSize: 'large', color:'black', fontWeight:'bold' }}>Uphish - Email Template Builder</Typography></div>
                <Divider />
              </div>
              <Stack>
                <Stack spacing={2} direction="row" justifyContent="flex-end">
                  <Button variant="outline" style={{ border: '0.5px solid grey',  color: '#d4d4d4', fontSize:"10px" }} size="small" onClick={openUserForm}>
                    Search for an item...<AiOutlineSearch style={{color: 'gray', fontSize:"15px"}} />
                  </Button>
                  <Dialog
                    open={isUserFormOpen}
                    onClose={closeUserForm}
                  >
                    {/* User form content here */}
                  </Dialog>
                  <Link to="/uphish/create-email-template">
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #1C7AE4",
                        color: "white",
                        backgroundColor: "#1b7ae4",
                      }}
                    >
                  Create Landing Page
                    </Button>
                  </Link>
                  {/* <ButtonGroup variant="outline" style={{ border: '0.5px solid #1C7AE4', color: 'white', backgroundColor: '#1b7ae4' }} ref={anchorRef} aria-label="split button">
                    <Button onClick={() => {navigate('/uphish/email-template-builder/create-email-template')}}
                    >
                        + Create Email Template
                    </Button>

                  </ButtonGroup> */}
                  <Popper
                    sx={{
                      zIndex: 1,
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                      >
                      </Grow>
                    )}
                  </Popper>
                </Stack>
                <Stack spacing={2} margin={2} direction="row" justifyContent="flex-end">
                  <Dialog
                    open={isGroupFormOpen}
                    onClose={closeGroupForm}
                  >
                    {/* Group form content here */}
                  </Dialog>
                </Stack>
              </Stack>
            </SoftBox>
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
              {/* <Table columns={columns} rows={rows} /> */}
              <TableContainer component={Paper}>
                <Table sx={{ width: "100%" }} aria-label="simple table">
                  <TableHead sx={{ display: "table-header-group" }}>
                    <TableRow sx={{ width: "20px" }}>
                      <TableCell >Sl. No</TableCell>
                      <TableCell >Name</TableCell>
                      <TableCell >Category</TableCell>
                      <TableCell >Language(s)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>1</TableCell>
                      <TableCell style={{fontSize:"13px", color:"#209ce8"}}>Argentina | AFIP | TEST</TableCell>
                      <TableCell style={{fontSize:"13px"}}>Government</TableCell>
                      <TableCell style={{fontSize:"13px"}}>
                        <ul>Spanish</ul>
                        <ul>Spanish(Argentina)</ul>
                        <ul>Swedish</ul>
                      </TableCell>
                      <TableCell>
                        <SoftButton
                          onClick={handleClick}
                          variant="outlined"
                          color="info"
                        >
                          <AiOutlineArrowRight />
                        </SoftButton>
                        <Popover
                          id={id}
                          open={openAnchor}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                          {/* edit-email-template */}
                          <MenuItem component={Link} to="/edit-email-template">
                            <EditIcon />
                            Edit Email Template
                          </MenuItem>


                           {/* send-test-email-template */}
                          <MenuItem onClick={openSendTestEmailModal}>
                            <SendIcon />
                            send Test Email
                          </MenuItem>

                          <Modal
                            open={sendTestEmailModalOpen}
                            onClose={closeSendTestEmailModal}
                            aria-labelledby="send-test-email-modal-title"
                            aria-describedby="send-test-email-modal-description"
                          >
                            {/* Content for the "Send Test Email" modal */}
                            
                            <Box sx={style}>
                              <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                Send Test Simulation Email
                              </Typography>
                              <Box>
                                <label 
                                    htmlFor="name" 
                                    style={{fontSize:"13px"}}
                                >
                                    To:
                                </label>
                              </Box>
                              <TextField 
                                fullWidth 
                                variant="filled" 
                                type="text" 
                                sx={{ gridColumn: "span 2" }} 
                              />
                              <Box>
                                <label 
                                    htmlFor="name" 
                                    style={{fontSize:"13px"}}
                                >
                                    First Name:
                                </label>
                              </Box>
                              <TextField 
                                fullWidth 
                                variant="filled" 
                                type="text" 
                                sx={{ gridColumn: "span 2" }} 
                              />
                              <Box>
                                <label 
                                    htmlFor="name" 
                                    style={{fontSize:"13px"}}
                                >
                                    Last Name:
                                </label>
                              </Box>
                              <TextField 
                                fullWidth 
                                variant="filled" 
                                type="text" 
                                sx={{ gridColumn: "span 2" }} 
                              />
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                <Button variant="contained" onClick={sendTestEmail} style={{color:'#fff'}} >
                                <MailOutlineIcon sx={{ marginRight: '5px', color:'#fff' }} />
                                  Send
                                </Button>
                                <Button variant="outlined" onClick={closeSendTestEmailModal} style={{ marginRight:'5px', color:'black'}}>
                                  Cancel
                                </Button>
                              </Box>
                            </Box>
                          </Modal>

                          {/* clone-email-template */}
                          <MenuItem component={Link} to="/clone-email-template">
                            <FileCopyOutlinedIcon style={{fontSize:'small'}} />
                            Clone Email Template
                          </MenuItem>

                           {/* add-languages */}
                          <MenuItem onClick={openAddLangModal}>
                            <AddCircleOutlineOutlinedIcon style={{fontSize:'small'}} />
                            Add Language(s)
                          </MenuItem>

                          <Modal
                            open={addLangModalOpen}
                            onClose={closeAddLangModal}
                            aria-labelledby="send-test-email-modal-title"
                            aria-describedby="send-test-email-modal-description"
                          >
                            {/* Content for the "Send Test Email" modal */}
                            
                            <Box sx={style}>
                              <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                              Add Language(s) to the Selected Email Templates
                              </Typography>
                              <Box>
                                <label 
                                    htmlFor="name" 
                                    style={{fontSize:"13px"}}
                                >
                                    Language(s):
                                </label>
                              </Box>
                              <FormControl fullWidth variant="filled">
                                <Select
                                  value={selectedLanguage}
                                  onChange={handleLanguageChange}
                                >
                                  {languageOptions.map((language, index) => (
                                    <MenuItem key={index} value={language}>
                                      {language}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                                                            
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2}}>
                                <Button variant="contained" onClick={addLang} style={{color:'#fff'}} >
                                  Add Language(s)
                                </Button>
                              </Box>
                            </Box>
                          </Modal>


                          <MenuItem>
                            <EditIcon />
                            Remove Language(s)
                          </MenuItem>

                          <MenuItem component={Link} to="/createlanding">
                            <EditIcon />
                            delete Email Template
                          </MenuItem>
                          
                        </Popover>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  
                </Table>
                <Menu
                >
                </Menu>
              </TableContainer>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default emailTable;
