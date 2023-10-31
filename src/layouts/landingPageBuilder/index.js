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

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import SoftButton from "components/SoftButton";
import { useRef, useState } from "react";
import CreateLandingPage from "./createLandingPage";

import EditLandingPage from "./data/editLandingPage";
import DeleteModal from "components/Modal/DeleteModal";
import RemoveModal from "components/Modal/RemoveModal";

const options = ["Download Group Managers Reports", "+ Create Email Template"];

function LandingPageBuilder() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [status, setStatus] = useState("Active");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpened = () => setOpenModal(true);
  const handleClosed = () => setOpenModal(false);

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
                          <MenuItem component={Link} to="/editLandingPage">
                            <EditIcon />
                            Edit Landing Page
                          </MenuItem>

                          {/* <Button onClick={handleOpen}>Open modal</Button> */}

                          <MenuItem onClick={handleOpen}>
                            <DeleteIcon />
                            Delete Landing Page
                          </MenuItem>

                          <MenuItem component={Link} to="/CreateLandingPage">
                            <EditIcon />
                            Preview Landing Page
                          </MenuItem>
                          <MenuItem component={Link} to="/createlanding">
                            <EditIcon />
                            Clone Landing Page
                          </MenuItem>
                          <MenuItem>
                            <EditIcon />
                            Add Language(s)
                          </MenuItem>

                          <MenuItem onClick={handleOpened}>
                            <EditIcon />
                            Remove Language(s)
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
        {openModal && (
          <RemoveModal 
          openModal={openModal}
          onClosed={handleClosed}
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
