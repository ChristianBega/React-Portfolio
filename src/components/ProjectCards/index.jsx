import styled from "@emotion/styled";
import { Card, Typography, CardContent, CardMedia } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const StyledProjectCard = styled(Card)({
  backgroundColor: "var(--dark-header-bg)",
  minWidth: "20rem",
  maxWidth: "25rem",
  flex: "1",
});
//1. On hover I want to add transitions to
//  a. Card img shrinking
//  b. Card text displaying
export default function ProjectCards({ project }) {
  const [isHovered, setHovered] = useState(false);
  const { name, description, link, repo, image } = project;

  return (
    <StyledProjectCard
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      {!isHovered ? (
        <CardMedia sx={{ height: 350 }} image={image} title="Project image" />
      ) : (
        <>
          <CardMedia sx={{ height: 240 }} image={image} title="Project image" />
          <CardContent>
            <Typography component="h2" variant="h5" sx={{ fontWeight: "600" }}>
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
        </>
      )}
    </StyledProjectCard>
  );
}
