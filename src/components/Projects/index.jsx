import React, { useState } from "react";
import ProjectCard from "../ProjectCards";
import cardImg from "../../images/news-menu-bg.png";

function Projects() {
  const [projects] = useState([
    {
      name: "News Home Page",
      description: "LoremLoremLorem",
      image: cardImg,
      link: "https://t3mpz.github.io/news-homepage-main/",
      repo: "https://github.com/T3mpz/news-homepage-main",
    },
    {
      name: "News Home Page",
      description: "LoremLoremLorem",
      image: cardImg,
      link: "https://t3mpz.github.io/news-homepage-main/",
      repo: "https://github.com/T3mpz/news-homepage-main",
    },
    {
      name: "News Home Page",
      description: "LoremLoremLorem",
      image: cardImg,
      link: "https://t3mpz.github.io/news-homepage-main/",
      repo: "https://github.com/T3mpz/news-homepage-main",
    },
    {
      name: "News Home Page",
      description: "LoremLoremLorem",
      image: cardImg,
      link: "https://t3mpz.github.io/news-homepage-main/",
      repo: "https://github.com/T3mpz/news-homepage-main",
    },
  ]);
  return (
    <>
      <section className="projectSection">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={"project" + i} />
        ))}
      </section>
    </>
  );
}

export default Projects;
