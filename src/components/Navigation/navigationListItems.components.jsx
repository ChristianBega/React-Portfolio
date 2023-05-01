import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

// Mui components
import { List, ListItem, Typography, useMediaQuery } from "@mui/material";
// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";

// Styled Components
const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
const StyledListItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  "&:hover": {
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
}));

// Menu items (nav links)
const menuItemData = [
  { linkName: "Home", urlPath: "/", icon: "" },
  { linkName: "About", urlPath: "/about-me", icon: "" },
  { linkName: "Projects", urlPath: "/project-cards", icon: "" },
  { linkName: "Contact", urlPath: "/contact", icon: "" },
];

// Get menu items
const getMenuItems = (handleClose, theme, isMobile) => (
  <StyledList>
    {menuItemData.map((menuItem, index) => (
      <StyledListItem key={index} onClick={handleClose}>
        <Link to={menuItem.urlPath} key={menuItem.linkName}>
          {isMobile && <Typography sx={{ width: "100%", fontSize: "2rem" }}>{menuItem.linkName}</Typography>}
          {!isMobile && <Typography sx={{ justifyContent: "center", fontSize: "1.3rem" }}>{menuItem.linkName}</Typography>}
        </Link>
      </StyledListItem>
    ))}
  </StyledList>
);

export default function NavigationListItems({ handleClose }) {
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return <>{getMenuItems(handleClose, theme, isMobile)}</>;
}
