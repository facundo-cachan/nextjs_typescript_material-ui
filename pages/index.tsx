import Head from "next/head";
import {
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
  Divider,
} from "@material-ui/core";
import { app_name } from "../package.json";
import { IntCard } from "components/surfaces/cards/interfaces";
import { carrouselIndex, products } from "components/theme/mocks";

export default function Index() {
  const classes = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
      },
      title: { textAlign: "center", fontSize: "2rem", paddingTop: "2rem" },
    })
  )();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppBarPrimarySearch appName={app_name} />
      <Carousel items={carrouselIndex} />
      <Grid item xs={12}>
        <Paper className={classes.title}>Ofertas</Paper>
      </Grid>
      <GridAuto>
        {products.map((product: IntCard, i: any) => {
          product.name = `${product.name} $${product.price}kg`;
          return (
            <Grid key={i} item xs className={classes.paper}>
              <CardMedia {...product} />
            </Grid>
          );
        })}
      </GridAuto>
      <Grid item xs={12}>
        <Paper className={classes.title}>Mas Vendidos</Paper>
      </Grid>
      <GridAuto>
        {products.map((product: IntCard, i: any) => {
          return (
            <Grid key={i} item xs className={classes.paper}>
              <CardMedia {...product} />
            </Grid>
          );
        })}
      </GridAuto>
      <Divider />
      <Footer />
    </>
  );
}
