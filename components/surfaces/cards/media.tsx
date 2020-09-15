import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Icon,
} from "@material-ui/core";
import { IntCard } from "./interfaces";

export default function MediaCard({ img, title, name, text }: IntCard) {
  const classes = makeStyles({
    root: {
      maxWidth: 345,
      margin: "1rem",
    },
    media: {
      height: 140,
    },
  })();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Icon>share</Icon>
        </Button>
        <Button size="small" color="primary">
          <Icon>shopping_cart</Icon>
        </Button>
      </CardActions>
    </Card>
  );
}
