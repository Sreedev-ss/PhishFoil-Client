import {
    Typography,
    Button,
    TextField,
    MenuItem,
    Modal,
    ListItemText,
    Checkbox,
    Chip,
    Select,
    FormControl,
  } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { Box } from "@mui/system";

const items = [ "English(UK)", "English(Nigeria)", "English(China)", "German"];

const LanguageComponent = () => {

    const [reminder, setReminder] = useState("English(UK)");
    const [selectedItems, setSelectedItems] = useState(["English(UK)"]);

    const handleChangedReminders = (event) => {
        setReminder(event.target.value);
    };

    const handleChange = (event) => {
        setSelectedItems(event.target.value);
    };

    const handleDelete = (itemToDelete) => (event) => {        
        event.preventDefault();
        const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
        setSelectedItems(updatedSelection);
    };

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
                Language
        </Typography>
        <p 
            style={{
                marginTop:'20px', 
                color:'gray', 
                fontSize:'15px', 
                fontWeight:'lighter'
                }}
            >
            You can set the default language across your app and preferred content language(s) for your users and admin users. 
            If you wish to update your own language you can do that via your account settings.
        </p>
        <div style={{marginTop:'17px'}}>
            <Box>
                <label 
                    htmlFor="name" 
                    style={{ fontSize: "13px" }}
                    >
                        Preferred Language:
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
                  marginTop:'9px',
                  width:"500px"
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
            <div style={{marginTop:'37px'}}>
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
                            marginTop: "55px", 
                            }}
                            >
                                Preferred Content Language(s):
                    </Typography>
                    <Select
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
                                        onDelete={handleDelete(item)}
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
                    </Select>
                </FormControl>               
            </div>          
            <p 
                style=
                {{
                    fontSize:'15px', 
                    color:'gray', 
                    fontFamily:'lighter', 
                    marginTop:'4px',
                    fontWeight: 'lighter'
                    }}
                    >
                       This setting controls which language(s) you see content for such as email templates for by default.
            </p>
        <div>
            <Button 
                variant="contained" 
                style=
                {{
                    float:'inline-end', 
                    marginTop:'60px', 
                    color:'#fff', 
                    background:'rgb(30, 123, 228)',
                    marginRight:'115px',
                    fontWeight:'lighter'
                }}               
            >
                <SaveIcon style={{marginRight:'3px'}} />
                    Save
            </Button>
        </div>
      </DashboardLayout>
    );
};
  
export default LanguageComponent;