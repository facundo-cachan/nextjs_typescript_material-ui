import React from "react";
import { Container } from "@material-ui/core";

export default function ContainerFixed({ children }: any) {
  return <Container fixed>{children}</Container>;
}
