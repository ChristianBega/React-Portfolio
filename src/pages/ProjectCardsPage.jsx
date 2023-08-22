import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { allProjectData } from "../siteData/projectData";
import ProjectCardStatic from "../components/ProjectCardStatic/projectCardStatic.component";
import { motion } from "framer-motion";
import { containerVariants } from "../FramerMotion/animation";
import BackHome from "../components/Buttons/backHome.component";
import { FilterButton } from "../components/Buttons/filterProjects.component";

export default function ProjectCardsPage() {
  const [currentFilterType, setCurrentFilterType] = useState();

  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setCurrentFilterType("all");
    window.scrollTo(0, 0);
  }, []);

  const handleFilterEvent = (event) => {
    setCurrentFilterType(event.currentTarget.id);
  };

  useEffect(() => {
    const newArray = Object.entries(allProjectData);
    const filteredArray = newArray.filter(([_, value]) => {
      let activeFilter = "";
      if (value.projectTag === currentFilterType) {
        activeFilter = value;
      } else if (currentFilterType === "all") {
        activeFilter = value;
      }
      return activeFilter;
    });
    setFilteredProjects(filteredArray);
  }, [currentFilterType]);

  return (
    <Container
      component={motion.container}
      initial={containerVariants.hidden}
      animate={containerVariants.visible}
      transition={containerVariants.transition}
      sx={{ minHeight: "100vh", my: 5 }}
    >
      <BackHome buttonType="projectCards" />
      <FilterButton currentFilterType={currentFilterType} handleFilterEvent={handleFilterEvent} />
      <Grid container maxWidth="lg" spacing={4} marginX={{ lg: "auto" }}>
        {/* <Projects /> */}
        {filteredProjects.map((project, i) => (
          <Grid item xs={12} sm={6} md={6}>
            <ProjectCardStatic project={project[1]} filteredProjects={filteredProjects} key={"project" + i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
