import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
/* https://github.com/Learus/react-material-ui-carousel */

interface Props {
  name: string;
  img: string;
  description: string;
}

interface Items {
  items: Props[];
}

export default function OwnCarousel({ items }: Items) {
  return (
    <Carousel>
      {items.map(({ name, img, description }: Props, i: any) => (
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
