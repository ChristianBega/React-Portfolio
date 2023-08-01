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
    "radial-gradient(circle at 88.05% 85.17%, #1F2475, transparent 17%), radial-gradient(circle at 18.33% 22.35%, #1F2475, transparent 23%), radial-gradient(circle at 50% 50%, #00021fcc, #00021f9e 100%)",
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
    fontSize: "45px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "55px",
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
    fontSize: "90px",
  },
}));
const HeroTextTitles = styled(Typography)(({ theme }) => ({
  display: "block",
  fontFamily: "Nunito, sans-serif",

  //! MARGIN
  margin: theme.spacing(2, 0, 6, 0),
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
      <Grid item xs={isMobile ? 12 : 11} pl={3} mt={{ xs: 4, sm: 0, md: 10 }} position="relative">
        <HeroTextGreeting component="span">Hi there,</HeroTextGreeting>
        <HeroTextIntroduction component="h1" typography="h1">
          I'm Christian.
        </HeroTextIntroduction>
        <HeroTextTitles component="span">Full Stack Developer</HeroTextTitles>
        <ViewMore buttonType="contact" />
      </Grid>
      <Grid sx={{ position: "relative" }} item xs={isMobile ? 12 : 1}>
        {renderSocials(isMobile)}
      </Grid>
      <ScrollDownArrows />
    </StyledGridContainer>
  );
}
