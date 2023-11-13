import { Card, Checkbox, Dialog, Divider, Typography, Button } from "@mui/material";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import RefreshIcon from "@mui/icons-material/Refresh";
import ReportTableDisplay from "layouts/uPolicy/ReportTableData/index";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { Stack } from "@mui/system";


const TemplateLibrary = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isUserFormOpen, setUserFormOpen] = useState(false);

  const openUserForm = () => {
    setUserFormOpen(true);
  };

  const closeUserForm = () => {
    setUserFormOpen(false);
  };

  const closeGroupForm = () => {
    setGroupFormOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "50px",
              height: "9rem",
              backgroundColor: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: "large",
                color: "black",
                fontWeight: "bold",
              }}
            >
              uPolicy - Template Library
            </Typography>
            <div>
              <Button
                style={{
                  border: "0.5px solid rgb(30, 123, 228)",
                  color: "#d4d4d4",
                  fontSize: "10px",
                  marginLeft: "100px",
                  color: "rgb(30, 123, 228)",
                }}
                size="small"
                onClick={openUserForm}
              >
                <RefreshIcon style={{ marginRight: "5px" }} />
                Refresh
              </Button>
              <span>
                <SoftBox
                  display="flex"
                  flexDirection="row"
                  justifyContent="end"
                  alignItems="flex-end"
                  p={3}
                >
                  <Stack>
                    <Stack spacing={2} direction="row" justifyContent="flex-end">
                      <Button
                        style={{
                          border: "0.5px solid grey",
                          color: "#d4d4d4",
                          fontSize: "10px",
                          marginTop: "1px",
                        }}
                        size="small"
                        onClick={openUserForm}
                      >
                        Search for a template
                        <AiOutlineSearch style={{ color: "gray", fontSize: "15px" }} />
                      </Button>
                      <Dialog open={isUserFormOpen} onClose={closeUserForm}></Dialog>
                    </Stack>
                  </Stack>
                </SoftBox>
              </span>
            </div>
          </div>
          <Card sx={{ marginTop: 3 }}>
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
              <div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ReportTableDisplay />
                </div>
              </div>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
};

export default TemplateLibrary;
