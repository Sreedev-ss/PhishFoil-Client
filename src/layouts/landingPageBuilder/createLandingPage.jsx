import { Box, Checkbox, TextField, Typography, MenuItem, Button } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import React from "react";
import { useRef } from "react";
import EmailEditor from "react-email-editor";
// import checkbox from './../../assets/theme/components/form/checkbox';

const CreateLandingPage = () => {
  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };
  const onLoad = () => {};

  const onReady = () => {};

  // Handler for changing the selected tab
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const tabStyle = {
    marginTop: "30px", // Add your desired margin-top value
  };
  const renderTabContent = (tabIndex) => {
    if (tabIndex === 0) {
      // Render the form for "Landing Page" tab
      return (
        <form>
          <Box
            display="grid"
            gap="30px"
            m="40px"
            sx={{
              fontSize: "16px", // Adjust the font size as needed
            }}
          >
            <Box>
              <label htmlFor="name">Template Name</label>
            </Box>
            <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
            <Box>
              <label htmlFor="name">Language(s)</label>
            </Box>
            <TextField
              select
              value={country}
              onChange={handleChange}
              fullWidth
              variant="filled"
              type="text"
              sx={{
                gridColumn: "span 2",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#fff",
                // "&:hover": {
                //   backgroundColor: "rgb(30, 123, 228)", // Change to the desired color
                //   cursor: "pointer", // Optional: Change the cursor to a pointer on hover
                // },
              }}
            >
              <MenuItem value="IN">English</MenuItem>
              <MenuItem value="US">Malayalam</MenuItem>
              <MenuItem value="AU">Tamil</MenuItem>
            </TextField>

            <Box>
              <label htmlFor="name">Page Title</label>
            </Box>
            <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
            <Box>
              <label htmlFor="name">Category</label>
            </Box>
            <TextField
              select
              value={country}
              onChange={handleChange}
              fullWidth
              variant="filled"
              type="text"
              sx={{
                gridColumn: "span 2",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#fff",
                // "&:hover": {
                //   backgroundColor: "rgb(30, 123, 228)", // Change to the desired color
                //   cursor: "pointer", // Optional: Change the cursor to a pointer on hover
                // },
              }}
            >
              <MenuItem value="IN">Socila Media</MenuItem>
              <MenuItem value="US">Bills</MenuItem>
              <MenuItem value="AU">Travel</MenuItem>
              <MenuItem value="AU">Shopping</MenuItem>
              <MenuItem value="AU">Finance</MenuItem>
              <MenuItem value="AU">Government</MenuItem>
            </TextField>
            <Box>
              <label htmlFor="name">Title Image</label>
            </Box>
            <TextField fullWidth variant="filled" type="file" sx={{ gridColumn: "span 2" }} />
            <Box>
              <label htmlFor="name">Associated Email Template</label>
            </Box>
            <TextField fullWidth variant="filled" type="text" sx={{ gridColumn: "span 2" }} />
          </Box>
          <Box>
            <label htmlFor="name" > 
              Content
            </label>
          </Box>
          <div>
            <button onClick={exportHtml}></button>

            <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
          </div>
        </form>
      );
    } else {
      // Render content for other tabs
      return (
        <div>
          <form>
            <div style={{ marginBottom: "30px" }}>
              <p style={{ fontSize: "15px", marginTop: "15px" }}>
                Do you wish to make this landing page available to all of your Customers?:
              </p>
              <Checkbox
                //   checked={checked}
                //   onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                Checking this box will make this landing page available to all Customers belonging
                to your MSP.
              </p>
            </div>
            <div>
              <p style={{ marginTop: "20px", fontSize: "15px" }}>Customer access:</p>
              <div style={{ marginBottom: "30px", marginTop: "30px", width: "550px" }}>
                <TextField required id="outlined-required" defaultValue="Customers" fullWidth />
              </div>
              <p style={{ fontSize: "15px", color: "gray" }}>
                This landing page will be visible to the Customers selected
              </p>
            </div>
            <div>
              <Button
                variant="outlined"
                style={{ border: "1px solid blue", marginRight: "10px", color: "blue" }}
              >
                Save
              </Button>
              <Button variant="outlined" style={{ border: "1px solid red", color: "red" }}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h4">Uphish-Create Landing Page</Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered // This centers the tabs horizontally
        textColor="secondary"
        style={tabStyle}
      >
        <Tab
          label="Landing Page"
          sx={{
            // color: selectedTab === 0 ? "rgb(30, 123, 228)" : "inherit",
            color: selectedTab === 0? 'blue': 'black',
          }}
        />
        <Tab
          label="Access Control"
          sx={{
            color: selectedTab === 1 ? 'blue' : 'black',
          }}
        />
      </Tabs>
      {renderTabContent(selectedTab)}
    </DashboardLayout>
  );
};

export default CreateLandingPage;
