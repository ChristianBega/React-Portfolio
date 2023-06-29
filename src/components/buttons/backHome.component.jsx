import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";

const StyledButton = styled(IconButton)(({ theme }) => ({
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

const BUTTON_TYPES_URL = {
  contact: "hero-container",
  projectCards: "featured-projects-section",
  projectPage: "featured-projects-section",
  aboutMe: "about-section",
};
export default function BackHome({ buttonType }) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`/`, { replace: true }), [navigate]);

  return (
    <Box textAlign="center" marginY={5}>
      <StyledButton href={`#${BUTTON_TYPES_URL[buttonType]}`} onClick={handleOnClick}>
        <AiOutlineArrowLeft />
        Back Home
      </StyledButton>
    </Box>
  );
}
