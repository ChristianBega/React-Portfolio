import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";

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
export default function BackHome() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", { replace: true }), [navigate]);

  return (
    <Box textAlign="center" marginY={5}>
      <StyledButton onClick={handleOnClick}>
        <AiOutlineArrowLeft />
        Back to Home
      </StyledButton>
    </Box>
  );
}
