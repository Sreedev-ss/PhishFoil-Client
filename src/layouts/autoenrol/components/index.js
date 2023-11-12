import { Card } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'


const AutoEnrolSettings = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <Card sx={{ minHeight: '80vh', padding: 3 }}>
                    {/* <div style={{display:'flex',flexWrap:'wrap',gap:15}}>
                        <div className='inner-div'>
                            <NavLink to='/settings/domain' style={{color:'white'}}>
                                Preferred Domain
                            </NavLink>
                        </div>
                        <div className='inner-div'>
                            <NavLink style={{color:'white'}}>
                                Emails
                            </NavLink>
                        </div>
                        <div className='inner-div'>
                            <NavLink style={{color:'white'}}>
                                Theme
                            </NavLink>
                        </div>
                        <div className='inner-div'>
                            <NavLink style={{color:'white'}}>
                                Language
                            </NavLink>
                        </div>
                        <div className='inner-div'>
                            <NavLink style={{color:'white'}}>
                                Preferred Domain
                            </NavLink>
                        </div>
                        <div className='inner-div'>
                            <NavLink style={{color:'white'}}>
                                Preferred Domain
                            </NavLink>
                        </div>
                        <div className='inner-div'>
                            <NavLink style={{color:'white'}}>
                                Preferred Domain
                            </NavLink>
                        </div>
                        
                    </div> */}
                </Card>
            </SoftBox>
        </DashboardLayout>
    )
}

export default AutoEnrolSettings
