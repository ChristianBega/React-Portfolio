import { Box, Button, Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import HomeAbout from "../components/Home";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Socials from "../components/Socials";

export default function HomePage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/about-me", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container sx={{ minHeight: "85vh", mt: 5, textAlign: "center" }}>
      <HomeAbout />
      <Box textAlign="center" marginY={5}>
        <Button onClick={handleOnClick}>
          See more about me <AiOutlineArrowRight />
        </Button>
      </Box>
      <Socials />
    </Container>
  );
}
