"use client";
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import '../styles/action-des.css';

function ActionDes() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='des'>
      <h2>
        Decentralizing{(window.innerWidth < "900")?<br/>:" "}AI{(window.innerWidth < "900")?" ":<br/>}for a better future.
      </h2>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className="btn-actions">
        <button className="primary-btn" onClick={handleClickOpen}>Join the mission</button>
        <button className="secondary-btn">Learn more</button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your email address to notify you with ontime updates from void.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" style={{color:"#000000", fontWeight:"600"}}>Join</Button>
          <Button onClick={handleClose} style={{color:"#999999"}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ActionDes;
