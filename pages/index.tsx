import Head from "next/head";
import {
  IntCard,
  AppBarPrimarySearch,
  Carousel,
  GridAuto,
  CardMedia,
  Footer,
} from "@components";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Paper,
  Divider
} from "@material-ui/core";
import { app_name } from "../package.json";
export default function Index() {
  const classes = makeStyles((theme: Theme) =>
      createStyles({
        paper: {
          padding: theme.spacing(2),
          color: theme.palette.text.secondary,
        },
        title: { textAlign: "center", fontSize: "2rem", paddingTop: "2rem" },
      })
    )(),
    items = [
      {
        img: "pan.jpg",
        title: "PAN",
        name: "Pan 🥖",
        text:
          "Llega la hora de la merienda y nada mejor que nuestro pan de campo con un poco de miel 🍯.",
      },
      {
        img: "queso.jpg",
        title: "QUESO",
        name: "Queso 🧀",
        text:
          "Disfruta nuestros quesos en sus tres variedades: al oregano, con pimienta y natural 🌱",
      },
      {
        img: "tomate.jpg",
        title: "TOMATE",
        name: "Tomate 🍅",
        text:
          "Estan hidratados en aceite de oliva extra virgen. Hace tu pedido que vuelan 👐",
      },
    ];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppBarPrimarySearch AppName={app_name} />
      <Carousel />
      <Grid item xs={12}>
        <Paper className={classes.title}>Ofertas</Paper>
      </Grid>
      <GridAuto>
        {items.map((item: IntCard, i: any) => {
          return (
            <Grid key={i} item xs className={classes.paper}>
              <CardMedia {...item} />
            </Grid>
          );
        })}
      </GridAuto>
      <Grid item xs={12}>
        <Paper className={classes.title}>Mas Vendidos</Paper>
      </Grid>
      <GridAuto>
        {items.map((item: IntCard, i: any) => {
          return (
            <Grid key={i} item xs className={classes.paper}>
              <CardMedia {...item} />
            </Grid>
          );
        })}
      </GridAuto>
      <Divider />
      <Footer />
    </>
  );
}
