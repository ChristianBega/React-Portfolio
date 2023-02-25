import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomeAbout() {
  return (
    <>
      <Link to="/"></Link>
      <Typography component="h2" mt={5} sx={{ fontSize: "75px", fontWeight: "700" }}>
        Hello,
        <Box component="span" sx={{ fontSize: "65%", display: "block" }}>
          I'm Christian,
        </Box>
      </Typography>
      <Typography variant="p" component="p" mt={5}>
        A MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
        journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to design,
        develop, and deliver elegant user friendly web applications.
      </Typography>
    </>
  );
}
