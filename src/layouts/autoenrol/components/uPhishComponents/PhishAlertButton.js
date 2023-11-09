import {
  Box,
  Checkbox,
  TextField,
  Typography,
  MenuItem,
  Button,
  ListItemText,
  Chip,
  Switch,
  Select,
  FormControl,
  InputAdornment,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import React from "react";
import { useRef } from "react";
import EmailEditor from "react-email-editor";
const items = ["English", "Dutch", "Czech", "Danish", "Spanish"];
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DownloadIcon from "@mui/icons-material/Download";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";
import {
 
  AiOutlinePlus,

} from "react-icons/ai";


const label = { inputProps: { "aria-label": "Switch demo" } };
const style = {
  fontSize: "15px",
  fontWeight: "lighter",
  color: "gray",
  fontFamily: "sans-serif",
};

const PhishAlertButton = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const tabStyle = {
    marginTop: "30px",
  };
  const renderTabContent = (tabIndex) => {
    if (tabIndex === 0) {
      return (
        <form>
          <div style={{ marginTop: "30px" }}>
            <Switch {...label} defaultChecked />
            <span
              style={{
                fontSize: "15px",
                fontWeight: "lighter",
                marginLeft: "20px",
              }}
            >
              Enable the Phish Alert Button
            </span>
            <p
              style={{
                marginTop: "5px",
                fontSize: "15px",
                fontWeight: "lighter",
                color: "gray",
                fontFamily: "sans-serif",
              }}
            >
              Once enabled youll be able to configure the add-in, download a manifest for
              installation, view associated reporting and configure how suspected phishing emails
              are handled.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f6ffed",
              marginTop: "40px",
              padding: "10px",
              width: "60%",
              border: "1px solid #b7eb8f",
              fontSize: "15px",
              fontWeight: "lighter",
              color: "gray",
              fontFamily: "sans-serif",
            }}
          >
            <p>Outlook Add-in Manifest</p>

            <li>You can download the manifest XML file for the phish alert add-in below.</li>
            <li>
              You will need this file to install the add-in for deployment via Microsoft 365..
            </li>

            <li>You can also use sideload this file into Outlook Desktop/Web for testing.</li>

            <Button
              variant="contained"
              style={{
                color: "#fff",
                background: "rgb(30, 123, 228)",
                marginTop: "9px",
                fontWeight: "lighter",
              }}
            >
              <DownloadIcon style={{ marginRight: "3px" }} />
              Download Add-in Manifest XML
            </Button>
          </div>

          <Box
            // display="grid"
            marginTop="30px"
            gap="15px"
            width="590px"
            sx={{
              fontSize: "16px",
            }}
          >
            <Box style={{ marginTop: "15px" }}>
              <label htmlFor="name" style={{ fontSize: "13px" }} name="templatename">
                Add-in Display Name:
              </label>
            </Box>
            <TextField fullWidth type="text" sx={{ marginTop: "1px", gridColumn: "span 2" }} />
            {/* <Button 
            variant="contained" 
            style=
            {{
                float:'inline-end', 
                marginTop:'60px', 
                color:'#fff', 
                background:'rgb(30, 123, 228)',
                marginRight:'100px',
                fontWeight:'lighter'
            }}
        >
            <RestartAltIcon style={{marginRight:'3px'}}/>
              Reset
        </Button> */}
            <p style={style}>This is also the name of the option mobile and web users will see.</p>

            <Box style={{ marginTop: "15px" }}>
              <label htmlFor="name" style={{ fontSize: "13px" }} name="pagetitle">
                Action Label:
              </label>
            </Box>
            <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
            <p style={style}>
              This is the name of the command button that appears in the ribbon on Outlook on
              Windows.
            </p>
            <Box style={{ marginTop: "15px" }}>
              <label htmlFor="name" style={{ fontSize: "13px" }} name="pagetitle">
                Action Tooltip:
              </label>
            </Box>
            <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
            <p style={style}>
              This text is shown on the tooltip when hovering over the command button that appears
              in Outlooks ribbon on Windows..
            </p>
            <Box style={{ marginTop: "15px" }}>
              <label htmlFor="name" style={{ fontSize: "13px" }} name="pagetitle">
                Group Label:
              </label>
            </Box>
            <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
            <p style={style}>
              This is the name ribbon group for the add-in on Outlook on Windows..
            </p>
            <Box style={{ marginTop: "15px" }}>
              <label htmlFor="name" style={{ fontSize: "13px" }} name="pagetitle">
                Provider Name:
              </label>
            </Box>
            <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />
            <p style={style}>This will appear as the developer in the add-in details.</p>
          </Box>
          <div style={{ marginTop: "30px" }}>
            <Switch {...label} defaultChecked />
            <span
              style={{
                fontSize: "15px",
                fontWeight: "lighter",
                marginLeft: "20px",
              }}
            >
              Show the Add-in on Shared Mailboxes
            </span>
            <div style={style}>
              <li>The Outlook Add-in will appear in Shared Mailboxes</li>
              <li>
                The system cannot detect the individual user who reports a simulated or suspected
                phishing email.
              </li>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <form>
            <div style={{ marginTop: "30px" }}>
              <Switch {...label} defaultChecked />
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "lighter",
                  marginLeft: "20px",
                }}
              >
                Forward Suspected Phishing Emails
              </span>
              <div style={style}>
                <li>
                  Phishing emails that are not part of a simulation will be sent to the email
                  addresses you specify.
                </li>
                <li>The body of this email will be a summary of the suspected phishing email.</li>
                <li>
                  You can also include a reproduction of the original email as an EML file
                  attachment if you wish.
                </li>
              </div>
            </div>
            <div>
              <p style={{ marginTop: "20px", fontSize: "15px" }}>Forwarded Email Subject:</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                  marginTop: "30px",
                  width: "550px",
                }}
              >
                <TextField required id="outlined-required" fullWidth />
                <Button
                  variant="outline"
                  style={{
                    border: "0.5px solid #1C7AE4",
                    color: "white",
                    backgroundColor: "#1b7ae4",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                  size="small"
                >
                  <AiOutlinePlus /> Add
                </Button>
              </div>
              <p style={{ fontSize: "15px", color: "gray" }}>
                This landing page will be visible to the Customers selected
              </p>
            </div>
            <div>
              <p style={{ marginTop: "20px", fontSize: "15px" }}>Forwarded Email Subject:</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                  marginTop: "30px",
                  width: "550px",
                }}
              >
                <TextField required id="outlined-required" fullWidth />
                <Button
                  variant="outline"
                  style={{
                    border: "0.5px solid #1C7AE4",
                    color: "white",
                    backgroundColor: "#1b7ae4",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                  size="small"
                >
                  <RestartAltIcon style={{ marginRight: "3px" }} /> Reset
                </Button>
              </div>
              <p style={{ fontSize: "15px", color: "gray" }}>
                This landing page will be visible to the Customers selected
              </p>
              <div style={style}>
                <li>%recipient_email% - Users Email Address</li>
                <li>%recipient_name% - Users Name</li>
                <li>%email_subject% - Suspected phishing emails subject</li>
                <li>%received_at% - Date/time email was received (UTC)</li>
                <li>%message_id% - Message ID</li>
                <li>%company_name% - Company Name</li>
              </div>
              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }} name="pagetitle">
                  Forwarded Email Sender Name
                </label>
              </Box>
              <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />

              <Box style={{ marginTop: "15px" }}>
                <label htmlFor="name" style={{ fontSize: "13px" }} name="pagetitle">
                  Forwarded Email Sender Address
                </label>
              </Box>
              <TextField required id="outlined-required" fullWidth />
              <p style={style}>
                You can set the email address domain from the Preferred Domain settings page.
              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Switch {...label} defaultChecked />
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "lighter",
                  marginLeft: "20px",
                }}
              >
                Include Suspected Email as EML file attachment
              </span>
              <div style={style}>
                <li>
                  The EML file will be close reproduction on the suspected email but not its raw
                  source.
                </li>
                <li>
                  You will also need to authorise the retrieval of full message data to include
                  message headers and attachments in your EML file.
                </li>
                <li>
                  Please note that you will to include the suspected emails attachments for any
                  inline content such as images to appear.
                </li>
                <li>
                  While the EML is a reproduction we would recommend opening it in a sandboxed
                  environment if possible.
                </li>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Switch {...label} defaultChecked />
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "lighter",
                  marginLeft: "20px",
                }}
              >
                Include Suspected Emails Attachments in EML File
              </span>
              <div style={style}>
                <p>
                  This will allow any inline images to be displayed and requires the retrieval of
                  message data to work
                </p>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Switch {...label} defaultChecked />
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "lighter",
                  marginLeft: "20px",
                }}
              >
                Retrieve Message Data via the MS Graph API on Behalf of a User using SSO
              </span>
              <div style={style}>
                <li>
                  The EML generation process will pull message data from the MS Graph API using
                  delegated permissions
                </li>
                <li>
                  The Add-in will authorize the user via SSO in order to obtain a temporary access
                  token for the API.
                </li>
                <li>
                  The Phish Alert service then uses this token to retrieve message data for the
                  suspected phishing email on the users behalf.
                </li>
                <li>
                  If this feature is enabled, you will be asked to authorise the M365 SSO Service
                  application when installing the add-in.
                </li>
                <li>
                  You will need to update an existing installation of the add-in when enabling this
                  feature. Otherwise the add-in will not have sufficient permissions to obtain an
                  access token.
                </li>
                <li>
                  If you wish to test this feature in a sideloaded add-in, you will need to
                  authorise the M365 SSO service application on the Microsoft 365 Authentication tab
                  first.
                </li>
                <li>
                  Please note that this feature will not work on Outlook Mobile as it does not
                  currently support SSO authentication
                </li>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <DashboardLayout>
      <div style={{ maxHeight: "calc(100vh - 150px)", overflowY: "scroll" }}>
        <Typography variant="h4">Phish Alert Button</Typography>
        <p
          style={{
            marginTop: "5px",
            fontSize: "15px",
            fontWeight: "lighter",
            color: "gray",
            fontFamily: "sans-serif",
          }}
        >
          Here you can configure our phish alert button add in to allow your users to report
          phishing emails.
        </p>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="wrapped label tabs example"
          centered
          textColor="secondary"
          disableRipple
          style={tabStyle}
        >
          <Tab
            label="Add-in Configuration"
            sx={{
              color: selectedTab === 0 ? "blue" : "black",
            }}
            disableRipple
          />
          <Tab
            label="Forwarding Suspected Phishing Emails"
            sx={{
              color: selectedTab === 1 ? "blue" : "black",
            }}
            disableRipple
          />
        </Tabs>
        {renderTabContent(selectedTab)}
      </div>
      <Button
        variant="contained"
        style={{
          float: "inline-end",
          marginTop: "60px",
          color: "#fff",
          background: "rgb(30, 123, 228)",
          marginRight: "100px",
          fontWeight: "lighter",
        }}
      >
        <SaveIcon style={{ marginRight: "3px" }} />
        Save
      </Button>
    </DashboardLayout>
  );
};

export default PhishAlertButton;
