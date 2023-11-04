// @mui material components
import Card from "@mui/material/Card";
/* eslint-disable */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { Close, Language } from "@mui/icons-material";
import { AiOutlineSearch } from "react-icons/ai";

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
  Collapse,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "400px",
  overflowY: "scroll",
};

const styleTable = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "500px",
  overflowY: "scroll",

}

const styleCSV = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "400px",
  overflowY: "scroll",
}
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

import csvIcon from '../../assets/images/csv.png';
import MicrosoftIcon from '../../assets/images/microsoft.png';
import GoogleIcon from '../../assets/images/google.png';

import {
  AiFillPlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineReload,
} from "react-icons/ai";

import SoftButton from "components/SoftButton";
import { useEffect, useRef, useState } from "react";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const items = ["Technical", "Administration", "Sample"];
const courses = [
  "Mobile Device Security Awareness: Terrys Tech Tragedy(Beginner)",
  "Home Network Security Awareness: Robs Router Routine(Beginner)",
  "Security Email Use",
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
const item2 = ["Administration", "Sample", "Technical"];
const groupManagers = ["Vino", "Vijay", "Velayutham"];

const host = 'http://localhost:8081';

const usersData = [
  {
    detailsid: '6f138b0f-f277-4f0a-83ec-3baa7ce71aa6',
    name: 'fin',
    emailid: 'vv@tcs.com',
    enableordisable: true,
    orgainzationrole: null,
    ismanager: true,
    manager: '9e99c765-1230-446e-82bd-035c2e771edd',
    managername: 'kumaren',
    manageremailid: 'kumar@tes.com',
    deleteddate: null,
    groups: [
      '202cc509-af5c-4d37-8361-1a24ff213е4a',
      '9e99c765-1230-4460-82b4-035c20771ed',
    ],
  },
];

function Users() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);
  const [status, setStatus] = useState("Active");
  const [subject, setSubject] = useState("All");
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [anchorEll, setAnchorEll] = useState(null);

  const [open, setOpen] = React.useState(false);

  //Add language
  const [addLangModalOpen, setAddLangModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [addUsersOpen, setAddUsersOpen] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState(["Technical"]);
  const [gapAnalysisModalOpen, setGapAnalysisModalOpen] = useState(false);
  const [unenrolGapAnalysisModalOpen, setUnenrolGapAnalysisModalOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [manager, setManager] = useState("");
  const [enrolCoursesModalOpen, setEnrolCoursesModalOpen] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([
    "Home Network Security Awareness: Robes Routine(Beginner)",
  ]);
  const [unenrolCoursesModalOpen, setUnenrolCoursesModalOpen] = useState(false);
  const [activeModalOpen, setActiveModalOpen] = useState(false);
  const [inactiveModalOpen, setInactiveModalOpen] = useState(false);
  const [sendPolicy, setSendPolicy] = useState(false);
  const [selectedItems, setSelectedItems] = useState(["Policy 1"]);
  const [groupItems, setGroupItems] = useState(["Technical"]);
  const [groupManager, setGroupmanagers] = useState(["Vijay"]);
  const [deleteUser, setDeleteUser] = useState(false);
  const [importUsersModal, setImportUsersModal] = useState(false);
  const [restoreUser, setRestoreUser] = useState(false);
  const [search, setSearch] = useState("");
  const [allUserData, setAllUserData] = useState([]);
  const [modalCSVOpen, setModalCSVOpen] = useState(false);
  const [csvContents, setCsvContents] = useState(null);
  const [allGroups, setAllGroups] = useState([])
  const [parentGroup, setParentGroup] = useState("")

  useEffect(() => {
    axios.get(`${host}/user/users/all/de24f5e0-382c-4657-b296-9fd673758c5a`).then((res) => {
      if (res.data) {
        setAllUserData(res.data)
      } else {
        toast.error('Failed fetching users')
      }
    }).catch(e => {
      console.log(e)
    })

    axios.get(`${host}/user/group/all/de24f5e0-382c-4657-b296-9fd673758c5a`).then((res) => {
      if (res.data) {
        setAllGroups(res.data)
        console.log(res.data, 'all')
      } else {
        toast.error('Failed fetching users')
      }
    }).catch(e => {
      console.log(e)
    })
  }, [])

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null)

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    manager: '',
    preferredlanguage: [],
    groups: groupItems,
    excludefromautoenrol: '',
  });

  // useEffect(() => {
  //   toast.success('Page loaded')
  // },[]);

  const handleCsvClick = () => {
    setModalCSVOpen(true);
  };

  const closeCSVModal = () => {
    setModalCSVOpen(false);
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      
      const lines = contents.split('\n');
      
      const header = lines[0].split(',').map((item) => item.trim()); 

      const data = [];
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map((item) => item.trim());
        if(values.length === header.length) {

          const entry = {};
          for (let j = 0; j < header.length; j++) {
            entry[header[j]] = values[j];
          }
          data.push(entry);
        }
      }

      setCsvContents(data);
    };

    reader.readAsText(file);
  };

  const handleDeleteCSV = (index) => {
    const updatedCsvContents = [...csvContents];
    updatedCsvContents.splice(index, 1);
    setCsvContents(updatedCsvContents);
  }



  const handleChangeAddUser = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(null);
  };

  const isFormValid = () => {
    const {
      firstname,
      lastname,
      email,
      manager,
      preferredlanguage,
      groups,
      excludefromautoenrol,
    } = formData;

    const firstnameRegex = /^[a-zA-Z0-9]+$/;
    const lastnameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (
      firstname.trim() !== "" &&
      lastname !== "" &&
      email.match(emailRegex) &&
      manager !== "" &&
      preferredlanguage !== "" &&
      groups.length !== 0
    );
  }

  const handleSubmitAddUser = async (e) => {
    console.log(formData)
    e.preventDefault();
    if (!isFormValid()) {
      setError("Please fill out all the required fields.");
      console.log('not valid')
      return;
    } else {
      try {
        const res = await axios.post(`${host}/user/new/de24f5e0-382c-4657-b296-9fd673758c5a`, formData);
        console.log("rrrrrrrrrr", res);
        if (res.data) {
          toast.success("Successfully created");
          setAllUserData(res.data)
          setSuccess("User added successfully");
          closeUsersModal()

        }
      } catch (err) {
        console.log(err)
        setError(err);
      }
    }
  };

  const [addGroupData, setAddGroupData] = useState({
    groupname: '',
    parentid: '',
    manager: ["Vijay"],
    manageremailid: '',
  });

  const handleChangeAddGroup = (e) => {
    const { name, value } = e.target;
    setAddGroupData({ ...addGroupData, [name]: value });
    setError(null)
  };

  const isAddGroupFormValid = () => {
    if (addGroupData['groupname'].trim() == "") {
      return false
    }
    return true
  };

  const handleAddGroupSubmit = async (e) => {
    e.preventDefault();
    console.log(addGroupData)
    if (!isAddGroupFormValid()) {
      setError("Group name is required");
    } else {
      try {
        const res = await axios.post(`${host}/user/newgroup/de24f5e0-382c-4657-b296-9fd673758c5a`, addGroupData);
        setAddGroupData({
          groupname: '',
          parentid: '',
          manager: ["Vijay"],
          manageremailid: '',
        })
        setAllGroups(res.data)
        toast.success("Successfully created");
        closeAddLangModal()
      } catch (err) {
        setError(err)
      }
    }
  };


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const openRestoreUser = () => {
    setRestoreUser(true);
  };

  const closeRestoreUser = () => {
    setRestoreUser(false);
  };


  const openImportUsersModal = () => {
    setImportUsersModal(true);
  };

  const closeImportUsersModal = () => {
    setImportUsersModal(false);
  };

  const handleClicks = (event) => {
    setAnchorEll(event.currentTarget);
  };

  const handleClos = () => {
    setAnchorEll(null);
  };

  //Delete User
  const OpendeleteUserModal = () => {
    setDeleteUser(true);
  };
  const closeDeleteUserModal = () => {
    setDeleteUser(false);
  };
  const deleteUserModal = () => {
    closeDeleteUserModal();
  };

  //Active
  const openActiveModal = () => {
    setActiveModalOpen(true);
  };
  const closeActiveModal = () => {
    setActiveModalOpen(false);
  };
  const removeActiveUser = () => {
    closeActiveModal();
  };
  //InActive
  const openInactiveModal = () => {
    setInactiveModalOpen(true);
  };
  const closeInactiveModal = () => {
    setInactiveModalOpen(false);
  };
  const removeInactiveModal = () => {
    closeInactiveModal();
  };
  //Policy

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
    ;
    event.preventDefault();
    const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
    setSelectedItems(updatedSelection);
  };

  //DeleteAddUserGroups
  const handleDeleteAddUserGroups = (itemToDelete) => (event) => {
    ;
    event.preventDefault();
    const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
    setGroupItems(updatedSelection);
  };
  //Groups in Edituser
  const handleChangeItem2 = (event) => {
    setGroupItems(event.target.value);
  };
  const handleDeleted = (itemToDelete) => (event) => {
    event.preventDefault();
    const updatedSelections = selectedItems.filter((item) => item !== itemToDelete);
    setGroupItems(updatedSelections);
  };
  //Group mangers in Add Group
  const handleGroupManagers = (event) => {
    setGroupmanagers(event.target.value);
  };
  const handletheDelete = (itemToDelete) => (event) => {
    event.preventDefault();
    const updateSelections = selectedItems.filter((item) => item !== itemToDelete);
    setGroupmanagers(updateSelections);
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
  const handleManagerChanges = (event) => {
    setManager(event.target.value);
  };
  const handleParentGroup = (event) => {
    setParentGroup(event.target.value)
  }
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
    setError('')
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

  const handleRestoreClick = (row) => {
    alert(`Restoring user: ${row.name}`);
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



  const CheckboxTree = ({ data, groups }) => {
    const [checked, setChecked] = useState({});

    const handleCheck = (name) => {
      setChecked((prevChecked) => ({
        ...prevChecked,
        [name]: !prevChecked[name],
      }));
    };

    const getParent = (child) => {
      return groups.find((item) => item.groupname === child.parentid);
    };

    return (
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked[item.groupid] || false}
                  onChange={() => handleCheck(item.groupid)}
                />
              }
              label={item.groupname}
            />
            {item.isparentgroup && (
              <div style={{ marginLeft: '20px' }}>
                <CheckboxTree data={groups.filter((g) => g.parentid === item.groupname)} groups={groups} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ToastContainer />
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
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Your Groups</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                      <CheckboxTree data={allGroups.filter((item) => !item.parentid)} groups={allGroups} />
                    </AccordionDetails>
                  </Accordion>
                  <AiFillPlusCircle
                    onClick={openAddLangModal}
                    style={{ cursor: 'pointer' }}
                  />

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
                      <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                        Add Group
                      </Typography>

                      <form>
                        <Box style={{ marginTop: "15px" }}>
                          <label htmlFor="name" style={{ fontSize: "13px" }}>
                            Group Name *:
                          </label>
                        </Box>
                        <TextField
                          fullWidth
                          type="text"
                          name="groupname"
                          sx={{ gridColumn: "span 2" }}
                          value={addGroupData.groupname}
                          onChange={handleChangeAddGroup}
                        />

                        <Box style={{ marginTop: "15px" }}>
                          <label htmlFor="name" style={{ fontSize: "13px" }}>
                            Parent Group:
                          </label>
                        </Box>
                        <TextField
                          select
                          name="parentid"
                          value={addGroupData.parentid}
                          onChange={handleChangeAddGroup}
                          fullWidth
                          type="text"
                          sx={{ gridColumn: "span 2" }}
                        >
                          <MenuItem value="Administration">Administration</MenuItem>
                          <MenuItem value="Technical">Technical</MenuItem>
                          <MenuItem value="Sample">Sample</MenuItem>
                        </TextField>
                        <div>

                          <FormControl sx={{ width: "330px", height: "auto" }}>
                            <Typography
                              sx={{
                                fontSize: '',
                                marginBottom: "5px",
                                marginLeft: "2px",
                                marginTop: '15px'
                              }}
                            >
                              Group Manager(s):</Typography>
                            <Select
                              labelId="multiple-select-label"
                              id="multiple-select"
                              multiple
                              name="manager"
                              label="Select Groups"
                              value={addGroupData.manager}
                              onChange={handleChangeAddGroup}
                              MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                              renderValue={(selected) => (
                                <div>
                                  {selected.map((item) => (
                                    <Chip
                                      key={item}
                                      label={item}
                                      onDelete={handletheDelete(item)}
                                      sx={{
                                        marginRight: "5px",
                                        height: "20px",
                                      }}
                                    />
                                  ))}
                                </div>
                              )}
                            >
                              {groupManagers.map((item) => (
                                <MenuItem key={item} value={item}>
                                  <Checkbox checked={addGroupData.manager.indexOf(item) > -1} />
                                  <ListItemText secondary={item} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
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
                          onClick={handleAddGroupSubmit}
                        >
                          Create Group
                        </Button>
                        <p style={{ fontSize: "12px", paddingX: "20px", color: "red" }}>{error ? error : null}</p>
                      </Box>
                    </Box>
                  </Modal>

                </div>
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
                    onClick={openRestoreUser}
                  >
                    Restore Users
                  </Button>

                  <Modal open={restoreUser} onClose={closeRestoreUser}>
                    <Box sx={styleTable}>
                      <IconButton
                        edge="end"
                        color="inherit"
                        onClick={closeRestoreUser}
                        style={{ position: "absolute", right: 10, top: 10, zIndex: 1 }}
                      >
                        <Close />
                      </IconButton>
                      <Typography>Resore Users</Typography>
                      <hr />

                      <Button
                        variant="outline"
                        style={{
                          border: "0.5px solid #d2d6da",
                          color: "#d4d4d4",
                          fontSize: "10px",
                          minWidth: 150,
                          maxHeight: 40,
                          marginTop: '15px'
                        }}
                        size="small"
                      >
                        Search for a user
                        <AiOutlineSearch style={{ color: "grey", fontSize: "15px" }} />
                      </Button>
                      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                        <Table sx={{ width: "100%" }} aria-label="simple table">
                          <TableHead sx={{ display: "table-header-group" }}>
                            <TableRow sx={{ width: "20px" }}>
                              <TableCell>Sl. No.</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell>Email ID</TableCell>
                              <TableCell>Deleted At</TableCell>
                              <TableCell>Restore</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell>1</TableCell>
                              <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>harri loganathan</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>harri@twintechsolution.com</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>20/10/2023 16:57:39</TableCell>
                              <TableCell>
                                <button onClick={handleRestoreClick} style={{ height: '30px', width: '100px', background: '#fff' }}>Restore User</button>
                              </TableCell>
                            </TableRow>

                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell>2</TableCell>
                              <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>harri loganathan</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>harri@twintechsolution.com</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>20/10/2023 16:57:39</TableCell>
                              <TableCell>
                                <button onClick={handleRestoreClick} style={{ height: '30px', width: '100px', background: '#fff' }}>Restore User</button>
                              </TableCell>
                            </TableRow>
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell>3</TableCell>
                              <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>harri loganathan</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>harri@twintechsolution.com</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>20/10/2023 16:57:39</TableCell>
                              <TableCell>
                                <button onClick={handleRestoreClick} style={{ height: '30px', width: '100px', background: '#fff' }}>Restore User</button>
                              </TableCell>
                            </TableRow>
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell>4</TableCell>
                              <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>harri loganathan</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>harri@twintechsolution.com</TableCell>
                              <TableCell style={{ fontSize: "13px" }}>20/10/2023 16:57:39</TableCell>
                              <TableCell>
                                <button onClick={handleRestoreClick} style={{ height: '30px', width: '100px', background: '#fff' }}>Restore User</button>
                              </TableCell>
                            </TableRow>

                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Modal>

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
                  <div >
                    {/* <Button
                      variant="outline"
                      style={{ border: "0.5px solid grey", color: "#585958" , marginRight: "10px" }}
                      size="small"
                      disabled
                    >
                      Action
                    </Button> */}
                    {/* <Button
                      variant="outline"
                      style={{ border: "0.5px solid grey", color: "#585958", marginRight: "10px" }}
                      size="small"
                    >
                      <AiOutlineArrowDown /> Import Users
                    </Button> */}
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #1C7AE4",
                        color: "white",
                        backgroundColor: "#1b7ae4",
                        marginRight: "10px"
                      }}
                      size="small"
                      onClick={handleClicks}
                    >
                      <AiOutlinePlus /> Add
                    </Button>
                    <Menu anchorEl={anchorEll} open={Boolean(anchorEll)} onClose={handleClos}>
                      <MenuItem onClick={openUsersModal}>User</MenuItem>
                      <Modal
                        open={addUsersOpen}
                        onClose={closeUsersModal}
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
                            onClick={closeUsersModal}
                          >
                            <HighlightOffOutlinedIcon style={{ fontSize: "medium" }} />
                          </IconButton>
                          <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                            Add User
                          </Typography>
                          <form>
                            <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                First Name:
                              </label>
                            </Box>
                            <TextField
                              fullWidth
                              type="text"
                              name="firstname"
                              sx={{ gridColumn: "span 2" }}
                              value={formData.firstname}
                              onChange={handleChangeAddUser}
                            />
                            <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                Last Name:
                              </label>
                            </Box>
                            <TextField
                              fullWidth
                              type="text"
                              name="lastname"
                              sx={{ gridColumn: "span 2" }}
                              value={formData.lastname}
                              onChange={handleChangeAddUser}
                            />

                            {/* <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                Add user via Email or User ID?
                              </label>
                            </Box>
                            <TextField
                              select
                              value={country}
                              onChange={handleChanges}
                              fullWidth
                              type="text"
                              sx={{ gridColumn: "span 2" }}
                            >
                              <MenuItem value="IN">Email</MenuItem>
                              <MenuItem value="US">UserID</MenuItem>
                            </TextField> */}

                            <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                Email:
                              </label>
                            </Box>
                            <TextField
                              fullWidth
                              type="email"
                              name="email"
                              sx={{ gridColumn: "span 2" }}
                              value={formData.email}
                              onChange={handleChangeAddUser}
                            />
                            <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                Manager
                              </label>
                            </Box>
                            <TextField
                              select
                              name="manager"
                              value={formData.manager}
                              onChange={handleChangeAddUser}
                              fullWidth
                              type="text"
                              sx={{ gridColumn: "span 2" }}
                            >
                              <MenuItem value="Vijay">Vijay</MenuItem>
                              <MenuItem value="Vino">Vino</MenuItem>
                              <MenuItem value="Vedieshwaran">Vedieshwaran</MenuItem>
                              <MenuItem value="Velayutham">Velayutham</MenuItem>
                            </TextField>
                            <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                Preferred Language:
                              </label>
                            </Box>
                            <TextField
                              select
                              name="preferredlanguage"
                              value={formData.preferredlanguage}
                              onChange={handleChangeAddUser}
                              fullWidth
                              type="text"
                              sx={{ gridColumn: "span 2" }}
                            >
                              <MenuItem value="English(UK)">English(UK)</MenuItem>
                              <MenuItem value="Italian">Italian</MenuItem>
                              <MenuItem value="Polish">Polish</MenuItem>
                              <MenuItem value="Malaysian">Malaysian</MenuItem>

                            </TextField>

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
                                  Groups
                                </Typography>
                                <Select
                                  labelId="multiple-select-label"
                                  id="multiple-select"
                                  multiple
                                  label="Select Groups"
                                  value={groupItems}
                                  onChange={handleChangeItem2}
                                  MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                  renderValue={(selected) => (
                                    <div>
                                      {selected.map((item) => (
                                        <Chip
                                          key={item}
                                          label={item}
                                          onDelete={handleDeleteAddUserGroups(item)}
                                          sx={{
                                            marginRight: "5px",
                                            height: "20px",
                                          }}
                                        />
                                      ))}
                                    </div>
                                  )}
                                >
                                  {item2.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      <Checkbox checked={groupItems.indexOf(item) > -1} />
                                      <ListItemText secondary={item} />
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>

                            {/* <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                /> */}
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
                              onClick={handleSubmitAddUser}
                              // disabled={!isFormValid()}
                              style={{
                                border: "0.5px solid #1C7AE4",
                                color: "white",
                                backgroundColor: "#1b7ae4",
                                marginTop: "15px",
                              }}
                            >
                              Save
                            </Button>
                            {success && (
                              <Typography
                                variant="success-message"
                                sx={{ fontSize: "12px", paddingX: "10px", textAlign: "center" }}
                              >
                                {success}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Modal>

                      <MenuItem onClick={openAddLangModal}>Group</MenuItem>

                      {/* <Modal
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
                          <Typography id="send-test-email-modal-title" variant="h6" component="h2">
                            Add Group
                          </Typography>

                          <form>
                            <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                Group Name:
                              </label>
                            </Box>
                            <TextField
                              fullWidth
                              type="text"
                              sx={{ gridColumn: "span 2" }}
                              value={addGroupData.groupname}
                              onChange={handleChangeAddGroup}
                            />

                            <Box style={{ marginTop: "15px" }}>
                              <label htmlFor="name" style={{ fontSize: "13px" }}>
                                Parent Group
                              </label>
                            </Box>
                            <TextField
                              select
                              value={manager}
                              onChange={handleManagerChanges}
                              fullWidth
                              type="text"
                              sx={{ gridColumn: "span 2" }}
                            >
                              <MenuItem value="Administration">Administration</MenuItem>
                              <MenuItem value="Technical">Technical</MenuItem>
                              <MenuItem value="Sample">Sample</MenuItem>
                            </TextField>

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
                                  Group Manager(s) :
                                </Typography>
                                <Select
                                  labelId="multiple-select-label"
                                  id="multiple-select"
                                  multiple
                                  label="Select Groups"
                                  value={groupManager}
                                  onChange={handleGroupManagers}
                                  MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                  renderValue={(selected) => (
                                    <div>
                                      {selected.map((item) => (
                                        <Chip
                                          key={item}
                                          label={item}
                                          onDelete={handletheDelete(item)}
                                          sx={{
                                            marginRight: "5px",
                                            height: "20px",
                                          }}
                                        />
                                      ))}
                                    </div>
                                  )}
                                >
                                  {groupManagers.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      <Checkbox checked={groupManager.indexOf(item) > -1} />
                                      <ListItemText secondary={item} />
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
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
                              Create Group
                            </Button>
                            <p style={{ fontSize: "12px", paddingX: "20px" }}>{message ? message : null}</p>
                            <p style={{ fontSize: "12px", paddingX: "20px", color: "red" }}>{error ? error : null}</p>
                          </Box>
                        </Box>
                      </Modal> */}
                    </Menu>
                  </div>

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
                      onClick={openImportUsersModal}
                    >
                      <AiOutlineArrowDown /> Import Users
                    </Button>
                    <Modal
                      open={importUsersModal}
                      onClose={closeImportUsersModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <IconButton
                          edge="end"
                          color="inherit"
                          onClick={closeImportUsersModal}
                          style={{ position: "absolute", right: 10, top: 10, zIndex: 1 }}
                        >
                          <Close />
                        </IconButton>
                        <Typography>Import Users</Typography>
                        <hr />
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          <div style={{ display: "flex", alignItems: "center", marginTop: '40px' }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor:'pointer' }} onClick={handleCsvClick}>
                              <img style={{ width: "50px", marginRight: "200px"  }} src={csvIcon} alt="csv Icon" />
                              <Typography variant="body2" style={{ marginRight: '200px'}}>CSV</Typography>                          
                            </div>

                            {modalCSVOpen && (
                              <div className="modal">
                                <div className="modal-content">
                                  {/* Your modal content goes here */}
                                  <Box sx={styleCSV}>
                                  <label 
                                      htmlFor="name" 
                                      style={{fontSize:"16px"}}
                                      >
                                          Import Users & Groups via CSV
                                  </label>
                                  <br/>
                                <input type="file" onChange={handleFileChange} />

                                {csvContents && csvContents.length > 0  ? (
                                  <div>
                                  <table style={{ marginBottom: '20px'}}>
                                    <thead style={{background:'grey' }}>
                                      <tr>
                                        {Object.keys(csvContents[0]).map((header) => (
                                          <th key={header}>{header}</th>
                                        ))}
                                        <th>Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {csvContents.map((entry, index) => (
                                        <tr key={index}>
                                          {Object.values(entry).map((value, index) => (
                                            <td key={index}>{value}</td>
                                          ))}
                                          <td>
                                            <button onClick={() => handleDeleteCSV(index)} >
                                              <DeleteIcon style={{color:'red'}}/>
                                              {/* <span role="img" aria-label="Delete">🗑️</span> */}
                                              
                                            </button>
                                          </td>
                                        </tr>
                                      ))}
                                      {/* <tr><button>delete</button></tr> */}
                                    </tbody>
                                  </table>
                                  <button onClick={closeCSVModal}>Close</button>
                                  </div>
                                ) : (
                                  // <p>No CSV data loaded.</p>
                                  <div>
                                    {/* <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Import Users & Groups via CSV
                                    </label>
                                    <p>No CSV data loaded.</p> */}
                                    <button onClick={closeCSVModal}>Close</button>
                                  </div>
                                )}                                                 
                                  <button>Upload</button>
                                </Box>
                                                                  
                                </div>
                              </div>
                            )}

                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                              <img style={{ width: "50px", marginRight: "250px" }} src={MicrosoftIcon} alt="Microsoft Icon" />
                              <Typography variant="body2" style={{ marginRight: '270px' }}>Microsoft</Typography>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                              <img style={{ width: "50px" }} src={GoogleIcon} alt="Google Icon" />
                              <Typography variant="body2">Google</Typography>
                            </div>
                          </div>
                        </Typography>
                      </Box>
                    </Modal>

                    {/* <Button
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
                  </Button> */}
                    {/* <Dialog open={isGroupFormOpen} onClose={closeGroupForm}> */}
                    {/* Group form content here */}
                    {/* </Dialog> */}
                  </Stack>
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
                      <TableCell>Email ID</TableCell>
                      <TableCell>Manager Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allUserData.length != 0 ? allUserData?.map((item, index) => (
                      <TableRow
                        key={index}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.emailid}</TableCell>

                        <TableCell>
                          {item.managername}
                          <div style={{ fontSize: "12px", color: "gray" }}>
                            {item.manageremailid}
                          </div>
                        </TableCell>
                        <TableCell>
                          <SoftButton onClick={handleClick} variant="outlined" color="info">
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
                            <MenuItem onClick={openAddLangModal} style={{ background: "#fff" }}>
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

                                    type="text"
                                    sx={{ gridColumn: "span 2" }}
                                  />
                                  <Box style={{ marginTop: "15px" }}>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Manager
                                    </label>
                                  </Box>
                                  <TextField
                                    select
                                    value={manager}
                                    onChange={handleManagerChanges}
                                    fullWidth

                                    type="text"
                                    sx={{ gridColumn: "span 2" }}
                                  >
                                    <MenuItem value="IN">Vijay</MenuItem>
                                    <MenuItem value="US">Vino</MenuItem>
                                    <MenuItem value="IN">Vedieshwaran</MenuItem>
                                    <MenuItem value="US">Velayutham</MenuItem>
                                  </TextField>
                                  <Box style={{ marginTop: "15px" }}>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Preferred Language:
                                    </label>
                                  </Box>
                                  <TextField
                                    fullWidth

                                    type="text"
                                    sx={{ gridColumn: "span 2" }}
                                  />
                                  {/* <Box style={{ marginTop: "15px" }}>
                                  <label htmlFor="name" style={{ fontSize: "13px" }}>
                                    Group(s) :
                                  </label>
                                </Box> */}
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
                                        Groups
                                      </Typography>
                                      <Select
                                        labelId="multiple-select-label"
                                        id="multiple-select"
                                        multiple
                                        label="Select Groups"
                                        value={groupItems}
                                        onChange={handleChangeItem2}
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
                                        {item2.map((item) => (
                                          <MenuItem key={item} value={item}>
                                            <Checkbox checked={selectedItems.indexOf(item) > -1} />
                                            <ListItemText secondary={item} />
                                          </MenuItem>
                                        ))}
                                      </Select>
                                    </FormControl>
                                  </div>

                                  {/* <TextField
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  sx={{ gridColumn: "span 2" }}
                                /> */}
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
                              <MenuItem onClick={OpendeleteUserModal} style={{ background: "#fff" }}>
                                <DeleteIcon />
                                Delete User
                              </MenuItem>

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
                                    Are you sure you want to delete the selected user?
                                  </Typography>

                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      This will delete:
                                      <li>Any breach scan for this user</li>
                                      <li>
                                        Any outstanding or completed course enrolments associated with
                                        this user
                                      </li>
                                      <li>
                                        Any pending or finished simulation results for this user
                                      </li>
                                      <li>
                                        Any outstanding or completed policy signature requests for
                                        this user
                                      </li>
                                      <li>
                                        All current and historical reporting data associated with this
                                        user
                                      </li>
                                    </label>
                                  </Box>
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Number of users to delete :
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
                                      onClick={deleteUserModal}
                                      style={{ marginRight: "5px", color: "black" }}
                                    >
                                      Yes
                                    </Button>
                                  </Box>
                                </Box>
                              </Modal>

                              <MenuItem onClick={openActiveModal} style={{ background: "#fff" }}>
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
                              <MenuItem onClick={openInactiveModal} style={{ background: "#fff" }}>
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
                              <MenuItem onClick={openUsersModal} style={{ background: "#fff" }}>
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
                                      position: "absolute",
                                      top: 0,
                                      right: 0,
                                    }}
                                    onClick={closeUsersModal}
                                  >
                                    <HighlightOffOutlinedIcon style={{ fontSize: "medium" }} />
                                  </IconButton>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Add Users to Group(s)
                                  </Typography>
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
                                        Group(s)
                                      </Typography>
                                      <Select
                                        labelId="multiple-select-label"
                                        id="multiple-select"
                                        multiple
                                        label="Select groups"
                                        value={selectedGroups}
                                        onChange={handleChangeUsers}
                                        MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                        renderValue={(selected) => (
                                          <div>
                                            {selected.map((item) => (
                                              <Chip
                                                key={item}
                                                label={item}
                                                onDelete={handleDeleteGroup(item)}
                                                sx={{
                                                  marginRight: "5px",
                                                  height: "20px",
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
                                    <Button
                                      variant="contained"
                                      onClick={addUsers}
                                      style={{ color: "#fff" }}
                                    >
                                      SAVE
                                    </Button>
                                  </Box>
                                </Box>
                              </Modal>

                              {/* Enrol on Course */}
                              <MenuItem
                                onClick={openEnrolCoursesModal}
                                style={{ background: "#fff" }}
                              >
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

                                <Box sx={style} style={{ width: "500px" }}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Enrol Kalaiyarasi V on Course(s)
                                  </Typography>
                                  <FormControl sx={{ width: "350px" }}>
                                    <Typography
                                      sx={{
                                        fontSize: "",
                                        marginBottom: "5px",
                                        marginLeft: "2px",
                                        marginTop: "15px",
                                      }}
                                    >
                                      Subject:
                                    </Typography>
                                    <Select
                                      labelId="subject-label"
                                      id="subject-label"
                                      value={subject}
                                      label="Status"
                                      MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                      onChange={handleSubject}
                                      endAdornment={
                                        <InputAdornment position="end">
                                          <ExpandMoreIcon />
                                        </InputAdornment>
                                      }
                                    >
                                      <MenuItem value={"All"}>All</MenuItem>
                                      <MenuItem value={"InfoSec"}>InfoSec</MenuItem>
                                      <MenuItem value={"Video"}>Video</MenuItem>
                                      <MenuItem value={"Compliance"}>Compliance</MenuItem>
                                      <MenuItem value={"Custom"}>Custom</MenuItem>
                                    </Select>
                                  </FormControl>
                                  <FormControl sx={{ width: "350px", height: "auto" }}>
                                    <Typography
                                      sx={{
                                        fontSize: "",
                                        marginBottom: "5px",
                                        marginLeft: "2px",
                                        marginTop: "15px",
                                      }}
                                    >
                                      Course(s)
                                    </Typography>
                                    <Select
                                      labelId="multiple-select-label"
                                      id="multiple-select"
                                      multiple
                                      label="Select courses"
                                      value={selectedCourses}
                                      onChange={handleChangeCourses}
                                      MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                      renderValue={(selected) => (
                                        <div>
                                          {selected.map((item) => (
                                            <Chip
                                              key={item}
                                              label={item}
                                              onDelete={handleDeleteCourses(item)}
                                              sx={{
                                                marginRight: "5px",
                                                height: "20px",
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
                                      onClick={enrolCourses}
                                      style={{ color: "#fff" }}
                                    >
                                      Enrol
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      onClick={closeEnrolCoursesModal}
                                      style={{ marginRight: "5px", color: "black" }}
                                    >
                                      Cancel
                                    </Button>
                                  </Box>
                                </Box>
                              </Modal>

                              {/* Enrol on Gap Analysis */}
                              <MenuItem onClick={openGapAnalysisModal} style={{ background: "#fff" }}>
                                <SendIcon style={{ fontSize: "15px" }} />
                                Enrol on Gap Analysis
                              </MenuItem>
                              <Modal
                                open={gapAnalysisModalOpen}
                                onClose={closeGapAnalysisModal}
                                aria-labelledby="send-test-email-modal-title"
                                aria-describedby="send-test-email-modal-description"
                              >
                                <Box sx={style}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Are you sure you want to enrol the selected user on Gap Analysis?
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
                                      onClick={closeGapAnalysisModal}
                                      style={{ color: "#fff" }}
                                    >
                                      No
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      onClick={removeGapAnalysis}
                                      style={{ marginRight: "5px", color: "black" }}
                                    >
                                      Yes
                                    </Button>
                                  </Box>
                                </Box>
                              </Modal>

                              {/* unenrol from Course */}
                              <MenuItem
                                onClick={openUnenrolCoursesModal}
                                style={{ background: "#fff" }}
                              >
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

                                <Box sx={style} style={{ width: "500px" }}>
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Enrol Kalaiyarasi V on Course(s)
                                  </Typography>
                                  <FormControl sx={{ width: "350px" }}>
                                    <Typography
                                      sx={{
                                        fontSize: "",
                                        marginBottom: "5px",
                                        marginLeft: "2px",
                                        marginTop: "15px",
                                      }}
                                    >
                                      Subject:
                                    </Typography>
                                    <Select
                                      labelId="subject-label"
                                      id="subject-label"
                                      value={subject}
                                      label="Status"
                                      MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                      onChange={handleSubject}
                                      endAdornment={
                                        <InputAdornment position="end">
                                          <ExpandMoreIcon />
                                        </InputAdornment>
                                      }
                                    >
                                      <MenuItem value={"All"}>All</MenuItem>
                                      <MenuItem value={"InfoSec"}>InfoSec</MenuItem>
                                      <MenuItem value={"Video"}>Video</MenuItem>
                                      <MenuItem value={"Compliance"}>Compliance</MenuItem>
                                      <MenuItem value={"Custom"}>Custom</MenuItem>
                                    </Select>
                                  </FormControl>
                                  <FormControl sx={{ width: "350px", height: "auto" }}>
                                    <Typography
                                      sx={{
                                        fontSize: "",
                                        marginBottom: "5px",
                                        marginLeft: "2px",
                                        marginTop: "15px",
                                      }}
                                    >
                                      Course(s)
                                    </Typography>
                                    <Select
                                      labelId="multiple-select-label"
                                      id="multiple-select"
                                      multiple
                                      label="Select courses"
                                      value={selectedCourses}
                                      onChange={handleChangeCourses}
                                      MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                                      renderValue={(selected) => (
                                        <div>
                                          {selected.map((item) => (
                                            <Chip
                                              key={item}
                                              label={item}
                                              onDelete={handleDeleteCourses(item)}
                                              sx={{
                                                marginRight: "5px",
                                                height: "20px",
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
                                      onClick={unenrolCourses}
                                      style={{ color: "#fff" }}
                                    >
                                      Unenrol
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      onClick={closeUnenrolCoursesModal}
                                      style={{ marginRight: "5px", color: "black" }}
                                    >
                                      Cancel
                                    </Button>
                                  </Box>
                                </Box>
                              </Modal>

                              {/* Unenrol from Gap Analysis */}
                              <MenuItem
                                onClick={openUnenrolAnalysisModal}
                                style={{ background: "#fff" }}
                              >
                                <SendIcon style={{ fontSize: "15px" }} />
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
                                  <Typography
                                    id="send-test-email-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    Are you sure you want to unenrol this user from Gap Analysis?
                                  </Typography>
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Please note the following:
                                      <li>
                                        A user will only be unenrolled if they have an outstanding Gap
                                        Analysis Questionnaire.
                                      </li>
                                      <li>
                                        This action will neither remove nor reset a completed
                                        questionnaire
                                      </li>
                                      <li>
                                        Users will not be notified that they have been unenrolled
                                      </li>
                                    </label>
                                  </Box>
                                  <Box>
                                    <label htmlFor="name" style={{ fontSize: "13px" }}>
                                      Number of Users to Unenrol:
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
                                    }}
                                  >
                                    <Button
                                      variant="contained"
                                      onClick={closeUnenrolAnalysisModal}
                                      style={{ color: "#fff" }}
                                    >
                                      No
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      onClick={deleteUnenrolAnalysis}
                                      style={{ marginRight: "5px", color: "black" }}
                                    >
                                      Yes
                                    </Button>
                                  </Box>
                                </Box>
                              </Modal>

                              <MenuItem style={{ background: "#fff" }}>
                                <ImportExportIcon />
                                Export Course Data
                              </MenuItem>
                              <MenuItem onClick={openSendPolicy} style={{ background: "#fff" }}>
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
                                        Policy
                                      </Typography>
                                      <Select
                                        labelId="multiple-select-label"
                                        id="multiple-select"
                                        multiple
                                        label="Select Policy"
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
                              <MenuItem style={{ background: "#fff" }}>
                                <ImportExportIcon />
                                Export Policy Data
                              </MenuItem>
                              <MenuItem style={{ background: "#fff" }}>
                                <ImportExportIcon />
                                Export Simulation Data
                              </MenuItem>
                            </FormControl>
                          </Popover>
                        </TableCell>
                      </TableRow>
                    )) : <div>NO Data</div>}
                  </TableBody>
                </Table>
                <Menu></Menu>
              </TableContainer>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Users;