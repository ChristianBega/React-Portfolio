import { transition2 } from "../transitions";
import { motion } from "framer-motion";
import { Container } from "@mui/material";
import React from "react";
import HomeAbout from "../components/Home";

export default function HomePage() {
  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition2}
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
