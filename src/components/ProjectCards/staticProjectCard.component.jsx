import styled from "@emotion/styled";
import { Box, Container, Paper, Stack, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";

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
const StyledImage = styled(Box)(({ theme }) => ({
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
}));

const StyledOverlay = styled(Paper)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  opacity: "0",
  transition: ".4s ease-in-out",
  minHeight: "22rem",
  "&:hover": {
    background: "linear-gradient(0deg, rgba(37, 37, 37, 0.8) 30%, rgba(78, 78, 78, 0.4) 100%)",
    boxShadow: "0px 0px 16px 6px rgba(86, 79, 224, 0.6)",
    opacity: "1",
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  height: "22rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  justifyContent: "flex-end",
  borderRadius: "12px",
  background: "linear-gradient(0deg, rgba(37, 37, 37, 0.855) 30%, rgba(78, 78, 78, 0.3) 100%)",
}));
export default function StaticProjectCard({ project }) {
  const { name, description, link, repo, videoDemo } = project;
  const location = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
  };

  return (
    <StyledProjectContainer>
      <Box sx={{ position: "relative" }}>
        <RouterLink id={name} to="/project-page" state={{ project: project, prevPath: location.pathname }}>
          <StyledImage component="video" autoPlay loop muted src={videoDemo}></StyledImage>
          <StyledOverlay>
            <BsEyeFill size="50px" color="#fff" />
            <Typography component="p">View more</Typography>
          </StyledOverlay>
        </RouterLink>
      </Box>
      <StyledBox>
        <Box id="test" sx={{ padding: 4, ml: { md: 4 } }}>
          <Typography component="h3" variant="h3" typography={{ xs: "cardHeaderSm" }}>
            {name}
          </Typography>
          <Typography fontSize={{ xs: "16px", md: "18px" }} component="p" my={4}>
            {description}
          </Typography>
          <Stack fontSize={{ xs: "16px", md: "18px" }} direction="row" spacing={6} mt={2}>
            <Link onClick={handleClick} href={link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
            <Link onClick={handleClick} href={repo} target="_blank" rel="noopener noreferrer">
              Source Code
            </Link>
          </Stack>
        </Box>
      </StyledBox>
    </StyledProjectContainer>
  );
}
