import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableHead, TableBody, Paper, Modal, Typography, TextField, Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";


const columns = [
  { field: "id", headerName: "id", width: 80 },
  { field: "Name", headerName: "Name", width: 380 },
  { field: "Type", headerName: "Type", width: 380 },
  { field: "Category", headerName: "Category", width: 380 },
];

const rows = [
  {
    id: 1,
    Name: "Acceptable Encryption Policy",
    Type: "Core",
    Category: "Essential",
  },
  {
    id: 2,
    Name: "Acceptable Use Policy",
    Type: "Core",
    Category: "Encryption",
  },
  {
    id: 3,
    Name: "Anti-Malware Policy",
    Type: "Core",
    Category: "Other",
  },
  {
    id: 4,
    Name: "Anti-Social-Engineering Policy",
    Type: "Core",
    Category: "Essential",
  },

];

const customStyles = {
  root: {
    "&:hover": {
      backgroundColor: "transparent", 
    },
  },
};

const CustomPagination = () => {
  return (
    <div>
      <Pagination count={4} shape="rounded" />
    </div>
  );
};
export default function ReportTableData() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectionChange = (selection) => {
        console.log("Selection changed:", selection);
        if (selection.selectionModel.length > 0) {
            const selectedRowIndex = selection.selectionModel[0];
            setSelectedRow(rows[selectedRowIndex]);
            setIsModalOpen(true);
        }
    };
    
    const handleCloseModal = () => {
        setSelectedRow(null);
        setIsModalOpen(false);
    };

    const handleYesButtonClick = () => {
        alert("Opening...");
        handleCloseModal();
      };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <DataGrid
              style={{ border: "none", fontSize:'13px', cursor:'pointer' }}
              rows={rows}
              columns={columns}
              components={{
                Pagination: () => <div/>,
                // Root: (props) => <div {...props} style={customStyles.root} />,

                // Pagination: CustomPagination,
              }}
              checkboxSelection
              onSelectionModelChange={handleSelectionChange}
            />
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h6">Are you sure you want to open?</Typography>
          <Button variant="contained" color="primary" onClick={handleYesButtonClick}>
            Yes
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCloseModal}>
            No
          </Button>
        </Box>
      </Modal>

    </div>
  );
}
