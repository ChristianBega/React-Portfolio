import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";
import CardText from "./cardText.component";
import CardImage from "./cardImage.component";

// Custom Components
const StyledProjectContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.2rem",
  marginBlock: "2rem",
  borderRadius: "1.5rem",
  boxShadow: 15,
});
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  // width: "300px",
  // height: "300px",
  [theme.breakpoints.only("lg")]: {
    // width: "409px",
    // height: "309px",
  },
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
