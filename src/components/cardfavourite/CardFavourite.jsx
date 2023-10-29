import React from "react";
import "./cardFavourite.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CardFavourite = () => {
  return (
    <Card className="card">
      <CardMedia
        sx={{ height: 324 }}
        image="https://okdiario.com/img/2020/09/10/enfermedades-que-nos-puede-transmitir-un-reptil.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          width: 256px
        </Typography>
        <Typography variant="body2" color="text.secondary">
          height: 200px
        </Typography>
        <Typography variant="body2" color="text.secondary">
          likes : 16
        </Typography>
        <Typography variant="body2" color="text.secondary">
          date added: 27/10/2023
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button size="small"><EditIcon/></Button>
        <Button size="small"><DownloadIcon/></Button>
        <Button size="small"><DeleteIcon/></Button>
      </CardActions>
    </Card>
  );
};

export default CardFavourite;
