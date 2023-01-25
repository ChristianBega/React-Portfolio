import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Grow from "@mui/material/Grow";
import Socials from "../Socials";

function About() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/contact", { replace: true }), [navigate]);
  const [checked, setChecked] = React.useState(true);

  return (
    <Container sx={{ minHeight: "85vh", mt: 5, textAlign: "center" }}>
      <Link to="/React-Portfolio"></Link>
      <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 2000 } : {})}>
        <Typography variant="h2" component="h1" mt={5} sx={{ fontSize: "75px" }}>
          Hi there!
          <Box component="span" sx={{ fontSize: "65%", display: "block", marginTop: "1rem" }}>
            I'm Christian
          </Box>
        </Typography>
      </Grow>
      <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 2500 } : {})}>
        <Typography variant="p" component="p" mt={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia fugit voluptas sit rem quisquam. Magni illo eos, obcaecati quas sapiente
          animi! Odit, rerum ratione!
        </Typography>
      </Grow>
      <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 3500 } : {})}>
        <Box textAlign="center" mt={5}>
          <Button onClick={handleOnClick}>Contact Me</Button>
        </Box>
      </Grow>
      <Socials checked={checked} />
    </Container>
  );
}

export default About;
