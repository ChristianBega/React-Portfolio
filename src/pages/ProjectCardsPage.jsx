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
    event.preventDefault();
    setCurrentFilterType(event.currentTarget.id);
  };

  useEffect(() => {
    const newArray = Object.entries(allProjectData);
    const filteredArray = newArray.filter(([_, value]) => {
      if (value.projectTag === currentFilterType) {
        return value;
      } else if (currentFilterType === "all") {
        return value;
      }
    });
    setFilteredProjects(filteredArray);
    return;
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
          <Grid
            component={motion.div}
            initial={{
              opacity: 0,
              scale: 0.5,
              translateX: i % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={{ opacity: 1, scale: 1, translateX: 0, translateY: 0 }}
            transition={{
              easeIn: [0.43, 0.13, 0.23, 0.96],
              scale: 0,
              delay: i * 0.4,
              mass: 1.2,
              damping: 15,
              type: "spring",
              stiffness: 100,
            }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <ProjectCardStatic project={project[1]} key={"project" + i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
