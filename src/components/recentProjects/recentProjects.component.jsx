import React, { useEffect, useState } from "react";
// Site data
import { featuredProjectsData } from "../../siteData/projectData";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery, styled } from "@mui/material";
import MobileProjectCard from "../ProjectCard/mobileProjectCard.component";
import ViewMore from "../Buttons/viewMore.component";
import DesktopProjectCard from "../ProjectCard/desktopProjectCard.component";
import { motion } from "framer-motion";
import { recentProjectVariants } from "../../FramerMotion/animation";
const StyledGridCurrentWorkSection = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: theme.spacing(15),
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(30),
  },
}));
const StyledGridItemHeader = styled(Grid)({
  textAlign: "left",
  // my: { xs: 10, md: 15 },
});

const StyledGridItemButtonContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.between("xs", "md")]: {
    paddingTop: theme.spacing(8),
  },
}));

export default function RecentProjects() {
  const [currentWorks, setCurrentWorks] = useState([
    { name: "", description: "", longDescription: "", videoDemo: "", link: "", repo: "", technology: "" },
  ]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // useEffects
  useEffect(() => {
    setCurrentWorks(featuredProjectsData);
  }, [currentWorks]);

  // Render mobile or nonMobile project cards
  const renderProjectCards = (isMobile) => {
    return currentWorks.map((project, index) => (
      <Grid
        component={motion.grid}
        initial={recentProjectVariants.hidden}
        variants={recentProjectVariants}
        whileInView={recentProjectVariants.visible}
        item
        xs={12}
        sm={isMobile && 12}
        md={12}
      >
        {isMobile && <MobileProjectCard isMobile={isMobile} project={project} index={index} key={"project" + index} />}
        {!isMobile && <DesktopProjectCard project={project} index={index} key={"project" + index} />}
      </Grid>
    ));
  };

  return (
    // mt: 15,
    <StyledGridCurrentWorkSection id="featured-projects-section" container>
      {/* Grid item - header */}
      <StyledGridItemHeader
        component={motion.grid}
        initial={recentProjectVariants.hidden}
        variants={recentProjectVariants}
        whileInView={recentProjectVariants.visible}
        item
        xs={12}
      >
        <Typography typography="h2" component="h2" variant="h2">
          Projects
        </Typography>
      </StyledGridItemHeader>
      {/* Grid item - featured projects */}
      <Grid item xs={12} mt={4}>
        <Grid container rowGap={isMobile ? 8 : 20}>
          {renderProjectCards(isMobile)}
        </Grid>
      </Grid>
      {/* Grid item - view more button*/}
      <StyledGridItemButtonContainer
        component={motion.grid}
        initial={recentProjectVariants.hidden}
        variants={recentProjectVariants}
        whileInView={recentProjectVariants.visible}
        item
        sx={12}
      >
        <ViewMore buttonType="project-cards" />
      </StyledGridItemButtonContainer>
    </StyledGridCurrentWorkSection>
  );
}
