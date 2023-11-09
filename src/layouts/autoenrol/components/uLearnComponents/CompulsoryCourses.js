import {
    Typography,
    Button,
    MenuItem,
    ListItemText,
    Checkbox,
    Chip,
    Select,
    FormControl,
  } from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';

const items = [ "Phishing(Beginner)", "Law 25 - Quebec (Beginner)", "Mobile Device Security (Beginner)"];

const CompulsoryCourses = () => {
    const [selectedItems, setSelectedItems] = useState(["Phishing(Beginner)"]);
    const handleDelete = (itemToDelete) => (event) => {        
        event.preventDefault();
        const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
        setSelectedItems(updatedSelection);
    };
    const handleChange = (event) => {
        setSelectedItems(event.target.value);
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
                Compulsory Course 
        </Typography>
        <p 
            style={{
                marginTop:'15px', 
                fontSize:'15px', 
                color:'gray', 
                fontWeight:'lighter'
                }}
            >
            Compulsory courses will be sent instantly to all new users who are added to your account.
        </p>
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
                        Course(s)
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
                <SaveIcon style={{marginRight:'3px'}}/>
                    Save
            </Button>
        </div>
        </DashboardLayout>
    );
};
  
export default CompulsoryCourses;