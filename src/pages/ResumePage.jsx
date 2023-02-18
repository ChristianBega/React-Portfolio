import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import Resume from "../components/Resume";
const StyledButton = styled(Button)({
  // backgroundColor: "rgba(165, 165, 165, .3)",
  // minHeight: "160px",
  // borderRadius: ".6rem",
  // padding: "1.2rem 1rem",
  "&:hover": {
    color: "#fff",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
});
export default function ResumePage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/contact", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container sx={{ minHeight: "100vh", my: 5 }}>
      <Resume />
      <Box textAlign="center" marginTop={3}>
        <StyledButton onClick={handleOnClick}>
          Contact me
          <AiOutlineArrowRight />
        </StyledButton>
      </Box>
    </Container>
  );
}
