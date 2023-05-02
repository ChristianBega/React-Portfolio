import React from "react";
// Mui components
import { Card, CardContent, CardMedia, Stack, Typography, Link, styled } from "@mui/material";

// Custom components
const StyledProjectCard = styled(Card)({
  position: "relative",
  background: "var(--dark-card-bg)",
  border: "2px solid rgba(81, 81, 81, .5)",
  minHeight: "22rem",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-around",
  alignItems: "start",
  justifyContent: "flex-end",
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
export default function MobileProjectCard({ project }) {
  const { name, description, link, repo, videoDemo } = project;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
  };

  return (
    <StyledProjectCard>
      <CardMedia
        component="video"
        autoPlay
        loop
        muted
        height="100%"
        sx={{ objectFit: "fill", position: "absolute", top: "0", right: "0", zIndex: "-100" }}
        src={videoDemo}
      />
      <CardContent sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "end" }}>
        <Typography component="h2" variant="h6" sx={{ fontWeight: "600", textAlign: "left" }}>
          {name}
        </Typography>
        <Typography component="p" mt={2} sx={{ textAlign: "left" }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={3} mt={2}>
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
