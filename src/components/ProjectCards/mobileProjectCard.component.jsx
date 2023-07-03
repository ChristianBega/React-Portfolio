import React from "react";
// Mui components
import { styled, Container } from "@mui/material";
import CardImage from "./cardImage.component";
import CardText from "./cardText.component";

// Custom components
const StyledProjectContainer = styled(Container)({
  padding: "0 !important",
  display: "flex",
  flexDirection: "column",
  minHeight: "22rem",
  height: "100%",
  border: "2px solid rgba(81, 81, 81, .5)",
  "&:hover": {
    border: "2px solid rgba(255, 255, 255, 0.209)",
  },
});

export default function MobileProjectCard({ project }) {
  return (
    <>
      <StyledProjectContainer>
        <CardImage project={project} />
        <CardText project={project} />
      </StyledProjectContainer>
    </>
  );
}
