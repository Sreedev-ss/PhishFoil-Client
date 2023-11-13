import {
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import ReviewsBar from "layouts/viewSimulation/components/ReviewsBar";
import { AiFillInfoCircle } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ChartBar from "./ChartBar";

import { useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import PieChartWithCenterLabel from "./PieChart";
import TableDisplay from "./TableDisplay";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const languageOptions = ["English", "Spanish", "French", "German"];

const CoursesReport = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [report, setReport] = useState(true);

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
              padding: "15px",
              height: "5rem",
              backgroundColor: "white",
            }}
          >
            <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
              uLearn - Courses Report
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
            </FormGroup>
          </div>
          <Divider />
          <div style={{ display: "flex", gap: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 290,
                padding: 10,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "0px" }}
                >
                  Average Time Taken
                </Typography>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>

              <div>
                <h1>A Day</h1>
              </div>
              <div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                  of courses have been started
                </h5>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>From Enrolment - A Month</h6>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 290,
                padding: 10,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h5 style={{ margin: "0px" }}>Started</h5>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>

              <div>
                <ReviewsBar score={28} report={report} />
              </div>
              <div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                  of courses have been started
                </h5>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total - 14</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 290,
                padding: 10,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h5 style={{ margin: "0px" }}>Completed</h5>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>
              <div style={{ width: 90, height: 70 }}>
                <ReviewsBar score={14} report={report} />
              </div>
              <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                of courses have been started
              </h5>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total - 7</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 290,
                padding: 10,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h5 style={{ margin: "0px" }}>Average Score</h5>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>
              <div style={{ width: 90, height: 70 }}>
                <ReviewsBar score={69} report={report} />
              </div>
              <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                of courses have been started
              </h5>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total Courses Enrolled - 49</h6>
            </div>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <React.Fragment>
                <Card sx={{ marginTop: 3 }}>
                  <SoftBox
                    display="flex"
                    flexDirection="row"
                    justifyContent="end"
                    alignItems="flex-end"
                    p={3}
                  ></SoftBox>
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
                    <div
                      style={{
                        gap: "5px",
                        padding: "15px",
                        backgroundColor: "white",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "large",
                          color: "black",
                          fontWeight: "bold",
                          margin: "0px",
                        }}
                      >
                        Number of completed courses vs Score
                      </Typography>
                      <div
                        style={{
                          width: "100%",
                          height: 700,
                        }}
                      >
                        <ChartBar />
                      </div>
                    </div>
                  </SoftBox>
                </Card>
              </React.Fragment>
            </Grid>

            <Grid item xs={6} md={4}>
              <React.Fragment>
                <div>
                  <Card sx={{ marginTop: 3 }}>
                    <SoftBox
                      display="flex"
                      flexDirection="row"
                      justifyContent="end"
                      alignItems="flex-end"
                      p={3}
                    ></SoftBox>
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
                      <div
                        style={{
                          gap: "5px",
                          padding: "15px",
                          backgroundColor: "white",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "large",
                            color: "black",
                            fontWeight: "bold",
                            margin: "0px",
                          }}
                        >
                          Course Participation
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "Center",
                            width: "100%",
                            height: 700,
                          }}
                        >
                          <PieChartWithCenterLabel />
                        </div>
                      </div>
                    </SoftBox>
                  </Card>
                </div>
              </React.Fragment>
            </Grid>
          </Grid>

          <Card sx={{ marginTop: 3 }}>
            <SoftBox
              display="flex"
              flexDirection="row"
              justifyContent="end"
              alignItems="flex-end"
              p={3}
            ></SoftBox>
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
                    marginLeft: 30,
                    marginRight: 30,
                  }}
                >
                  <TableDisplay />
                </div>
              </div>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
};

export default CoursesReport;
