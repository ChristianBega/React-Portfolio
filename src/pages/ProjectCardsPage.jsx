import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import { allProjectData } from "../siteData/projectData";

import ProjectCard from "../components/ProjectCards";
import { Link } from "react-router-dom";
import { cardsVariants } from "../transitions";
import { motion } from "framer-motion";
import BackHome from "../components/buttons/backHome.component";

export default function ProjectCardsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="project-cards-section">
      <BackHome buttonType="projectCards" />
      <Grid container maxWidth="lg" marginX={{ lg: "auto" }} spacing={{ xs: 2, md: 3 }} sx={{ minHeight: "100vh", padding: 2 }}>
        {/* <Projects /> */}
        {allProjectData.map((project, i) => (
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
            // exit={{ opacity: 0, scale: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
            exit={cardsVariants.exit}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Link id={project.name} to="/project-page" state={{ project: project }}>
              <ProjectCard project={project} key={"project" + i} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
