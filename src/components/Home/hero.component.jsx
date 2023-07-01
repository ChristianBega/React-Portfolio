import React, { useCallback, useEffect } from "react";

// Framer motion
import { motion } from "framer-motion";
import { childrenVariants, childrenVariantsTwo } from "../../transitions";

// React router dom
import { Link } from "react-router-dom";

// Icons
import Socials from "../Socials/mobileSocials.component";

// MUI components
import { Grid, Typography, styled, useMediaQuery } from "@mui/material";
// Custom components
// import Navigation from "../Navigation/navigation.component";

import Navigation from "../Navigation/navigation.component";
import ScrollDownArrows from "./scrollDown/scrollDownArrows.component";
import { useTheme } from "@emotion/react";
import NonMobileSocials from "../Socials/nonMobileSocials.component";
import ViewMore from "../buttons/viewMore.component";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  background: "var(--radial-gradient)",
  minHeight: "100vh",
  // maxWidth: "1200px",

  // [theme.breakpoints.between("xs", "md")]: {},
  // [theme.breakpoints.only("lg")]: {
  //   minHeight: "110vh",
  // },

  textAlign: "left",
}));

const renderSocials = (isMobile) => {
  return (
    <>
      {/* {isMobile && <MobileSocials />} */}
      {!isMobile && <NonMobileSocials />}
    </>
  );
};

export default function Hero() {
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledGridContainer id="hero-container" container>
      {/* Navigation component */}
      <Navigation />
      {/* Hero grid item */}
      <Grid
        item
        // component={motion.div}
        // initial={childrenVariantsTwo.hidden}
        // animate={childrenVariantsTwo.visible}
        // exit={childrenVariantsTwo.exit}
        // transition={childrenVariantsTwo.transition}
        xs={isMobile ? 12 : 11}
        // md={6}
        pl={3}
        mt={{ xs: 5, sm: 0 }}
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
            fontSize: { xs: "45px", sm: "55px", md: "65px", lg: "70px" },
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
        <ViewMore buttonType="contact" />
      </Grid>
      <Grid item xs={isMobile ? 12 : 1}>
        {renderSocials(isMobile)}
      </Grid>
      <ScrollDownArrows />
    </StyledGridContainer>
  );
}
