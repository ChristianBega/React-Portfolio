import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import React from "react";
import { BsEyeFill } from "react-icons/bs";

export const CardOverlay = ({ isMobile }) => {
  const StyledOverlay = styled(Paper)({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    opacity: "0",
    transition: ".4s ease-in-out",
    minHeight: "22rem",
    borderRadius: "12px",
    "&:hover": {
      background: "linear-gradient(0deg, rgba(37, 37, 37, 0.8) 30%, rgba(78, 78, 78, 0.4) 100%)",
      boxShadow: "0px 0px 16px 6px rgba(86, 79, 224, 0.6)",
      opacity: "1",
    },
  });
  return (
    <StyledOverlay>
      {!isMobile && (
        <>
          <BsEyeFill size="50px" color="#fff" />
          <Typography component="p">View more</Typography>
        </>
      )}
    </StyledOverlay>
  );
};
