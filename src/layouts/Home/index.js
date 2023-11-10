import { Divider, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";
import ReviewsBar from "layouts/viewSimulation/components/ReviewsBar";
import { AiFillInfoCircle } from "react-icons/ai";

import ChartBar from "layouts/uLearn/CourseReport/ChartBar";

import { useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
// import PieChartWithCenterLabel from "./PieChart";

const Home = () => {
  const [report, setReport] = useState(true);

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <SoftBox py={3}>
        <SoftBox mb={3}>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "5px" }}
                >
                  Twin Tech Solutions
                </Typography>
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "light", margin: "5px" }}
                >
                  Total Users
                </Typography>
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "light", margin: "5px" }}
                >
                  Total Groups
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "light", margin: "5px" }}
                >
                  twintechsolution.com
                </Typography>
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "5px" }}
                >
                  8
                </Typography>
                <Typography
                  sx={{ fontSize: "large", color: "black", fontWeight: "bold", margin: "5px" }}
                >
                  4
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
              </FormGroup>
            </div>
          </div> */}
          <div
            style={{ display: "flex", height: "100%", padding: "40px", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "row",
                justifyItems: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginRight: "350px",
                }}
              >
                <span>
                  <h4>Twin Tech Solutions</h4>
                </span>
                <span>
                  <h6 style={{ fontWeight: "400" }}>twintechsolutions.com</h6>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    borderLight: "1px solid lightgrey",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "200px",
                    padding: "16px",
                    marginRight: "20px",
                  }}
                >
                  <h6 style={{ margin: "0px", fontWeight: "400" }}>Total Users</h6>
                  <h4 style={{ margin: "0px" }}>8</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderLeft: "1px solid lightgrey",
                    padding: "16px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "200px",
                    marginRight: "20px",
                  }}
                >
                  <h6 style={{ margin: "0px", fontWeight: "400" }}>Total Groups</h6>
                  <h4 style={{ margin: "0px" }}>4</h4>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    textAlign: "center",
                    padding: "16px",
                  }}
                >
                  <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                    <FormControlLabel
                      control={<Switch />}
                      label="Hide Inactive Users"
                      syle={{ fontWeight: "400" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <Divider />
          <div style={{ display: "flex", gap: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 270,
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
                <h5>uLearn</h5>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>
              <div style={{ width: 90, height: 70 }}>
                <ReviewsBar score={69} report={report} />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h4 style={{ fontWeight: 400 }}>Average Score</h4>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total - 12</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 270,
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
                <h5>uPhish</h5>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>
              <div style={{ width: 90, height: 70 }}>
                <ReviewsBar score={14} />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h4 style={{ fontWeight: 400 }}></h4>
              </div>

              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Simulations Compromised - 9 / 62</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 270,
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
                <h5>uPolicy</h5>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>
              <div style={{ width: 90, height: 70 }}>
                <ReviewsBar score={13} />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h4 style={{ fontWeight: 400 }}>of policies signed</h4>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Total Policies Sent - 51</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 270,
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
                <h5>uBreach</h5>
                <span>
                  <AiFillInfoCircle />
                </span>
              </div>
              <div style={{ width: 90, height: 70 }}>
                <ReviewsBar score={0} />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <h4 style={{ fontWeight: 400 }}></h4>
              </div>
              <div style={{ width: "70%", height: "1px", backgroundColor: "#f4f5f5" }} />
              <h6 style={{ fontWeight: 400 }}>Users Breached - 0 / 8</h6>
            </div>
          </div>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
};

export default Home;
