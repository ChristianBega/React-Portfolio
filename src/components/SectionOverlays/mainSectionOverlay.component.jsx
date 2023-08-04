import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

export const MainSectionOverlay = () => {
  const StyledOverlay = styled(Paper)({
    // height: "260vh",
    // border: "1px solid red",
    height: "100%",
    position: "absolute",
    top: "105vh",
    right: 0,
    left: 0,
    background: "linear-gradient(0deg, rgba(1,0,0,0) 95%, #330d7b 100%)",
    zIndex: "1000",
  });
  return <StyledOverlay></StyledOverlay>;
};
