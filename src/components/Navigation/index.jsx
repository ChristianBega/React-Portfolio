import MobileNavMenu from "../MobileNavMenu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GrMenu } from "react-icons/gr";
import { useMediaQuery, useTheme } from "@mui/material";

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
          <IconContext.Provider value={{ size: "1.3rem", padding: "0", margin: "0" }}>
            <button className="hamburgerMenu" onClick={handleClick}>
              <GrMenu />
            </button>
          </IconContext.Provider>
        </div>
      ) : (
        <div className="desktopMenu">
          <nav>
            <ul>
              <li>
                <Link handle={handleClick} to="/about">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
