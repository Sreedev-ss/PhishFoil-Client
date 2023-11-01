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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AnalyticsIcon from "@mui/icons-material/Analytics";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Table from "examples/Tables/Table";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  ClickAwayListener,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grow,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  Popover,
  Popper,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "400px",
  overflowY: "scroll",
};
const scrollableContentStyle = {
  overflowY: "auto",
  maxHeight: "300px",
};

const languageOptions = ["English", "Spanish", "French", "German"];

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteModal from "components/Modal/DeleteModal";
import {
  AiFillPlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineReload,
} from "react-icons/ai";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import SoftButton from "components/SoftButton";
import { useRef, useState } from "react";
import React from "react";
import DeleteUserModal from "components/Modal/DeleteUserModal";
// import { FormControl } from '@mui/material';

const options = ["Download Group Managers Reports", "Download Reports", "Download Users Reports"];

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Active");

  const label = { inputProps: { "aria-label": "Switch demo" } };

  //Delete Landing page
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);

  //Add language
  const [addLangModalOpen, setAddLangModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [country, setCountry] = useState("");

  const handleChanges = (event) => {
    setCountry(event.target.value);
  };

  const openAddLangModal = () => {
    setAddLangModalOpen(true);
  };
  const closeAddLangModal = () => {
    setAddLangModalOpen(false);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClickbtn = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

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
  const id = open ? "simple-popover" : undefined;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              p={3}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "medium" }}>Your Groups</Typography>
                  <AiFillPlusCircle />
                </div>
                <FormGroup
                  sx={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "8px",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel control={<Checkbox />} label="No Group" />
                  <FormControlLabel control={<Checkbox />} label="Administration" />
                  <FormControlLabel control={<Checkbox />} label="Sample" />
                  <FormControlLabel control={<Checkbox />} label="Technical" />
                </FormGroup>
                <Divider />
                <div style={{ display: "flex", alignItems: "end", gap: 5 }}>
                  <Typography sx={{ fontSize: "medium" }}>Status:</Typography>
                  <FormControl sx={{ minWidth: 150 }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Inactive"}>Inactive</MenuItem>
                      <MenuItem value={"Managers"}>Managers</MenuItem>
                      <MenuItem value={"Group Managers"}>Group Managers</MenuItem>
                      <MenuItem value={"All Users"}>All Users</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <Stack>
                <Stack spacing={2} direction="row" justifyContent="flex-end">
                  <Button
                    variant="outline"
                    style={{
                      border: "0.5px solid #1C7AE4",
                      color: "white",
                      backgroundColor: "#1b7ae4",
                    }}
                    size="small"
                  >
                    <AiOutlineReload />
                  </Button>
                  <Button
                    variant="outline"
                    style={{ border: "0.5px solid grey", color: "#585958", color: "#585958" }}
                    size="small"
                    onClick={openUserForm}
                  >
                    Restore Users
                  </Button>
                  <Dialog open={isUserFormOpen} onClose={closeUserForm}>
                    {/* User form content here */}
                  </Dialog>
                  <ButtonGroup
                    variant="outline"
                    style={{
                      border: "0.5px solid #1C7AE4",
                      color: "white",
                      backgroundColor: "#1b7ae4",
                    }}
                    ref={anchorRef}
                    aria-label="split button"
                  >
                    <Button onClick={handleClickbtn}>{options[selectedIndex]}</Button>
                    <Button
                      size="small"
                      aria-controls={open ? "split-button-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-label="select merge strategy"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <AiOutlineArrowDown />
                    </Button>
                  </ButtonGroup>
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
                          transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClosebtn}>
                            <MenuList id="split-button-menu" autoFocusItem>
                              {options.map((option, index) => (
                                <MenuItem
                                  key={option}
                                  selected={index === selectedIndex}
                                  onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </Stack>
                <Stack spacing={2} margin={2} direction="row" justifyContent="flex-end">
                  <Button
                    variant="outline"
                    style={{ border: "0.5px solid grey", color: "#585958" }}
                    size="small"
                    disabled
                  >
                    Action
                  </Button>
                  <Button
                    variant="outline"
                    style={{ border: "0.5px solid grey", color: "#585958" }}
                    size="small"
                  >
                    <AiOutlineArrowDown /> Import Users
                  </Button>
                  <Button
                    variant="outline"
                    style={{
                      border: "0.5px solid #1C7AE4",
                      color: "white",
                      backgroundColor: "#1b7ae4",
                    }}
                    size="small"
                    onClick={openGroupForm}
                  >
                    <AiOutlinePlus /> Add
                  </Button>
                  <Dialog open={isGroupFormOpen} onClose={closeGroupForm}>
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
                      <TableCell>Sl. No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email/User ID</TableCell>
                      <TableCell>Manager</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell>1</TableCell>
                      <TableCell>Kalaiyarasi V</TableCell>
                      <TableCell>kalai@twintechsolution.com</TableCell>
                      <TableCell>
                        Vino Jebastian
                        <div style={{ fontSize: "12px", color: "gray" }}>
                          vino@twintechsolution.com
                        </div>
                      </TableCell>
                      <TableCell>
                        <SoftButton
                          onClick={handleClick}
                          variant="outlined"
                          color="info"
                          // onClick={() => handleArrowClick()}
                        >
                          <AiOutlineArrowRight />
                        </SoftButton>
                        <Popover
                          id={id}
                          open={openAnchor}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <MenuItem onClick={openAddLangModal}>
                            <EditIcon />
                            Edit User
                          </MenuItem>

                          <Modal
                            open={addLangModalOpen}
                            onClose={closeAddLangModal}
                            aria-labelledby="send-test-email-modal-title"
                            aria-describedby="send-test-email-modal-description"
                          >
                            <Box sx={style}>
                              <IconButton
                                aria-label="Close"
                                sx={{
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                }}
                                onClick={closeAddLangModal}
                              >
                                <HighlightOffOutlinedIcon style={{ fontSize: "medium" }} />
                              </IconButton>
                              <Typography
                                id="send-test-email-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Edit User - Kalaiyarasi V
                              </Typography>

                              <form>
                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    First Name:
                                  </label>
                                </Box>
                                <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                />
                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Last Name:
                                  </label>
                                </Box>
                                <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                />

                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Add user via Email or User ID?
                                  </label>
                                </Box>
                                <TextField
                                  select
                                  value={country}
                                  onChange={handleChanges}
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                >
                                  <MenuItem value="IN">Email</MenuItem>
                                  <MenuItem value="US">UserID</MenuItem>
                                </TextField>

                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Email:
                                  </label>
                                </Box>
                                <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                />
                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Manager
                                  </label>
                                </Box>
                                <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                />
                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Preferred Language:
                                  </label>
                                </Box>
                                <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                />
                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Group(s) :
                                  </label>
                                </Box>
                                <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                />
                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Exclude user from Auto Enrol:
                                  </label>
                                </Box>
                                <Switch {...label} />
                              </form>
                              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                <Button
                                  variant="contained"
                                  style={{
                                    border: "0.5px solid #1C7AE4",
                                    color: "white",
                                    backgroundColor: "#1b7ae4",
                                    marginTop: "15px",
                                  }}
                                >
                                  Save
                                </Button>
                              </Box>
                            </Box>
                          </Modal>

                          <FormControl>
                        
                              <MenuItem onClick={handleOpen}>
                                <DeleteIcon />
                                Delete User
                              </MenuItem>

                              <MenuItem component={Link} to="/editLandingPage">
                                <ArchiveIcon />
                                Mark as Archive
                              </MenuItem>
                              <MenuItem>
                                <AirplanemodeInactiveIcon />
                                Mark as inactive
                              </MenuItem>
                              <MenuItem component={Link} to="/editLandingPage">
                                <GroupAddIcon />
                                Add Users to Group
                              </MenuItem>
                              <MenuItem>
                                <SubscriptionsIcon />
                                Enrol on Course
                              </MenuItem>
                              <MenuItem component={Link} to="/editLandingPage">
                                <AnalyticsIcon />
                                Enrol on Gap Analysis
                              </MenuItem>
                              <MenuItem>
                                <DeleteIcon />
                                Unenrol from Course
                              </MenuItem>
                              <MenuItem component={Link} to="/editLandingPage">
                                <EditIcon />
                                Unenrol from Gap Analysis
                              </MenuItem>
                              <MenuItem>
                                <ImportExportIcon />
                                Export Course Data
                              </MenuItem>
                              <MenuItem component={Link} to="/editLandingPage">
                                <MarkEmailReadIcon />
                                Send Policy
                              </MenuItem>
                              <MenuItem>
                                <ImportExportIcon />
                                Export Policy Data
                              </MenuItem>
                              <MenuItem>
                                <ImportExportIcon />
                                Export Simulation Data
                              </MenuItem>
                        
                          </FormControl>

                          {/* <List>
                            <ListItem button onClick={() => console.log('Edit User')}>
                              <ListItemText secondary="Edit User" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Delete User" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Mark as Active" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Mark as Inactive" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Add Users to Group" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Enrol on Course" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Enrol on Gap Analysis" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Unerol from Course" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Unenrol from Gap Analysis" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Export Course Data" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Send Policy" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Export Policy Data" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete User')}>
                              <ListItemText secondary="Export Simulation Data" />
                            </ListItem>
                          </List> */}
                        </Popover>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Menu></Menu>
              </TableContainer>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      {open && (
        <DeleteUserModal
          open={open}
          onClose={handleCloses}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        />
      )}
    </DashboardLayout>
  );
}

export default Tables;
