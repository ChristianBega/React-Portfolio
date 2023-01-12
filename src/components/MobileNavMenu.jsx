import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    position: "absolute",
    right: "16px",
    top: "110px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "185px",
    height: "255px",
    margin: "0",
  },
  ul: {
    padding: "1.2rem 1rem",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
};
function MobileNavMenu({ isHidden }) {
  return (
    <>
      {/* hidden = true || !isHidden = hidden = false */}
      {!isHidden ? (
        <nav style={styles.nav} className="mobileNavList hide">
          <ul style={styles.ul}>
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
              <a to="/about">Contact</a>
            </li>
            <li>
              <a to="/about">Resume</a>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default MobileNavMenu;

// // const mobileMenu = document.querySelector("");
// const [isVisible, setVisible] = useState(false);

// const handleClick = () => {
//   if (isVisible) {
//     //show
//   }
// };
