import { Box, Button, Container } from "@mui/material";
import React, { useCallback } from "react";
import Home from "../components/HomePage";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/about-me", { replace: true }), [navigate]);
  return (
    <Container sx={{ minHeight: "85vh", mt: 5, textAlign: "center" }}>
      <Home />
      <Box textAlign="center" marginY={5}>
        <Button onClick={handleOnClick}>
          See more about me <AiOutlineArrowRight />
        </Button>
      </Box>
    </Container>
  );
}
