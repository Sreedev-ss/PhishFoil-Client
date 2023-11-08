import {
  Typography,
  Switch,
  Button,
  FormControl,
  Chip,
  MenuItem,
  ListItemText,
  Checkbox,
  Select,
  TextField,
} from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

const items = ["Administration", "Technical", "Sample"];
const domainItem = ["Amzwon.net", "billing.net", "asistenciahoy"];

const AutoPhish = () => {
  const [group, setGroup] = useState(["Administration"]);
  const [domain, setDomain] = useState(["Amzwon.net"]);

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };

  const handleDeletegroup = (itemToDelete) => (event) => {
    event.preventDefault();
    const updatedGroup = group.filter((item) => item !== itemToDelete);
    setGroup(updatedGroup);
  };

  const handleDomain = (event) => {
    setDomain(event.target.value);
  };
  const handleDeleteDomain = (itemToDelete) => (event) => {
    event.preventDefault();
    const updatedDoamin = domain.filter((item) => item !== itemToDelete);
    setDomain(updatedDoamin);
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Hind Guntur",
          fontWeight: "500",
          fontSize: "1.6rem",
        }}
      >
        Auto Phish
      </Typography>
      <p
        style={{
          marginTop: "40px",
          fontSize: "15px",
          fontWeight: "lighter",
          color: "gray",
          fontFamily: "sans-serif",
        }}
      >
        Here you can set up the automated generation of phishing simulations. Simulations will be
        sent to your active users on an ongoing basis using randomly selected templates if enabled.
      </p>
      <p
        style={{
          marginTop: "20px",
          fontSize: "15px",
          fontWeight: "lighter",
          color: "gray",
          fontFamily: "sans-serif",
        }}
      >
        If you wish to send only a single simulation, or have more control over the content used
        and/or recipients involved, you should create a simulation manually via the Create
        Simulation page.
      </p>
      <div style={{ marginTop: "30px" }}>
        <Switch {...label} defaultChecked />
        <span
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            marginLeft: "20px",
          }}
        >
          Enable Auto Phish
        </span>
      </div>
      <div style={{ marginTop: "20px", fontSize: "15px" }}>
        <form>
          <label>How many weeks between simulations</label>
          <TextField fullWidth type="text" sx={{ gridColumn: "span 2" }} />

          <p style={{ fontSize: "15px", marginTop: "15px" }}>Only send between working hours?</p>

          <Checkbox inputProps={{ "aria-label": "controlled" }} />
          <div>
            <FormControl sx={{  height: "auto" }}>
              <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                Exclude groups from receiving simulations? :
              </Typography>
              <Select
                labelId="multiple-select-label"
                id="multiple-select"
                multiple
                label="Select languages"
                value={group}
                onChange={handleGroup}
                MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                renderValue={(selected) => (
                  <div>
                    {selected.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        onDelete={handleDeletegroup(item)}
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
                    <Checkbox checked={group.indexOf(item) > -1} />
                    <ListItemText secondary={item} />
                  </MenuItem>
                ))}
              </Select>

              <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" }}>
                Domain Allow List:
              </Typography>
              <Select
                labelId="multiple-select-label"
                id="multiple-select"
                multiple
                label="Select languages"
                value={domain}
                onChange={handleDomain}
                MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                renderValue={(selected) => (
                  <div>
                    {selected.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        onDelete={handleDeleteDomain(item)}
                        sx={{
                          marginRight: "5px",
                          height: "20px", // Adjust the height as needed
                        }}
                      />
                    ))}
                  </div>
                )}
              >
                {domainItem.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Checkbox checked={domain.indexOf(item) > -1} />
                    <ListItemText secondary={item} />
                  </MenuItem>
                ))}
              </Select>
              <p
                style={{
                  marginTop: "5px",
                  fontSize: "15px",
                  fontWeight: "lighter",
                  color: "gray",
                  fontFamily: "sans-serif",
                }}
              >
                Restrict the domains that can be used in simulations. If you use Microsoft 365 you
                should mirror this list in your Advanced Delivery settings. (Please note that
                Advanced Delivery is limited to 20 allowed domains.)
              </p>
            </FormControl>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AutoPhish;
