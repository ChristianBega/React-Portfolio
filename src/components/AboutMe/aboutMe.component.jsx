import React, { useCallback } from "react";
import { useNavigate } from "react-router";
// Mui Components
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

// Assets
import ProfileImage from "../../Assets/images/profileIMG.jpeg";

// Icons
import { BsXDiamondFill } from "react-icons/bs";
export default function AboutMe() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/about-me", { replace: true }), [navigate]);

  // add header
  // add profile image
  // add description/bio
  // add learn more cta
  return (
    <Grid container justifyContent="center" sx={{ minHeight: "100vh" }}>
      {/* Grid item - header */}
      <Grid item>
        <Stack direction="row" spacing={2} alignItems="center">
          <BsXDiamondFill size="2rem" color="#fff" />
          <Typography typography="h2" component="h2" variant="h2">
            About Me
          </Typography>
        </Stack>
      </Grid>
      {/* Grid item - profile image */}
      <Grid item sx={{ alignItems: "center" }}>
        <Box component="img" src={ProfileImage} sx={{ maxWidth: "300px", my: 3 }}></Box>
      </Grid>
      {/* Grid item - bio */}
      <Grid item xs={12}>
        <Typography typography={{ xs: "bodyTextSm", md: "bodyTextLg" }}>
          I'm a MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography>
        <Button onClick={handleOnClick} size="medium" sx={{ mt: 3 }}>
          Learn more about me
        </Button>
      </Grid>
    </Grid>
  );
}
