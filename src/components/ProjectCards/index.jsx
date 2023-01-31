import styled from "@emotion/styled";
import { Card, Typography, CardContent, CardMedia, Grow } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const StyledProjectCard = styled(Card)({
  backgroundColor: "var(--dark-header-bg)",
  minWidth: "21rem",
  maxWidth: "25rem",
  margin: "1.6rem",
  flex: "1",
});
//1. On hover I want to add transitions to
//  a. Card img shrinking
//  b. Card text displaying
function ProjectCards({ project }) {
  const [isHovered, setHovered] = useState(false);
  const [checked, setChecked] = React.useState(true);

  const { name, description, link, repo, image } = project;

  return (
    <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 2000 } : {})}>
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
                <a href={link} target="_blank">
                  Live Demo
                </a>
                <a href={repo} target="_blank">
                  Source Code
                </a>
              </Stack>
            </CardContent>
          </>
        )}
      </StyledProjectCard>
    </Grow>
  );
}

export default ProjectCards;
