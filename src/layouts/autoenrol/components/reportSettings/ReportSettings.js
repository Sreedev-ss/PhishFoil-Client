import {
    Typography,
    Switch,
    Button,
    Grid,
    Box,
    TextField,
  } from "@mui/material";
  
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, {useState} from "react";
import SaveIcon from '@mui/icons-material/Save';
import { ChromePicker } from "react-color";
import { IoMdArrowDropdown } from 'react-icons/io'
import RefreshIcon from '@mui/icons-material/Refresh';
import { AiOutlineDelete  } from 'react-icons/ai'

  
  const ReportSettings = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isSettingEnabled, setIsSettingEnabled] = useState(true);
    const [isOpenHeader, setIsOpenHeader] = useState(false);
    const [isOpenButton, setIsOpenButton] = useState(false);
    const [selectedHeaderColor, setSelectedHeaderColor] = useState('#0f75bc');
    const [selectedButtonColor, setSelectedButtonColor] = useState('#ffffff');
    const [headerChecked, setHeaderChecked] = useState(true);
    const [image, setImage] = useState(null);

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

    const handleHeaderChecked = () => setHeaderChecked(!headerChecked)

    const toggleHeaderDropdown = () => setIsOpenHeader(!isOpenHeader);

    const toggleButtonDropdown = () => setIsOpenButton(!isOpenButton);

    const handleHeaderColorChange = (color) => setSelectedHeaderColor(color.hex);

    const handleButtonColorChange = (color) => setSelectedButtonColor(color.hex);

    return (
      <DashboardLayout>
        <Typography 
            variant="h4" 
            sx=
            {{
                fontFamily:"Hind Guntur", 
                fontWeight:'500', 
                fontSize:"1.6rem"
                }}
            >
                * Configure your reports
        </Typography>
        <p 
            style=
            {{
                marginTop:'40px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
                Here you can configure your reports.
        </p>
        <div style={{marginTop:'30px'}}>
        <Switch {...label} />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                Enable Risk Score
        </span>
        </div>
        <div style={{marginTop:'5px'}}>
        <Switch {...label} />
        <span 
            style=
            {{
                fontSize:"15px", 
                fontWeight:'lighter', 
                marginLeft:'20px'
            }}
            >
                Display each users email address in the Course Participation downloadable spreadsheet
        </span>
        </div>
        <div style={{marginTop:'5px'}}>
        <Switch {...label} />
        <span 
            style=
            {{
                fontSize:"15px", 
                fontWeight:'lighter', 
                marginLeft:'20px'
            }}
            >
                Remove Inactive Users from all reports
        </span>
        </div>
        <hr style={{marginTop:'25px'}}/>
        <div>
            <h5 style={{marginTop:'10px'}}>Report Documents</h5>
            <p 
            style=
            {{
                marginTop:'40px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
                Here you can configure the look and feel of report documents.
        </p>
        <div style={{marginTop:'10px'}}>
        <Switch {...label} defaultChecked />
        <span 
            style=
            {{
                fontSize:"15px", 
                fontWeight:'lighter', 
                marginLeft:'20px'
            }}
            >
                Show Account Name on Report Document Cover Sheet
        </span>
        </div>
        <div style={{marginTop:'10px'}}>
        <Switch {...label}  onChange={handleHeaderChecked} />
        <span 
            style=
            {{
                fontSize:"15px", 
                fontWeight:'lighter', 
                marginLeft:'20px'
            }}
            >
                Use Theme Logo
        </span>

        <Box sx={{ marginTop: 2, alignItems: 'start' }}>
            {!headerChecked && <Box>
                <div
                    style={{
                        width: '370px',
                        height: '140px',
                        border: '1px solid #ccc',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <label 
                        htmlFor="imageInput" 
                        style=
                        {{ 
                            cursor: 'pointer', 
                            display: 'block', 
                            height: '100%' 
                            }}
                    >
                        {image ? (
                            <div 
                                style=
                                {{ 
                                    position: 'absolute', 
                                    top: '50%', 
                                    left: '50%', 
                                    transform: 'translate(-50%, -50%)' 
                                    }}
                            >
                                <img
                                    src={image}
                                    alt="Preview"
                                    style=
                                    {{ 
                                        maxWidth: '100%', 
                                        maxHeight: '100%', 
                                        width: 'auto', 
                                        height: 'auto' 
                                    }}
                                />
                            </div>
                        ) : (
                            <div 
                            style=
                            {{ 
                                position: 'absolute', 
                                top: '45%', 
                                color: 'grey', 
                                fontSize: 'small', 
                                left: '50%', 
                                transform: 'translate(-50%, -50%)', 
                                textAlign: "center" }}>
                                + <br /> Upload
                            </div>
                        )}
                    </label>
                    <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </div>
                < Button
                    onClick={handleRemoveImage}
                    variant="contained"
                    disabled={image ? false : true}
                    style=
                    {{
                        marginTop: '10px',
                        backgroundColor: '#ff4c4f',
                        color: '#ffff',
                        marginRight: '115px',
                    }}
                >
                    <AiOutlineDelete style={{ marginRight: '3px' }} />
                    Remove Image
                </Button>
                {!image && <p 
                style=
                {{ 
                    fontSize: '13px', 
                    color: 'red', 
                    fontFamily: "sans-serif" 
                    }}
                    >
                        This is a required field
                </p>}
            </Box>}                       
        </Box>
        <div className="header-dropdown" style={{ position: 'relative' }}>
            <div
                className="dropdown-header"
                onClick={toggleHeaderDropdown}
                style={{ 
                    display: 'flex', 
                    marginTop: '20px', 
                    borderRadius: 5, 
                    alignItems: 'center', 
                    border: '0.6px solid #d2d6da', 
                    width: 270 }}
            >
                <div 
                    style={{ 
                        marginLeft: '10px', 
                        marginRight: '8px', 
                        border: '0.5px solid #d2d6da', 
                        borderRadius: 3, 
                        width: '40px', 
                        height: '20px', 
                        backgroundColor: selectedHeaderColor 
                        }}
                        >
                </div>
                <p 
                    style={{ 
                        fontSize: '16px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '20px', 
                        fontFamily: "sans-serif", 
                        float: 'inline-end' 
                        }}
                        >
                            Background Colour <IoMdArrowDropdown /> 
                </p>
            </div>

            {isOpenHeader && (
                <div 
                className="header-content" 
                style=
                {{ 
                    position: 'absolute', 
                    zIndex: 10 
                    }}
                >
                    <ChromePicker color={selectedHeaderColor} onChange={handleHeaderColorChange} />
                </div>
            )}

        </div>
        <div className="button-dropdown" style={{ position: 'relative' }}>
            <div
                className="dropdown-button"
                onClick={toggleButtonDropdown}
                style={{ 
                    display: 'flex', 
                    marginTop: '20px', 
                    borderRadius: 5, 
                    alignItems: 'center', 
                    border: '0.6px solid #d2d6da', 
                    width: 250 
                }}
            >
                <div 
                    style={{ 
                        marginLeft: '10px', 
                        border: '0.5px solid #d2d6da', 
                        borderRadius: 3, 
                        marginRight: '8px', 
                        width: '40px', 
                        height: '20px', 
                        backgroundColor: selectedButtonColor 
                        }}
                        >
                </div>
                <p 
                    style={{ 
                        fontSize: '16px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '20px', 
                        fontFamily: "sans-serif", 
                        float: 'inline-end' 
                        }}
                        >
                            Header Font Colour <IoMdArrowDropdown /> 
                </p>
            </div>

            {isOpenButton && (
                <div 
                className="button-content" 
                style=
                {{ 
                    position: 'absolute', 
                    zIndex: 10 
                }}
                >
                    <ChromePicker color={selectedButtonColor} onChange={handleButtonColorChange} />
                </div>
            )}
        </div>
        <div>
        <Button
            variant="contained"
            style=
            {{
                marginTop: '20px',
                color: '#fff',
                background: 'rgb(30, 123, 228)',
            }}
        >
            <RefreshIcon style={{ marginRight: '3px' }} />
            Reset to default theme
        </Button>
        </div>
        <div>
            <hr style={{marginTop:'20px'}}/>
            <h5 style={{marginTop:'20px'}}>Preview</h5>
            <p 
            style=
            {{
                marginTop:'20px', 
                fontSize:'15px', 
                color:'gray', 
                fontWeight:'lighter'
                }}
            >
                This is a preview of how your report documents will look using these settings.
            </p>
            {/* <div>
                <div>
                    <Grid container spacing={2}>
                <Grid 
                item xs={6}
                style={{
                    marginTop: "6px",
                    padding: "10px",
                    height:'320px',
                    background:{setSelectedHeaderColor}
                }} 

                >
                    <h2 style={{color:'#fff', marginTop:'70px'}}>Example Report</h2>
                    <h6 style={{color:'#fff'}}>Example company</h6>
                    <h6 style={{color:'#fff'}}>01/01/2023 - 31/12/2023</h6>

                </Grid>
            </Grid>
                </div>
            </div> */}
            <div
            style={{
              backgroundColor: "#b5b0b0",
              marginTop: "40px",
              padding: "10px",
              width: "90%",
              border: "#b5b0b0",
              fontSize: "15px",
              fontWeight: "lighter",
              color: "black",
              fontFamily: "sans-serif",
              height:'320px'
            }}
          >
            <Grid container spacing={2}>
                <Grid 
                item xs={6} 
                style=
                {{ 
                    borderRight: '1px solid #ccc', 
                    padding: '15px', 
                    marginTop:'6px', 
                    background:'black', 
                    marginLeft:'20px',
                    height:'300px' 
                    }}
                >
                    <h2 style={{color:'#fff', marginTop:'70px'}}>Example Report</h2>
                    <h6 style={{color:'#fff'}}>Example company</h6>
                    <h6 style={{color:'#fff'}}>01/01/2023 - 31/12/2023</h6>

                </Grid>
                <Grid 
                    item={6} 
                    style=
                    {{ 
                        borderRight: '1px solid #ccc', 
                        padding: '15px', 
                        marginTop:'6px', 
                        background:'black', 
                        marginLeft:'40px',
                        height:'50px',
                        width:'400px' 
                        }}
                    >
                        <h6 style={{color:'#fff'}}>Section Heading</h6>
                
                </Grid>
            </Grid>
          </div>
        </div>
        </div>
        </div>
        <Button 
            variant="contained" 
            style=
            {{
                float:'inline-end', 
                marginTop:'60px', 
                color:'#fff', 
                background:'rgb(30, 123, 228)',
                marginRight:'100px',
                fontWeight:'lighter'
            }}
        >
            <SaveIcon style={{marginRight:'3px'}}/>
                Save
        </Button>
      </DashboardLayout>
    );
  };
  
export default ReportSettings;