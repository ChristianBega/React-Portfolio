import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

import Contact from "../components/ContactForm";
import Footer from "../components/Footer";
export default function ContactPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container sx={{ minHeight: "100vh", my: 5 }}>
        <Typography component="h2" variant="h2" textAlign="center" mt={4} sx={{ fontWeight: "700" }}>
          Let's Chat!
          <Typography component="p" variant="h4" sx={{ fontSize: "2rem" }}>
            Contact me below.
          </Typography>
        </Typography>
        <Contact />
        <Box textAlign="center" marginY={5}>
          <Button onClick={handleOnClick}>
            Back to Home
            <AiOutlineArrowRight />
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
