import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { IntCard } from "./interfaces";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({
  children,
  img,
  title,
  name,
  text,
  num,
}: IntCard) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {name ? (
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
        ) : (
          <span />
        )}
        {title ? (
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        ) : (
          <span />
        )}
        {img ? (
          <CardMedia
            className={classes.media}
            image={img}
            title={name}
          />
        ) : (
          <span />
        )}
        {num ? (
          <Typography className={classes.pos} color="textSecondary">
            {num}
          </Typography>
        ) : (
          <span />
        )}
        {text ? (
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        ) : (
          <span />
        )}
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
}
