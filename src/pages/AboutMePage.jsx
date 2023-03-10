import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { Box } from "@mui/system";

import { AiOutlineArrowRight } from "react-icons/ai";
import AboutMe from "../components/AboutMe";

import styled from "@emotion/styled";
const StyledButton = styled(Button)({
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
});
export default function AboutMePage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/project-cards", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ minHeight: "100vh", my: 5 }}>
      <Link to="/"></Link>
      <AboutMe />
      <Box textAlign="center" marginY={5}>
        <StyledButton onClick={handleOnClick}>
          View my work <AiOutlineArrowRight />
        </StyledButton>
      </Box>
    </Container>
  );
}
