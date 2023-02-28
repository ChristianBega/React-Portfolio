import { Button, styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import Resume from "../components/Resume";
const StyledButton = styled(Button)(({ theme }) => ({
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
const ResumeButton = styled(Button)({
  backgroundColor: "var(--light-blue) !important",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    boxShadow: "0px 0px 20px 4px rgba(67, 67, 71, 0.6)",
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
    <Container sx={{ my: 5, p: 0 }}>
      <Resume />
      {/* Resume button */}
      <Box textAlign="center" marginTop="2rem">
        <ResumeButton variant="contained">
          <a
            className="resumeButton"
            href="https://drive.google.com/file/d/1AahWQemCf08v3p-LxRQmev1MWMNkNDOI/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </ResumeButton>
      </Box>
      <Box textAlign="center" marginY={5}>
        <StyledButton onClick={handleOnClick}>
          Contact me
          <AiOutlineArrowRight />
        </StyledButton>
      </Box>
    </Container>
  );
}
