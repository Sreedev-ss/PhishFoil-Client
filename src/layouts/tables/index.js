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
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ImportExportIcon from "@mui/icons-material/ImportExport";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  ClickAwayListener,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grow,
  IconButton,
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
  InputAdornment,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
import SendIcon from '@mui/icons-material/Send';

const items = ['Technical', 'Administration', 'Sample'];
const courses = [
  'Mobile Device Security Awareness: Terrys Tech Tragedy(Beginner)',
  'Home Network Security Awareness: Robs Router Routine(Beginner)',
  'Security Email Use'
];
const options = ["Download Group Managers Reports", "Download Reports", "Download Users Reports"];
const item1 = [
  "Password Constrution Guidelines",
  "Phishing test policy",
  "Policy 1",
  "Policy to test flow",
  "Test Policy",
  "Test policy 2",
];


function Tables() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);
  const [status, setStatus] = useState("Active");
  const [subject, setSubject] = useState("All");
  const label = { inputProps: { "aria-label": "Switch demo" } };

  //Delete Landing page
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);

  //Add language
  const [addLangModalOpen, setAddLangModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [addUsersOpen, setAddUsersOpen] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState(['Technical']);
  const [gapAnalysisModalOpen, setGapAnalysisModalOpen] = useState(false);
  const [unenrolGapAnalysisModalOpen, setUnenrolGapAnalysisModalOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [enrolCoursesModalOpen, setEnrolCoursesModalOpen] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState(['Home Network Security Awareness: Robes Routine(Beginner)']);
  const [unenrolCoursesModalOpen, setUnenrolCoursesModalOpen] = useState(false);
  const [activeModalOpen, setActiveModalOpen] = useState(false);
  const [inactiveModalOpen, setInactiveModalOpen] = useState(false);
  const [sendPolicy, setSendPolicy] = useState(false);
  const [selectedItems, setSelectedItems] = useState(["Policy 1"]);

  const openActiveModal = () => {
    setActiveModalOpen(true);
  };
  const closeActiveModal = () => {
    setActiveModalOpen(false);
  };
  const removeActiveUser = () => {
    closeActiveModal();
  };
  const openInactiveModal = () => {
    setInactiveModalOpen(true);
  };
  const closeInactiveModal = () => {
    setInactiveModalOpen(false);
  };
  const removeInactiveModal = () => {
    closeInactiveModal();
  };

  const openSendPolicy = () => {
    setSendPolicy(true);
  };
  const closeSendPolicy = () => {
    setSendPolicy(false);
  };
  const sendingPolicy = () => {
    closeSendPolicy();
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

  const openEnrolCoursesModal = () => {
    setEnrolCoursesModalOpen(true);
  };

  const closeEnrolCoursesModal = () => {
    setEnrolCoursesModalOpen(false);
  };

  const enrolCourses = () => {
    closeEnrolCoursesModal();
  };

  const openUnenrolCoursesModal = () => {
    setUnenrolCoursesModalOpen(true);
  };

  const closeUnenrolCoursesModal = () => {
    setUnenrolCoursesModalOpen(false);
  };

  const unenrolCourses = () => {
    closeUnenrolCoursesModal();
  };

  const handleChanges = (event) => {
    setCountry(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const openUnenrolAnalysisModal = () => {
    setUnenrolGapAnalysisModalOpen(true);
  };

  const closeUnenrolAnalysisModal = () => {
    setUnenrolGapAnalysisModalOpen(false);
  };

  const deleteUnenrolAnalysis = () => {
    closeUnenrolAnalysisModal();
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

  const openUsersModal = () => {
    setAddUsersOpen(true);
  };

  const closeUsersModal = () => {
    setAddUsersOpen(false);
  };

  const addUsers = () => {
    closeUsersModal();
  };

  const openGapAnalysisModal = () => {
    setGapAnalysisModalOpen(true);
  };

  const closeGapAnalysisModal = () => {
    setGapAnalysisModalOpen(false);
  };

  const removeGapAnalysis = () => {
    closeGapAnalysisModal();
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeUsers = (event) => {
    setSelectedGroups(event.target.value);
  };

  const handleChangeCourses = (event) => {
    setSelectedCourses(event.target.value);
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

  const handleDeleteGroup = (itemToDelete) => (event) => {
    console.log(itemToDelete);
    event.preventDefault();
    const updatedSelection = selectedGroups.filter((item) => item !== itemToDelete);
    setSelectedGroups(updatedSelection);
  };

  const handleDeleteCourses = (itemToDelete) => (event) => {
    console.log(itemToDelete);
    event.preventDefault();
    const updatedSelection = selectedCourses.filter((item) => item !== itemToDelete);
    setSelectedCourses(updatedSelection);
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
                          {/* Edit user */}
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

                            <MenuItem onClick={openActiveModal}>
                              <ArchiveIcon />
                              Mark as Active
                            </MenuItem>

                            <Modal
                              open={activeModalOpen}
                              onClose={closeActiveModal}
                              aria-labelledby="send-test-email-modal-title"
                              aria-describedby="send-test-email-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="send-test-email-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Are you sure you want to make the selected user active?
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
                                    onClick={removeActiveUser}
                                    style={{ color: "#fff" }}
                                  >
                                    No
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    onClick={closeActiveModal}
                                    style={{ marginRight: "5px", color: "black" }}
                                  >
                                    Yes
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>
                            <MenuItem onClick={openInactiveModal}>
                              <AirplanemodeInactiveIcon />
                              Mark as inactive
                            </MenuItem>
                            <Modal
                              open={inactiveModalOpen}
                              onClose={closeInactiveModal}
                              aria-labelledby="send-test-email-modal-title"
                              aria-describedby="send-test-email-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="send-test-email-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Are you sure you want to make the selected user inactive?
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
                                    onClick={removeInactiveModal}
                                    style={{ color: "#fff" }}
                                  >
                                    No
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    onClick={closeInactiveModal}
                                    style={{ marginRight: "5px", color: "black" }}
                                  >
                                    Yes
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>
                            {/* add-users */}
                            <MenuItem onClick={openUsersModal}>
                              <GroupAddIcon />
                              Add Users to Group
                            </MenuItem>

                            <Modal
                              open={addUsersOpen}
                              onClose={closeUsersModal}
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
                                  onClick={closeUsersModal}
                                >
                                  <HighlightOffOutlinedIcon style={{ fontSize: 'medium' }} />
                                </IconButton>
                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                  Add Users to Group(s)
                                </Typography>
                                <div>
                                  <FormControl sx={{ width: "330px", height: 'auto' }}>
                                    <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px", marginTop: '15px' }}>Group(s)</Typography>
                                    <Select
                                      labelId="multiple-select-label"
                                      id="multiple-select"
                                      multiple
                                      label='Select groups'
                                      value={selectedGroups}
                                      onChange={handleChangeUsers}
                                      MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                      renderValue={(selected) => (
                                        <div>
                                          {selected.map((item) => (
                                            <Chip
                                              key={item}
                                              label={item}
                                              onDelete={handleDeleteGroup(item)}
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
                                          <Checkbox checked={selectedCourses.indexOf(item) > -1} />
                                          <ListItemText secondary={item} />
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </div>

                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                  <Button variant="contained" onClick={addUsers} style={{ color: '#fff' }} >
                                    SAVE
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>

                            {/* Enrol on Course */}
                            <MenuItem onClick={openEnrolCoursesModal}>
                              <SendIcon />
                              Enrol on Course
                            </MenuItem>

                            <Modal
                              open={enrolCoursesModalOpen}
                              onClose={closeEnrolCoursesModal}
                              aria-labelledby="send-test-email-modal-title"
                              aria-describedby="send-test-email-modal-description"
                            >
                              {/* Content for the "Send Test Email" modal */}

                              <Box sx={style} style={{ width: '500px' }}>
                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                  Enrol Kalaiyarasi V on Course(s)
                                </Typography>
                                <FormControl sx={{ width: '350px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '',
                                      marginBottom: "5px",
                                      marginLeft: "2px",
                                      marginTop: '15px'
                                    }}
                                  >
                                    Subject:
                                  </Typography>
                                  <Select
                                    labelId="subject-label"
                                    id="subject-label"
                                    value={subject}
                                    label="Status"
                                    MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                    onChange={handleSubject}
                                    endAdornment={
                                      <InputAdornment position="end">
                                        <ExpandMoreIcon />
                                      </InputAdornment>
                                    }
                                  >
                                    <MenuItem value={'All'}>All</MenuItem>
                                    <MenuItem value={'InfoSec'}>InfoSec</MenuItem>
                                    <MenuItem value={'Video'}>Video</MenuItem>
                                    <MenuItem value={'Compliance'}>Compliance</MenuItem>
                                    <MenuItem value={'Custom'}>Custom</MenuItem>
                                  </Select>
                                </FormControl>
                                <FormControl sx={{ width: "350px", height: 'auto' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '',
                                      marginBottom: "5px",
                                      marginLeft: "2px",
                                      marginTop: '15px'
                                    }}
                                  >
                                    Course(s)
                                  </Typography>
                                  <Select
                                    labelId="multiple-select-label"
                                    id="multiple-select"
                                    multiple
                                    label='Select courses'
                                    value={selectedCourses}
                                    onChange={handleChangeCourses}
                                    MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                    renderValue={(selected) => (
                                      <div>
                                        {selected.map((item) => (
                                          <Chip
                                            key={item}
                                            label={item}
                                            onDelete={handleDeleteCourses(item)}
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
                                        <Checkbox checked={selectedCourses.indexOf(item) > -1} />
                                        <ListItemText secondary={item} />
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                  <Button variant="contained" onClick={enrolCourses} style={{ color: '#fff' }} >
                                    Enrol
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    onClick={closeEnrolCoursesModal}
                                    style={{ marginRight: '5px', color: 'black' }}
                                  >
                                    Cancel
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>

                            {/* Enrol on Gap Analysis */}
                            <MenuItem onClick={openGapAnalysisModal}>
                              <SendIcon style={{ fontSize: '15px' }} />
                              Enrol on Gap Analysis
                            </MenuItem>
                            <Modal
                              open={gapAnalysisModalOpen}
                              onClose={closeGapAnalysisModal}
                              aria-labelledby="send-test-email-modal-title"
                              aria-describedby="send-test-email-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                  Are you sure you want to enrol the selected user on Gap Analysis?
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    mt: 2,
                                    gap: 2
                                  }}
                                >
                                  <Button
                                    variant="contained"
                                    onClick={closeGapAnalysisModal}
                                    style={{ color: '#fff' }}
                                  >
                                    No
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    onClick={removeGapAnalysis}
                                    style={{ marginRight: '5px', color: 'black' }}
                                  >
                                    Yes
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>

                            {/* unenrol from Course */}
                            <MenuItem onClick={openUnenrolCoursesModal}>
                              <SendIcon />
                              Unenrol from Course
                            </MenuItem>

                            <Modal
                              open={unenrolCoursesModalOpen}
                              onClose={closeUnenrolCoursesModal}
                              aria-labelledby="send-test-email-modal-title"
                              aria-describedby="send-test-email-modal-description"
                            >
                              {/* Content for the "Send Test Email" modal */}

                              <Box sx={style} style={{ width: '500px' }}>
                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                  Enrol Kalaiyarasi V on Course(s)
                                </Typography>
                                <FormControl sx={{ width: '350px' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '',
                                      marginBottom: "5px",
                                      marginLeft: "2px",
                                      marginTop: '15px'
                                    }}
                                  >
                                    Subject:
                                  </Typography>
                                  <Select
                                    labelId="subject-label"
                                    id="subject-label"
                                    value={subject}
                                    label="Status"
                                    MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                    onChange={handleSubject}
                                    endAdornment={
                                      <InputAdornment position="end">
                                        <ExpandMoreIcon />
                                      </InputAdornment>
                                    }
                                  >
                                    <MenuItem value={'All'}>All</MenuItem>
                                    <MenuItem value={'InfoSec'}>InfoSec</MenuItem>
                                    <MenuItem value={'Video'}>Video</MenuItem>
                                    <MenuItem value={'Compliance'}>Compliance</MenuItem>
                                    <MenuItem value={'Custom'}>Custom</MenuItem>
                                  </Select>
                                </FormControl>
                                <FormControl sx={{ width: "350px", height: 'auto' }}>
                                  <Typography
                                    sx={{
                                      fontSize: '',
                                      marginBottom: "5px",
                                      marginLeft: "2px",
                                      marginTop: '15px'
                                    }}
                                  >
                                    Course(s)
                                  </Typography>
                                  <Select
                                    labelId="multiple-select-label"
                                    id="multiple-select"
                                    multiple
                                    label='Select courses'
                                    value={selectedCourses}
                                    onChange={handleChangeCourses}
                                    MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                    renderValue={(selected) => (
                                      <div>
                                        {selected.map((item) => (
                                          <Chip
                                            key={item}
                                            label={item}
                                            onDelete={handleDeleteCourses(item)}
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
                                        <Checkbox checked={selectedCourses.indexOf(item) > -1} />
                                        <ListItemText secondary={item} />
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
                                  <Button variant="contained" onClick={unenrolCourses} style={{ color: '#fff' }} >
                                    Unenrol
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    onClick={closeUnenrolCoursesModal}
                                    style={{ marginRight: '5px', color: 'black' }}
                                  >
                                    Cancel
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>

                            {/* Unenrol from Gap Analysis */}
                            <MenuItem onClick={openUnenrolAnalysisModal}>
                              <SendIcon style={{ fontSize: '15px' }} />
                              Unenrol from Gap Analysis
                            </MenuItem>
                            <Modal
                              open={unenrolGapAnalysisModalOpen}
                              onClose={closeUnenrolAnalysisModal}
                              aria-labelledby="send-test-email-modal-title"
                              aria-describedby="send-test-email-modal-description"
                            >
                              {/* Content for the "Send Test Email" modal */}

                              <Box sx={style}>
                                <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                                  Are you sure you want to unenrol this user from Gap Analysis?
                                </Typography>
                                <Box>
                                  <label
                                    htmlFor="name"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Please note the following:
                                    <li>A user will only be unenrolled if they have an outstanding Gap Analysis Questionnaire.</li>
                                    <li>This action will neither remove nor reset a completed questionnaire</li>
                                    <li>Users will not be notified that they have been unenrolled</li>
                                  </label>
                                </Box>
                                <Box>
                                  <label
                                    htmlFor="name"
                                    style={{ fontSize: "13px" }}
                                  >
                                    Number of Users to Unenrol:
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
                                    onClick={closeUnenrolAnalysisModal}
                                    style={{ color: '#fff' }}
                                  >
                                    No
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    onClick={deleteUnenrolAnalysis}
                                    style={{ marginRight: '5px', color: 'black' }}
                                  >
                                    Yes
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>

                            <MenuItem>
                              <ImportExportIcon />
                              Export Course Data
                            </MenuItem>
                            <MenuItem onClick={openSendPolicy}>
                              <MarkEmailReadIcon />
                              Send Policy
                            </MenuItem>
                            <Modal
                              open={sendPolicy}
                              onClose={closeSendPolicy}
                              aria-labelledby="send-test-email-modal-title"
                              aria-describedby="send-test-email-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="send-test-email-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Send Policy to Vedieshwaran R
                                </Typography>
                                <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Add user via Email or User ID?
                                  </label>
                                </Box>
                                <div>
                                  <FormControl sx={{ width: "330px", height: "auto" }}>
                                    <Typography
                                      sx={{
                                        fontSize: "",
                                        marginBottom: "5px",
                                        marginLeft: "2px",
                                        marginTop: "15px",
                                      }}
                                    >
                                      Language (s)
                                    </Typography>
                                    <Select
                                      labelId="multiple-select-label"
                                      id="multiple-select"
                                      multiple
                                      label="Select languages"
                                      value={selectedItems}
                                      onChange={handleChangeItems}
                                      MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                      renderValue={(selected) => (
                                        <div>
                                          {selected.map((item) => (
                                            <Chip
                                              key={item}
                                              label={item}
                                              onDelete={handleDelete(item)}
                                              sx={{
                                                marginRight: "5px",
                                                height: "20px",
                                              }}
                                            />
                                          ))}
                                        </div>
                                      )}
                                    >
                                      {item1.map((item) => (
                                        <MenuItem key={item} value={item}>
                                          <Checkbox checked={selectedItems.indexOf(item) > -1} />
                                          <ListItemText secondary={item} />
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </div>
                                {/* <TextField
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
                                </TextField> */}
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    mt: 2,
                                    gap: 2,
                                  }}
                                >
                                  <Button
                                    variant="outlined"
                                    onClick={closeSendPolicy}
                                    style={{ marginRight: "5px", color: "black" }}
                                  >
                                    No
                                  </Button>
                                  <Button
                                    variant="contained"
                                    onClick={sendingPolicy}
                                    style={{ marginRight: "5px", color: "black" }}
                                  >
                                    Yes
                                  </Button>
                                </Box>
                              </Box>
                            </Modal>
                            <MenuItem>
                              <ImportExportIcon />
                              Export Policy Data
                            </MenuItem>
                            <MenuItem>
                              <ImportExportIcon />
                              Export Simulation Data
                            </MenuItem>
                          </FormControl>
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
