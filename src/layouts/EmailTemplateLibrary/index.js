import { Avatar, Box, Button, Card, Checkbox, Chip, Divider, FormControl, InputLabel, MenuItem, Select, Stack, ThemeProvider, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import { AiFillInfoCircle, AiOutlineSearch } from 'react-icons/ai'
import ListItemText from '@mui/material/ListItemText';
const items = ['English', 'Dutch', 'Czech', 'Danish', 'Spanish'];
import addImage from 'assets/images/images.png'
import CreateSimulation from './createSimulation'

import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';



const EmailTemplateLibrary = () => {

    const [openTemp, setOpenTemp] = useState(false)

    const [type, setType] = useState('All');
    const [category, setCategory] = useState('All');
    const [selectedItems, setSelectedItems] = useState(['English']);

    const handleChange = (event) => {
        setSelectedItems(event.target.value);
    };

    const handleType = (event) => {
        setType(event.target.value);
    };
    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleOpenTemplate = () => {
        // Your logic to open the template
      };

    const handleDelete = (itemToDelete) => (event) => {
        console.log(itemToDelete);
        event.preventDefault();
        const updatedSelection = selectedItems.filter((item) => item !== itemToDelete);
        setSelectedItems(updatedSelection);
    };


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card sx={{ minHeight: '75vh' }}>
                        {!openTemp ? <SoftBox
                            // display="flex"
                            // flexDirection="row"
                            // justifyContent="space-between"
                            // alignItems="flex-end"
                            p={3}
                        >
                            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                    <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
                                        Uphish - Email Template Library
                                    </Typography>
                                </div>
                                <Divider />
                                <div style={{ display: 'flex', paddingLeft: '6px', gap: '6px', padding: '4px', width: '100%', height: '2.5rem', backgroundColor: '#e7f6fe', border: '0.5px solid #91d5ff', fontSize: 'medium', alignItems: 'center' }}>
                                    <AiFillInfoCircle fontSize='large' /><span>Please select the landing page for your simulation.</span>
                                </div>
                            </div>
                            <Typography sx={{ fontSize: "medium", color: "black", fontWeight: '500', marginTop: '1.7rem' }}>
                                Choose your landing page
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" alignItems="end">
                                <div style={{ display: 'flex', marginTop: '1rem', gap: 15 }}>
                                    <FormControl sx={{ minWidth: 150, }}>
                                        <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Type</Typography>
                                        <Select
                                            labelId="type-label"
                                            id="type-label"
                                            value={type}
                                            label="Type"
                                            onChange={handleType}
                                        >
                                            <MenuItem value={'All'} >All</MenuItem>
                                            <MenuItem value={'Default'}>Default</MenuItem>
                                            <MenuItem value={'Customs'}>Customs</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ minWidth: 150 }}>
                                        <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Category</Typography>
                                        <Select
                                            labelId="category-label"
                                            id="category-label"
                                            value={category}
                                            label="Status"
                                            MenuProps={{ PaperProps: { sx: { maxHeight: '35%' } } }}
                                            onChange={handleCategory}
                                        >
                                            <MenuItem value={'All'}>All</MenuItem>
                                            <MenuItem value={'No Category'}>No Category</MenuItem>
                                            <MenuItem value={'Bills'}>Bills</MenuItem>
                                            <MenuItem value={'Cloud Services'}>Cloud Services</MenuItem>
                                            <MenuItem value={'Delivery'}>Delivery</MenuItem>
                                            <MenuItem value={'Finance'}>Finance</MenuItem>
                                            <MenuItem value={'Government'}>Government</MenuItem>
                                            <MenuItem value={'Internal'}>Internal</MenuItem>
                                            <MenuItem value={'News & Entertainment'}>News & Entertainment</MenuItem>
                                            <MenuItem value={'Shopping'}>Shopping</MenuItem>
                                            <MenuItem value={'Social Media'}>Social Media</MenuItem>
                                            <MenuItem value={'Travel'}>Travel</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ minWidth: 230, maxWidth: 330, height: 'auto' }}>
                                        <Typography sx={{ fontSize: '', marginBottom: "5px", marginLeft: "2px" }}>Language (s)</Typography>
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
                                                                height: '20px', // Adjust the height as needed
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
                                <Button
                                    variant="outline"
                                    style={{ border: "0.5px solid #d2d6da", color: "#d4d4d4", fontSize: "10px", minWidth: 150, maxHeight: 40 }}
                                    size="small"
                                >
                                    Search for an item...
                                    <AiOutlineSearch style={{ color: "grey", fontSize: "15px" }} />
                                </Button>
                            </Stack>
                            <div
                                style={{
                                    border: "0.5px solid #d2d6da",
                                    width: '30%',
                                    borderRadius: '4px',
                                    height: '20rem',
                                    marginTop: '1.2rem',
                                    display: 'flex',
                                    flexDirection: 'column', 
                                    justifyContent: 'space-between', 
                                  }}
                            >
                                <div>
                                <IconButton
                                    style={{
                                        background: '#fff',
                                        borderRadius: '50%',
                                        justifyContent: 'end'
                                      }}
                                    onClick={handleOpenTemplate}
                                >
                                    <LanguageIcon />  
                                </IconButton>
                                <div 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent:'center', 
                                        alignItems: 'center', 
                                        marginBottom:'100px' }}
                                    >
                                    <img
                                        src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg" 
                                        height='150px'
                                        alt="name"
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />                                    
                                </div>                                
                                <div 
                                    style={{ 
                                        background: 'gray', 
                                        padding: '10px', 
                                        color: 'white', 
                                        textAlign: 'center', 
                                        marginBottom:'0' }}
                                        >
                                   <MailOutlineIcon/>
                                </div>                               
                            </div>
                            </div>
                        </SoftBox> :
                            <SoftBox
                                // display="flex"
                                // flexDirection="row"
                                // justifyContent="space-between"
                                // alignItems="flex-end"
                                p={3}
                            >
                                <CreateSimulation />
                            </SoftBox>
                        }
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    )
}

export default EmailTemplateLibrary;
