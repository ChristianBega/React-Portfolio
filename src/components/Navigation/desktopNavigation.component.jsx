import React from "react";
import { Box, styled } from "@mui/material";
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
