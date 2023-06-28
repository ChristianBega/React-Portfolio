import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box, MenuItem, Menu, useScrollTrigger, Slide } from "@mui/material";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
//   elevation: 0,
// });
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#fff",
  minHeight: "65px",
  fontSize: "175%",
  textAlign: "center",
  position: "relative",

  "&:hover": {
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
}));
const StyledDesktopMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#fff",
  minHeight: "65px",
  fontSize: "125%",
  textAlign: "center",
  position: "relative",

  "&:hover": {
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
}));
const DesktopMenu = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const MobileMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function OldNavigation() {
  const [open, setOpen] = useState(false);

  const exitMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [open]);
  return (
    <AppBar position="sticky" elevation={0} sx={{ padding: "1rem" }}>
      <Typography variant="h6" component="h1">
        <Link to="/">Christian Bega</Link>
      </Typography>
      <DesktopMenu>
        {/* <StyledMenuItem>
            <Link to="/about-me">About Me</Link>
          </StyledMenuItem> */}
        <StyledDesktopMenuItem>
          <Link to="/project-cards">Projects</Link>
        </StyledDesktopMenuItem>
        <StyledDesktopMenuItem>
          <Link to="/resume">Resume</Link>
        </StyledDesktopMenuItem>
        <StyledDesktopMenuItem>
          <Link to="/contact">Contact</Link>
        </StyledDesktopMenuItem>
      </DesktopMenu>
      <MobileMenu onClick={(e) => setOpen(true)}>
        <IconContext.Provider value={{ size: "1.8rem", padding: "0", margin: "0", color: "white" }}>
          <MdMenu />
        </IconContext.Provider>
      </MobileMenu>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 95,
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "bottom",
        }}
        PaperProps={{
          style: {
            marginBlock: "1rem",
            background: "var(--drop-down-menu-bg)",
            width: "100%",
            minHeight: "80vh",
            backdropFilter: "var(--header-blur-filter)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Link onClick={exitMenu}>
          <StyledMenuItem>
            <IconContext.Provider value={{ size: "2rem" }}>
              <AiOutlineArrowLeft />
            </IconContext.Provider>
          </StyledMenuItem>
        </Link>
        {/* <Link onClick={exitMenu} to="/">
          <StyledMenuItem>About Me</StyledMenuItem>
        </Link> */}
        <Link onClick={exitMenu} to="/project-cards">
          <StyledMenuItem>Projects</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/resume">
          <StyledMenuItem>Resume</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/contact">
          <StyledMenuItem>Contact</StyledMenuItem>
        </Link>
      </Menu>
    </AppBar>
  );
}

export default OldNavigation;
