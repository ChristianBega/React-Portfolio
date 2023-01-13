import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const styles = {
  h1: {
    fontSize: "250%",
    marginTop: "1rem",
  },
};
function About() {
  return (
    <>
      <section className="aboutSection" id="about">
        <div className="aboutIntroText">
          <h1 style={styles.h1}>
            Hi There!
            <span>
              <br /> I'm Christian
            </span>
          </h1>
          <p>
            A dedicated and passionate Jr web developer graduate from the Denver University full stack bootcamp. Pursuing a creative and exciting
            position that utilizes my current knowledge of web development. Capable of utilizing, integrating, and developing Restful APIs. As well as
            coordinating and collaborating with different groups of developers to plan, test, and develop MERN full stack applications.
          </p>
        </div>
        <button>Contact Me</button>
        <div className="socialLinksContainer">
          <IconContext.Provider value={{ size: "1.3rem" }}>
            <ul className="ul">
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </IconContext.Provider>
        </div>
      </section>
    </>
  );
}

export default About;
