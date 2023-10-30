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
import { Box, Button, ButtonGroup, Checkbox, ClickAwayListener, Dialog, Divider, FormControl, FormControlLabel, FormGroup, Grow, IconButton, InputLabel, List, ListItem, ListItemText, Menu, MenuItem, MenuList, Modal, Popover, Popper, Select, Stack, Typography } from '@mui/material'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiFillPlusCircle, AiOutlineArrowDown, AiOutlineArrowRight, AiOutlinePlus, AiOutlineReload, AiOutlineSearch, AiOutlineEdit } from 'react-icons/ai';


// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import SoftButton from "components/SoftButton";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
                  <ButtonGroup variant="outline" style={{ border: '0.5px solid #1C7AE4', color: 'white', backgroundColor: '#1b7ae4' }} ref={anchorRef} aria-label="split button">
                    {/* <Button onClick={handleClickbtn}>{options[selectedIndex]}</Button> */}
                    <Button onClick={() => {navigate('/emailTemplateBuilder/create-email-template')}}
                    >
                        + Create Email Template
                    </Button>
                    {/* <Button
                      size="small"
                      aria-controls={open ? 'split-button-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-label="select merge strategy"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                    </Button> */}
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
                          transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                      >
                        {/* <Paper>
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
                        </Paper> */}
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
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                          <List>
                            <ListItem button onClick={() => console.log('Edit Email Template')}>
                              <ListItemText secondary="Edit Email Template" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Send Test Email')}>
                              <ListItemText secondary="Send Test Email" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Clone Email Template')}>
                              <ListItemText secondary="Clone Email Template" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Add Language(s)')}>
                              <ListItemText secondary="Add Language(s)" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Remove Language(s)')}>
                              <ListItemText secondary="Remove Language(s)" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete Email Template')}>
                              <ListItemText secondary="Delete Email Template" />
                            </ListItem>
                          </List>
                        </Popover>
                      </TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>2</TableCell>
                      <TableCell style={{fontSize:"13px", color:"#209ce8"}}>REAL | Microsoft Account Access</TableCell>
                      <TableCell style={{fontSize:"13px"}}>Cloud Services</TableCell>
                      <TableCell style={{fontSize:"13px"}}>
                        <ul>English(UK)</ul>
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
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                          <List>
                            <ListItem button onClick={() => console.log('Edit Email Template')}>
                              <ListItemText secondary=" Edit Email Template" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Send Test Email')}>
                              <ListItemText secondary="Send Test Email" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Clone Email Template')}>
                              <ListItemText secondary="Clone Email Template" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Add Language(s)')}>
                              <ListItemText secondary="Add Language(s)" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Remove Language(s)')}>
                              <ListItemText secondary="Remove Language(s)" />
                            </ListItem>
                            <ListItem button onClick={() => console.log('Delete Email Template')}>
                              <ListItemText secondary="Delete Email Template" />
                            </ListItem>
                          </List>
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
