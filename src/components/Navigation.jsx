import React, { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";

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
          <button className="hamburgerMenu" onClick={handleClick}></button>
        </div>
      ) : (
        <div className="desktopMenu">
          <nav className="">
            <ul>
              <li>
                <a className="" href="" target="_blank">
                  About Me
                </a>
              </li>
              <li>
                <a className="" href="" target="_blank">
                  Projects
                </a>
              </li>
              <li>
                <a className="" href="" target="_blank">
                  Skills
                </a>
              </li>

              <li>
                <a className="" href="" target="_blank">
                  Contact
                </a>
              </li>
              <li>
                <a className="" href="" target="_blank">
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
