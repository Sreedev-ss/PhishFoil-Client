import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableHead, TableBody, Paper } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import "./TableData.css";

const columns = [
  { field: "recepient", headerName: "Receipient", width: 130 },
  { field: "sentAt", headerName: "Sent At", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "reported", headerName: "Reported", width: 130 },
  { field: "reported", headerName: "Delevery Method", width: 130 },
];

const rows = [
  {
    id: 1,
    recepient: "Snow",
    sentAt: "Jon",
    status: "12/2/2",
    reported: "12/23/34",
  },
];

const customStyles = {
  root: {
    "&:hover": {
      backgroundColor: "transparent", // Remove hover background color
    },
  },
};

const CustomPagination = () => {
  return (
    // Your custom pagination component JSX here
    <div>
      <Pagination count={4} shape="rounded" />
    </div>
  );
};
export default function DataTable() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <DataGrid
              style={{ border: "none" }}
              rows={rows}
              columns={columns}
              components={{
                Root: (props) => <div {...props} style={customStyles.root} />,

                Pagination: CustomPagination, // Use your custom pagination component
              }}
              className="custom-data-grid"
            />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
