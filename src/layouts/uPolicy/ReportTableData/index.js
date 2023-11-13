import React, {useState} from "react"; 
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableBody, Paper, Modal } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import TemplateLibraryData from "../components/templateLibraryData";

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
    const [viewSimulationsModalOpen, setViewSimulationModalOpen] = useState(false);

      const openViewSimulationsModal = () => {
        setViewSimulationModalOpen(true)
    }

    const closeViewSimulationsModal = () => {
        setViewSimulationModalOpen(false)
    }

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
              }}
              checkboxSelection
              onRowClick={openViewSimulationsModal}
            />
            <Modal
                open={viewSimulationsModalOpen}
                onClose={closeViewSimulationsModal}
                >
                  
                <TemplateLibraryData/>
            </Modal>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
