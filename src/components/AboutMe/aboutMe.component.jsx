import React from "react";
// Mui Components
import { Box, Grid, Stack, Typography } from "@mui/material";

// Assets
import ProfileImage from "../../Assets/images/profileIMG.jpeg";

// Icons
import { BsXDiamondFill } from "react-icons/bs";
import ViewMore from "../buttons/viewMore.component";
export default function AboutMe() {
  return (
    <Grid id="about-section" container justifyContent="center" sx={{ minHeight: "100vh" }}>
      {/* Grid item - header */}
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} alignItems="center" my={4}>
          <BsXDiamondFill size="2rem" color="#fff" />
          <Typography typography="h2" component="h2" variant="h2">
            About Me
          </Typography>
        </Stack>
      </Grid>
      {/* Grid item - profile image */}
      <Grid item xs={12} sx={{ alignItems: "center" }}>
        <Box component="img" src={ProfileImage} sx={{ maxWidth: "300px" }}></Box>
      </Grid>
      {/* Grid item - bio */}
      <Grid item xs={12}>
        <Typography typography={{ xs: "bodyTextSm", md: "bodyTextLg" }} mt={5}>
          I'm a MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography>
        <ViewMore buttonType="about-me" />
      </Grid>
    </Grid>
  );
}
