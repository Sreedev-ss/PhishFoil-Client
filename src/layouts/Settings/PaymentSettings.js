import {
    Typography,
    Button,
    TextField,
  } from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import { Box } from "@mui/system";

const PaymentSettings = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardMonth, setCardMonth] = useState("");
    const [cardYear, setCardYear] = useState("");
    const [cvc, setCvc] = useState("");

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
                Payment Settings
        </Typography>
        <p 
            style={{
                marginTop:'15px', 
                fontSize:'15px', 
                color:'gray', 
                fontWeight:'lighter'
                }}
            >
            Card Details
        </p>
        <div 
                style=
                {{ 
                    display: 'flex', 
                    gap: 100, 
                    marginTop: 18 
                }}
                >
                                                
                <Box >
                    <Box>
                        <label
                        htmlFor="cardNumber"
                        style={{ fontSize: "13px" }}
                        >
                        Card Number:
                        </label>
                    </Box>
                    <TextField
                        fullWidth
                        type="text"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        sx={{ gridColumn: "span 2" }}
                    />
                </Box>
                <Box>
                <Box>
                    <label htmlFor="cardMonth" style={{ fontSize: "13px" }}>
                        Card Month:
                    </label>
                    </Box>
                    <TextField
                    
                    type="number"
                    name="cardMonth"
                    value={cardMonth}
                    inputProps={{ min: 1, max: 12}}
                    onChange={(e) => setCardMonth(e.target.value)}
                    />
                </Box>
                <Box>
                    <Box>
                    <label htmlFor="cardYear" style={{ fontSize: "13px" }}>
                        Card Year:
                    </label>
                    </Box>
                    <TextField
                        type="number"
                        name="cardYear"
                        value={cardYear}
                        inputProps={{ min: 2023, max: 2090}}
                        variant="outlined"
                        style={{}}             
                    />
                </Box>
                <Box>
                    <Box>
                    <label htmlFor="cvc" style={{ fontSize: "13px" }}>
                        CVC:
                    </label>
                    </Box>
                    <TextField
                    
                    type="text"
                    name="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    />
                </Box>

                </div> 
                <div>
                <Button
                    variant="outlined"
                    style=
                    {{ 
                        border: "0.5px solid grey", 
                        color: "#585958", 
                        marginTop:'40px'
                    }}
                    size="small"
                    disabled
                    >
                    Save Card
                </Button>
                <div>
                <p 
                    style={{
                        marginTop:'35px', 
                        fontSize:'15px', 
                        color:'black', 
                        }}
                    >
                    Currency
                </p>
                <p 
                    style={{
                        marginTop:'10px', 
                        fontSize:'15px', 
                        color:'gray', 
                        }}
                    >
                    Your billing currency is currently 
                    <strong style={{color:'black'}}>
                        USD - United States dollar ($)
                    </strong>
                </p>
                <p 
                    style={{
                        marginTop:'10px', 
                        fontSize:'15px', 
                        color:'gray', 
                        }}
                    >
                    If you wish to change your billing currency please contact support.
                </p>
                </div>
            </div>
        </DashboardLayout>
    );
};
  
export default PaymentSettings;