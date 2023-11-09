import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableHead, TableBody, Paper } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import "./TableData.css";

const columns = [
  { field: "userName", headerName: "User Name", width: 90 },
  { field: "courseEnrolled", headerName: "Courses Enrolled", width: 90 },
  { field: "courseStarted", headerName: "Courses Started", width: 130 },
  { field: "courseFinished", headerName: "Courses Finished", width: 130 },
  { field: "averageCompletion", headerName: "Average Completion time from Start", width: 130 },
  { field: "averageEnrolment", headerName: "Average Completion time from Enrolment", width: 130 },
  { field: "totalRetries", headerName: "Total Retries", width: 130 },
  { field: "averageRetries", headerName: "Average Retries", width: 130 },
  { field: "averageScore", headerName: "Average Score", width: 130 },
  { field: "action", headerName: "Action", width: 130 },
];

const rows = [
  {
    id: 1,
    userName: "Snow",
    courseEnrolled: "Jon",
    courseStarted: "12/2/2",
    courseFinished: "12/23/34",
    averageCompletion: "6598887",
    averageEnrolment: "hhhh",
    totalRetries: "ddhhh",
    averageRetries: "dhhh",
    averageScore: "cccc",
    action: "xxxc",
  },
  {
    id: 1,
    userName: "Snow",
    courseEnrolled: "Jon",
    courseStarted: "12/2/2",
    courseFinished: "12/23/34",
    averageCompletion: "6598887",
    averageEnrolment: "hhhh",
    totalRetries: "ddhhh",
    averageRetries: "dhhh",
    averageScore: "cccc",
    action: "xxxc",
  },
  {
    id: 1,
    userName: "Snow",
    courseEnrolled: "Jon",
    courseStarted: "12/2/2",
    courseFinished: "12/23/34",
    averageCompletion: "6598887",
    averageEnrolment: "hhhh",
    totalRetries: "ddhhh",
    averageRetries: "dhhh",
    averageScore: "cccc",
    action: "xxxc",
  },
  {
    id: 1,
    userName: "Snow",
    courseEnrolled: "Jon",
    courseStarted: "12/2/2",
    courseFinished: "12/23/34",
    averageCompletion: "6598887",
    averageEnrolment: "hhhh",
    totalRetries: "ddhhh",
    averageRetries: "dhhh",
    averageScore: "cccc",
    action: "xxxc",
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
