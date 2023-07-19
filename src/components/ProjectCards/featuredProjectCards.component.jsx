import React, { useEffect, useState } from "react";

import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import MobileProjectCard from "./mobileProjectCard.component";
import NonMobileProjectCard from "./desktopProjectCard.component";
import ViewMore from "../buttons/viewMore.component";

// Site data
import { featuredProjectsData } from "../../siteData/projectData";

export default function ProjectCards() {
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        {isMobile && <MobileProjectCard project={project} index={index} key={"project" + index} />}
        {!isMobile && <NonMobileProjectCard project={project} index={index} key={"project" + index} />}
      </Grid>
    ));
  };

  return (
    <Grid id="featured-projects-section" container sx={{ justifyContent: "center", mt: 15 }}>
      {/* Grid item - header */}
      <Grid textAlign="left" item xs={12} sx={{ my: { xs: 10, md: 15 } }}>
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
      <Grid item sx={12} mt={{ xs: 4 }}>
        <ViewMore buttonType="project-cards" />
      </Grid>
    </Grid>
  );
}
