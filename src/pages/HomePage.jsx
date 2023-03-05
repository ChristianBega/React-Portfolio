import { transition1 } from "../transitions";
import { motion } from "framer-motion";
import { Container } from "@mui/material";
import React from "react";
import HomeAbout from "../components/Home";

export default function HomePage() {
  return (
    <Container
      sx={{
        minHeight: "75vh",
        my: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        position: "relative",
      }}
    >
      <HomeAbout />
    </Container>
  );
}
