import { ContentCopyTwoTone, Download, Print } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode.react';

const generateCustomUUID = () => {
  const uuid = uuidv4();
  // Extract the first 16 characters to get the format you want
  const customUUID = uuid.substr(0, 16);
  return customUUID;
};

const customIds = []


for (let i = 0; i < 16; i++) {
  customIds.push(generateCustomUUID())
}
const SecurityDetails = () => {

  const [opentwoFactor1, setopenTwoFactor1] = useState(true)
  const [opentwoFactor2, setopenTwoFactor2] = useState(false)
  const [opentwoFactor3, setopenTwoFactor3] = useState(false)
  const [opentwoFactor4, setopenTwoFactor4] = useState(false)

  const handlefromPage1 = () => {
    setopenTwoFactor1(false)
    setopenTwoFactor2(true)
  }
  const handlefromPage2 = () => {
    setopenTwoFactor2(false)
    setopenTwoFactor3(true)
  }
  const handlefromPage3 = () => {
    setopenTwoFactor3(false)
    setopenTwoFactor4(true)
  }
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
        Two factor Authentication
      </Typography>

      {/* Page one */}
      {opentwoFactor1 && <div style={{ width: '60%', marginTop: 35, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography
          variant="h6"
          sx=
          {{
            fontWeight: '500',
            fontSize: "1rem"
          }}
        >
          Two factor authentication is not enabled yet
        </Typography>
        <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>

        <Box sx={{ mt: 2 }}>
          <Button
            onClick={handlefromPage1}
            variant="contained"
            style={{
              border: "0.5px solid #1C7AE4",
              color: "white",
              backgroundColor: "#1b7ae4",
            }}
          >
            Enable Two-Factor Authentication
          </Button>
        </Box>
      </div>}

      {/* Page two */}
      {opentwoFactor2 && <div style={{ width: '60%' }}>
        <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>Two-factor authentication adds an extra layer of security to your account. In addition to your username and password, you&apos;ll need to enter a code that usecure sends to you via an app on your phone.</p>
        <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>Use an application on your phone to get two-factor authentication codes when prompted.</p>
        <Box sx={{ mt: 2 }} >
          <Button
            variant="contained"
            onClick={handlefromPage2}
            style={{
              border: "0.5px solid #1C7AE4",
              color: "white",
              backgroundColor: "#1b7ae4",
            }}
          >
            Setup using an app
          </Button>
        </Box>
        <p style={{ fontSize: '10px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>We recommend using an application such as Google Authenticator, Authy, 1Password or LastPass Authenticator. These applications support secure backup of your authentication codes in the cloud and can be restored if you lose your device.</p>
      </div>}

      {/* Page Three */}
      {opentwoFactor3 && <>
        <div style={{ width: '60%', marginTop: '20px', border: '0.3px solid #D2D6DA', minHeight: '60vh', padding: '20px' }}>
          <Typography
            variant="h6"
            sx=
            {{
              fontWeight: '500',
              fontSize: "1rem"
            }}
          >
            1. Generate New Recovery Keys
          </Typography>
          <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>Recovery codes are used to access your account in the event you cannot receive two-factor authentication codes.</p>
          <div style={{ width: '90%', border: '0.2px solid #fee58e', backgroundColor: '#fffbe7', padding: '10px' }}>
            <p style={{ fontSize: '14px', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>Download, print, or copy your recovery codes before continuing two-factor authentication setup below.</p>
          </div>
          <div style={{ padding: '20px' }}>
            {customIds.length &&
              customIds.reduce((rows, item, index) => {
                if (index % 2 === 0) {
                  rows.push([item]);
                } else {
                  rows[rows.length - 1].push(item);
                }
                return rows;
              }, []).map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', marginBottom: '10px', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                  {row.map((item, colIndex) => (
                    <Typography
                      variant="h6"
                      key={`${rowIndex}-${colIndex}`}
                      sx={{
                        fontWeight: '700',
                        fontSize: '1rem',
                        marginRight: colIndex === row.length - 1 ? 0 : '100px', // Add margin to separate elements
                      }}
                    >
                      {rowIndex * 2 + colIndex + 1}. {item}
                    </Typography>
                  ))}
                </div>
              ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center' }}>
            <Button
              variant="contained"
              style={{
                border: "0.5px solid #1C7AE4",
                color: "white",
                backgroundColor: "#1b7ae4",
              }}
            >
              <Download /> Download
            </Button>
            <Button
              variant="contained"
              style={{
                border: "0.5px solid #1C7AE4",
                color: "white",
                backgroundColor: "#1b7ae4",
              }}
            >
              <Print /> Print
            </Button>
            <Button
              variant="contained"
              style={{
                border: "0.5px solid #1C7AE4",
                color: "white",
                backgroundColor: "#1b7ae4",
              }}
            >
              <ContentCopyTwoTone /> Copy
            </Button>
          </div>
          <p style={{ fontSize: '14px', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}><b>Treat your recovery codes with the same level of attention as you would your password!</b> We recommend saving them with a password manager such as Lastpass, 1Password, or Keeper.</p>

        </div>
        <div style={{ width: '60%', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            onClick={handlefromPage3}
            style={{
              border: "0.5px solid #1C7AE4",
              color: "white",
              backgroundColor: "#1b7ae4",
            }}
          >
            Next
          </Button>
          <Button
            variant="contained"
            style={{
              border: "0.5px solid #D2D6DA",
              color: "black",
              backgroundColor: "#D2D6DA",
            }}
          >
            Cancel
          </Button>
        </div>
      </>}

      {opentwoFactor4 && <>
        <div style={{ width: '60%', marginTop: '20px', border: '0.3px solid #D2D6DA', minHeight: '60vh', padding: '20px' }}>
          <Typography
            variant="h6"
            sx=
            {{
              fontWeight: '500',
              fontSize: "1rem"
            }}
          >
            2. Scan this barcode with your app
          </Typography>

          <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>Scan the image below with the two-factor authentication app on your phone. If you can&apos;t use a barcode, enter this text code instead.</p>
          <div style={{display:'flex',justifyContent:'center',padding:'20px'}}>
            <QRCode />
          </div>

          <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}><b>Enter the six-digit code from the application</b></p>

          <p style={{ fontSize: '14px', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>After scanning the barcode image, the app will display a six-digit code that you can enter below.</p>
          <TextField
            sx={{ minWidth: '500px' }}
            type="text"
            name="code"
            placeholder='123456'

          />
        </div>
        <div style={{ width: '60%', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            style={{
              border: "0.5px solid #1C7AE4",
              color: "white",
              backgroundColor: "#1b7ae4",
            }}
          >
            Enable
          </Button>
          <Button
            variant="contained"
            style={{
              border: "0.5px solid #D2D6DA",
              color: "black",
              backgroundColor: "#D2D6DA",
            }}
          >
            Cancel
          </Button>
        </div>
      </>}

    </div >
  )
}

export default SecurityDetails
