import React, { useState } from "react";
import { Box, Menu, styled } from "@mui/material";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import NavigationListItems from "./navigationListItems.components";

const MobileMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function MobileNavigation() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <MobileMenu onClick={handleOpen}>
        <IconContext.Provider value={{ size: "1.8rem", padding: "0", margin: "0", color: "white" }}>
          <MdMenu />
        </IconContext.Provider>
      </MobileMenu>
      <Menu
        id="mobile-menu-button"
        aria-labelledby="mobile-menu-button"
        open={openMenu}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 65,
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "bottom",
        }}
        PaperProps={{
          style: {
            background:
              "linear-gradient(180deg,rgba(56, 40, 69, 0.655) 4%,rgba(37, 26, 54, 0.555) 20%, rgba(25, 28, 56, 0.555) 56%, rgba(8, 21, 43, 0.655) 100%",
            backdropFilter: "blur(12px)",
            height: "100vh",
            width: "100%",
            border: "1px solid red",
          },
        }}
      >
        {/* !Update later */}
        <div style={{ color: "#fff" }} onClick={handleClose}>
          X
        </div>
        <NavigationListItems />
      </Menu>
    </>
  );
}
