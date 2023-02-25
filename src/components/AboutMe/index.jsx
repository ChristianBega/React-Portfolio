import React from "react";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const mockData = [
  {
    topic: "Programming",
    description: "Coming soon...",
  },
  {
    topic: "Skills",
    description: "Elaborate on my skills...",
  },
  {
    topic: "Hobbies",
    description: "What do I enjoy doing on my free time?",
  },
  {
    topic: "Algos",
    description: "Elaborate on hacker rank",
  },
];
const StyledCard = styled(Paper)({
  backgroundColor: "rgba(165, 165, 165, .3)",
  minHeight: "160px",
  borderRadius: ".6rem",
  padding: "1.2rem 1rem",
});
const StyledContainer = styled(Box)({
  display: "grid",
  gap: "1rem",
});

export default function AboutMe() {
  return (
    <StyledContainer>
      {mockData.map((e) => (
        <StyledCard className="aboutMeCard">
          <Typography component="h2" variant="h5">
            {e.topic}
          </Typography>
          <p>{e.description}</p>
        </StyledCard>
      ))}
    </StyledContainer>
  );
}
