import React from "react";
import { Link } from "react-router-dom";

function DesktopNavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About Me</Link>
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
  );
}

export default DesktopNavMenu;
