import styled from "@emotion/styled";
import { Card, Typography, CardContent, CardMedia } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
// import { Link } from "react-router-dom";

const StyledProjectCard = styled(Card)({
  position: "relative",
  background: "var(--dark-card-bg)",
  border: "2px solid rgba(81, 81, 81, .5)",

  minWidth: "20rem",
  // maxWidth: "25rem",
  minHeight: "20em",
  // maxHeight: "25rem",
  display: "flex",
  // webkitBoxShadow: "6px 4px 15px 4px rgba(81, 81, 81, .5)",
  // mozBoxShadow: " 6px 4px 15px 4px rgba(81, 81, 81, .5)",
  "&:hover": {
    boxShadow: "0px 0px 20px 4px rgba(67, 67, 71, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.209)",
  },
});
//1. On hover I want to add transitions to
//  a. Card img shrinking
//  b. Card text displaying
export default function ProjectCards({ project }) {
  const { name, description, link, repo, videoDemo } = project;

  return (
    <StyledProjectCard>
      <CardMedia
        component="video"
        autoPlay
        loop
        muted
        sx={{ objectFit: "cover", width: "100%", height: "100%", top: 0, bottom: 0, position: "absolute", zIndex: "-100" }}
        src={videoDemo}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "end" }}>
        <Typography component="h2" variant="h6" sx={{ fontWeight: "600" }}>
          {name}
        </Typography>
        <Typography component="p" mt={2}>
          {description}
        </Typography>
        <Stack direction="row" spacing={3} mt={2}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </Stack>
      </CardContent>
    </StyledProjectCard>
  );
}
