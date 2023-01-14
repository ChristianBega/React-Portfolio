import React, { useState } from "react";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import { useMediaQuery, useTheme } from "@mui/material";
import MobileNavMenu from "../MobileNavMenu";
import DesktopNavMenu from "../DesktopNavMenu";

// How could I use state to check for a change and to render different component?

function Navigation() {
  // const [isDesktop, setDesktop] = useState(window.innerWidth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isHidden, setHidden] = useState(true); // hidden = true

  const handleClick = () => {
    if (isHidden) {
      const menuShow = document.querySelector(".mobileNavList").classList.remove("hide");
      setHidden(menuShow);
      setHidden(false);
    } else {
      const menuHide = document.querySelector(".mobileNavList").classList.add("hide");
      setHidden(menuHide);
      setHidden(true);
    }
  };

  return (
    <>
      {isMobile ? (
        <div className="mobileMenu">
          <MobileNavMenu visibility={isHidden} />
          <IconContext.Provider value={{ size: "1.8rem", padding: "0", margin: "0", color: "white" }}>
            <button className="hamburgerMenu" onClick={handleClick}>
              <MdMenu />
            </button>
          </IconContext.Provider>
        </div>
      ) : (
        <div className="desktopMenu">
          <DesktopNavMenu></DesktopNavMenu>
        </div>
      )}
    </>
  );
}

export default Navigation;
