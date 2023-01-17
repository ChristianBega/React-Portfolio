import React, { useCallback } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const styles = {
  h1: {
    fontSize: "250%",
    marginTop: "1rem",
  },
};
function About() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/contact", { replace: true }), [navigate]);
  return (
    <>
      <section className="aboutSection" id="about">
        <Link to="/React-Portfolio"></Link>
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
        <button onClick={handleOnClick}>Contact Me</button>
        <div className="socialLinksContainer">
          <IconContext.Provider value={{ size: "1.3rem" }}>
            <ul className="ul">
              <li>
                <a href="https://github.com/T3mpz" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/christian-bega-4b63b3216/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ChristianBega4" target="_blank">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
        </div>
      </section>
    </>
  );
}

export default About;
