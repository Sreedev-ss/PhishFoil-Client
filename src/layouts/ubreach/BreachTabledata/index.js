import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  TableRow,
  TableCell,
} from "@mui/material";

const CustomPagination = () => {
  return (
    // Your custom pagination component JSX here
    <div>{/* <Pagination count={4} shape="rounded" /> */}</div>
  );
};
export default function BreachTableData() {
  //   const rows = [
  //     { id: 1, name: "John Doe", age: 25, city: "New York" },
  //     { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles" },
  //     { id: 3, name: "Bob Smith", age: 28, city: "Chicago" },
  //   ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TableRow
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TableCell
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: 370,
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: 370,
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: 370,
                  }}
                >
                  Breach Count
                </TableCell>
              </TableRow>
            </div>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))} */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                margin: "16px",
              }}
            >
              <img src="/src/assets/images/ubreach.jpg" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                margin: "16px",
              }}
            >
              <h3 style={{ fontWeight: 400 }}>No Breaches Found</h3>
            </div>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
