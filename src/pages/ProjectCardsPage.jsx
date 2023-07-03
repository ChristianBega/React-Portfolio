import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";

import { allProjectData } from "../siteData/projectData";

import StaticProjectCard from "../components/ProjectCards/staticProjectCard.component";
import { motion } from "framer-motion";
import BackHome from "../components/buttons/backHome.component";
import { Link } from "react-router-dom";

export default function ProjectCardsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // location.pathname === "project-page"
  return (
    <Container sx={{ minHeight: "100vh", my: 5 }}>
      <BackHome buttonType="projectCards" />
      <Grid container maxWidth="lg" spacing={4} marginX={{ lg: "auto" }} sx={{ minHeight: "100vh" }}>
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
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Link id={project.name} to="/project-page" state={{ project: project }}>
              <StaticProjectCard project={project} key={"project" + i} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
