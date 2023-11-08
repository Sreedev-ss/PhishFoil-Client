// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { 
  Box, 
  Button, 
  Checkbox, 
  Chip, 
  Dialog, 
  Divider, 
  FormControl, 
  Grow, 
  IconButton, 
  ListItemText, 
  Menu, 
  MenuItem, 
  Modal, 
  Popover, 
  Popper, 
  Select, 
  Stack, 
  TextField, 
  Typography } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import axios from "axios";

import EditIcon from "@mui/icons-material/Edit";
import SendIcon  from '@mui/icons-material/Send';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

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

import SoftButton from "components/SoftButton";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];
import createEmailTemplate from "layouts/createEmailTemplate";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const host = 'http://localhost:8081';

function emailTable() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [sendTestEmailModalOpen, setSendTestEmailModalOpen] = useState(false);
  const [addLangModalOpen, setAddLangModalOpen] = useState(false);
  const [removeLangModalOpen, setRemoveLangModalOpen] = useState(false);
  const [deleteEmailTempModalOpen, setDeleteEmailTempModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedItems, setSelectedItems] = useState(['English']);
  const [emailTemplateData,setAllEmailTemplateData] = useState([])

  const data = localStorage.getItem('loginData')
  const loginData = JSON.parse(data)
  useEffect(() => {
    axios.get(`${host}/emailtemplate/all/${loginData?.clientid}`).then((res) => {
      if (res.data) {
        setAllEmailTemplateData(res.data)
      } else {
        console.log(res)
        toast.error('Failed fetching users')
      }
    }).catch(e => {
      console.log(e)
    })
  }, [])

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

  const openRemoveLangModal = () => {
    setRemoveLangModalOpen(true);
  };

  const closeRemoveLangModal = () => {
    setRemoveLangModalOpen(false);
  };

  const removeLang = () => {
    closeRemoveLangModal();
  };

  const openDeleteEmailTempModal = () => {
    setDeleteEmailTempModalOpen(true);
  };

  const closeDeleteEmailTempModal = () => {
    setDeleteEmailTempModalOpen(false);
  };

  // const deleteEmailTemp = () => {
  //   closeDeleteEmailTempModal();
  // };
  const deleteEmailTemp = (id) => {
    console.log(id,"idddddddddddddd");
    axios.post(`${host}/emailtemplate/delete/${id}`)
    .then(res => {
      if(res.status === 200) {
        console.log(res);
        setAllEmailTemplateData(res.data)
        closeDeleteEmailTempModal()
      } else {
        console.error('Error deleting template');
      }
    })
    .catch(error => {
      console.error('Error:' , error);
    })
    closeDeleteEmailTempModal();
  };

    const handleDelete = (itemToDelete) => (event) => {
      console.log(itemToDelete);
      event.preventDefault();
      const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
      setSelectedItems(updatedSelection);
  };

  const handleChangeItems = (event) => {
    setSelectedItems(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const anchorRef = useRef(null);

  const openUserForm = () => {
    setUserFormOpen(true);
  };

  const closeUserForm = () => {
    setUserFormOpen(false);
  };

  const closeGroupForm = () => {
    setGroupFormOpen(false);
  };

  const openAnchor = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  
  const [popover, setPopover] = useState({ index: '', bool: false })
  const handleClickPopOver = (index) => {
    setPopover({ index: index, bool: !popover.bool })
    console.log(popover, 'popover')
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card sx={{minHeight:'100vh'}}>
            <SoftBox 
              display="flex" 
              flexDirection="row" 
              justifyContent="space-between" 
              alignItems="flex-end" 
              p={3}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1px' }}
                >
                <div 
                  style={{ 
                    display:'flex', 
                    gap:'5px', 
                    alignItems:'center'}}
                  >
                    <Typography 
                      sx={{ 
                        fontSize: 'large', 
                        color:'black', 
                        fontWeight:'bold' }}
                      >
                        Uphish - Email Template Builder
                    </Typography>
                </div>
                <Divider />
              </div>
              <Stack>
                <Stack 
                  spacing={2} 
                  direction="row" 
                  justifyContent="flex-end"
                >
                  <Button 
                    variant="outline" 
                    style={{ 
                      border: '0.5px solid grey',  
                      color: '#d4d4d4', 
                      fontSize:"10px" }} 
                      size="small" 
                      onClick={openUserForm}
                    >
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
                        fontWeight:'lighter'
                      }}
                    >
                  + Create Email Tmeplate 
                    </Button>
                  </Link>
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
              <TableContainer component={Paper} sx={{minHeight:'100vh'}}>
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
                    {emailTemplateData ? emailTemplateData?.map((t,index)=>(
                   
                    <TableRow
                    key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 },position:'relative' }}
                    >
                      <TableCell>{index+1}</TableCell>
                      <TableCell style={{fontSize:"13px", color:"#209ce8"}}>{t.templatename}</TableCell>
                      <TableCell style={{fontSize:"13px"}}>{t.category}</TableCell>
                      <TableCell style={{fontSize:"13px"}}>
                        {t.language.map((i,index)=>(
                        <ul key={index}>{i}</ul>
                        ))}
                      </TableCell>
                      <TableCell>
                        <SoftButton
                          onClick={() => handleClickPopOver(index)}
                          variant="outlined"
                          color="info"
                        >
                          <AiOutlineArrowRight />
                        </SoftButton>
                        {index == popover.index && popover.bool && <div style={{ position: 'absolute', backgroundColor: 'white', zIndex: 100 }}
                            key={index}
                          >
                           
                          {/* edit-email-template */}
                          <MenuItem component={Link} to="/edit-email-template" style={{background:'#fff'}}>
                            <EditIcon />
                            Edit Email Template
                          </MenuItem>


                           {/* send-test-email-template */}
                          <MenuItem onClick={openSendTestEmailModal} style={{background:'#fff'}}>
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
                                type="text" 
                                sx={{ gridColumn: "span 2" }} 
                              />
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                <Button variant="contained" onClick={sendTestEmail} style={{color:'#fff'}} >
                                <MailOutlineIcon sx={{ marginRight: '5px', color:'#fff' }} />
                                  Send
                                </Button>
                                <Button 
                                  variant="outlined" 
                                  onClick={closeSendTestEmailModal} 
                                  style={{ marginRight:'5px', color:'black'}}
                                >
                                  Cancel
                                </Button>
                              </Box>
                            </Box>
                          </Modal>

                          {/* clone-email-template */}
                          <MenuItem component={Link} to="/clone-email-template" style={{background:'#fff'}}>
                            <FileCopyOutlinedIcon style={{fontSize:'small'}} />
                            Clone Email Template
                          </MenuItem>

                           {/* add-languages */}
                          <MenuItem onClick={openAddLangModal} style={{background:'#fff'}}>
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
                            <IconButton
                              aria-label="Close"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                              }}
                              onClick={closeAddLangModal}
                            >
                              <HighlightOffOutlinedIcon style={{fontSize:'medium'}} />
                            </IconButton>
                              <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                              Add Language(s) to the Selected Email Templates
                              </Typography>                              
                              <div>
                                <FormControl sx={{ width: "330px", height: 'auto' }}>
                                  <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px", marginTop:'15px' }}>Language (s)</Typography>
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
                                                            
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2}}>
                                <Button variant="contained" onClick={addLang} style={{color:'#fff'}} >
                                  Add Language(s)
                                </Button>
                              </Box>
                            </Box>
                          </Modal>


                          {/* Remove-languages */}
                          <MenuItem onClick={openRemoveLangModal} style={{background:'#fff'}}>
                            <RemoveCircleOutlineOutlinedIcon style={{fontSize:'small'}} />
                            Remove Language(s)
                          </MenuItem>
                          <Modal
                            open={removeLangModalOpen}
                            onClose={closeRemoveLangModal}
                            aria-labelledby="send-test-email-modal-title"
                            aria-describedby="send-test-email-modal-description"
                          >
                            {/* Content for the "Send Test Email" modal */}
                            
                            <Box sx={style}>
                            <IconButton
                              aria-label="Close"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                              }}
                              onClick={closeRemoveLangModal}
                            >
                              <HighlightOffOutlinedIcon style={{fontSize:'medium'}} />
                            </IconButton>
                              <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                              Remove Language(s) from the Selected Email Templates
                              </Typography>                              
                              <div>
                                <FormControl sx={{ width: "330px", height: 'auto' }}>
                                  <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px", marginTop:'15px' }}>Language (s)</Typography>
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
                                                            
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2}}>
                                <Button variant="contained" onClick={removeLang} style={{color:'#fff'}} >
                                  Remove Language(s)
                                </Button>
                              </Box>
                            </Box>
                          </Modal>

                          {/* Delete-Email-Temp */}
                          <MenuItem key={index} onClick={openDeleteEmailTempModal} style={{background:'#fff'}}>
                            <DeleteOutlineOutlinedIcon style={{fontSize:'15px'}} />
                            delete Email Template
                          </MenuItem>

                          <Modal
                            key={index}
                            open={deleteEmailTempModalOpen}
                            onClose={closeDeleteEmailTempModal}
                            aria-labelledby="send-test-email-modal-title"
                            aria-describedby="send-test-email-modal-description"
                          >
                            {/* Content for the "Send Test Email" modal */}
                            
                            <Box sx={style}>
                              <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                              Are you sure you want to delete the selected email template?
                              </Typography>
                              
                              <Box>
                                <label 
                                    htmlFor="name" 
                                    style={{fontSize:"13px"}}
                                >
                                    This will delete:
                                    <li>All simulations that use this email template will be deleted</li>
                                    <li>The recipients list of those simulations will be deleted</li>
                                    <li>The results of those simulations will be deleted</li>
                                    <li>Any active simulations using this email template will be disrupted</li>
                                </label>
                              </Box>
                              <Box>
                                <label 
                                    htmlFor="name" 
                                    style={{fontSize:"13px"}}
                                >
                                    Number of email templates to delete:
                                </label>
                              </Box>
                              <TextField 
                                fullWidth 
                                defaultValue="1"
                                type="text" 
                                sx={{ gridColumn: "span 2" }} 
                              />
                                                            
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                <Button 
                                  variant="contained" 
                                  onClick={closeDeleteEmailTempModal } 
                                  style={{color:'#fff'}} 
                                >
                                  No
                                </Button>
                                <Button 
                                  variant="outlined" 
                                  onClick={()=>deleteEmailTemp(t.templateid)} 
                                  style={{ marginRight:'5px', color:'black'}}
                                >
                                  Yes
                                </Button>
                              </Box>                              
                            </Box>
                          </Modal>                          
                        </div>}
                      </TableCell>
                    </TableRow>
                       
                      )):<div>No Data</div>}
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
