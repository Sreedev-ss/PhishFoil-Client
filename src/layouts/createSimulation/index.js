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
import CreateSimulation from "./createSimulation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import CheckIcon from "@mui/icons-material/Check";
import StepIcon from "@mui/material/StepIcon";

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
  const [completedSteps, setCompletedSteps] = useState([]);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const handleStep = (index) => {
    if (numberOfClicks === 0) {
      // Your logic for the first click goes here
      setOpenTemp(false); // Assuming this is what you want on the first click
      // Increment the click counter
      setNumberOfClicks((prevClicks) => prevClicks + 1);
    } else {
      // On subsequent clicks, move to the next step
      if (index === 2 && activeStep === 1) {
        // Check conditions for navigating from ChooseEmail to Configure
        // For example, you can check if an email is selected or not
        // If the conditions are met, proceed to the next step
        if (selectedItems.length > 0) {
          setActiveStep(index);
        } else {
          alert("Please select at least one email."); // You can replace this with your logic
        }
      } else if (index === 3 && activeStep === 2) {
        // Check conditions for navigating from Configure to Schedule
        // If the conditions are met, proceed to the next step
        setActiveStep(index);
      } else {
        setActiveStep(index);
      }
      for (let i = 0; i < activeStep; i++) {
        if (!completedSteps.includes(i)) {
          setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, i]);
        }
      }

      // Move to the next step
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ChooseLandingPageComponent />;
      case 1:
        return <ChooseEmailComponent />;
      case 2:
        return <ConfigureComponent />;
      case 3:
        return <ScheduleComponent />;
      default:
        return null;
    }
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
          <Card sx={{ minHeight: "80vh" }}>
            {!openTemp ? (
              <SoftBox
                // display="flex"
                // flexDirection="row"
                // justifyContent="space-between"
                // alignItems="flex-end"
                p={3}
              >
                <div>
                  <div>{renderStepContent(activeStep)}</div>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {[0, 1, 2, 3].map((index) => (
                      <Step key={index}>
                        {/* <StepButton onClick={() => handleStep(index)}> */}
                        <StepLabel onClick={() => handleStep(index)}>
                          {
                            [
                              "Choose your landing page",
                              "Choose your email",
                              "Configure",
                              "Schedule",
                            ][index]
                          }
                        </StepLabel>
                        {/* </StepButton> */}
                      </Step>
                    ))}
                  </Stepper>
                  {/* <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>
                          {[
                            "Choose your landing page",
                            "Choose your email",
                            "Configure",
                            "Schedule",
                          ]}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper> */}
                </div>
              </SoftBox>
            ) : (
              <SoftBox p={3}>{/* <CreateSimulation /> */}</SoftBox>
            )}
          </Card>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
};

export default Simulation;
