import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";

export default function FixedContainer({ children }: any) {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          {children}
        </Typography>
      </Container>
    </>
  );
}
