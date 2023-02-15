import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Socials from "../Socials";

function About() {
  return (
    <>
      <Link to="/"></Link>
      <Typography component="h2" mt={5} sx={{ fontSize: "75px", fontWeight: "700" }}>
        Hi there!
        <Box component="span" sx={{ fontSize: "65%", display: "block" }}>
          I'm Christian
        </Box>
      </Typography>
      <Typography variant="p" component="p" mt={5}>
        A creative, detail-oriented Web Developer with a versatile background and immersive hands on experience with developing fully responsive,
        polished UI, and user-friendly web applications.
      </Typography>
    </>
  );
}

export default About;
