import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableHead, TableBody, Paper, Modal, Typography, TextField, Button, MenuItem, Menu } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
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

const UpdateActionsButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteUser, setDeleteUser] = useState(false);
    const [duplicateTemp, setDuplicateTemp] = useState(false);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };

      const OpenDuplicateTempModal = () => {
        setDuplicateTemp(true);
      };
      const closeDuplicateTempModal = () => {
        setDuplicateTemp(false);
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
            <MenuItem component={Link} to="/editTemplate" style={{background:'#fff'}}>
                            {/* <EditIcon /> */}
                            Edit Template
                          </MenuItem>
           
            <MenuItem onClick={OpenDuplicateTempModal}>Duplicate Template</MenuItem>

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
                   Duplicate sample
                    </Typography>

                    <Box style={{marginTop:'30px'}}>
                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                    Template Title:
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
            <MenuItem onClick={OpendeleteUserModal}> <DeleteIcon />Delete Template</MenuItem>
            <Modal
                open={deleteUser}
                onClose={closeDeleteUserModal}
                aria-labelledby="send-test-email-modal-title"
                aria-describedby="send-test-email-modal-description"
                >

                <Box sx={style}>
                    <Typography
                    id="send-test-email-modal-title"
                    variant="h6"
                    component="h2"
                    >
                    Are you sure you want to delete the selected policy template?
                    </Typography>

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
          </Menu>
        </div>
      );
    };


const columns = [
  { field: "id", headerName: "id", width: 100 },
  { field: "Name", headerName: "Name", width: 300 },
{
    field: "Status",
    headerName: "Status",
    width: 300,
    
    renderCell: (params) => (
      <Button variant="contained" style={{ backgroundColor: "rgb(30, 123, 228)", color: "white", fontSize:'small' }} disabled>
        Live
      </Button>
    ),
  },
  { field: "Category", headerName: "Category", width: 300 },
  {
    field: "Updates",
    headerName: "Updates",
    width: 200,
    renderCell: (params) => (
      <UpdateActionsButton />
    ),
  },
];

const rows = [
  {
    id: 1,
    Name: "phishing test policy",
    Status: "",
    Category: "Compliance",
    Updates:''
  },
  {
    id: 2,
    Name: "policy to test flow",
    Status: "",
    Category: "Compliance",
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteUser, setDeleteUser] = useState(false);


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
    </div>    
  );
}



