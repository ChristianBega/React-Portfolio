import React from "react";
// Mui components
import { Box, styled } from "@mui/material";
// Custom components
import NavigationListItems from "./navigationListItems.components";

export default function DesktopNavigation() {
  const DesktopMenu = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  }));

  return (
    <DesktopMenu>
      <NavigationListItems />
    </DesktopMenu>
  );
}
