// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import { TextField,Button} from "@mui/material";

// const style = {
//   position: "absolute",
//   top: "80%",
//   left: "40%",
//   transform: "translate(-50%, -50%)",
//   width: 600,
//   bgcolor: "background.paper",
//   border: "0",
//   boxShadow: 24,
//   height: 300,
//   p: 4,
//   fontSize: "12px",
// };

// export default function DeleteUserModal() {
//   return (
//     <div>
//       <Box sx={style}>
//         <div className=" w-96 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col  gap-4">
//           <p>Are you sure you want to delete the selected user?</p>
//         </div>
//         <Box>
//           <label htmlFor="name" style={{ fontSize: "13px" }}>
//             This will delete:
//             <li>Any breach scan for this user</li>
//             <li>Any outstanding or completed course enrolments associated with this user</li>
//             <li>Any pending or finished simulation results for this user</li>
//             <li>Any outstanding or completed policy signature requests for this user</li>
//             <li>All current and historical reporting data associated with this user</li>
//           </label>
//         </Box>

//         <label htmlFor="name">Number of users to delete :</label>

//         <TextField fullWidth variant="filled" type="number" sx={{ gridColumn: "span 2" }} />

//         <Button
//           variant="outlined"
//           style={{
//             border: "1px solid blue",
//             marginRight: "10px",
//             marginTop: "10px",
//             color: "blue",
//             cursor: "pointer",
//           }}
//           onClick={() => {}}
//         >
//           No
//         </Button>
//         <Button
//           variant="outlined"
//           style={{ border: "1px solid red", color: "red", marginTop: "10px",cursor: "pointer",}}
//         >
//           Yes
//         </Button>
//       </Box>
//     </div>
//   );
// }
