import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const EditModal = ({ open, onClose, onSave, currentDescription }) => {
  const { width, height, likes, date } = currentDescription;

  const [descriptionWidth, setDescriptionWidth] = useState(width);
  const [descriptionHeight, setDescriptionHeight] = useState(height);
  const [descriptionLikes, setDescriptionLikes] = useState(likes);
  const [descriptionDate, setDescriptionDate] = useState(date);

  const handleSave = () => {
    const newDescription = {
      width: descriptionWidth,
      height: descriptionHeight,
      likes: descriptionLikes,
      date: descriptionDate,
    };

    onSave(newDescription);
    onClose();
  };

  return (
    <Dialog sx={{ height: "auto", width: "80%" }} open={open} onClose={onClose}>
      <DialogTitle>Edit Description</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ marginTop: "1em" }}
          label="width"
          type="number"
          fullWidth
          value={descriptionWidth}
          onChange={(e) => setDescriptionWidth(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "1em" }}
          label="height"
          type="number"
          fullWidth
          value={descriptionHeight}
          onChange={(e) => setDescriptionHeight(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "1em" }}
          label="likes"
          type="number"
          fullWidth
          value={descriptionLikes}
          onChange={(e) => setDescriptionLikes(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "1em" }}
          label="date"
          type="date"
          fullWidth
          value={descriptionDate}
          onChange={(e) => setDescriptionDate(e.target.value)}
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
