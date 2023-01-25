import styled from "@emotion/styled";
import { Card, Typography, Link, CardContent, CardMedia, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const StyledProjectCard = styled(Card)({
  backgroundColor: "var(--another-gray)",
  maxWidth: "25rem",
  marginBlock: "1.6rem",
});

function ProjectCards({ project }) {
  const [isHovered, setHovered] = useState(false);

  const { name, description, link, repo, image } = project;

  return (
    // On card hover event
    <StyledProjectCard>
      {!isHovered ? (
        <CardMedia onMouseEnter={() => setHovered(true)} sx={{ height: 350 }} image={image} title="Project image" />
      ) : (
        <>
          <CardMedia onMouseLeave={() => setHovered(false)} sx={{ height: 240 }} image={image} title="Project image" />
          <CardContent>
            <Typography component="h2" variant="h5" sx={{ color: "#fff" }}>
              {name}
            </Typography>
            <Typography component="p" mt={2}>
              {description}
            </Typography>
            <Stack direction="row" spacing={3} mt={2}>
              <a href={link}>Live Demo</a>
              <a href={repo}>Source Code</a>
            </Stack>
          </CardContent>
        </>
      )}
    </StyledProjectCard>
  );
}

export default ProjectCards;
