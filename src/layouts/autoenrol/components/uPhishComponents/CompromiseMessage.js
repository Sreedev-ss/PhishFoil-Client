import { Typography, Button, TextField, Box, MenuItem, Modal } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";
import { ChromePicker } from "react-color";
import { IoMdArrowDropdown } from "react-icons/io";
import { Email, ResetTv } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "400px",
};

const CompromiseMessage = () => {
  const [reminder, setReminder] = useState("");
  const [continueModalOpen, setCountinueModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  
  const [headerChecked, setHeaderChecked] = useState(false);
  
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

  const handleImageUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const removeImage = () => {
    setFile(null);
  };

  const handleChangedReminders = (event) => {
    setReminder(event.target.value);
  };
  const openContinueModal = () => {
    setCountinueModalOpen(true);
  };
  const closeContinueModal = () => {
    setCountinueModalOpen(false);
  };
  const removeContinueModal = () => {
    closeContinueModal();
  };

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
        Compromise Message
      </Typography>
      <div style={{ marginTop: "17px" }}>
        <Box>
          <label htmlFor="name" style={{ fontSize: "13px" }}>
            Here you can customise the image and message of when a user becomes compromised.
          </label>
        </Box>
      </div>
      <div style={{ marginTop: "37px" }}>
        <Box>
          <label
            htmlFor="name"
            style={{
              fontSize: "13px",
            }}
          >
            Upload your simulation compromise image below
          </label>
        </Box>
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
                      style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
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
    
      <Box
        display="grid"
        gap="15px"
        width="590px"
        sx={{
          fontSize: "16px",
          marginTop: "30px",
        }}
      >
      
        <label htmlFor="name" style={{ fontSize: "13px" }} name="pagetitle">
    
          Set your compromise message
        </label>
        <TextareaAutosize
          minRows={3}
          maxRows={6}
          aria-label="message"
          placeholder="Please contact support"
          style={{ width: "100%", marginTop: "5px", padding: "20px" }}
        />
      </Box>

      <div>
        <Button
          variant="contained"
          style={{
            float: "inline-end",
            marginTop: "60px",
            color: "#fff",
            background: "rgb(30, 123, 228)",
            marginRight: "115px",
            fontWeight: "lighter",
          }}
          onClick={openContinueModal}
        >
          <SaveIcon style={{ marginRight: "3px" }} />
          Save
        </Button>
        <Modal
          open={continueModalOpen}
          onClose={closeContinueModal}
          aria-labelledby="send-test-email-modal-title"
          aria-describedby="send-test-email-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="send-test-email-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontWeight: "lighter",
                color: "black",
              }}
            >
              <HelpOutlineIcon style={{ color: "orange" }} />
              Are you sure you wish to continue?
              <p
                style={{
                  marginTop: "5px",
                  color: "gray",
                  fontSize: "13px",
                  marginLeft: "15px",
                }}
              >
                Please note that one off reminders will only be sent to those enrolled on an
                outstanding course 7 or more days ago
              </p>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
                gap: 2,
              }}
            >
              <Button variant="contained" onClick={removeContinueModal} style={{ color: "#fff" }}>
                No
              </Button>
              <Button
                variant="outlined"
                onClick={closeContinueModal}
                style={{ marginRight: "5px", color: "black" }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default CompromiseMessage;
