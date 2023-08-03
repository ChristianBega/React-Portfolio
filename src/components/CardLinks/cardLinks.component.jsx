import styled from "@emotion/styled";
import React from "react";
import { Link } from "@mui/material";
import { Link as BrowserLink } from "react-router-dom";

const StyledLinks = styled(Link)(({ theme }) => ({
  position: "relative",
  color: "#fff",
  borderBottom: "1px solid rgb(186, 187, 216) ",
  zIndex: "1000",
}));
const StyledRouterLink = styled(BrowserLink)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: "nunito",
  position: "relative",
  color: "#fff",
  textDecoration: "none",
  zIndex: "1000",
  borderBottom: "1px solid rgb(186, 187, 216) ",
  alignItems: "center",
  gap: theme.spacing(2),
  maxWidth: "110px",
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
