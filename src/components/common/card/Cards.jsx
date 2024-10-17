import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Cards = ({ title, price, stock, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="" height="140" image="{{image}}" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
          {stock}
          {imageUrl}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle</Button>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
};
