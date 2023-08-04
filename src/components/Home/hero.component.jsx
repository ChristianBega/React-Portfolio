import React, { useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Grid, Typography, styled, useMediaQuery } from "@mui/material";
import NonMobileSocials from "../Socials/nonMobileSocials.component";
import ViewMore from "../buttons/viewMore.component";
import ScrollDownArrows from "./scrollDown/scrollDownArrows.component";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignContent: "space-evenly",
  alignItems: "center",
  marginInline: "auto",
  padding: "2rem",
  textAlign: "left",
  marginTop: "-96px",
  background:
    "radial-gradient(circle at 95.05% 50.17%,#0d6cb4, transparent 30%), radial-gradient(circle at 10.33% 20.35%,#0d6cb4, transparent 35%), radial-gradient(circle at 50% 50%, #330d7b, #330d7b 100%)",

  [theme.breakpoints.between("xs", "sm")]: {
    alignContent: "space-evenly",
  },
  [theme.breakpoints.between("xs", "ipad")]: {
    padding: "0 .6rem",
    height: "105vh",
  },
  [theme.breakpoints.up("ipad")]: {
    height: "80vh",
  },
  [theme.breakpoints.only("surface7Pro")]: {
    height: "70vh",
  },
  [theme.breakpoints.only("md")]: {
    padding: "0 .6rem",
    height: "105vh",
    paddingInline: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "200px",
    height: "105vh",
  },
}));
const HeroTextGreeting = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito, sans-serif",
  lineHeight: "100%",
  fontWeight: "200",
  [theme.breakpoints.up("xs")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "45px",
  },
}));
const HeroTextIntroduction = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  lineHeight: "140%",
  fontWeight: "300",
  display: "block",
  [theme.breakpoints.up("xs")]: {
    fontSize: "48px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "55px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "65px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "80px",
  },
}));
const HeroTextTitles = styled(Typography)(({ theme }) => ({
  display: "block",
  fontFamily: "Nunito, sans-serif",
  marginBottom: theme.spacing(4),
  //! MARGIN
  // margin: theme.spacing(2, 0, 6, 0),
  fontWeight: "200",
  [theme.breakpoints.up("xs")]: {
    fontSize: "24px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "28px",
    lineHeight: "100%",
  },
}));

const renderSocials = (isMobile) => {
  return <>{!isMobile && <NonMobileSocials />}</>;
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
      <Grid item xs={isMobile ? 12 : 11} pl={3} mt={isMobile ? 30 : 0} position="relative">
        <HeroTextGreeting component="span">Hi there,</HeroTextGreeting>
        <HeroTextIntroduction component="h1" typography="h1">
          I'm Christian.
        </HeroTextIntroduction>
        <HeroTextTitles component="span">Full Stack Developer</HeroTextTitles>
        <div style={{ marginTop: "2.5rem" }}>
          <ViewMore buttonType="contact" />
        </div>
      </Grid>
      <Grid sx={{ position: "relative" }} item xs={isMobile ? 12 : 1}>
        {renderSocials(isMobile)}
      </Grid>
      <ScrollDownArrows />
    </StyledGridContainer>
  );
}
