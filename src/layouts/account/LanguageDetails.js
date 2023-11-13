import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const LanguageDetails = () => {
    return (
        <div>
            <Typography
                variant="h4"
                sx=
                {{
                    fontWeight: '500',
                    fontSize: "1.3rem"
                }}
            >
                Change Language
            </Typography>
            <p style={{ fontSize: '14px', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>Preferred Language</p>
            <TextField
                select
                name="preferredlanguage"
                type="text"
                sx={{ minWidth: '500px' }}
                defaultValue="English(UK)"
            >
                <MenuItem value="English(UK)">English(UK)</MenuItem>
                <MenuItem value="Italian">Italian</MenuItem>
                <MenuItem value="Polish">Polish</MenuItem>
                <MenuItem value="Malaysian">Malaysian</MenuItem>
            </TextField>
            <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>This will change the language that the app is currently displayed in.</p>
            <Box sx={{ mt: 2 }} >
                <Button
                    variant="contained"
                    style={{
                        border: "0.5px solid #1C7AE4",
                        color: "white",
                        backgroundColor: "#1b7ae4",
                    }}
                >
                   Save
                </Button>
            </Box>
        </div>
    )
}

export default LanguageDetails
