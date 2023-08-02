import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { CardOverlay } from "../CardOverlay/cardOverlay.component";
import { CardLinks } from "../CardLinks/cardLinks.component";

const StyledProjectContainer = styled(Container)({
  padding: "0 !important",
  display: "flex",
  flexDirection: "column",
  minHeight: "22rem",
  border: "2px solid rgba(81, 81, 81, .5)",
  borderRadius: "12px",
  "&:hover": {
    border: "2px solid rgba(255, 255, 255, 0.209)",
  },
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
  "&:hover": {
    border: "2px solid rgba(255, 255, 255, 0.209)",
  },
});
const StyledBox = styled(Box)({
  height: "22rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  justifyContent: "flex-end",
  borderRadius: "12px",
  background: "linear-gradient(0deg, rgba(37, 37, 37, 0.855) 30%, rgba(78, 78, 78, 0.3) 100%)",
});

export default function ProjectCardStatic({ project }) {
  const { name, description, link, repo, videoDemo } = project;
  const location = useLocation();

  return (
    <StyledProjectContainer>
      <Box sx={{ position: "relative" }}>
        <CardLinks linkType={"browserLink"} id={name} to="/project-page" state={{ project: project, prevPath: location.pathname }}>
          <StyledImage component="video" muted src={videoDemo}></StyledImage>
          <CardOverlay></CardOverlay>
        </CardLinks>
      </Box>
      <StyledBox>
        <Box id="test" sx={{ padding: 4, ml: { md: 4 } }}>
          <Typography component="h3" variant="h3" typography={{ xs: "cardHeaderSm" }}>
            {name}
          </Typography>
          <Typography fontSize={{ xs: "16px", md: "18px" }} component="p" my={4}>
            {description}
          </Typography>
        </Box>
      </StyledBox>
    </StyledProjectContainer>
  );
}
