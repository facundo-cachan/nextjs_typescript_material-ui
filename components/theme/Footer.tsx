import { useEffect } from "react";
import { loadCSS } from 'fg-loadcss';
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Icon,
  List,
  Link,
  Button,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { CardInteraction, CardSimple } from "@components";
import { app_name, title, description, social } from "../../package.json";

interface Social {
  user: string;
  url: string;
  icon: string;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > .fa': {
          margin: theme.spacing(2),
        },
        flexGrow: 1,
        padding: "1rem",
        justifyItems: "center",
        backgroundColor: "#01DFD7",
      },
      paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
      },
      listIcon: { minWidth: "30px" },
    })
  );

export default function Footer() {
  const classes = useStyles(),
    Adds = {
      img: "combo1.jpg",
      title: "Combo Picada",
      name: "Seleccion de nuestro maestro quesero.",
      text: "Picada de quesos, pan y vinos,",
      num: 300,
      recipe: [
        "Jamón cocido natural.",
        "Bondiola natural.",
        "Jamón crudo natural.",
        "Salame de Colonia Caroya.",
        "Queso gouda.",
        "Longaniza a la calabresa.",
        "Queso brindamour de ají.",
        "Queso brindamour de orégano.",
      ],
    };
    useEffect(() => {
      const node = loadCSS(
        'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
        document.querySelector('#font-awesome-css'),
      );
      return () => {
        node.parentNode!.removeChild(node);
      };
    }, []);
  return (
    <footer className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid className={classes.paper} item xs={"auto"}>
          <CardInteraction {...Adds}>
            <Button size="small" color="primary">
              <Icon>shopping_cart</Icon>
            </Button>
          </CardInteraction>
        </Grid>
        <Grid className={classes.paper} item xs={"auto"}>
          <CardSimple
            img="logo.jpg"
            title={title}
            name={app_name}
            text={description}
            num="Visitanos"
          />
        </Grid>
        <Grid className={classes.paper} item xs={"auto"}>
          <List component="nav" aria-label="contacto">
            {Object.values(social).map(
              ({ url, user, icon }: Social, i: any) => {
                return (
                  <ListItem key={i}>
                    <ListItemIcon className={classes.listIcon}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`${url}/${user}`}
                      >
                        <Icon className={icon} />
                      </Link>
                    </ListItemIcon>
                    <ListItemText primary={user} />
                  </ListItem>
                );
              }
            )}
          </List>
        </Grid>
      </Grid>
    </footer>
  );
}
