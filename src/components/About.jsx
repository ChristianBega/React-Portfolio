import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const styles = {
  h1: {
    fontSize: "250%",
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum in iure quae inventore id quod cumque, voluptatibus a praesentium non ex
            natus animi eaque velit quia vel reiciendis magnam quisquam temporibus at. Culpa voluptate aut dolore quibusdam quisquam consequatur
            incidunt maiores amet quasi, adipisci quidem, perferendis tenetur iusto, quos consectetur?
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
