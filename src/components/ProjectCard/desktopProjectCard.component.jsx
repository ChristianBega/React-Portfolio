import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";
import CardText from "./cardText.component";
import CardImage from "./cardImage.component";

const StyledProjectContainerDesktop = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "1.5rem",
}));
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(20),
}));

export default function DesktopProjectCard({ project, index }) {
  const evenIndex = (index + 1) % 2 === 0;
  return (
    <StyledProjectContainerDesktop>
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
    </StyledProjectContainerDesktop>
  );
}
