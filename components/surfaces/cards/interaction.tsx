import { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Button,
  Icon,
  Typography,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import { IntCard } from "./interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundImage: `url(logo.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    actions: { justifyContent: "space-between" },
  })
);

export default function RecipeReviewCard({
  children,
  action,
  img,
  title,
  name,
  text,
  num,
  recipe,
}: IntCard) {
  const classes = useStyles(),
    [expanded, setExpanded] = useState(false),
    handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Contenido" className={classes.avatar}>
            Populus
          </Avatar>
        }
        action={action}
        title={name}
        subheader={`$${num} ARS`}
      />
      <CardMedia className={classes.media} image={img} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        {children != undefined ? (
          children
        ) : (
          <Button size="small" color="primary">
            <Icon className="fas fa-share-alt"/>
          </Button>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Icon className="fas fa-chevron-down"/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {recipe.map((paragraph: string, i: any) => (
            <Typography paragraph key={i}>
              {paragraph}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
