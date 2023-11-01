import { Card, Divider, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'
import ReviewsBar from './components/ReviewsBar'
import { AiFillInfoCircle } from 'react-icons/ai'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import MailOutline from '@material-ui/icons/MailOutline';


const ViewSimulation = () => {
    return (
        <DashboardLayout>
            {/* <DashboardNavbar /> */}
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: 'space-between', padding: '50px', height: '5rem', backgroundColor: 'white' }}>
                        <Typography sx={{ fontSize: "large", color: "black", fontWeight: "bold" }}>
                            uPhish - Simulations
                        </Typography>
                        <FormGroup>
                            <FormControlLabel control={<Switch />} label="Hide Inactive Users" />
                        </FormGroup>
                    </div>
                    <Divider />
                    <div style={{ display: "flex", gap: "30px" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Total</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={55} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 12</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Visited</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={16} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 9</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Compromised</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={15} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 8</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Reported</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <div style={{ width: 90, height: 70 }}><ReviewsBar score={9} /></div>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Total - 5</h6>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: 250, height: 260, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
                                <h5>Total Simulations</h5>
                                <span><AiFillInfoCircle /></span>
                            </div>
                            <h2>55</h2>
                            <div style={{ width: '70%', height: '1px', backgroundColor: '#f4f5f5' }} />
                            <h6 style={{ fontWeight: 400 }}>Unopened - 43</h6>
                        </div>
                    </div>
                    {/* <Card sx={{ minHeight: '75vh' }}>
                    </Card> */}
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    )
}

export default ViewSimulation


