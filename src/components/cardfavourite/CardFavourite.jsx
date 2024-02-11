import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFavorite,
  updateDescription,
} from "../../features/favouriteSlice/favouritesSlice.js";
import EditModal from "../modal/EditModal";

import "./cardFavourite.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

const CardFavourite = ({ data }) => {
  const dispatch = useDispatch();

  const [editModal, setEditModal] = useState(false);

  const [currentDescription, setCurrentDescription] = useState({
    title: data.description,
    width: data.width,
    height: data.height,
    likes: data.likes,
    date: data.date.slice(0, 10),
  });

  const closeModal = () => {
    setEditModal(false);
  };

  const saveEditedDescription = (newDescription) => {
    setCurrentDescription(newDescription);
    dispatch(
      updateDescription({ id: data.id, newDescription: newDescription })
    );
    closeModal();
  };

  const downloadImage = (urlFull, name) => {
    fetch(urlFull)
      .then((response) => response.blob())
      .then((blob) => {
        const downloadQuestion = confirm(
          "¿Quieres iniciar la descarga de la imagen?"
        );

        if (downloadQuestion) {
          const url = window.URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = url;
          a.download = `${name}.jpg`;
          a.click();

          window.URL.revokeObjectURL(url);
        } else {
          toast.warn("Cancelada la descarga");
        }
      })
      .catch((error) =>
        toast.error("Error al obtener la foto de Unsplash:", error)
      );
  };

  return (
    <Card className="card">
      <CardMedia sx={{ height: 324 }} image={data.smallImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {currentDescription.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          width: {currentDescription.width}px
        </Typography>
        <Typography variant="body2" color="text.secondary">
          height: {currentDescription.height}px
        </Typography>
        <Typography variant="body2" color="text.secondary">
          likes : {currentDescription.likes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          date added: {currentDescription.date.slice(0, 10).split("-").reverse().join("-")}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" onClick={() => setEditModal(true)}>
          <EditIcon />
        </Button>
        <Button
          size="small"
          onClick={() => downloadImage(data.fullImage, data.description)}
        >
          <DownloadIcon />
        </Button>
        <Button
          size="small"
          onClick={() => {
            dispatch(removeFavorite(data.id))
            toast.error('foto eliminada con éxito')
          }}
        >
          <DeleteIcon />
        </Button>
      </CardActions>
      {editModal && (
        <EditModal
          open={editModal}
          onClose={closeModal}
          onSave={saveEditedDescription}
          currentDescription={currentDescription}
        />
      )}
    </Card>
  );
};

export default CardFavourite;
