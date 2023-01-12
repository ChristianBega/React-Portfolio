import MobileNavMenu from "./MobileNavMenu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GrMenu } from "react-icons/gr";

// How could I use state to check for a change and to render different component?

function Navigation() {
  const [isDesktop, setDesktop] = useState(window.innerWidth);
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

  // Whenever I try to resize the browser it doesn't hot reload, but renders once refreshed
  // Am I not telling it to rerender???
  return (
    <>
      {isDesktop < 600 ? (
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
          <nav className="">
            <ul>
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <a className="" href="">
                  Contact
                </a>
              </li>
              <li>
                <a className="" href="">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
