import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";

export default function SimpleContainer({ children }: any) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
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
