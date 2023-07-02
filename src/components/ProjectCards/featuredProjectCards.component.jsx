import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Mui Hooks
import { useTheme } from "@emotion/react";
// Mui components
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
// Custom components
import MobileProjectCard from "./mobileProjectCard.component";
import NonMobileProjectCard from "./nonMobileProjectCard.component";
import ViewMore from "../buttons/viewMore.component";

// Icons
import { BsXDiamondFill } from "react-icons/bs";

// Site data
import { featuredProjectsData } from "../../siteData/projectData";

export default function ProjectCards() {
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State
  const [featuredProjects, setFeaturedProjects] = useState([
    { name: "", description: "", longDescription: "", videoDemo: "", link: "", repo: "", technology: "" },
  ]);

  // useEffects
  useEffect(() => {
    setFeaturedProjects(featuredProjectsData);
  }, [featuredProjects]);

  // Render mobile or nonMobile project cards
  const renderProjectCards = () => {
    return featuredProjects.map((project, index) => (
      <Grid item xs={12} sm={isMobile ? 6 : 12}>
        <Link id={project.name} to="/project-page" state={{ project: project }}>
          {isMobile && <MobileProjectCard project={project} key={"project" + index} />}
          {!isMobile && <NonMobileProjectCard project={project} key={"project" + index} />}
        </Link>
      </Grid>
    ));
  };

  return (
    <Grid id="featured-projects-section" container sx={{ justifyContent: "center", mb: 3, mt: 15 }}>
      {/* Grid item - header */}
      <Grid textAlign="left" item xs={12} sx={{ my: { xs: 5, md: 10 } }}>
        <Typography typography="h2" component="h2" variant="h2">
          Projects
        </Typography>
      </Grid>
      {/* Grid item - featured projects */}
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {renderProjectCards(isMobile)}
        </Grid>
      </Grid>

      {/* Grid item - view more button*/}
      <Grid item sx={12}>
        <ViewMore buttonType="project-cards" />
      </Grid>
    </Grid>
  );
}
