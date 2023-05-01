import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

// Mui components
import { Box, List, ListItem, Typography, styled } from "@mui/material";
// import styled from "@emotion/styled";

// Styled Components
const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    width: "400px",
    justifyContent: "space-between",
  },
}));
const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingInline: 2,
  paddingBottom: 0,
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  "&:hover": {
    textDecoration: "underline",
    listStyle: "none",
  },
  [theme.breakpoints.down("lg")]: {
    "&:last-child": {
      // borderBottom: `1px solid ${theme.palette.accent.accentOne}`,
      // paddingBottom: theme.spacing(5),
    },
  },
}));

const menuItemData = [
  { linkName: "Home", urlPath: "/", icon: "" },
  { linkName: "About Me", urlPath: "/", icon: "" },
  { linkName: "Projects", urlPath: "/project-cards", icon: "" },
  { linkName: "Contact", urlPath: "/contact", icon: "" },
];

// Get menu items
const getMenuItems = (handleClose, theme) => (
  <StyledList>
    {menuItemData.map((menuItem, index) => (
      <StyledListItem key={index} onClick={handleClose}>
        <Link to={menuItem.urlPath} key={menuItem.linkName}>
          <Typography sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center" }}>{menuItem.linkName}</Typography>
          <Typography sx={{ display: { xs: "flex", lg: "none" }, width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItem.icon}
              <Typography ml={2}>{menuItem.linkName}</Typography>
            </Box>
          </Typography>
        </Link>
      </StyledListItem>
    ))}
  </StyledList>
);

export default function NavigationListItems({ handleClose }) {
  const theme = useTheme();
  return <>{getMenuItems(handleClose, theme)}</>;
}
