import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "80%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  height: 300,
  p: 4,
  fontSize: "12px",
};

export default function RemoveModal() {
  return (
    <div>
      <Box sx={style}>
        <div className=" w-96 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col  gap-4">
          <p>Remove Language(s) from the Selected Landing Page</p>
        </div>
      

        <label htmlFor="name">Language(s) :</label>

        <TextField fullWidth variant="filled" type="number" sx={{ gridColumn: "span 2" }} />

        <Button
          variant="outlined"
          style={{ border: "1px solid blue", marginRight: "10px", marginTop:"10px", color: "blue" }}
        >
        Language(s)
        </Button>
       
      </Box>
    </div>
  );
}
