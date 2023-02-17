import styled from "@emotion/styled";
import { CardMedia, Container, Paper, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const StyledStackItem = styled(Paper)({
  margin: 0,
  display: "inline",
  padding: ".5rem 1rem",
});

export default function ProjectPage() {
  // Access props passed from link state
  const location = useLocation();
  const currentProject = location.state?.project;
  console.log(currentProject);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container sx={{ minHeight: "100vh", my: 5, justifyContent: "center" }}>
      <Typography component="h2" variant="h5">
        {currentProject.name}
      </Typography>
      <Typography component="p" mt={1}>
        {currentProject.description}
      </Typography>
      <CardMedia
        component="video"
        autoPlay
        loop
        muted
        sx={{ borderRadius: "12px", overflow: "hidden", marginBlock: "2rem", objectFit: "cover", width: "100%", height: "100%" }}
        src={currentProject.videoDemo}
      />
      <Typography mt={4} component="h3" variant="h6">
        About
      </Typography>
      <Typography mb={4} component="p">
        {currentProject.longDescription}
      </Typography>
      <Typography component="h3" variant="h6">
        Technologies
      </Typography>
      <Box sx={{ my: "1rem", display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "1rem" }}>
        {currentProject.technology.map((currentTech) => (
          <StyledStackItem component="p" key={currentTech}>
            {currentTech}
          </StyledStackItem>
        ))}
      </Box>
      <Typography mt={4} component="h3" variant="h6">
        <FaGlobeAmericas style={{ marginRight: ".8rem" }} />
        Website
      </Typography>
      <Link>{currentProject.link}</Link>
      <Typography mt={4} component="h3" variant="h6">
        <FaGithub style={{ marginRight: ".8rem" }} />
        Github
      </Typography>
      <Link>{currentProject.repo}</Link>
    </Container>
  );
}
