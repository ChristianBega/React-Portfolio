import styled from "@emotion/styled";
import React from "react";
import { Link } from "@mui/material";
import { Link as BrowserLink } from "react-router-dom";

const StyledLinks = styled(Link)(({ theme }) => ({
  position: "relative",
  color: "#fff",
  textDecorationColor: "#fff",
  padding: 0,
  zIndex: "1000",
  "&:hover": {
    transform: "scale(1.05)",
    transition: ".3s ease-in-out",
    fontWeight: "600",
  },
}));
const StyledRouterLink = styled(BrowserLink)(({ theme }) => ({
  position: "relative",
  color: "#fff",
  textDecorationColor: "#fff",
  padding: 0,
  zIndex: "1000",
  "&:hover": {
    transform: "scale(1.05)",
    transition: ".3s ease-in-out",
    fontWeight: "600",
  },
}));
export const CardLinks = ({ ...otherProps }) => {
  return (
    <>
      {otherProps?.linkType === "browserLink" ? (
        <>
          <StyledRouterLink {...otherProps} />
        </>
      ) : (
        <>
          <StyledLinks {...otherProps} />
        </>
      )}
    </>
  );
};
