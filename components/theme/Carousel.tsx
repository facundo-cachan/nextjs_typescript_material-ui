import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
/* https://github.com/Learus/react-material-ui-carousel */
export default function OwnCarousel() {
  var items = [
    {
      name: "Random Name #1",
      img: "05_OrigenDirecto.jpg",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      img: "07_OrigenDirecto_frase.jpg",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map(({ name, img, description }: any, i: any) => (
        <Paper key={i}>
          <Button className="CheckButton">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
          </Button>
        </Paper>
      ))}
    </Carousel>
  );
}
