import styled from "@emotion/styled";
import { CardMedia, Container, Paper, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { containerVariants } from "../transitions";
import BackHome from "../components/buttons/backHome.component";

const StyledStackItem = styled(Paper)({
  margin: 0,
  display: "inline",
  padding: ".5rem 1rem",
});
const StyledLink = styled(Link)({
  color: "var(--medium-gray) !important",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
});

export default function ProjectPage() {
  // Accessing props passed from link state
  const location = useLocation();
  const currentProject = location.state?.project;
  const previousPath = location.state?.prevPath;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container
        // component={motion.container}
        // initial={containerVariants.hidden}
        // animate={containerVariants.visible}
        // transition={containerVariants.transition}
        maxWidth="lg"
        sx={{ my: 5, position: "relative" }}
      >
        {previousPath === "/" ? <BackHome buttonType="back" /> : <BackHome buttonType="projectPage" />}
        <Typography component="h2" variant="h5" mt={3} fontSize={{ lg: "28px" }}>
          {currentProject.name}
        </Typography>
        <Typography component="p" mt={1} fontSize={{ lg: "18px" }}>
          {currentProject.description}
        </Typography>
        <CardMedia
          component="video"
          autoPlay
          loop
          muted
          sx={{
            // position: "relative",
            margin: "2rem auto",
            borderRadius: "12px",
            overflow: "hidden",
            objectFit: "cover",
            width: { xs: "100%", sm: "90%", md: "80%", lg: "75%" },
            height: { xs: "100%", sm: "90%", md: "80%", lg: "75%" },
            opacity: ".9",
            background: "var(--dark-card-bg)",
          }}
          src={currentProject.videoDemo}
        />
        <Typography mt={4} component="h3" variant="h6" fontSize={{ lg: "24px" }}>
          About
        </Typography>
        <Typography mt={1} mb={4} component="p" fontSize={{ lg: "18px" }}>
          {currentProject.longDescription}
        </Typography>
        <Typography component="h3" variant="h6" fontSize={{ lg: "24px" }}>
          Technologies
        </Typography>
        <Box sx={{ mt: "1rem", mb: 4, display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "1rem" }} fontSize={{ lg: "18px" }}>
          {currentProject.technology.map((currentTech) => (
            <StyledStackItem component="p" key={currentTech}>
              {currentTech}
            </StyledStackItem>
          ))}
        </Box>
        <Typography mt={3} mb={1} component="h3" variant="h6" fontSize={{ lg: "24px" }}>
          <FaGlobeAmericas style={{ marginRight: ".8rem" }} />
          Website
        </Typography>
        <StyledLink href={currentProject.link} target="_blank" rel="noopener noreferrer" fontSize={{ lg: "18px" }}>
          {currentProject.link}
        </StyledLink>
        <Typography mt={3} mb={1} component="h3" variant="h6" fontSize={{ lg: "24px" }}>
          <FaGithub style={{ marginRight: ".8rem" }} />
          Github
        </Typography>
        <StyledLink href={currentProject.repo} target="_blank" rel="noopener noreferrer" fontSize={{ lg: "18px" }}>
          {currentProject.repo}
        </StyledLink>
      </Container>
      <Footer />
    </>
  );
}
