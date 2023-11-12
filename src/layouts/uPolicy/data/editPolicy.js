import {
    Box,
    TextField,
    Typography,
    MenuItem,
    Button,
    Checkbox,
    Select,
    FormControl,
    InputAdornment,
    TableContainer,
    Table,
    TableHead
  } from "@mui/material";
  
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SoftBox from "components/SoftBox";


  const EditPolicy = () => {
    const navigate = useNavigate();
    const handleBackToViewPolicy = () => {
        navigate('/uPolicy/viewpolicies');
    };
  

    return (
      <DashboardLayout>
        <Typography variant="h4">Edit Policy</Typography>
        <Button
            style={{
                border: '0.5px solid rgb(30, 123, 228)',
                color: '#fff',
                fontSize: "10px",
                marginTop: '15px',
                background:'rgb(30, 123, 228)',
                fontWeight:'lighter'
            }}
            variant="contained"
            size="small"
            onClick={handleBackToViewPolicy}
        >
            Back to Policies
        </Button> 

        
       
      </DashboardLayout>
    );
};
  
export default EditPolicy;