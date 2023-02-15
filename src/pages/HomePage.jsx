import { Container } from "@mui/material";
import React from "react";
import Home from "../components/HomePage";
export default function HomePage() {
  return (
    <Container sx={{ minHeight: "85vh", mt: 5, textAlign: "center" }}>
      <Home />
    </Container>
  );
}
