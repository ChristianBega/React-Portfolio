import { Box, Button, Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import HomeAbout from "../components/Home";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Socials from "../components/Socials";
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
        <StyledButton onClick={handleOnClick}>
          See more about me <AiOutlineArrowRight />
        </StyledButton>
      </Box>
      <Socials />
    </Container>
  );
}
