import { Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, Paper, Popover, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineMail, AiOutlineReload } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from '@mui/icons-material/Visibility';
import SoftButton from 'components/SoftButton';
import SoftBox from 'components/SoftBox';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: '90%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const ViewSimulationData = () => {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const openAnchor = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box sx={style}>
            <div style={{ width: '100%', height: '3rem' }}>
                <h5 style={{ fontWeight: 400 }}>Viewing 1 of 39</h5>
            </div>
            <div style={{ border: '1px solid #e8e9e9', width: '100%', height: '90%', }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
                    <h3 style={{ fontWeight: 500 }}>Auto Phish - 01/11/2023 (01/11/2023 05:31)</h3>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                        <Button
                            variant="outline"
                            style={{
                                border: "0.5px solid #1C7AE4",
                                color: "white",
                                backgroundColor: "#1b7ae4",
                                width: '125px'
                            }}
                            size="small"
                        >
                            <AiOutlineReload fontSize={15} /><p>&nbsp;&nbsp;Refresh</p>
                        </Button>
                        <FormGroup>
                            <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
                        </FormGroup>
                    </Box>

                </div>
                <Box sx={{ width: '100%', padding: 1, }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Details" {...a11yProps(0)} />
                            <Tab label="Recipients" {...a11yProps(1)} />
                            <Tab label="Result" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div style={{ height: '54vh', overflowY: 'scroll', paddingBottom: 30 }}>
                            <div style={{ display: 'flex', gap: 100 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>Configuration</h5>
                                    <p style={{ fontSize: 15 }}>Start Date/Time:</p>
                                    <p style={{ fontSize: 15 }}>01/11/2023 05:31</p>
                                    <p style={{ fontSize: 15 }}>Restrict to Working Hours:</p>
                                    <p style={{ fontSize: 15 }}>Yes</p>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                                    <p style={{ fontSize: 15 }}>End Date/Time:</p>
                                    <p style={{ fontSize: 15 }}>15/11/2023 05:31</p>
                                    <p style={{ fontSize: 15 }}>Preferred Delivery Method:</p>
                                    <p style={{ fontSize: 15 }}>SMPT</p>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                                    <p style={{ fontSize: 15 }}>Spread:</p>
                                    <p style={{ fontSize: 15 }}>2 weeks</p>
                                </Box>
                            </div>
                            <div style={{ marginTop: 18 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>Landing Page</h5>
                                    <p style={{ fontSize: 15 }}>Landing Page URL:</p>
                                    <p style={{ fontSize: 15 }}>https://amzwon.net</p>
                                    <div
                                        style={{
                                            width: 'fit-content',
                                            border: '1px solid #e8e9e9',
                                            padding: 5
                                        }}
                                    >
                                        <img
                                            src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg"
                                            height="150px"
                                            alt="name"
                                            style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 5 }}
                                        />
                                        <h5 style={{ fontWeight: 500 }}>ANZ | Halaxy</h5>
                                    </div>
                                    <Button sx={{ border: '1px solid #e8e9e9', width: 'fit-content', borderRadius: '2px', color: 'grey !important' }}>View Landing Page</Button>
                                </Box>
                            </div>
                            <div style={{ display: 'flex', gap: 100, marginTop: 18 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>Email</h5>
                                    <p style={{ fontSize: 15 }}>Sender Name:</p>
                                    <p style={{ fontSize: 15 }}>Halaxy Support</p>
                                    <p style={{ fontSize: 15 }}>Subject:</p>
                                    <p style={{ fontSize: 15 }}>Important information about your Halaxy account</p>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                                    <p style={{ fontSize: 15 }}>Sender Email Address:</p>
                                    <p style={{ fontSize: 15 }}>support@amzwon.net</p>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>&nbsp;&nbsp;</h5>
                                    <p style={{ fontSize: 15 }}>Using Custom Sender:</p>
                                    <p style={{ fontSize: 15 }}>No</p>
                                </Box>
                            </div>
                            <div style={{ marginTop: 18 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <h5 style={{ marginBottom: 5 }}>Email Template: ANZ | Halaxy</h5>
                                    <div
                                        style={{
                                            // width:'fit-content',
                                            border: '1px solid #e8e9e9',
                                            padding: 5
                                        }}
                                    >
                                        <img
                                            src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg"
                                            height="100%"
                                            width='100%'
                                            alt="name"
                                            style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 5 }}
                                        />
                                    </div>
                                    <Button sx={{ border: '1px solid #e8e9e9', width: 'fit-content', borderRadius: '2px', color: 'grey !important' }}><MarkEmailReadIcon />&nbsp;&nbsp; Send Test Email</Button>
                                </Box>
                            </div>
                            <div
                                style={{
                                    border: "0.5px solid #d2d6da",
                                    width: "30%",
                                    borderRadius: "4px",
                                    height: "20rem",
                                    marginTop: "1.2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    padding: 5
                                }}
                            >
                                <IconButton
                                    style={{
                                        background: "#fff",
                                        borderRadius: "50%",
                                        justifyContent: "end",
                                    }}
                                // onClick={handleOpenTemplate}
                                >
                                    <LanguageIcon fontSize="small" />
                                </IconButton>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "100px",
                                    }}
                                >
                                    <img
                                        src=""
                                        height="150px"
                                        style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 5 }}
                                    />
                                    <h5>Russia & Ukraine: Staying safe in ...</h5>
                                    <Button sx={{ border: '1px solid #e8e9e9', width: 'fit-content', borderRadius: '2px', color: 'grey !important' }}>All Levels</Button>
                                    <div
                                        style={{
                                            width: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            color: "white",
                                            textAlign: "center",
                                            position: "absolute",
                                            bottom: 0,
                                        }}
                                    >
                                        <VisibilityIcon color="black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
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
                            <TableContainer component={Paper}>
                                <Table sx={{ width: "100%" }} aria-label="simple table">
                                    <TableHead sx={{ display: "table-header-group" }}>
                                        <TableRow sx={{ width: "20px" }}>
                                            <TableCell sx={{textAlign:'center'}} ></TableCell>
                                            <TableCell >Recipients</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Scheduled / Send At</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Status</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Reported</TableCell>
                                            <TableCell sx={{textAlign:'center'}} >Delivery Method</TableCell>
                                    
                                            <TableCell ></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                        >
                                            <TableCell><Checkbox {...label} /></TableCell>
                                            <TableCell style={{ fontSize: "13px", color: "#209ce8" }}>Vedieshwaran R<br/><p style={{color:'grey'}}>vedieshwaran@twintechsolution.com</p></TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign:'center'}}>01/11/2023 05:31</TableCell>
                                            <TableCell style={{ fontSize: "13px", textAlign:'center' , textAlign:'center'}}>Not Sent</TableCell>
                                            <TableCell style={{ fontSize: "13px" , textAlign:'center'}}>N/A</TableCell>
                                            <TableCell style={{ fontSize: "13px" , textAlign:'center'}}></TableCell>
                                            <TableCell>
                                                <SoftButton
                                                    onClick={handleClick}
                                                    variant="outlined"
                                                    color="info"
                                                >
                                                    <AiOutlineArrowRight />
                                                </SoftButton>
                                                <Popover
                                                    id={id}
                                                    open={openAnchor}
                                                    anchorEl={anchorEl}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                >

                                                </Popover>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </SoftBox>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </div>
        </Box>
    )
}

export default ViewSimulationData
