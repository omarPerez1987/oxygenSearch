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

const CardFavourite = ({ data, onEdit, onDownload, onDelete }) => {
console.log(data)
  return (
    <Card className="card">
      <CardMedia
        sx={{ height: 324 }}
        image={data.urls.small}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          width: {data.width}px
        </Typography>
        <Typography variant="body2" color="text.secondary">
          height: {data.height}px
        </Typography>
        <Typography variant="body2" color="text.secondary">
          likes : {data.likes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          date added: {data.created_at.slice(0,10)}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button size="small" onClick={() => onEdit(data.id)}><EditIcon/></Button>
        <Button size="small" onClick={() => onDownload(data.urls.full)}><DownloadIcon/></Button>
        <Button size="small" onClick={() => onDelete(data.id)}><DeleteIcon/></Button>
      </CardActions>
    </Card>
  );
};

export default CardFavourite;
