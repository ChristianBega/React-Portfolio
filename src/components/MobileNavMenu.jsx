import React from "react";

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
              <a className="" href="">
                About Me
              </a>
            </li>
            <li>
              <a className="" href="">
                Projects
              </a>
            </li>
            <li>
              <a className="" href="">
                Skills
              </a>
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
