import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AboutMe from "../components/AboutMe";
import { Container, Button } from "@mui/material";
import { Box } from "@mui/system";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function AboutMePage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/project-cards", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ minHeight: "85vh", my: 5 }}>
      <Link to="/"></Link>
      <AboutMe />
      <Box textAlign="center" marginTop={3}>
        <Button onClick={handleOnClick}>
          Continue to my projects <AiOutlineArrowRight />
        </Button>
      </Box>
    </Container>
  );
}
