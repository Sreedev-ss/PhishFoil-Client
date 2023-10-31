import { Card, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'

const CreateSimulation = () => {

    const [type, setType] = useState('All');
    const [category, setCategory] = useState('All');

    const handleType = (event) => {
        setType(event.target.value);
    };
    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox
                            // display="flex"
                            // flexDirection="row"
                            // justifyContent="space-between"
                            // alignItems="flex-end"
                            p={3}
                        >
                            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                    <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
                                        Uphish - Create Simulation
                                    </Typography>
                                </div>
                                <Divider />
                                <div style={{ display: 'flex', gap: '6px', padding: '4px', width: '100%', height: '2.5rem', backgroundColor: '#e7f6fe', border: '0.5px solid #91d5ff', fontSize: 'medium', alignItems: 'center' }}>
                                    <AiFillInfoCircle fontSize='large' /><span>Please select the landing page for your simulation.</span>
                                </div>
                            </div>
                            <Typography sx={{ fontSize: "medium", color: "black", fontWeight: '500', marginTop: '2rem' }}>
                                Choose your landing page
                            </Typography>
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
                            </div>
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    )
}

export default CreateSimulation
