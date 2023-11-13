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

const columns = [
    { field: 'name', headerName: 'Name', width: 230 },
    { field: 'status', headerName: 'Status', width: 230 },
    { field: 'recipient', headerName: 'Recipient', width: 230 },


  ];

  const rows = [
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}

      />
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     width: "100%",
    //   }}
    // >
    //   <TableContainer component={Paper}>
    //     <Table>
    //       <TableHead>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "space-evenly",
    //             alignItems: "center",
    //             width: "100%",
    //           }}
    //         >
    //           <TableRow
    //             style={{
    //               display: "flex",
    //               justifyContent: "space-evenly",
    //               alignItems: "center",
    //               width: "100%",
    //             }}
    //           >
    //             <TableCell
    //               style={{
    //                 display: "flex",
    //                 justifyContent: "space-evenly",
    //                 alignItems: "center",
    //                 width: 270,
    //               }}
    //             >
    //               Recipient
    //             </TableCell>
    //             <TableCell
    //               style={{
    //                 display: "flex",
    //                 justifyContent: "space-evenly",
    //                 alignItems: "center",
    //                 width: 270,
    //               }}
    //             >
    //               Status
    //             </TableCell>
    //             <TableCell
    //               style={{
    //                 display: "flex",
    //                 justifyContent: "space-evenly",
    //                 alignItems: "center",
    //                 width: 270,
    //               }}
    //             >
    //               Last Signed At
    //             </TableCell>
    //           </TableRow>
    //         </div>
    //       </TableHead>
    //       <TableBody>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "space-evenly",
    //             alignItems: "center",
    //             width: "100%",
    //             margin: "16px",
    //           }}
    //         >
    //           <img src="/src/assets/images/ubreach.jpg" />
    //         </div>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "space-evenly",
    //             alignItems: "center",
    //             width: "100%",
    //             margin: "16px",
    //           }}
    //         >
    //           <h3 style={{ fontWeight: 400, color:'gray', fontSize:'15px' }}>No Data</h3>
    //         </div>
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </div>
  );
}
