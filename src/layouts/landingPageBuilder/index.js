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
import React from "react";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

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
  Typography,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import {
  AiFillPlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineReload,
  AiOutlineSearch,
  AiOutlineEdit,
} from "react-icons/ai";

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
};

const languageOptions = ["English", "Spanish", "French", "German"];

// Data
import authorsTableData from "layouts/users/data/authorsTableData";
import projectsTableData from "layouts/users/data/projectsTableData";
import SoftButton from "components/SoftButton";
import { useRef, useState } from "react";
import CreateLandingPage from "./createLandingPage";

import EditLandingPage from "./data/editLandingPage";
import DeleteModal from "components/Modal/DeleteModal";
import RemoveModal from "components/Modal/RemoveModal";
const items = ["English", "Dutch", "Czech", "Danish", "Spanish"];

const options = ["Download Group Managers Reports", "+ Create Email Template"];

function LandingPageBuilder() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);
  const [removeLangModalOpen, setRemoveLangModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(["English"]);

  //Delete Landing page
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);

  //Add language
  const [addLangModalOpen, setAddLangModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [openRemoveModal, setOpenRemoveModal] = useState(false);

  // Function to open the RemoveModal
  const handleOpenRemoveModal = () => {
    setOpenRemoveModal(true);
  };

  // Function to close the RemoveModal
  const handleCloseRemoveModal = () => {
    setOpenRemoveModal(false);
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

  
  const handleDelete = (itemToDelete) => (event) => {
    console.log(itemToDelete);
    event.preventDefault();
    const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
    setSelectedItems(updatedSelection);
  };

  const handleChangeItems = (event) => {
    setSelectedItems(event.target.value);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                  <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
                    Uphish - Landing Page Builder
                  </Typography>
                </div>
                <Divider />
              </div>
              <Stack>
                <Stack spacing={2} direction="row" justifyContent="flex-end">
                  <Button
                    variant="outline"
                    style={{ border: "0.5px solid grey", color: "#d4d4d4", fontSize: "10px" }}
                    size="small"
                    onClick={openUserForm}
                  >
                    Search for an item...
                    <AiOutlineSearch style={{ color: "gray", fontSize: "15px" }} />
                  </Button>
                  <Dialog open={isUserFormOpen} onClose={closeUserForm}>
                    {/* User form content here */}
                  </Dialog>

                  <Link to="/uphish/CreateLandingPage">
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #1C7AE4",
                        color: "white",
                        backgroundColor: "#1b7ae4",
                        fontWeight: "lighter",
                      }}
                    >
                      + Create Landing Page
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
                  <Divider />
                  <TableHead sx={{ display: "table-header-group" }}>
                    <TableRow sx={{ width: "20px" }}>
                      <TableCell>Sl. No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Language(s)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell>1</TableCell>
                      <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>
                        Argentina | AFIP | TEST
                      </TableCell>
                      <TableCell style={{ fontSize: "13px" }}>Government</TableCell>
                      <TableCell style={{ fontSize: "13px" }}>
                        <ul>Spanish</ul>
                        <ul>Spanish(Argentina)</ul>
                        <ul>Swedish</ul>
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
                          <MenuItem component={Link} to="/editLandingPage" style={{background:'#fff'}}>
                            <EditIcon />
                            Edit Landing Page
                          </MenuItem>
                          <MenuItem onClick={handleOpen} style={{background:'#fff'}}>
                            <DeleteIcon />
                            Delete Landing Page
                          </MenuItem>
                          <MenuItem component={Link} to="/cloneLandingPage" style={{background:'#fff'}}>
                            <FileCopyOutlinedIcon style={{ fontSize: "small" }} />
                            Clone Landing Page
                          </MenuItem>
                          <MenuItem onClick={openAddLangModal} style={{background:'#fff'}}>
                            <AddCircleOutlineOutlinedIcon style={{ fontSize: "small" }} />
                            Add Language(s)
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
                                Add Language(s) to the Selected Landing Page
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
                                    {items.map((item) => (
                                      <MenuItem key={item} value={item}>
                                        <Checkbox checked={selectedItems.indexOf(item) > -1} />
                                        <ListItemText secondary={item} />
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </div>

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
                                  Add Language(s)
                                </Button>
                              </Box>
                            </Box>
                          </Modal>

                          <MenuItem onClick={openRemoveLangModal} style={{background:'#fff'}}>
                            <RemoveCircleOutlineOutlinedIcon style={{ fontSize: "small" }} />
                            Remove Language(s)
                          </MenuItem>
                          <Modal
                            open={removeLangModalOpen}
                            onClose={closeRemoveLangModal}
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
                                onClick={closeRemoveLangModal}
                              >
                                <HighlightOffOutlinedIcon style={{ fontSize: "medium" }} />
                              </IconButton>
                              <Typography
                                id="send-test-email-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Remove Language(s) from the Selected Email Templates
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
                                    {items.map((item) => (
                                      <MenuItem key={item} value={item}>
                                        <Checkbox checked={selectedItems.indexOf(item) > -1} />
                                        <ListItemText secondary={item} />
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </div>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                <Button
                                  variant="contained"
                                  onClick={removeLang}
                                  style={{ color: "#fff" }}
                                >
                                  Remove Language(s)
                                </Button>
                              </Box>
                            </Box>
                          </Modal>
                          <MenuItem component={Link} to="/CreateLandingPage" style={{background:'#fff'}}>
                            <FileCopyOutlinedIcon style={{ fontSize: "small" }} />
                            Preview Landing Page
                          </MenuItem>
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
        {openRemoveModal && (
          <RemoveModal
            open={openRemoveModal}
            onClose={handleCloseRemoveModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          />
        )}
      </SoftBox>
      {open && (
        <DeleteModal
          open={open}
          onClose={handleCloses}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        />
      )}
    </DashboardLayout>
  );
}

export default LandingPageBuilder;
