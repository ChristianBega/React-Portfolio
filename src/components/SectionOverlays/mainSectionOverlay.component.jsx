import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

export const MainSectionOverlay = () => {
  const StyledOverlay = styled(Paper)({
    height: "70vh",
    position: "absolute",
    top: "105vh",
    right: 0,
    left: 0,
    // background: "linear-gradient(0deg, rgba(0,0,0,0) 75%, rgba(17, 12, 53, 0.827) 96%)",
    background: "linear-gradient(0deg, rgba(0,212,255,0) 75%, rgba(36, 24, 133, 0.8) 100%)",
    zIndex: "1000",
  });
  return <StyledOverlay></StyledOverlay>;
};
