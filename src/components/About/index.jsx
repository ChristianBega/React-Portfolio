import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import React, { useCallback } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Grow from "@mui/material/Grow";

const Item = styled(Box)({
  textAlign: "center",
});

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
      <IconContext.Provider value={{ size: "1.3rem" }}>
        <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 3500 } : {})}>
          <Stack direction="row" spacing={5} sx={{ justifyContent: "center", mt: 5 }}>
            <Item>
              <a href="https://github.com/T3mpz" target="_blank">
                <FaGithub />
              </a>
            </Item>
            <Item>
              <a href="https://www.linkedin.com/in/christian-bega-4b63b3216/" target="_blank">
                <FaLinkedinIn />
              </a>
            </Item>
            <Item>
              <a href="https://twitter.com/ChristianBega4" target="_blank">
                <FaTwitter />
              </a>
            </Item>
          </Stack>
        </Grow>
      </IconContext.Provider>
    </Container>
  );
}

export default About;
