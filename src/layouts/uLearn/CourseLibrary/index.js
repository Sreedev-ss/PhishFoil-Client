import {
    Button,
    Card,
    Checkbox,
    Chip,
    Divider,
    FormControl,
    MenuItem,
    Select,
    Stack,
    Typography,
  } from "@mui/material";
  import SoftBox from "components/SoftBox";
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import DashboardNavbar from "examples/Navbars/DashboardNavbar";
  import React, { useState } from "react";
  import { AiOutlineSearch } from "react-icons/ai";
  import ListItemText from "@mui/material/ListItemText";
  const items = ["English", "Dutch", "Czech", "Danish", "Spanish"];
  import addImage from "assets/images/images.png";
  import CreateSimulation from "./createSimulation";
  
  import IconButton from "@mui/material/IconButton";
  import LanguageIcon from "@mui/icons-material/Language";
  import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
  
  const CourseLibrary = () => {
    const [openTemp, setOpenTemp] = useState(false);
  
    const [type, setType] = useState("All");
    const [category, setCategory] = useState("All");
    const [selectedItems, setSelectedItems] = useState(["English"]);
  
    const handleChange = (event) => {
      setSelectedItems(event.target.value);
    };
  
    const handleType = (event) => {
      setType(event.target.value);
    };
    const handleCategory = (event) => {
      setCategory(event.target.value);
    };
  
    const handleOpenTemplate = () => {
      // Your logic to open the template
    };
  
    const handleDelete = (itemToDelete) => (event) => {
      console.log(itemToDelete);
      event.preventDefault();
      const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
      setSelectedItems(updatedSelection);
    };
  
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Card sx={{ minHeight: "75vh" }}>
              {!openTemp ? (
                <SoftBox
                  p={3}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
                      uLearn - Course Library
                      <span style={{marginLeft:'830px', fontWeight:'lighter'}}>109 courses</span>
                      </Typography>
                    </div>
                    <Divider />
                  </div>
                  <Stack direction="row" justifyContent="space-between" alignItems="end">
                    <div style={{ display: "flex", marginTop: "1rem", gap: 15 }}>
                      <FormControl sx={{ minWidth: 150 }}>
                        <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                          Type:
                        </Typography>
                        <Select
                          labelId="type-label"
                          id="type-label"
                          value={type}
                          label="Type"
                          onChange={handleType}
                        >
                          <MenuItem value={"All"}>All</MenuItem>
                          <MenuItem value={"Core"}>Core</MenuItem>
                          <MenuItem value={"Default"}>Default</MenuItem>
                          <MenuItem value={"Customs"}>Customs</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ minWidth: 150 }}>
                        <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                          Difficulty:
                        </Typography>
                        <Select
                          labelId="type-label"
                          id="type-label"
                          value={type}
                          label="Type"
                          onChange={handleType}
                        >
                          <MenuItem value={"All"}>All</MenuItem>
                          <MenuItem value={"Beginner"}>Beginner</MenuItem>
                          <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                          <MenuItem value={"Advanced"}>Advanced</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ minWidth: 150 }}>
                        <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                          Subject:
                        </Typography>
                        <Select
                          labelId="type-label"
                          id="type-label"
                          value={type}
                          label="Type"
                          onChange={handleType}
                        >
                          <MenuItem value={"All"}>All</MenuItem>
                          <MenuItem value={"Compliance"}>Compliance</MenuItem>
                          <MenuItem value={"Custom"}>Custom</MenuItem>
                          <MenuItem value={"InfoSec"}>InfoSec</MenuItem>
                          <MenuItem value={"Video"}>Video</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ minWidth: 150 }}>
                        <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                          Category:
                        </Typography>
                        <Select
                          labelId="category-label"
                          id="category-label"
                          value={category}
                          label="Status"
                          MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                          onChange={handleCategory}
                        >
                          <MenuItem value={"All"}>All</MenuItem>
                          <MenuItem value={"Cloud Security"}>Cloud Security</MenuItem>
                          <MenuItem value={"Phishing"}>Phishing</MenuItem>
                          <MenuItem value={"Public Wifi"}>Public Wifi</MenuItem>
                          <MenuItem value={"Physical Security"}>Physical Security</MenuItem>
                          <MenuItem value={"Removable Media"}>Removable Media</MenuItem>
                          <MenuItem value={"Social Media"}>Social Media</MenuItem>
                          <MenuItem value={"Social Engineering"}>Social Engineering</MenuItem>
                          <MenuItem value={"Security at Home"}>Security at Home</MenuItem>
                          <MenuItem value={"Secure Passwords"}>Secure Passwords</MenuItem>
                          <MenuItem value={"Working Remotely"}>Working Remotely</MenuItem>
                          <MenuItem value={"Mobile Device Security"}>Mobile Device Security</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ minWidth: 230, maxWidth: 330, height: "auto" }}>
                        <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                          Language(s):
                        </Typography>
                        <Select
                          labelId="multiple-select-label"
                          id="multiple-select"
                          multiple
                          label="Select languages"
                          value={selectedItems}
                          onChange={handleChange}
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
                    <Button
                      variant="outline"
                      style={{
                        border: "0.5px solid #d2d6da",
                        color: "#d4d4d4",
                        fontSize: "10px",
                        minWidth: 150,
                        maxHeight: 40,
                      }}
                      size="small"
                    >
                      Search Courses...
                      <AiOutlineSearch style={{ color: "grey", fontSize: "15px" }} />
                    </Button>
                  </Stack>
                  <div
                    style={{
                      border: "0.5px solid #d2d6da",
                      width: "30%",
                      borderRadius: "4px",
                      height: "20rem",
                      marginTop: "1.2rem",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    <IconButton
                      style={{
                        background: "#fff",
                        borderRadius: "50%",
                        justifyContent: "end",
                      }}
                      onClick={handleOpenTemplate}
                    >
                      <LanguageIcon fontSize="small" />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "100px",
                      }}
                    >
                      <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/iconpack-004/tick-15.png"
                        height="100px"
                        alt="name"
                        style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 5 }}
                      />
                      <h3>Title</h3>
                      <h6 style={{ fontWeight: 200 }}>Category</h6>
                      <div
                        style={{
                          width: "100%",
                          background: "#EEEEEE",
                          padding: "10px",
                          color: "white",
                          textAlign: "center",
                          position: "absolute",
                          bottom: 0,
                        }}
                      >
                        <PersonAddAltIcon color="black" />
                      </div>
                    </div>
                  </div>
                </SoftBox>
              ) : (
                <SoftBox
                  p={3}
                >
                  <CreateSimulation />
                </SoftBox>
              )}
            </Card>
          </SoftBox>
        </SoftBox>
      </DashboardLayout>
    );
  };
  
  export default CourseLibrary;
  