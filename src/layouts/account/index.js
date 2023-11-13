import { Card, Typography } from '@mui/material'
import SoftBox from 'components/SoftBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ChangeDetails from './ChangeDetails'
import PasswordDetails from './PasswordDetails'
import SecurityDetails from './SecurityDetails'


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
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


const Accounts = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <Card sx={{ minHeight: '75vh', padding: 3 }}>
                    {/* <Typography
                        variant="h4"
                        sx=
                        {{
                            fontWeight: '500',
                            fontSize: "1.3rem"
                        }}
                    >
                        Manage your Admin User
                    </Typography> */}
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Change Details" {...a11yProps(0)} />
                                <Tab label="Password" {...a11yProps(1)} />
                                <Tab label="Security" {...a11yProps(2)} />
                                <Tab label="Language" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <ChangeDetails/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <PasswordDetails/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <SecurityDetails/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            Item Four
                        </CustomTabPanel>
                    </Box>
                </Card>
            </SoftBox>
        </DashboardLayout>
    )
}

export default Accounts


CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

