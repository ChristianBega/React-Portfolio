import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, Grid, styled, Box } from "@mui/material";
import PortfolioImage from "../../Assets/images/profileIMG.jpeg";
import { childrenVariants, childrenVariantsTwo } from "../../transitions";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Socials from "../Socials";
const StyledButton = styled(Button)(({ theme }) => ({
  color: "var(--light-blue) !important",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
  fontSize: "16px",
  [theme.breakpoints.up("md")]: {
    fontSize: "115%",
  },
}));

export default function HomeAbout() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/project-cards", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container justifyContent="center" alignContent="center" spacing={{ sm: 0 }}>
      <Link to="/"></Link>
      <Grid
        item
        component={motion.div}
        initial={childrenVariants.hidden}
        animate={childrenVariants.visible}
        exit={childrenVariants.exit}
        transition={childrenVariants.transition}
        xs={12}
        md={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "340px", lg: "70%" },
            height: { xs: "340px", lg: "70%" },
            // borderRadius: "50%",
            // width: { xs: "250px", md: "350px", lg: "425px" },
            // height: { xs: "250px", md: "350px", lg: "425px" },
            // borderRadius: { xs: "50%", lg: "0" },
          }}
          src={PortfolioImage}
          alt="Christian Bega's Portfolio Image."
        ></Box>
      </Grid>
      <Grid
        component={motion.div}
        initial={childrenVariantsTwo.hidden}
        animate={childrenVariantsTwo.visible}
        exit={childrenVariantsTwo.exit}
        transition={childrenVariantsTwo.transition}
        item
        xs={12}
        md={6}
        mt={3}
      >
        <Typography component="h2" sx={{ fontSize: { xs: "65px", md: "75px", lg: "80px", lineHeight: "120%" }, fontWeight: "700" }}>
          Hello,
        </Typography>
        <Typography component="span" sx={{ fontSize: { xs: "55px", md: "65px", lg: "75px", lineHeight: "120%" }, display: "block" }}>
          I'm Christian,
        </Typography>
        <Typography variant="p" component="p" mt={3} maxWidth={500} mx="auto" sx={{ fontSize: { md: "18px" } }}>
          A MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography>
        <Box textAlign="center" marginY={5}>
          <StyledButton onClick={handleOnClick}>
            View my work <AiOutlineArrowRight />
          </StyledButton>
        </Box>
        <Socials />
      </Grid>
    </Grid>
  );
}
