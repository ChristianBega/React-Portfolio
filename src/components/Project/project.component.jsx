import styled from "@emotion/styled";
import { Box, CardMedia, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

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

export default function Project({ currentProject }) {
  const { name, description, videoDemo, longDescription, technology, link, repo } = currentProject;
  return (
    <>
      <Typography component="h2" variant="h3" typography={{ xs: "cardHeaderSm", md: "cardHeader" }}>
        {name}
      </Typography>
      <Typography component="p" mt={1} fontSize={{ lg: "18px" }}>
        {description}
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
        src={videoDemo}
      />
      <Typography mt={4} component="h3" variant="h6" fontSize={{ lg: "24px" }}>
        About
      </Typography>
      <Typography mt={1} mb={4} component="p" fontSize={{ lg: "18px" }}>
        {longDescription}
      </Typography>
      <Typography component="h3" variant="h6" fontSize={{ lg: "24px" }}>
        Technologies
      </Typography>
      <Box sx={{ mt: "1rem", mb: 4, display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "1rem" }} fontSize={{ lg: "18px" }}>
        {technology.map((currentTech) => (
          <StyledStackItem component="p" key={currentTech}>
            {currentTech}
          </StyledStackItem>
        ))}
      </Box>
      <Typography mt={3} mb={1} component="h3" variant="h6" fontSize={{ lg: "24px" }}>
        <FaGlobeAmericas style={{ marginRight: ".8rem" }} />
        Website
      </Typography>
      <StyledLink href={link} target="_blank" rel="noopener noreferrer" fontSize={{ lg: "18px" }}>
        {link}
      </StyledLink>
      <Typography mt={3} mb={1} component="h3" variant="h6" fontSize={{ lg: "24px" }}>
        <FaGithub style={{ marginRight: ".8rem" }} />
        Github
      </Typography>
      <StyledLink href={repo} target="_blank" rel="noopener noreferrer" fontSize={{ lg: "18px" }}>
        {repo}
      </StyledLink>
    </>
  );
}
