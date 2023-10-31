/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormGroup, IconButton, InputLabel, Menu, MenuItem, Select, TextField, Typography } from "@mui/material";
import dialog from "assets/theme/components/dialog";
import SoftAlertCloseIcon from "components/SoftAlert/SoftAlertCloseIcon";
import { useRef, useState } from "react";
import EmailEditor from 'react-email-editor';
//import { pointer } from "@testing-library/user-event/dist/types/pointer";


function EditLandingPage() {
    const [showAccessControl, setAccessControl] = useState(false);
    const emailTemplateSelected = !showAccessControl;
    const emailEditorRef = useRef(null);
    
    const [languages, setLanguages] = useState([]); 
  const [menuOpen, setMenuOpen] = useState(false); 
  const [category, setCategory] = useState("");
  const [menuCatOpen, setMenuCatOpen] = useState(false); 

  const [checked, setChecked] = useState(false); 
  const handleChange = () => {
    setChecked(!checked); 
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  }

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{marginBottom: '30px'}}>
        <h1 style={{fontSize:'25px', marginBottom: '30px'}}>uPhish - Update Landing Page</h1>
       
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <div onClick={() =>setAccessControl(false)} 
            style={{ 
                marginRight: '45px',
                color: emailTemplateSelected ? 'blue':'black',
            }}
            >
                <h2 style={{fontSize:'15px'}}>Landing</h2>
            </div>
            <div onClick={() => setAccessControl(true)} 
            style={{ 
                marginRight: '10px',
                color: emailTemplateSelected ? 'black':'blue',
                cursor: 'pointer',
                }}>
                <h2 style={{fontSize:'15px'}}>Access Control</h2>
            </div>
        </div>
        { showAccessControl ? (
            <div>
                <form>
                    <div style={{ marginBottom: '30px' }}>
                        <p style={{fontSize:'15px', marginTop:"15px"}}>Do you wish to make this email template available to all of your Customers?:</p>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </div>
                    <div>
                        <p style={{ color:'gray', fontSize:'15px'}}>
                        Checking this box will make this email template available to all Customers belonging to your MSP.
                        </p>
                    </div>
                    <div>
                        <p style={{marginTop:"20px", fontSize:"15px"}}>Customer access:</p>
                        <div style={{ marginBottom: '30px', marginTop:'30px', width: '550px'}}>
                            <TextField
                                required
                                id="outlined-required"
                                defaultValue="Customers"
                                fullWidth
                            />
                        </div>
                        <p style={{fontSize:"15px", color:"gray"}}>This email template will be visible to the Customers selected</p>
                    </div>
                    <div>
                        <button
                        style={{ marginRight: '10px', color:'blue' }}
                        
                        >
                        Save
                        </button>
                        <button style={{color:"red"}}>Cancel</button>
                    </div>
                </form>
            </div>
        ) : (
            <div>
                <form>
                    <div>
                        <div style={{ marginBottom: '30px', marginTop:'30px', width: '550px'}}>
                            <TextField
                                required
                                id="outlined-required"
                                defaultValue="Template Name"
                                fullWidth
                            />
                        </div>
                        <FormControl style={{ marginBottom: '30px', width: '550px'}}>
                            <InputLabel htmlFor="languages" style={{fontSize:"15px"}}>Language(s)</InputLabel>
                            <Select
                                labelId="languages"
                                id="languages"
                                multiple 
                                value={languages} 
                                fullWidth
                                onClick={() => {
                                setAccessControl(false);
                                setMenuOpen(true);
                                }}
                                onChange={(e) => setLanguages(e.target.value)} 
                            >
                                <MenuItem value="english">English</MenuItem>
                                <MenuItem value="spanish">Spanish</MenuItem>
                            </Select>
                            {menuOpen && ( 
                                <Menu
                                open={menuOpen}
                                onClose={() => setMenuOpen(false)} 
                                anchorEl={document.getElementById("languages")} 
                                >
                                <MenuItem onClick={() => setLanguages(["english"])}>English</MenuItem>
                                <MenuItem onClick={() => setLanguages(["spanish"])}>Spanish</MenuItem>
                                </Menu>
                            )}
                            </FormControl>

                        
                        <div>
                        <FormControl style={{ marginBottom: '30px', width: '550px'}}>
                            <InputLabel style={{fontSize:"15px"}} htmlFor="category">Category</InputLabel>
                            <Select
                                
                                labelId="category"
                                id="category"
                                value={category}
                                fullWidth
                                onClick={() => {
                                setAccessControl(false);
                                setMenuCatOpen(true); 
                                }}
                            >

                            </Select>
                            {menuCatOpen && ( 
                                <Menu
                                open={menuCatOpen}
                                onClose={() => setMenuCatOpen(false)} 
                                anchorEl={document.getElementById("category")} 
                                >
                                <MenuItem onClick={() => setCategory("No Category")}>No Category</MenuItem>
                                <MenuItem onClick={() => setCategory("Bills")}>Bills</MenuItem>
                                <MenuItem onClick={() => setCategory("Cloud Services")}>Cloud Services</MenuItem>
                                <MenuItem onClick={() => setCategory("Delivery")}>Delivery</MenuItem>
                                <MenuItem onClick={() => setCategory("Finances")}>Finances</MenuItem>
                                <MenuItem onClick={() => setCategory("Government")}>Government</MenuItem>
                                <MenuItem onClick={() => setCategory("Intrenal")}>Intrenal</MenuItem>
                                <MenuItem onClick={() => setCategory("News & Entertainment")}>News & Entertainment</MenuItem>
                                <MenuItem onClick={() => setCategory("Shopping")}>Shopping</MenuItem>
                                <MenuItem onClick={() => setCategory("Social Media")}>Social Media</MenuItem>
                                <MenuItem onClick={() => setCategory("Travel")}>Travel</MenuItem>
                                </Menu>
                            )}
                        </FormControl>
                        </div>
                    </div>
                    <div>
        <div>
          <button onClick={exportHtml}>Content</button>
        </div>

        <EmailEditor
          ref={emailEditorRef}
          onLoad={onLoad}
          onReady={onReady}
        />
      </div>
                </form>
            </div>

            
        )}
        
    </div>
      
      
    </DashboardLayout>
  );
 
}

export default EditLandingPage;
