import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableContainer, Table, TableHead, TableBody, Paper } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const columns = [
  { field: "userName", headerName: "User Name", width: 150 },
  { field: "score", headerName: "Score", width: 150 },
  { field: "retries", headerName: "Retries", width: 150 },
  { field: "enrollDate", headerName: "Enroll Date", width: 150 },
  { field: "startDate", headerName: "Start Date", width: 150 },
  { field: "finishDate", headerName: "Finish Date", width: 150 },
  { field: "completionTimeFromStart", headerName: "Completion time from Start", width: 150 },
  {
    field: "completionTimeFromEnrolment",
    headerName: "Completion time from Enrollment",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    userName: "Snow",
    score: "12/2/2",
    retries: "12/23/34",
    enrollDate: "6598887",
    startDate: "hhhh",
    finishDate: "ddhhh",
    completionTimeFromStart: "dhhh",
    completionTimeFromEnrolment: "cccc",
  },
  {
    id: 1,
    userName: "Snow",
    score: "12/2/2",
    retries: "12/23/34",
    enrollDate: "6598887",
    startDate: "hhhh",
    finishDate: "ddhhh",
    completionTimeFromStart: "dhhh",
    completionTimeFromEnrolment: "cccc",
  },
  {
    id: 1,
    userName: "Snow",
    score: "12/2/2",
    retries: "12/23/34",
    enrollDate: "6598887",
    startDate: "hhhh",
    finishDate: "ddhhh",
    completionTimeFromStart: "dhhh",
    completionTimeFromEnrolment: "cccc",
  },
  {
    id: 1,
    userName: "Snow",
    score: "12/2/2",
    retries: "12/23/34",
    enrollDate: "6598887",
    startDate: "hhhh",
    finishDate: "ddhhh",
    completionTimeFromStart: "dhhh",
    completionTimeFromEnrolment: "cccc",
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
export default function ReportTableData() {
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
