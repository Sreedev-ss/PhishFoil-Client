import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField,Button} from "@mui/material";

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

export default function DeleteModal() {
  return (
    <div>
      <Box sx={style}>
        <div className=" w-96 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col  gap-4">
          <p>Are you sure you want to delete the selected landing page?</p>
        </div>
        <Box>
          <label htmlFor="name" style={{ fontSize: "13px" }}>
            This will delete:
            <li>All simulations that use this email template will be deleted</li>
            <li>The recipients list of those simulations will be deleted</li>
            <li>The results of those simulations will be deleted</li>
            <li>Any active simulations using this email template will be disrupted</li>
          </label>
        </Box>

        <label htmlFor="name">Number of landing pages to delete :</label>

        <TextField fullWidth variant="filled" type="number" sx={{ gridColumn: "span 2" }} />

        <Button
          variant="outlined"
          style={{
            border: "1px solid blue",
            marginRight: "10px",
            marginTop: "10px",
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => {}}
        >
          No
        </Button>
        <Button
          variant="outlined"
          style={{ border: "1px solid red", color: "red", marginTop: "10px",cursor: "pointer",}}
        >
          Yes
        </Button>
      </Box>
    </div>
  );
}
