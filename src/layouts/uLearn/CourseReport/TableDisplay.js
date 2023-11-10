import React, { useState } from "react";
import "./TableDisplay.css";
import TableData from "./TableData";
import {
  Box,
  Button,
  Dialog,
  FormControl,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Popover,
  Popper,
  Select,
  Stack,
  TextField,
} from "@mui/material"; // Import a CSS file for styling

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            User
          </div>
          <div
            className={`tab ${activeTab === 1 ? "active course" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Course
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            style={{
              margin: "15px",
              backgroundColor: "rgb(32, 156, 232)",
              color: "white",
            }}
          >
            DownLoad SpreadSheet
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="tab-content" style={{ margin: "0 auto", width: "fit-content" }}>
          <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
            <TableData />
          </div>
          <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
            <TableData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
