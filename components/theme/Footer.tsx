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
import { offer } from "components/theme/mocks";
interface Social {
  user: string;
  url: string;
  icon: string;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& .fas': { fontSize: 20 },
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
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid className={classes.paper} item xs={"auto"}>
          <CardInteraction {...offer}>
            <Button size="small" color="primary">
            <i className="fas fa-shopping-cart" />
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
