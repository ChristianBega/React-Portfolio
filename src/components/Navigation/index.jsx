import React, { useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box, MenuItem, Menu } from "@mui/material";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  
});
const StyledMenuItem = styled(MenuItem)({
  color: "#fff",
  padding: "0 .5rem",
});

const MobileMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
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

function Navigation() {
  const [open, setOpen] = useState(false);

  const exitMenu = () => {
    setOpen(false);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" component="h1">
          <Link to="/React-Portfolio">Chris Bega</Link>
        </Typography>
        <DesktopMenu>
          <StyledMenuItem>
            <Link to="/React-Portfolio">About Me</Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link to="/projects">Projects</Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link to="/skills">Skills</Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link to="/contact">Contact</Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link to="/resume">Resume</Link>
          </StyledMenuItem>
        </DesktopMenu>
        <MobileMenu onClick={(e) => setOpen(true)}>
          <IconContext.Provider value={{ size: "1.8rem", padding: "0", margin: "0", color: "white" }}>
            <MdMenu />
          </IconContext.Provider>
        </MobileMenu>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 123,
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            marginTop: "1rem",
            backgroundColor: "var(--menu-bg)",
            width: "100%",
            backdropFilter: "var(--backdrop-filter)",
          },
        }}
      >
        <StyledMenuItem>
          <Link onClick={exitMenu} to="/React-Portfolio">
            About Me
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link onClick={exitMenu} to="/projects">
            Projects
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link onClick={exitMenu} to="/skills">
            Skills
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link onClick={exitMenu} to="/contact">
            Contact
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link onClick={exitMenu} to="/resume">
            Resume
          </Link>
        </StyledMenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navigation;
