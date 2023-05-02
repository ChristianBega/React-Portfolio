import React, { useCallback, useEffect } from "react";

// Framer motion
import { motion } from "framer-motion";
import { childrenVariants, childrenVariantsTwo } from "../../transitions";

// React router dom
import { Link, useNavigate } from "react-router-dom";

// Icons
import { AiOutlineArrowRight } from "react-icons/ai";
import Socials from "../Socials";

// MUI components
import { Box, Grid, Typography, styled, Button } from "@mui/material";
// Custom components
// import Navigation from "../Navigation/navigation.component";

import Navigation from "../Navigation/navigation.component";
import ScrollDownArrows from "./scrollDown/scrollDownArrows.component";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  background: "var(--radial-gradient)",
  minHeight: "100vh",
  // padding: "2rem",
}));

export default function Hero() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/contact", { replace: true }), [navigate]);
  const test = useCallback(() => navigate("#", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledGridContainer>
      {/* Navigation component */}
      <Navigation />
      {/* Hero grid item */}
      <Grid
        sx={{ textAlign: "left", mt: { xs: "5rem" }, padding: "2rem" }}
        // component={motion.div}
        // initial={childrenVariantsTwo.hidden}
        // animate={childrenVariantsTwo.visible}
        // exit={childrenVariantsTwo.exit}
        // transition={childrenVariantsTwo.transition}
        item
        xs={12}
        md={6}
        mt={3}
      >
        <Typography
          component="p"
          sx={{ fontFamily: "Unbounded", fontSize: { xs: "30px", sm: "35px", md: "45px", lg: "55px" }, lineHeight: "100%", fontWeight: "200" }}
        >
          Hi there,
        </Typography>
        <Typography
          component="h1"
          typography="h1"
          sx={{
            // fontFamily: "Unbounded",
            fontSize: { xs: "40px", sm: "55px", md: "65px", lg: "70px" },
            mt: { xs: 2 },

            lineHeight: "140%",
            fontWeight: "300",
            display: "block",
          }}
        >
          I'm Christian.
        </Typography>
        <Typography
          component="p"
          sx={{ fontFamily: "Unbounded", mt: 2, fontSize: { xs: "22px", sm: "24px", md: "26px", lg: "28px", lineHeight: "100%" }, fontWeight: "200" }}
        >
          Full Stack Developer
        </Typography>
        <Box marginY={5}>
          <Button size="small" onClick={handleOnClick}>
            Contact Me
          </Button>
        </Box>
        {/* <Socials /> */}
        <ScrollDownArrows />
      </Grid>
    </StyledGridContainer>
  );
}
