import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  List,
  Link,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { CardMedia } from "@components";
import { social } from "../../package.json";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { MailOutline, PhoneIphone } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        paddingTop: "1rem",
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
      },
      listIcon: { minWidth: "30px" },
    })
  ),
  listIcons = (icon: string) => {
    switch (icon) {
      case "Facebook":
        return <FacebookIcon />;
      case "Instagram":
        return <InstagramIcon />;
        case "Telefono":
          return <PhoneIphone />;
      default:
        return <MailOutline />;
    }
  };

export default function CenteredGrid() {
  const classes = useStyles(),
    Adds = {
      img: "combo1.jpg",
      title: "Combo Picada",
      name: "Picada",
      text: "Picada de quesos, pan y vinos",
    };
  return (
    <footer className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CardMedia {...Adds} />
        </Grid>
        <Grid item xs={6}>
          <List component="nav" aria-label="contacts">
            {Object.keys(social).map((network: any, i: any) => (
              <ListItem key={i} button>
                <ListItemIcon className={classes.listIcon}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${social[network].url}/${social[network].user}`}
                  >
                    {listIcons(social[network].text)}
                  </Link>
                </ListItemIcon>
                <ListItemText primary={social[network].user} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </footer>
  );
}
