import React from "react";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const mockData = [
  {
    topic: "My programming journey",
    description: "",
  },
  {
    topic: "Front end skills",
    description: "Elaborate on my skills...",
  },
  {
    topic: "Back end skills",
    description: "What do I enjoy doing on my free time?",
  },
  // {
  //   topic: "Algos",
  //   description: "Elaborate on hacker rank",
  // },
];
const StyledCard = styled(Paper)({
  backgroundColor: "rgba(165, 165, 165, .3)",
  minHeight: "160px",
  borderRadius: ".6rem",
  padding: "1.2rem 1rem",
});
const StyledContainer = styled(Box)({
  display: "grid",
  gap: "1rem",
});

export default function AboutMe() {
  return (
    <StyledContainer>
      {mockData.map((e) => (
        <StyledCard className="aboutMeCard">
          <Typography component="h2" variant="h5">
            {e.topic}
          </Typography>
          <p>{e.description}</p>
        </StyledCard>
      ))}
    </StyledContainer>
  );
}

/* Grid item - skills */

/* <Grid item xs={12} md={6} sx={{ textAlign: "left", order: { xs: "4", md: "0" } }}>
        <Box sx={{ mt: { xs: 16, md: 8 } }}>
          <Typography typography="h3" component="h3">
            Tools
          </Typography>
          <Box sx={{ maxHeight: "100px", my: 4 }}>Tools</Box>
        </Box>
        <Box sx={{ mt: { xs: 4, sm: 0 } }}>
          <Typography typography="h3" component="h3">
            Skills
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", maxWidth: "300px", gap: ".8rem", minHeight: "125px", my: 4 }}>
            {skillsData.map((skill, index) => (
              <Typography key={index} component="p" typography={{ xs: "bodyTextSm", md: "bodyTextLg" }}>
                {skill.skill}
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid> */
