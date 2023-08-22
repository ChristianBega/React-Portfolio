import { Box, Grid, Typography, styled, useMediaQuery } from "@mui/material";
import ViewMore from "../buttons/viewMore.component";
import { aboutTextData } from "../../siteData/aboutMeData";
import AboutMeImage from "../../Assets/images/profileIMG.jpeg";
import { useTheme } from "@emotion/react";

import { aboutMeTextVariants } from "../../FramerMotion/animation";
import { motion } from "framer-motion";

const StyledGridAboutSection = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    paddingBlock: theme.spacing(15),
  },
  [theme.breakpoints.up("md")]: {
    paddingBlock: theme.spacing(30),
  },
}));

const StyledGridItemTitle = styled(Grid)(({ theme }) => ({
  // my: { xs: 10, md: 15 },
  textAlign: "left",
}));

const StyledGridItemBio = styled(Grid)(({ theme }) => ({
  textAlign: "left",
  // my: { xs: 10, md: 15 },
}));

const StyledGridItemImage = styled(Grid)(({ theme }) => ({
  marginBlock: "1rem",
}));

const AboutMeItems = [
  {
    name: "bio one",
    component: (
      <Typography typography={{ xs: "paragraphSm", md: "paragraphLg" }} sx={{ maxWidth: "800px" }}>
        {aboutTextData[0].text}
      </Typography>
    ),
  },
  {
    name: "bio two",
    component: (
      <Typography typography={{ xs: "paragraphSm", md: "paragraphLg" }} sx={{ maxWidth: "800px" }}>
        {aboutTextData[1].text}
      </Typography>
    ),
  },
  {
    name: "button",
    component: <ViewMore buttonType="about-me" />,
  },
];

const ProfileImage = () => {
  return (
    <StyledGridItemImage item xs={12} md={4}>
      <motion.img
        initial={aboutMeTextVariants.hidden}
        variants={aboutMeTextVariants}
        whileInView={aboutMeTextVariants.visible}
        viewport={{
          once: false,
        }}
        src={AboutMeImage}
        style={{
          borderRadius: "12px",
          height: "350px",
          boxShadow:
            " rgba(0, 0, 0, 0.09) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
        }}
        alt="Christian Bega's Portfolio "
      />
    </StyledGridItemImage>
  );
};

export default function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledGridAboutSection id="about-section" container grid>
      <StyledGridItemTitle item xs={12}>
        <Typography
          component={motion.h2}
          initial={aboutMeTextVariants.hidden}
          variants={aboutMeTextVariants}
          whileInView={aboutMeTextVariants.visible}
          typography="h2"
          variant="h2"
        >
          About Me
        </Typography>
      </StyledGridItemTitle>
      {isMobile && <ProfileImage />}

      <StyledGridItemBio item xs={12} md={8}>
        {AboutMeItems.map(({ name, component }, index) => {
          return (
            <Box
              key={name + (index + 1)}
              component={motion.div}
              initial={aboutMeTextVariants.hidden}
              variants={aboutMeTextVariants}
              whileInView={aboutMeTextVariants.visible}
              custom={index}
            >
              {component}
            </Box>
          );
        })}
      </StyledGridItemBio>
      {!isMobile && <ProfileImage />}
    </StyledGridAboutSection>
  );
}
