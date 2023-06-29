import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Contact from "../components/ContactForm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { containerVariants } from "../transitions";
import BackHome from "../components/buttons/backHome.component";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackHome buttonType="contact" />
      <Container
        component={motion.div}
        initial={containerVariants.hidden}
        animate={containerVariants.visible}
        exit={containerVariants.exit}
        transition={containerVariants.transition}
        sx={{ minHeight: "85vh", my: 5 }}
      >
        <Typography component="h2" variant="h2" textAlign="center" mt={4} sx={{ fontWeight: "700" }}>
          Let's Chat!
          <Typography component="p" variant="h4" sx={{ fontSize: "2rem" }}>
            Contact me below.
          </Typography>
        </Typography>
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
