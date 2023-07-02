import React from "react";

// Mui components
import { AppBar, useScrollTrigger, Slide, Typography, Grid } from "@mui/material";

// Components
import MobileNavigation from "./mobileNavigation.component";
import DesktopNavigation from "./desktopNavigation.component";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Custom styled nav component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // background: "var(--drop-down-menu-bg)",
  // backdropFilter: "blur(10px)",
  // opacity: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "1.5rem",
  [theme.breakpoints.up("md")]: {
    padding: "3rem",
  },
  maxHeight: "85px",
  // zIndex: "1",
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

export default function Navigation() {
  return (
    <Grid item xs={12} sx={{ maxHeight: "85px" }}>
      <HideOnScroll>
        <StyledAppBar elevation={0} id="navigation" position="sticky" component="nav">
          <Typography variant="h6" component="h1">
            <Link to="/">Christian Bega</Link>
          </Typography>
          <MobileNavigation />
          <DesktopNavigation />
        </StyledAppBar>
      </HideOnScroll>
    </Grid>
  );
}
