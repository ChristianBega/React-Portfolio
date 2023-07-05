import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";
import CardText from "./cardText.component";
import CardImage from "./cardImage.component";

// Custom Components
const StyledProjectContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.2rem",
  borderRadius: "1.5rem",
  gap: "2rem",
  boxShadow: 15,
  marginBlock: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    background: "var(--light-card-bg)",
  },
  [theme.breakpoints.up("lg")]: {
    marginBlock: theme.spacing(8),
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "3rem",
}));

export default function NonMobileProjectCard({ project, index }) {
  let evenIndex = (index + 1) % 2 === 0;
  return (
    <StyledProjectContainer>
      {evenIndex ? (
        <StyledBox key={index}>
          <CardText project={project} />
          <CardImage project={project} />
        </StyledBox>
      ) : (
        <StyledBox key={index}>
          <CardImage project={project} />
          <CardText project={project} />
        </StyledBox>
      )}
    </StyledProjectContainer>
  );
}
