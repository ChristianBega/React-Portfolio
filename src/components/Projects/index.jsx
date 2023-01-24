import React, { useState } from "react";
import ProjectCard from "../ProjectCards";
import cardImg from "../../images/news-menu-bg.png";
import { Container } from "@mui/material";

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
      <Container className="projectSection">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={"project" + i} />
        ))}
      </Container>
    </>
  );
}

export default Projects;
