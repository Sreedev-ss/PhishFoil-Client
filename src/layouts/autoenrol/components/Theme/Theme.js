import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";
import { ChromePicker } from "react-color";
import { IoMdArrowDropdown } from "react-icons/io";
import { Email, ResetTv } from "@mui/icons-material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const languages = [
  "Chinese (Simplified)",
  "Czech",
  "Danish",
  "Dutch",
  "English (Australia)",
  "English (China)",
  "English (Indonesia)",
  "English (Ireland)",
  "English (Malaysia)",
  "English (New Zealand)",
  "English (South Africa)",
  "English (UK)",
  "English (US)",
  "Finnish",
  "French",
  "French (Canada)",
  "French (Switzerland)",
  "German",
  "German (Switzerland)",
  "Indonesian",
  "Italian",
  "Malaysian",
  "Norwegian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Spanish",
  "Swedish",
  "Thai",
  "Vietnamese",
];
const label = { inputProps: { "aria-label": "Switch demo" } };
const style = {
    fontSize: "15px",
    fontWeight: "lighter",
    color: "gray",
    fontFamily: "sans-serif",
  };

const Theme = () => {
  const [language, selectedLanguage] = useState("English (UK)");
  const [image, setImage] = useState(null);
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenButton, setIsOpenButton] = useState(false);
  const [selectedHeaderColor, setSelectedHeaderColor] = useState("#0f75bc");
  const [selectedButtonColor, setSelectedButtonColor] = useState("#ffffff");
  const [headerChecked, setHeaderChecked] = useState(false);

  const handleHeaderChecked = () => setHeaderChecked(!headerChecked);

  const toggleHeaderDropdown = () => setIsOpenHeader(!isOpenHeader);

  const toggleButtonDropdown = () => setIsOpenButton(!isOpenButton);

  const handleHeaderColorChange = (color) => setSelectedHeaderColor(color.hex);

  const handleButtonColorChange = (color) => setSelectedButtonColor(color.hex);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => setImage(null);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Card sx={{ minHeight: "80vh", padding: 3 }}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "500",
                fontSize: "1.3rem",
              }}
            >
              * Customise your theme
            </Typography>
            <div style={{ marginTop: 20 }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                  marginBottom: "10px",
                  fontFamily: "sans-serif",
                }}
              >
                Here you can customise the look and feel of the main application. These settings
                also apply to user facing course and policy content.
              </p>
            </div>
            <div>
              <FormControl sx={{ width: 180, float: "inline-end" }}>
                <Select value={language} label="preferred domain">
                  {languages.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Box>
          <div>
            <p>
                Logo :
            </p>
            </div>

          <Box sx={{ marginTop: 2, alignItems: "start" }}>
            {!headerChecked && (
              <Box>
                <div
                  style={{
                    width: "370px",
                    height: "140px",
                    border: "1px solid #ccc",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <label
                    htmlFor="imageInput"
                    style={{ cursor: "pointer", display: "block", height: "100%" }}
                  >
                    {image ? (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <img
                          src={image}
                          alt="Preview"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          top: "45%",
                          color: "grey",
                          fontSize: "small",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        + <br /> Upload
                      </div>
                    )}
                  </label>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
                <Button
                  onClick={handleRemoveImage}
                  variant="contained"
                  disabled={image ? false : true}
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#ff4c4f",
                    color: "#ffff",
                    marginRight: "115px",
                  }}
                >
                  <AiOutlineDelete style={{ marginRight: "3px" }} />
                  Remove Image
                </Button>
                {!image && (
                  <p style={{ fontSize: "13px", color: "red", fontFamily: "sans-serif" }}>
                    This is a required field
                  </p>
                )}
              </Box>
            )}
            <div className="header-dropdown" style={{ position: "relative" }}>
              <div
                className="dropdown-header"
                onClick={toggleHeaderDropdown}
                style={{
                  display: "flex",
                  marginTop: "20px",
                  borderRadius: 5,
                  alignItems: "center",
                  border: "0.6px solid #d2d6da",
                  width: 270,
                }}
              >
                <div
                  style={{
                    marginLeft: "10px",
                    marginRight: "8px",
                    border: "0.5px solid #d2d6da",
                    borderRadius: 3,
                    width: "40px",
                    height: "20px",
                    backgroundColor: selectedHeaderColor,
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    fontFamily: "sans-serif",
                    float: "inline-end",
                  }}
                >
                Primary Colour <IoMdArrowDropdown />{" "}
                </p>
              </div>

              {isOpenHeader && (
                <div className="header-content" style={{ position: "absolute", zIndex: 10 }}>
                  <ChromePicker color={selectedHeaderColor} onChange={handleHeaderColorChange} />
                </div>
              )}
            </div>
            <div className="button-dropdown" style={{ position: "relative" }}>
              <div
                className="dropdown-button"
                onClick={toggleButtonDropdown}
                style={{
                  display: "flex",
                  marginTop: "20px",
                  borderRadius: 5,
                  alignItems: "center",
                  border: "0.6px solid #d2d6da",
                  width: 250,
                }}
              >
                <div
                  style={{
                    marginLeft: "10px",
                    border: "0.5px solid #d2d6da",
                    borderRadius: 3,
                    marginRight: "8px",
                    width: "40px",
                    height: "20px",
                    backgroundColor: selectedButtonColor,
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    fontFamily: "sans-serif",
                    float: "inline-end",
                  }}
                >
                 Secondary Colour <IoMdArrowDropdown />{" "}
                </p>
              </div>

              {isOpenButton && (
                <div className="button-content" style={{ position: "absolute", zIndex: 10 }}>
                  <ChromePicker color={selectedButtonColor} onChange={handleButtonColorChange} />
                </div>
              )}
            </div>
         


            <Box sx={{ marginTop: 4 }}>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>* Page Title :</p>
            <div style={{ display: "flex", gap: 5 }}>
              <TextField fullWidth />
              <Button
                variant="contained"
                style={{
                  color: "#fff",
                  background: "rgb(30, 123, 228)",
                  // fontWeight: 'lighter'
                }}
              >
                <AiOutlineReload style={{ marginRight: "5px" }} />
                Reset
              </Button>
            </div>
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
                 Use a single SVG image for all icon types and size :
                </span>
             
              </div>
              <div style={{ marginTop: 2}}>
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                  marginBottom: "10px",
                  fontFamily: "sans-serif",
                }}
              >
                Here you can customise the look and feel of the main application. These settings
                also apply to user facing course and policy content.
              </p>
            </div>

              <Box>
                <p style={{ fontSize: "14px", marginTop: "20px", marginBottom: "10px" }}>
                  * System Icon (SVG) :
                </p>
                <Box sx={{ marginTop: 2, alignItems: "start" }}>
                  {!headerChecked && (
                    <Box>
                      <div
                        style={{
                          width: "370px",
                          height: "140px",
                          border: "1px solid #ccc",
                          position: "relative",
                          overflow: "hidden",
                          border: "1px dotted grey",
                          width: "200px",
                          height: "200px",
                        }}
                      >
                        <label
                          htmlFor="imageInput"
                          style={{ cursor: "pointer", display: "block", height: "100%" }}
                        >
                          {image ? (
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              }}
                            >
                              <img
                                src={image}
                                alt="Preview"
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                  width: "auto",
                                  height: "auto",
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              style={{
                                position: "absolute",
                                top: "45%",
                                color: "grey",
                                fontSize: "small",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                              }}
                            >
                              + <br /> Upload
                            </div>
                          )}
                        </label>
                        <input
                          id="imageInput"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </div>
                      <Button
                        onClick={handleRemoveImage}
                        variant="contained"
                        disabled={image ? false : true}
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#ff4c4f",
                          color: "#ffff",
                          marginRight: "115px",
                        }}
                      >
                        <AiOutlineDelete style={{ marginRight: "3px" }} />
                        Remove Image
                      </Button>

                      {!image && (
                        <p style={{ fontSize: "13px", color: "red", fontFamily: "sans-serif" }}>
                          This is a required field
                        </p>
                      )}
                    </Box>
                  )}
                </Box>

                <div style={{ display: "flex", gap: 5 }}>
                  <Button
                    variant="contained"
                    style={{
                      color: "#fff",
                      background: "rgb(30, 123, 228)",
                      // fontWeight: 'lighter'
                    }}
                  >
                    <RestartAltIcon style={{ marginRight: "5px" }} />
                    Reset
                  </Button>
                </div>
              </Box>
            <Button
              variant="contained"
              style={{
                marginTop: "20px",
                color: "#fff",
                background: "rgb(30, 123, 228)",
              }}
            >
              <ResetTv style={{ marginRight: "3px" }} />
              Reset to default theme
            </Button>
        
        
      
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
      </Box>
      </Card>
      </SoftBox>
     
    </DashboardLayout>
  );
};

export default Theme;
