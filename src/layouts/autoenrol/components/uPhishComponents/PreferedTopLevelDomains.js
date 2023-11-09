import {
    Typography,
    Switch,
    Button,
    MenuItem,
    Select,
    Chip,
    Box,
    ListItemText,
    Checkbox
  } from "@mui/material";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import React, {useState} from "react";
  import SaveIcon from '@mui/icons-material/Save';
  const domainItem = [".com", ".ca", ".com.au",".de"];
 

  const PreferedTopLevelDomain = () => {
    const [domain, setDomain] = useState([".com"]);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const handleDomain = (event) => {
        setDomain(event.target.value);
      };
      const handleDeleteDomain = (itemToDelete) => (event) => {
        event.preventDefault();
        const updatedDoamin = domain.filter((item) => item !== itemToDelete);
        setDomain(updatedDoamin);
      };
    

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
               Preferred Top Level Domains (TLDs)
        </Typography>
        <Box
            display="grid"
            gap="15px"
            width='590px'
            sx={{
              fontSize: "16px",
            }}
          >
        <p 
            style=
            {{
                marginTop:'40px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
              Here you can set the preferred top level domain(s) e.g. .com, .co.uk. This determines which of our domains appear first in dropdowns to set sender and landing page domains when creating phishing simulations.
        </p>
        <p 
            style=
            {{
                marginTop:'10px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
             This will also drive which domains are used by Auto Phish if enabled.
        </p>
        <Typography sx={{ fontSize: "", marginBottom: "5px", marginLeft: "2px" ,marginTop:"40px" }}>
        Preferred Top Level Domains (TLDs) :
                </Typography>
                <Select
                  labelId="multiple-select-label"
                  id="multiple-select"
                  multiple
                  label="Select languages"
                  value={domain}
                  onChange={handleDomain}
                  MenuProps={{ PaperProps: { sx: { maxHeight: "35%" } } }}
                  renderValue={(selected) => (
                    <div>
                      {selected.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          onDelete={handleDeleteDomain(item)}
                          sx={{
                            marginRight: "5px",
                            height: "20px", // Adjust the height as needed
                          }}
                        />
                      ))}
                    </div>
                  )}
                >
                  {domainItem.map((item) => (
                    <MenuItem key={item} value={item}>
                      <Checkbox checked={domain.indexOf(item) > -1} />
                      <ListItemText secondary={item} />
                    </MenuItem>
                  ))}
                </Select>
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "15px",
                    fontWeight: "lighter",
                    color: "gray",
                    fontFamily: "sans-serif",
                  }}
                >
                 This list is restricted to TLDs the system has domains for.
                </p>
                </Box>
     
        <Button 
            variant="contained" 
            style=
            {{
                float:'inline-end', 
                marginTop:'60px', 
                color:'#fff', 
                background:'rgb(30, 123, 228)',
                marginRight:'100px',
                fontWeight:'lighter'
            }}
        >
            <SaveIcon style={{marginRight:'3px'}}/>
                Save
        </Button>
      </DashboardLayout>
    );
  };
  
  export default PreferedTopLevelDomain;