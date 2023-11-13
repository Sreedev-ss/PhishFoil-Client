import { Button, Card, Checkbox, Chip, Dialog, DialogContent, DialogTitle, FormControl, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftBox from 'components/SoftBox';
import  { useRef, useState, useEffect } from "react";

const RiskReports = () => {
    const [reminder, setReminder] = useState("(GMT+00:00) Europe/Isle_of_Man");
    const [selectedItems, setSelectedItems] = useState(["English(UK)"]);



    const handleChangedReminders = (event) => {
        setReminder(event.target.value);
    };
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card sx={{ minHeight: '100vh' }}>

                        <div>
                            <DialogTitle> Create Prospect</DialogTitle>
                            <DialogContent>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                                </Box>
                                <Box>
                                    <label
                                        htmlFor="name"
                                        style={{ fontSize: "13px" }}
                                    >
                                        * Company Name:
                                    </label>
                                </Box>
                                <TextField


                                    type="text"
                                    sx={{
                                        gridColumn: "span 2",
                                        backgroundColor: "#ffff",
                                        marginTop: '9px',
                                        width: "500px"
                                    }}

                                >
                                </TextField>
                                <Box>
                                    <label
                                        htmlFor="name"
                                        style={{ fontSize: "13px" }}
                                    >
                                        * Domain:
                                    </label>
                                </Box>
                                <TextField


                                    type="text"
                                    sx={{
                                        gridColumn: "span 2",
                                        backgroundColor: "#ffff",
                                        marginTop: '9px',
                                        width: "500px"
                                    }}

                                >
                                </TextField>
                                <Box>
                                    <label
                                        htmlFor="name"
                                        style={{ fontSize: "13px" }}
                                    >
                                        First Name:
                                    </label>
                                </Box>
                                <TextField


                                    type="text"
                                    sx={{
                                        gridColumn: "span 2",
                                        backgroundColor: "#ffff",
                                        marginTop: '9px',
                                        width: "500px"
                                    }}

                                >
                                </TextField>
                                <Box>
                                    <label
                                        htmlFor="name"
                                        style={{ fontSize: "13px" }}
                                    >
                                        Last Name:
                                    </label>
                                </Box>
                                <TextField


                                    type="text"
                                    sx={{
                                        gridColumn: "span 2",
                                        backgroundColor: "#ffff",
                                        marginTop: '9px',
                                        width: "500px"
                                    }}

                                >
                                </TextField>
                                <Box>
                                    <label
                                        htmlFor="name"
                                        style={{ fontSize: "13px" }}
                                    >
                                        * Email:
                                    </label>
                                </Box>
                                <TextField


                                    type="text"
                                    sx={{
                                        gridColumn: "span 2",
                                        backgroundColor: "#ffff",
                                        marginTop: '9px',
                                        width: "500px"
                                    }}

                                >
                                </TextField>

                                <div style={{ marginTop: '17px' }}>
                                    <Box>
                                        <label
                                            htmlFor="name"
                                            style={{ fontSize: "13px" }}
                                        >
                                            *  Preferred Language:
                                        </label>
                                    </Box>
                                    <TextField
                            select
                            value={reminder}
                            onChange={handleChangedReminders}
                            type="text"
                            sx={{
                                gridColumn: "span 2",
                                backgroundColor: "#ffff",
                                marginTop: '9px',
                                width: "500px"
                            }}
                            SelectProps={{
                                IconComponent: () => <ExpandMoreIcon />,
                            }}
                        >
                            <MenuItem value="English(Australia)">English(Australia)</MenuItem>
                            <MenuItem value="English(China)">English(China)</MenuItem>
                            <MenuItem value="English(UK)">English(UK)</MenuItem>
                            <MenuItem value="German">German</MenuItem>
                        </TextField>
                                </div>
                                <div style={{ marginTop: '25px' }}>

                                    <Box>
                                        <label
                                            htmlFor="name"
                                            style={{ fontSize: "13px" }}
                                        >
                                            Preferred Timezone:
                                        </label>
                                    </Box>
                                    <TextField
                                        select
                                        // value={reminder}
                                        // onChange={handleChangedReminders}
                                        type="text"
                                        sx={{
                                            gridColumn: "span 2",
                                            backgroundColor: "#ffff",
                                            marginTop: '9px',
                                            width: "500px"
                                        }}
                                        SelectProps={{
                                            IconComponent: () => <ExpandMoreIcon />,
                                        }}
                                    >
                                        <MenuItem value="(GMT+00:00) Europe/Isle_of_Man">(GMT+00:00) Europe/Isle_of_Man</MenuItem>
                                        <MenuItem value="(GMT+00:00) Europe/Jersy">(GMT+00:00) Europe/Jersy</MenuItem>
                                        <MenuItem value="(GMT+00:00) Europe/London">(GMT+00:00) Europe/London</MenuItem>
                                        <MenuItem value="(GMT+00:00) Europe/Lisbon">(GMT+00:00) Europe/Lisbon</MenuItem>
                                    </TextField>
                                </div>
                                <div>
                                    <Button
                                        variant="outlined"
                                        style=
                                        {{
                                            color: 'black',
                                            fontWeight: 'lighter',
                                            marginTop: '15px',
                                            borderColor: 'gray'
                                        }}
                                    >
                                        Detect Timezone
                                    </Button>
                                </div>
                                <div style={{ marginTop: '5px' }}>
                                    <FormControl
                                        sx={{
                                            width: "90%",
                                            height: 'auto'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '',
                                                marginBottom: "5px",
                                                marginLeft: "2px",
                                                marginTop: "10px",
                                            }}
                                        >
                                            Preferred Content Language(s) :
                                        </Typography>
                                        {/* <Select
                                labelId="multiple-select-label"
                                id="multiple-select"
                                multiple
                                label='Select languages'
                                value={selectedItems}
                                onChange={handleChange}
                                MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                renderValue={(selected) => (
                                    <div>
                                        {selected.map((item) => (
                                            <Chip
                                                key={item}
                                                label={item}
                                                // onDelete={handleDelete(item)}
                                                sx={{
                                                    marginRight: '5px',
                                                    height: '20px',
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            >
                                {items.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        <Checkbox checked={selectedItems.indexOf(item) > -1} />
                                        <ListItemText secondary={item} />
                                    </MenuItem>
                                ))}
                            </Select> */}
                                    </FormControl>
                                </div>
                                <div>
                                    <p style={{ fontSize: "13px" }}>This controls which language(s) this company will see content for such as email templates for by default.</p>
                                </div>
                            </DialogContent>
                            {/* <DialogActions> */}
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button
                                    variant="outlined"
                                    // onClick={closeCraeteCustomerModal}
                                    style={{ marginRight: "5px", color: "black" }}
                                >
                                    Create Prospect
                                </Button>
                            </div>
                            {/* </DialogActions> */}


                        </div>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    )
}

export default RiskReports
