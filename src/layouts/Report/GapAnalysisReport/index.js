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

import ChartBar from "layouts/uLearn/CourseReport/ChartBar";

import { useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";

import PieChartWithCenterLabel from "layouts/uLearn/CourseReport/PieChart";
import ReportTableDisplay from "../ReportTableDisplay";

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

const GapAnalysisReport = () => {
  const [report, setReport] = useState(true);
  const [uPolicyReport, setUPolicyReport] = useState(false);
  const [uPolicyChartBar, setUPolicyChartBar] = useState(false);

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
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
              uLearn - Gap Analysis Report
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
                <h1>7 Minutes</h1>
              </div>
              <div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}></h5>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>From Enrolment - 21 Days</h6>
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

              <div style={{ width: 150, height: "100%" }}>
                <ReviewsBar score={37} report={report} />
              </div>
              <div>
                <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                  of courses have been started
                </h5>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total - 3</h6>
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
              <div style={{ width: 150, height: "100%" }}>
                <ReviewsBar score={37} report={report} />
              </div>
              <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                of courses have been started
              </h5>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total - 3</h6>
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
              <div style={{ width: 150, height: "100%" }}>
                <ReviewsBar score={43} report={report} />
              </div>
              <h5 style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                is the average score for all courses
              </h5>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total Courses Enrolled - 8</h6>
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
                        <ChartBar uPolicyChartBar={uPolicyChartBar} />
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
                          <PieChartWithCenterLabel uPolicyReport={uPolicyReport} />
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

export default GapAnalysisReport;
