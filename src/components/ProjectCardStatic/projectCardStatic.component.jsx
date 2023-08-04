import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link as BrowserLink, useLocation } from "react-router-dom";
import { CardOverlay } from "../CardOverlay/cardOverlay.component";

const StyledProjectContainer = styled(Container)({
  padding: "0 !important",
  display: "flex",
  flexDirection: "column",
  minHeight: "22rem",
  border: "1px solid rgba(81, 81, 81, .5)",
  borderRadius: "12px",
  position: "relative",
});
const StyledImage = styled(Box)({
  objectFit: "fill",
  zIndex: "-100",
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "22rem",
  borderRadius: "12px",
});
const StyledBox = styled(Box)({
  zIndex: "1000",
  height: "22rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  borderRadius: "12px",
  background: "linear-gradient(0deg, rgba(37, 37, 37, .71) 30%, rgba(255, 255, 255, 0.1) 100%)",
});

export default function ProjectCardStatic({ project }) {
  const { name, description, imageDemo } = project;
  const location = useLocation();

  return (
    <StyledProjectContainer>
      <Box sx={{ position: "relative" }}>
        <StyledImage component="img" muted src={imageDemo}></StyledImage>
        <BrowserLink id={name} to="/project-page" state={{ project: project, prevPath: location.pathname }}>
          <CardOverlay></CardOverlay>
        </BrowserLink>
        <StyledBox>
          <Box sx={{ padding: 4, ml: { md: 4 } }}>
            <Typography component="h3" variant="h3" typography={{ xs: "cardHeaderSm" }}>
              {name}
            </Typography>
            <Typography fontSize={{ xs: "16px", md: "18px" }} component="p" my={4}>
              {description}
            </Typography>
          </Box>
        </StyledBox>
      </Box>
    </StyledProjectContainer>
  );
}
