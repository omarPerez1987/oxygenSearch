import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const EditModal = ({ open, onClose, onSave, currentDescription }) => {
  const {
    width,
    height,
    likes,
    date,
    title,
  } = currentDescription;
  
  const [formData, setFormData] = useState({
    title: title,
    width: width,
    height: height,
    likes: likes,
    date: date,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog sx={{ height: "auto", width: "80%" }} open={open} onClose={onClose}>
      <DialogTitle>Edit Description</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ marginTop: "1em" }}
          label="Title"
          type="text"
          fullWidth
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          sx={{ marginTop: "1em" }}
          label="width"
          type="number"
          fullWidth
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
        <TextField
          sx={{ marginTop: "1em" }}
          label="height"
          type="number"
          fullWidth
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <TextField
          sx={{ marginTop: "1em" }}
          label="likes"
          type="number"
          fullWidth
          name="likes"
          value={formData.likes}
          onChange={handleChange}
        />
        <TextField
          sx={{ marginTop: "1em" }}
          label="date"
          type="date"
          fullWidth
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
