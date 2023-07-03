import React from "react";

// Mui components
import { AppBar, useScrollTrigger, Slide, Typography } from "@mui/material";

// Components
import MobileNavigation from "./mobileNavigation.component";
import DesktopNavigation from "./desktopNavigation.component";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Custom styled nav component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "3rem",
  },
}));
// Hide on scroll function to hide app bar when user scrolls
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navigation(props) {
  return (
    <HideOnScroll {...props}>
      <StyledAppBar elevation={0} id="navigation" position="sticky" component="nav">
        <Typography variant="h6" component="h1">
          <Link to="/">Christian Bega</Link>
        </Typography>
        <MobileNavigation />
        <DesktopNavigation />
      </StyledAppBar>
    </HideOnScroll>
  );
}
