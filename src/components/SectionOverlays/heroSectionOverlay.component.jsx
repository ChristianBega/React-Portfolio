import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

export const HeroSectionOverlay = () => {
  const StyledOverlay = styled(Paper)({
    height: "105vh",
    position: "absolute",
    inset: 0,
    // background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 5%, rgba(13, 16, 56, .6) 90%, rgba(15, 6, 36, 0.8) 100%)",
    background: "linear-gradient(180deg, rgba(0,212,255,0) 70%, #251167 100%)",

    zIndex: "1",
  });
  return <StyledOverlay></StyledOverlay>;
};
