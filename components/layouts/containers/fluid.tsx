import React from "react";
import { Container } from "@material-ui/core";

export default function ContainerFluid({ children }: any) {
  return <Container maxWidth="sm">{children}</Container>;
}
