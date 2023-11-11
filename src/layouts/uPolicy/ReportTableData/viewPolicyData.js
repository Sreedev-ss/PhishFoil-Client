import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableHead, TableBody, Paper, Modal, Typography, TextField, Button, MenuItem, Menu } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
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

const UpdateActionsButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteUser, setDeleteUser] = useState(false);
  
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
           {/* <MenuItem  onClick= style={{ background: "#fff" }}>
                                <DeleteIcon />
                                Delete User
                              </MenuItem> */}
            <MenuItem onClick={handleClose}>Send Policy</MenuItem>
            <MenuItem onClick={handleClose}>Upload Policy Signatures</MenuItem>
            <MenuItem onClick={handleClose}>Edit Policy</MenuItem>
            <MenuItem onClick={handleClose}>Duplicate Policy</MenuItem>
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


