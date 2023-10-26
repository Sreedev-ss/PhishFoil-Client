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
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import Table from "examples/Tables/Table";
import { Button, IconButton, Menu, MenuItem } from '@mui/material'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {AiOutlineArrowRight} from 'react-icons/ai';

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import SoftButton from "components/SoftButton";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  

  return (

    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Users</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              {/* <Table columns={columns} rows={rows} /> */}
              <TableContainer component={Paper}>
                  <Table sx={{ width: "100%" }} aria-label="simple table">
                    <TableHead sx={{ display: "table-header-group" }}>
                      <TableRow sx={{width: "20px"}}>
                        <TableCell >Sl. No</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Email/User ID</TableCell>
                        <TableCell >Manager</TableCell>                        
                      </TableRow>
                    </TableHead>
                    <TableBody>                    
                        <TableRow                       
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                          <TableCell>1</TableCell>
                          <TableCell>Kalaiyarasi V</TableCell>
                          <TableCell>kalai@twintechsolution.com</TableCell>
                          <TableCell>Vino Jebastian
                          <div style={{ fontSize: '12px', color: 'gray' }}>
                            vino@twintechsolution.com
                          </div>
                          </TableCell>
                          <TableCell>
                            <SoftButton
                              variant="outlined"
                              color="primary"
                              // onClick={() => handleArrowClick()}
                            >
                              <AiOutlineArrowRight/>
                            </SoftButton>
                          </TableCell>
                        </TableRow>                    
                    </TableBody>
                    
                  </Table>
                  <Menu
                  
                  >
                  
                  </Menu>
                </TableContainer>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
