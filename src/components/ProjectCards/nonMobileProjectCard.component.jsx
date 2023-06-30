import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

// Custom Component
const StyledProjectCard = styled(Card)({
  position: "relative",
  background: "var(--light-card-bg)",
  // minHeight: "22rem",
  height: "450px",
  // flexDirection: "column",
  display: "flex",
  alignItems: "center",
  padding: "1.2rem",
  marginBlock: "2rem",
  borderRadius: "1.5rem",
  boxShadow: "0px 0px 16px 6px rgba(37, 37, 98, 0.6)",

  "&:hover": {
    boxShadow: "0px 0px 20px 4px rgba(67, 67, 71, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.209)",
  },
});

const StyledLink = styled(Link)({
  zIndex: "1000",
  "&:hover": {
    color: "#fff",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
});

export default function NonMobileProjectCard({ project }) {
  const { name, description, link, repo, videoDemo } = project;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
  };
  return (
    <StyledProjectCard>
      <CardMedia
        sx={{ width: "50%", height: "400px", objectFit: "fill", zIndex: "-100", borderRadius: "1.4rem" }}
        component="video"
        autoPlay
        loop
        muted
        src={videoDemo}
      ></CardMedia>
      <CardContent sx={{ ml: 10, width: "50%", textAlign: "left" }}>
        <Typography component="h2" variant="h3" sx={{ fontWeight: "600" }}>
          {name}
        </Typography>
        <Typography fontSize="18px" component="p" mt={2}>
          {description}
        </Typography>
        <Stack fontSize="18px" direction="row" spacing={3} mt={2}>
          <StyledLink onClick={handleClick} href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </StyledLink>
          <StyledLink onClick={handleClick} href={repo} target="_blank" rel="noopener noreferrer">
            Source Code
          </StyledLink>
        </Stack>
      </CardContent>
    </StyledProjectCard>
  );
}
