// import React from "react";
// import Button from "@material-ui/core/Button";
// const ChooseLandingPageComponent = () => {
//   return (
//     // Your component for "Choose your landing page"
//     <div>
//       <h2>Choose your landing page</h2>

//       {/* Add your content here */}
//     </div>
//   );
// };

// export default ChooseLandingPageComponent;
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import { AiFillInfoCircle, AiOutlineSearch } from "react-icons/ai";
import ListItemText from "@mui/material/ListItemText";
const items = ["English", "Dutch", "Czech", "Danish", "Spanish"];
import addImage from "assets/images/images.png";
import CreateSimulation from "layouts/createSimulation/createSimulation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";

import Link from "@mui/material/Link";
import ChooseLandingPageComponent from "layouts/ChooseLandingPage";
import ChooseEmailComponent from "layouts/ChooseEmail";
import ConfigureComponent from "layouts/ConfigureComponent";
import ScheduleComponent from "layouts/ScheduleComponent";
import StepButton from "@mui/material/StepButton";
const steps = ["Select campaign settings", "Create an ad group", "Create an ad"];

const Simulation = () => {
  const [openTemp, setOpenTemp] = useState(false);

  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");
  const [selectedItems, setSelectedItems] = useState(["English"]);
  const [openType, setOpenType] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (event) => {
    setSelectedItems(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleDelete = (itemToDelete) => (event) => {
    console.log(itemToDelete);
    event.preventDefault();
    const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
    setSelectedItems(updatedSelection);
  };

  return (
    <div>
      {/* <Card sx={{ minHeight: "75vh" }}> */}
      {!openTemp ? (
        <SoftBox
          // display="flex"
          // flexDirection="row"
          // justifyContent="space-between"
          // alignItems="flex-end"
          p={3}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
                Uphish - Create Simulation
              </Typography>
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                paddingLeft: "6px",

                gap: "6px",
                padding: "4px",
                width: "100%",
                height: "2.5rem",
                backgroundColor: "#e7f6fe",
                border: "0.5px solid #91d5ff",
                fontSize: "medium",
                alignItems: "center",
              }}
            >
              <AiFillInfoCircle fontSize="large" />
              <span>Please select the landing page for your simulation.</span>
            </div>
          </div>
          <Typography
            sx={{
              fontSize: "medium",
              color: "black",
              fontWeight: "500",
              marginTop: "1.7rem",
            }}
          >
            Choose your landing page
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="end">
            <div style={{ display: "flex", marginTop: "1rem", gap: 15 }}>
              <FormControl sx={{ minWidth: 150 }}>
                <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                  Type
                </Typography>
                <Select
                  labelId="type-label"
                  id="type-label"
                  select
                  value={type}
                  onChange={handleType}
                  open={openType}
                  onOpen={() => setOpenType(true)}
                  onClose={() => setOpenType(false)}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"Default"}>Default</MenuItem>
                  <MenuItem value={"Customs"}>Customs</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 150 }}>
                <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                  Category
                </Typography>
                <Select
                  labelId="category-label"
                  id="category-label"
                  value={category}
                  label="Status"
                  MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                  onChange={handleCategory}
                  open={openCategory}
                  onOpen={() => setOpenCategory(true)}
                  onClose={() => setOpenCategory(false)}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"No Category"}>No Category</MenuItem>
                  <MenuItem value={"Bills"}>Bills</MenuItem>
                  <MenuItem value={"Cloud Services"}>Cloud Services</MenuItem>
                  <MenuItem value={"Delivery"}>Delivery</MenuItem>
                  <MenuItem value={"Finance"}>Finance</MenuItem>
                  <MenuItem value={"Government"}>Government</MenuItem>
                  <MenuItem value={"Internal"}>Internal</MenuItem>
                  <MenuItem value={"News & Entertainment"}>News & Entertainment</MenuItem>
                  <MenuItem value={"Shopping"}>Shopping</MenuItem>
                  <MenuItem value={"Social Media"}>Social Media</MenuItem>
                  <MenuItem value={"Travel"}>Travel</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 230, maxWidth: 330, height: "auto" }}>
                <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                  Language (s)
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
                            height: "20px", // Adjust the height as needed
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
              Search for an item...
              <AiOutlineSearch style={{ color: "grey", fontSize: "15px" }} />
            </Button>
          </Stack>
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                border: "0.5px solid #d2d6da",
                width: "30%",
                borderRadius: "4px",
                height: "20rem",
                marginTop: "1.2rem",
              }}
              onClick={() => setOpenTemp(true)}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={addImage} alt="name" />
              </div>
              <Typography
                sx={{
                  fontSize: "medium",
                  color: "black",
                  fontWeight: "500",
                  paddingLeft: "15px",
                }}
              >
                Create New Template
              </Typography>
            </div>
            {/* <Button onClick={() => handleStep()}>
              <div
                style={{
                  border: "0.5px solid #d2d6da",
                  width: "150px",
                  borderRadius: "4px",
                  height: "20rem",
                  marginTop: "1.2rem",
                }}
              >
             
                <Typography
                  sx={{
                    fontSize: "medium",
                    color: "black",
                    fontWeight: "500",
                    paddingLeft: "15px",
                  }}
                >
                  select this
                </Typography>
              </div>
            </Button> */}
          </div>
        </SoftBox>
      ) : (
        <SoftBox
          // display="flex"
          // flexDirection="row"
          // justifyContent="space-between"
          // alignItems="flex-end"
          p={3}
        >
          <CreateSimulation />
        </SoftBox>
      )}
      {/* </Card> */}
    </div>
  );
};

export default Simulation;
