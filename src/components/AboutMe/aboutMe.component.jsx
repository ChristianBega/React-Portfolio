import React from "react";
// Mui Components
import { Box, Grid, Stack, Typography } from "@mui/material";

// Assets
import ProfileImage from "../../Assets/images/profileIMG.jpeg";

// Icons
import { BsXDiamondFill } from "react-icons/bs";
import ViewMore from "../buttons/viewMore.component";

const skillsData = [
  {
    skill: "Html",
    image: "",
  },
  {
    skill: "Css",
    image: "",
  },
  {
    skill: "React Js",
    image: "",
  },
  {
    skill: "Node Js",
    image: "",
  },
  {
    skill: "Express",
    image: "",
  },
  {
    skill: "Material UI",
    image: "",
  },
  {
    skill: "Node Js",
    image: "",
  },
  {
    skill: "MongoDb",
    image: "",
  },
  {
    skill: "mySQL",
    image: "",
  },
];

export default function AboutMe() {
  return (
    <Grid id="about-section" container justifyContent="center" minHeight={{ xs: "600px" }}>
      {/* Grid item - header */}
      <Grid item xs={12} sx={{ my: { xs: 0, md: 10 } }}>
        <Stack direction="row" spacing={2} alignItems="center" my={4}>
          <BsXDiamondFill size="2rem" color="#fff" />
          <Typography typography="h2" component="h2" variant="h2">
            About Me
          </Typography>
        </Stack>
      </Grid>
      {/* Grid item - skills */}
      <Grid item xs={6} sx={{ textAlign: "left", order: { xs: "4", md: "0" } }}>
        <Box>
          <Typography typography="h3" component="h3">
            Technology I use
          </Typography>
          <Box sx={{ minHeight: "100px", my: 5 }}>
            <p>Skill Carousel Component</p>
          </Box>
        </Box>
        <Box>
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
      <Grid item xs={12} md={6}>
        <Typography typography={{ xs: "bodyTextSm", md: "bodyTextLg" }}>
          I'm a MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography>
        <Typography typography={{ xs: "bodyTextSm", md: "bodyTextLg" }} my={8}>
          I'm a MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography>
        <ViewMore buttonType="about-me" />
      </Grid>
    </Grid>
  );
}
