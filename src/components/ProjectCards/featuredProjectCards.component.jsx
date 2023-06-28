import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Mui Hooks
import { useTheme } from "@emotion/react";
// Mui components
import { Box, Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
// Custom components
import MobileProjectCard from "./mobileProjectCard.component";
import NonMobileProjectCard from "./nonMobileProjectCard.component";

// Icons
import { BsXDiamondFill } from "react-icons/bs";
import { useNavigate } from "react-router";

// Site data
import { featuredProjectsData } from "../../siteData/featuredProjects.data";

export default function ProjectCards() {
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/project-cards", { replace: true }), [navigate]);

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
    <Grid container sx={{ justifyContent: "center", mb: 3 }}>
      {/* Grid item - header */}
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} alignItems="center" my={4}>
          <BsXDiamondFill size="2rem" color="#fff" />
          <Typography typography="h2" component="h2" variant="h2">
            Projects
          </Typography>
        </Stack>
      </Grid>
      {/* Grid item - featured projects */}
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {renderProjectCards(isMobile)}
        </Grid>
      </Grid>

      {/* Grid item - view more button*/}
      <Grid item sx={12}>
        <Button onClick={handleOnClick} size="medium" sx={{ marginY: 5 }}>
          View all projects
        </Button>
      </Grid>
    </Grid>
  );
}
