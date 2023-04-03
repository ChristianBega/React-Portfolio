import { Button, Typography, styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import Contact from "../components/ContactForm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { containerVariants } from "../transitions";
const StyledButton = styled(Button)(({ theme }) => ({
  // backgroundColor: "rgba(165, 165, 165, .3)",
  // minHeight: "160px",
  // borderRadius: ".6rem",
  // padding: "1.2rem 1rem",
  color: "var(--light-blue) !important",

  "&:hover": {
    color: "#fff !important",

    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
  fontSize: "16px",
  [theme.breakpoints.up("md")]: {
    fontSize: "115%",
  },
}));
export default function ContactPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
        <Box textAlign="center" marginY={5}>
          <StyledButton onClick={handleOnClick}>
            Back to Home
            <AiOutlineArrowRight />
          </StyledButton>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
