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

// Styled MUI components
const StyledButton = styled(Button)(({ theme }) => ({
  color: "var(--light-blue) !important",
  fontSize: "16px",
  border: "1px solid #fff",
  paddingInline: "1.5rem",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "115%",
  },
}));

export default function Hero() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/contact", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container sx={{ minHeight: "80vh" }}>
      <Grid
        sx={{ textAlign: "left", mt: "5rem" }}
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
          sx={{
            fontFamily: "Unbounded",
            fontSize: { xs: "50px", sm: "55px", md: "65px", lg: "70px" },
            lineHeight: "120%",
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
        {/* <Typography variant="p" component="p" mt={3} maxWidth={500} mx="auto" sx={{ fontSize: { md: "18px" } }}>
          A MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography> */}
        <Box marginY={5}>
          <StyledButton onClick={handleOnClick}>
            Contact Me <AiOutlineArrowRight />
          </StyledButton>
        </Box>
        {/* <Socials /> */}
      </Grid>
    </Grid>
  );
}
