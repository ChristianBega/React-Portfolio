import React, { useEffect, useState } from "react";
// Site data
import { featuredProjectsData } from "../../siteData/projectData";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery, styled } from "@mui/material";
import MobileProjectCard from "../ProjectCard/mobileProjectCard.component";
import ViewMore from "../buttons/viewMore.component";
import DesktopProjectCard from "../ProjectCard/desktopProjectCard.component";

const StyledGridItemHeader = styled(Grid)({
  textAlign: "left",
  // my: { xs: 10, md: 15 },
});

const StyledGridItemButtonContainer = styled(Grid)({
  // mt={{ xs: 4 }}
});

export default function RecentWork() {
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
      <Grid item xs={12} sm={isMobile && 12} md={12}>
        {isMobile && <MobileProjectCard isMobile={isMobile} project={project} index={index} key={"project" + index} />}
        {!isMobile && <DesktopProjectCard project={project} index={index} key={"project" + index} />}
      </Grid>
    ));
  };

  return (
    // mt: 15,
    <Grid id="featured-projects-section" container sx={{ justifyContent: "center" }}>
      {/* Grid item - header */}
      <StyledGridItemHeader item xs={12}>
        <Typography typography="h2" component="h2" variant="h2">
          Projects
        </Typography>
      </StyledGridItemHeader>
      {/* Grid item - featured projects */}
      <Grid item xs={12}>
        <Grid container>{renderProjectCards(isMobile)}</Grid>
      </Grid>
      {/* Grid item - view more button*/}
      <StyledGridItemButtonContainer item sx={12}>
        <ViewMore buttonType="project-cards" />
      </StyledGridItemButtonContainer>
    </Grid>
  );
}
