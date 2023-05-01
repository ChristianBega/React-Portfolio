import React from "react";
import NavigationListItems from "./navigationListItems.components";
import { Box, MenuItem, styled } from "@mui/material";

export default function DesktopNavigation() {
  const DesktopMenu = styled(Box)(({ theme }) => ({
    display: "none",
    // alignItems: "center",

    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
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
  return (
    <DesktopMenu>
      <NavigationListItems />
    </DesktopMenu>
  );
}
