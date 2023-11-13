import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableHead, TableBody,IconButton, Paper, Modal, Typography, TextField, Button, MenuItem, Menu, ListItemText, Checkbox, Chip, Select, FormControl, Dialog } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'; 
const items = ['a Testh <vedishwaran1@twintechsolution.com', 'g Testj <vedishwaran1@twintechsolution.com', 'Vedishwaran R <vedishwaran1@twintechsolution.com', 'harri loganathan <harri@twintechsolution.com', 'Kalaiyarasi V <kalai@twintechsolution.com'];
const items2 = ['No Group', 'Administration', 'Sample', 'Technical'];
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SearchIcon from '@mui/icons-material/Search';
import UploadTableData from 'layouts/uPolicy/components/uPolicyUploadTableData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import { Link } from "react-router-dom";
import {

    AiOutlineArrowRight,
  } from "react-icons/ai";

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "400px",
  };

  const styleUpload = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "800px",
  };

const UpdateActionsButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteUser, setDeleteUser] = useState(false);
    const [addLangModalOpen, setAddLangModalOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItems2, setSelectedItems2] = useState([]);
    const [duplicateTemp, setDuplicateTemp] = useState(false);
    const [addLangModalOpenUpload, setAddLangModalOpenUload] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

    const OpenDuplicateTempModal = () => {
      setDuplicateTemp(true);
    };
    const closeDuplicateTempModal = () => {
      setDuplicateTemp(false);
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

    const openAddLangModalUpload = () => {
      setAddLangModalOpenUload(true);
    };
  
    const closeAddLangModalUpload = () => {
      setAddLangModalOpenUload(false);
    };
  
    const addLangUpload = () => {
      closeAddLangModalUpload();
    };

    const handleChangeItems = (event) => {
      setSelectedItems(event.target.value);
    };
    const handleChangeItems2 = (event) => {
      setSelectedItems2(event.target.value);
    };
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };

      const OpendeleteUserModal = () => {
        setDeleteUser(true);
      };
      const closeDeleteUserModal = () => {
        setDeleteUser(false);
      };
      const deleteUserModal = (id) => {
        axios.post(`${host}/user/delete/${id}`)
          .then(response => {
            if (response.status === 200) {
              console.log(response)
              setAllUserData(response.data)
              closeDeleteUserModal();
            } else {
              console.error('Error deleting user');
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
    
      };

      const handleDelete = (itemToDelete) => (event) => {
        console.log(itemToDelete);
        event.preventDefault();
        const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
        setSelectedItems(updatedSelection);
    };

      const handleDelete2 = (itemToDelete) => (event) => {
        console.log(itemToDelete);
        event.preventDefault();
        const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
        setSelectedItems2(updatedSelection);
    };
    
      return (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AiOutlineArrowRight />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

            <MenuItem onClick={openAddLangModal} style={{background:'#fff'}}>
                            <MailOutlineIcon style={{fontSize:'small'}} />
                            Send Policy
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
                              Send Policy - Password Construction Guidelines
                              </Typography>     
                              <hr/>                         
                              <div>
                                <FormControl sx={{ width: "330px", height: 'auto' }}>
                                  <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px", marginTop:'15px' }}>Select Recipient(s):</Typography>
                                  <Typography sx={{ fontSize: '10px', marginBottom: "5px", marginLeft: "2px", marginTop:'15px' }}>Select Your Users:</Typography>
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
                                                          height: '15px', 
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
                                <FormControl sx={{ width: "330px", height: 'auto' }}>
                                  <Typography sx={{ fontSize: '10px', marginBottom: "5px", marginLeft: "2px", marginTop:'15px' }}>Select Your Groups:</Typography>
                                  <Select
                                      labelId="multiple-select-label"
                                      id="multiple-select"
                                      multiple
                                      label='Select languages'
                                      value={selectedItems2}
                                      onChange={handleChangeItems2}
                                      MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                      renderValue={(selected) => (
                                          <div>
                                              {selected.map((item) => (
                                                  <Chip
                                                      key={item}
                                                      label={item}
                                                      onDelete={handleDelete2(item)}
                                                      sx={{
                                                          marginRight: '5px',
                                                          height: '20px', 
                                                      }}
                                                  />
                                              ))}
                                          </div>
                                      )}
                                  >
                                      {items2.map((item) => (
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
                                  
                                  Send Policy
                                </Button>
                              </Box>
                            </Box>
                          </Modal>

            {/* <MenuItem onClick={handleClose}>Upload Policy Signatures</MenuItem> */}
            <MenuItem onClick={openAddLangModalUpload} style={{background:'#fff'}}>
                            <UploadFileIcon style={{fontSize:'small'}} />
                            Upload Policy Signatures
                          </MenuItem>

                          <Modal
                            open={addLangModalOpenUpload}
                            onClose={closeAddLangModalUpload}
                            aria-labelledby="send-test-email-modal-title"
                            aria-describedby="send-test-email-modal-description"
                          >
                            {/* Content for the "Send Test Email" modal */}
                            
                            <Box sx={styleUpload}>
                            <IconButton
                              aria-label="Close"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                              }}
                              onClick={closeAddLangModalUpload}
                            >
                              <HighlightOffOutlinedIcon style={{fontSize:'medium'}} />
                            </IconButton>
                              <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                              Upload Policy Signatures - Password Construction Guidelines
                              </Typography>     
                              <hr/>  
                              <div>

                              <div 
                                style=
                                {{ 
                                    display: 'flex', 
                                    gap: 100, 
                                    marginTop: 18 
                                }}
                                >
                                <Box 
                                    sx=
                                    {{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        gap: 2 
                                    }}
                                    >
                                    <p style={{ fontSize: 15 }}> Add Users via CSV Upload:</p>
        
                                    <input
                                type="file"
                                name="csvfile"
                                accept=".csv"
                              />
                                </Box>                                
                                <Box >
                                    <Box>
                                      <label
                                        htmlFor="name"
                                        style={{ fontSize: "13px" }}
                                      >
                                        Add Users:
                                      </label>
                                    </Box>
                                    <TextField
                                      fullWidth
                                      type="text"
                                      name="sendername"
                                      sx={{ gridColumn: "span 2" }}
                                    />
                                </Box>
                                <Box>
                                <Button
                                        style={{
                                            border: "0.5px solid grey",
                                            color: "gray" ,
                                            fontSize: "10px",
                                            marginTop:'35px',
                                            fontWeight:'lighter',
                                            marginLeft:'165px'
                                        }}
                                        variant="outlined"
                                        size="small"
                                        // onClick={openUserForm}
                                    >
                                        
                                        Search for a user<SearchIcon style={{ color: 'grey', fontSize: "15px", marginLeft:'5px' }} />
                                    </Button> 
                                    <Dialog
                                        // open={isUserFormOpen}
                                        // onClose={closeUserForm}
                                    >                                        
                                    </Dialog> 
                                </Box>
                                </div>    
                                <p style={{fontSize:'12px', color:'gray'}}>You can download a template here: <Link>Download Template</Link></p>
                                <Box>
                                </Box>
                                
                              </div> 
                              <div style={{ display: "flex", alignItems: "center", marginTop:'20px' }}>
                                <div className="tab-content" style={{ margin: "0 auto", width: "fit-content" }}>
                                  {/* <div className={tab-pane ${activeTab === 0 ? "active" : ""}}>
                                    <UpolicyTableData />
                                  </div> */}
                                  <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
                                    <UploadTableData />
                                  </div>
                                  <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
                                    <UploadTableData />
                                  </div>

                                </div>
                              </div>
                                                                                                                     
                              
                              {/* <div>
                                <FormControl sx={{ width: "330px", height: 'auto' }}>
                                  <Typography sx={{ fontSize: '10px', marginBottom: "5px", marginLeft: "2px", marginTop:'15px' }}>Select Your Groups:</Typography>
                                  <Select
                                      labelId="multiple-select-label"
                                      id="multiple-select"
                                      multiple
                                      label='Select languages'
                                      value={selectedItems2}
                                      onChange={handleChangeItems2}
                                      MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                      renderValue={(selected) => (
                                          <div>
                                              {selected.map((item) => (
                                                  <Chip
                                                      key={item}
                                                      label={item}
                                                      onDelete={handleDelete2(item)}
                                                      sx={{
                                                          marginRight: '5px',
                                                          height: '20px', 
                                                      }}
                                                  />
                                              ))}
                                          </div>
                                      )}
                                  >
                                      {items2.map((item) => (
                                          <MenuItem key={item} value={item}>
                                              <Checkbox checked={selectedItems.indexOf(item) > -1} />
                                              <ListItemText secondary={item} />
                                          </MenuItem>
                                      ))}
                                  </Select>
                                </FormControl>
                              </div>                                                             */}
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2}}>
                                <Button variant="contained" disabled onClick={addLang} style={{color:'gray'}} >
                                  <DeleteOutlineIcon />
                                  
                                  Reset User List
                                </Button>
                                <Button variant="contained" disabled onClick={addLang} style={{color:'#gray', marginLeft:'5px'}} >
                                  <UploadFileIcon />
                                  Upload Signatures
                                </Button>
                              </Box>
                            </Box>
                          </Modal>


            <MenuItem component={Link} to="/editPolicy">Edit Policy</MenuItem>
            {/* <MenuItem component={Link} to="/editTemplate" style={{background:'#fff'}}>
                            <EditIcon />
                            Edit Template
                          </MenuItem> */}
            <MenuItem onClick={OpenDuplicateTempModal}> <ContentCopyIcon/>Duplicate Policy</MenuItem>

            <Modal
                open={duplicateTemp}
                onClose={closeDuplicateTempModal}
                aria-labelledby="send-test-email-modal-title"
                aria-describedby="send-test-email-modal-description"
                >

                <Box sx={style}>
                    <Typography
                    id="send-test-email-modal-title"
                    variant="h6"
                    component="h2"
                    >
                   Duplicate Password Construction Guidelines
                    </Typography>
                    <Box style={{marginTop:'30px'}}>
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                    Policy Title:
                    </label>
                    </Box>
                    <TextField
                    fullWidth
                    defaultValue="(copy)"
                    type="text"
                    sx={{ gridColumn: "span 2" , color:'gray'}}
                    />

                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 2,
                        gap: 2,
                        marginTop:'25px'
                    }}
                    >
                    <Button
                        variant="contained"
                        onClick={closeDuplicateTempModal}
                        style={{ color: "#fff" }}
                    >
                        No
                    </Button>
                    <Button
                        variant="outlined"
                        // onClick={() => deleteUserModal(item.detailsid)}
                        onClick={closeDuplicateTempModal}
                        border="rgb(30, 123, 228)"
                        style={{ marginRight: "5px", color: "rgb(30, 123, 228)" }}
                    >
                        Save Duplicate
                    </Button>
                    </Box>
                </Box>
                </Modal>


            <MenuItem onClick={OpendeleteUserModal}> <DeleteIcon />Delete Policy</MenuItem>
            <Modal
                open={deleteUser}
                onClose={closeDeleteUserModal}
                aria-labelledby="send-test-email-modal-title"
                aria-describedby="send-test-email-modal-description"
                >
                {/* Content for the "Send Test Email" modal */}

                <Box sx={style}>
                    <Typography
                    id="send-test-email-modal-title"
                    variant="h6"
                    component="h2"
                    >
                    Are you sure you want to delete the selected policy?
                    </Typography>

                    <Box>
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                        This will delete:
                        <li>All versions of this policy whether archived, live or draft</li>
                        <li>
                        All signature history associated with this policy
                        </li>
                        
                    </label>
                    </Box>
                    <Box style={{marginTop:'30px'}}>
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                        Number of policies to delete :
                    </label>
                    </Box>
                    <TextField
                    fullWidth
                    defaultValue="1"
                    type="text"
                    sx={{ gridColumn: "span 2" }}
                    />

                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 2,
                        gap: 2,
                        marginTop:'25px'
                    }}
                    >
                    <Button
                        variant="contained"
                        onClick={closeDeleteUserModal}
                        style={{ color: "#fff" }}
                    >
                        No
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => deleteUserModal(item.detailsid)}
                        style={{ marginRight: "5px", color: "black" }}
                    >
                        Yes
                    </Button>
                    </Box>
                </Box>
                </Modal>

            <MenuItem onClick={handleClose}>Export Policy Data</MenuItem>
          </Menu>
        </div>
      );
    };

const columns = [
  { field: "id", headerName: "id", width: 80 },
  { field: "Name", headerName: "Name", width: 180 },
{
    field: "CurrentVersion",
    headerName: "Current Version",
    width: 150,
    
    renderCell: (params) => (
      <Button variant="contained" style={{ backgroundColor: "green", color: "white", fontSize:'10px' }} disabled>
        v1.0
      </Button>
    ),
  },
  { field: "Category", headerName: "Category", width: 180 },
  { field: "Recipients", headerName: "Recipients", width: 100 },
  { field: "Visited", headerName: "Visited", width: 100 },
  { field: "Signed", headerName: "Signed", width: 100 },
  { field: "Signature Type", headerName: "Signature Type", width: 170 },
  {
    field: "Updates",
    headerName: "Updates",
    width: 150,
    renderCell: (params) => (
      <UpdateActionsButton />
    ),
  },
];

const rows = [
  {
    id: 1,
    Name: "phishing test policy",
    CurrentVersion: "",
    Category: "Compliance",
    Recipients: "8",
    Visited:'0',
    Signed:'0',
    SignatureType:'New Users',
    Updates:''
  },
  {
    id: 2,
    Name: "policy to test flow",
    CurrentVersion: "",
    Category: "Compliance",
    Recipients: "8",
    Visited:'0',
    Signed:'0',
    SignatureType:'Fixed Term',
    Updates:''
  },

];

const customStyles = {
  root: {
    "&:hover": {
      backgroundColor: "transparent", 
    },
  },
};

const CustomPagination = () => {
  return (
    <div>
      <Pagination count={4} shape="rounded" />
    </div>
  );
};
export default function ReportTableData() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectionChange = (selection) => {
        console.log("Selection changed:", selection);
        if (selection.selectionModel.length > 0) {
            const selectedRowIndex = selection.selectionModel[0];
            setSelectedRow(rows[selectedRowIndex]);
            setIsModalOpen(true);
        }
    };
    
    const handleCloseModal = () => {
        setSelectedRow(null);
        setIsModalOpen(false);
    };

    const handleYesButtonClick = () => {
        alert("Opening...");
        handleCloseModal();
      };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <DataGrid
              style={{ border: "none", fontSize:'13px', cursor:'pointer' }}
              rows={rows}
              columns={columns}
              components={{
                Pagination: () => <div/>,
              }}
              checkboxSelection
              onSelectionModelChange={handleSelectionChange}
            />
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h6">Are you sure you want to open?</Typography>
          <Button variant="contained" color="primary" onClick={handleYesButtonClick}>
            Yes
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCloseModal}>
            No
          </Button>
        </Box>
      </Modal>

    </div>
  );
}


