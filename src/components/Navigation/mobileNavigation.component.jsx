import React, { useState } from "react";
// Mui components
import { Box, Menu, styled } from "@mui/material";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import NavigationListItems from "./navigationListItems.components";
// Custom styled components
const MobileMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
//   color: "#fff",
//   minHeight: "65px",
//   fontSize: "175%",
//   textAlign: "center",
//   position: "relative",

//   "&:hover": {
//     backgroundColor: "transparent",
//     textDecorationLine: "underline",
//     textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
//     transform: "scale(1.1)",
//     transition: ".2s",
//   },
// }));
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
        id="mobile-menu"
        aria-labelledby="mobile-button"
        open={openMenu}
        onClose={handleClose}
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
        <NavigationListItems />
      </Menu>
    </>
  );
}
