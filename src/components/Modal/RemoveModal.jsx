import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, MenuItem } from "@mui/material";

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
  fontSize: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function RemoveModal() {
  return (
    <div>
      <Box sx={style}>
        <div className=" w-96 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col  gap-4">
          <p>Remove Language(s) from the Selected Landing Page</p>
        </div>

        <label htmlFor="name">Language(s) :</label>

        <TextField
          select
          fullWidth
          variant="filled"
          type="text"
          sx={{
            gridColumn: "span 2",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        >
          <MenuItem value="IN">English</MenuItem>
          <MenuItem value="US">Malayalam</MenuItem>
          <MenuItem value="AU">Tamil</MenuItem>
        </TextField>

        <Button
          variant="contained"
          style={{
            border: "0.5px solid #1C7AE4",
            color: "white",
            backgroundColor: "red",
            marginTop: "15px",
          }}
        >
          Language(s)
        </Button>
      </Box>
    </div>
  );
}
