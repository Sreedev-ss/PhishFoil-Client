import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const PasswordDetails = () => {
    return (
        <Box >
            <form>
                <Box style={{ marginTop: "15px" }}>
                    <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                        Current Password:
                    </label>
                </Box>
                <TextField
                    sx={{ minWidth: '400px' }}
                    type="text"
                    name="currentpassword"
                    placeholder='Current Password'

                />
                <Box style={{ marginTop: "15px" }}>
                    <label className='required' htmlFor="name" style={{ fontSize: "13px" }}>
                        New Password:
                    </label>
                </Box>
                <TextField
                    sx={{ minWidth: '400px' }}
                    type="text"
                    name="newpassword"
                    placeholder='New Password'
                />
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        style={{
                            border: "0.5px solid #1C7AE4",
                            color: "white",
                            backgroundColor: "#1b7ae4",
                            marginTop: "15px",
                        }}
                    >
                        Update Password
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default PasswordDetails
