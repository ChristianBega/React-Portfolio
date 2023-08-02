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
  // padding: "1.2rem",
  borderRadius: "1.5rem",
  // gap: "2rem",
  // marginBlock: theme.spacing(13),
  // [theme.breakpoints.up("lg")]: {
  //   marginBlock: theme.spacing(8),
  // },
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
