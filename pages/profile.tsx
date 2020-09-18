import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Paper,
  Typography,
  ButtonBase,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Icon
} from "@material-ui/core";

import { CardInteraction } from "@components";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        padding: theme.spacing(2),
      },
      paper: {
        padding: theme.spacing(2),
        margin: "auto",
      },
      image: {},
      img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
      },
      list: {
        width: "100%",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: "inline",
      },
    })
  );

export default function ComplexGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="user.jpeg" />
                </ButtonBase>
              </Grid>
              <Grid item xs={6} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Elon Musk
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Cliente
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Puntos 11
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List className={classes.list}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="pan.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Pan Casero"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      24/09/2020
                    </Typography>
                    {" — 2 x $100"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="queso.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Queso de campo (500gr)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      22/09/2020
                    </Typography>
                    {" — 1 x $300"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="tomate.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Tomates secos (200gr)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      22/09/2020
                    </Typography>
                    {" — 1 x $200"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
        CardInteraction
      </Grid>
    </div>
  );
}
