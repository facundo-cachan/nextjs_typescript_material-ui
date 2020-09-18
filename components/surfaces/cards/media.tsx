import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { IntCard } from "./interfaces";

export default function MediaCard({
  children,
  img,
  title,
  name,
  text,
}: IntCard) {
  const classes = makeStyles({
    root: {
      maxWidth: 345,
      margin: "1rem",
      '& .fas': { fontSize: 20 }
    },
    media: {
      height: 140,
    },
  })();
  return (
    <>
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
          {children != undefined ? (
            children
          ) : (
            <Button size="small" color="primary">
              <i className="fas fa-share-alt" />
            </Button>
          )}
          <Button color="primary">
            <i className="fas fa-shopping-cart" />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
