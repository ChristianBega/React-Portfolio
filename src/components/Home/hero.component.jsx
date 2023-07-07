import React, { useEffect } from "react";
// import OrbMain from "../BackgroundOrb/orbHeroMain.component";
// Framer motion
// import { motion } from "framer-motion";
// import { childrenVariants, childrenVariantsTwo } from "../../transitions";

// MUI components
import { Grid, Typography, styled, useMediaQuery } from "@mui/material";

import ScrollDownArrows from "./scrollDown/scrollDownArrows.component";
import { useTheme } from "@emotion/react";
import NonMobileSocials from "../Socials/nonMobileSocials.component";
import ViewMore from "../buttons/viewMore.component";
// import OrbHeroSecondaryLarge from "../BackgroundOrb/orbHeroSecondaryLarge.component";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignContent: "space-evenly",
  alignItems: "center",
  marginInline: "auto",
  maxWidth: "1200px",
  height: "100vh",
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {
    padding: ".2rem",
  },
  [theme.breakpoints.only("ipad")]: {
    height: "80vh",
  },
  [theme.breakpoints.only("surface7Pro")]: {
    height: "70vh",
  },
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
    <StyledGridContainer id="hero-section" container>
      {/* Hero grid item */}
      <Grid
        item
        // component={motion.div}
        // initial={childrenVariantsTwo.hidden}
        // animate={childrenVariantsTwo.visible}
        // exit={childrenVariantsTwo.exit}
        // transition={childrenVariantsTwo.transition}
        xs={isMobile ? 12 : 11}
        pl={3}
        mt={{ xs: 4, sm: 0, md: 10 }}
        position="relative"
      >
        {/* <OrbMain /> */}
        <Typography
          component="p"
          sx={{
            fontFamily: "Nunito, sans-serif",
            fontSize: { xs: "30px", sm: "35px", md: "45px", lg: "55px" },
            lineHeight: "100%",
            fontWeight: "200",
          }}
        >
          Hi there,
        </Typography>
        <Typography
          component="h1"
          typography="h1"
          sx={{
            fontFamily: "Unbounded",
            fontSize: { xs: "50px", sm: "55px", md: "65px", lg: "90px" },
            lineHeight: "140%",
            fontWeight: "300",
            display: "block",
          }}
        >
          I'm Christian.
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: "Nunito, sans-serif",
            mt: 2,
            mb: 6,
            fontSize: { xs: "24px", md: "26px", lg: "28px", lineHeight: "100%" },
            fontWeight: "200",
          }}
        >
          Full Stack Developer
        </Typography>
        <ViewMore buttonType="contact" />
      </Grid>
      <Grid sx={{ position: "relative" }} item xs={isMobile ? 12 : 1}>
        {renderSocials(isMobile)}
        {/* <OrbHeroSecondaryLarge /> */}
      </Grid>
      <ScrollDownArrows />
    </StyledGridContainer>
  );
}
