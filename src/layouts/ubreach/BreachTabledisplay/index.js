import React, { useState } from "react";

import {
  
  Button,
 
} from "@mui/material"; // Import a CSS file for styling
import BreachTableData from "../BreachTabledata";

function BreachTableDisplay() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
         
          <h4>Learners</h4>
        </div> */}

        <Button
          variant="contained"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: "15px",
            backgroundColor: "rgb(32, 156, 232)",
            color: "white",
          }}
        >
          DownLoad SpreadSheet
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="tab-content" style={{ margin: "0 auto", width: "fit-content" }}>
          <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
            <BreachTableData />
          </div>
          <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
            <BreachTableData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreachTableDisplay;
