import React from "react";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const mockData = [
  {
    topic: "Programming",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Skills",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Hobbies",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Extra...",
    description: "Lorem Lorem Lorem",
  },
];
const StyledCard = styled(Paper)({
  backgroundColor: "#c4c4c4",
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
