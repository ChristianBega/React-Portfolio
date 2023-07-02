import React from "react";
// Mui Components
import { Box, Grid, Typography } from "@mui/material";
// Custom components
import ViewMore from "../buttons/viewMore.component";

// Site data
import { aboutTextData, skillsData } from "../../siteData/aboutMeData";

export default function AboutMe() {
  return (
    <Grid id="about-section" container sx={{ justifyContent: "center", mb: { xs: 3, md: 25 }, mt: { xs: 15, md: 25 } }}>
      {/* Grid item - header */}
      <Grid textAlign="left" item xs={12} sx={{ my: { xs: 5, md: 10 } }}>
        <Typography typography="h2" component="h2" variant="h2">
          About Me
        </Typography>
      </Grid>
      {/* Grid item - skills */}
      <Grid item xs={12} md={6} sx={{ textAlign: "left", order: { xs: "4", md: "0" } }}>
        <Box sx={{ mt: { xs: 10, sm: 0 } }}>
          <Typography typography="h3" component="h3">
            Technology I use
          </Typography>
          <Box sx={{ minHeight: "100px", my: 5 }}>
            <p>Skill Carousel Component</p>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: 4, sm: 0 } }}>
          <Typography typography="h3" component="h3">
            Skills
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", maxWidth: "300px", gap: ".8rem", minHeight: "125px", my: 5 }}>
            {skillsData.map((skill, index) => (
              <Typography key={index} component="p" typography={{ xs: "bodyTextSm", md: "bodyTextLg" }}>
                {skill.skill}
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid>
      {/* Grid item - bio */}
      <Grid item xs={12} md={6} textAlign="left">
        {aboutTextData.map((text) => (
          <Typography typography={{ xs: "bodyTextSm", md: "bodyTextLg" }} mb={5}>
            {text.text}
          </Typography>
        ))}
        <ViewMore buttonType="about-me" />
      </Grid>
    </Grid>
  );
}
