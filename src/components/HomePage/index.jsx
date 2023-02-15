import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

import { Link } from "react-router-dom";
import Grow from "@mui/material/Grow";
import Socials from "../Socials";

function About() {
  const [checked, setChecked] = React.useState(true);

  return (
    <>
      <Link to="/React-Portfolio"></Link>
      <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 2000 } : {})}>
        <Typography component="h2" mt={5} sx={{ fontSize: "75px", fontWeight: "700" }}>
          Hi there!
          <Box component="span" sx={{ fontSize: "65%", display: "block", marginTop: "1rem" }}>
            I'm Christian
          </Box>
        </Typography>
      </Grow>
      <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 2500 } : {})}>
        <Typography variant="p" component="p" mt={5}>
          A creative, detail-oriented Web Developer with a versatile background and immersive hands on experience with developing fully responsive,
          polished UI, and user-friendly web applications.
        </Typography>
      </Grow>

      <Socials checked={checked} />
    </>
  );
}

export default About;
