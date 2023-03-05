import styled from "@emotion/styled";
import { CardMedia, Container, Paper, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import Footer from "../components/Footer";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { transition1 } from "../transitions";
import { motion } from "framer-motion";
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
  // Access props passed from link state
  const location = useLocation();
  const navigate = useNavigate();
  const currentProject = location.state?.project;
  const handleNavigateBack = useCallback(() => navigate("/project-cards", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        maxWidth="lg"
        sx={{ my: 5, justifyContent: "center", position: "relative" }}
      >
        <Box sx={{ ":hover": { cursor: "pointer" } }}>
          <IconContext.Provider value={{ size: "1.7rem", color: "#fff" }}>
            <AiOutlineArrowLeft onClick={handleNavigateBack} />
          </IconContext.Provider>
        </Box>

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
