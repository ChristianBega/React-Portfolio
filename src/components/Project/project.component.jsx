import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, CardMedia, Grid, Link, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const StyledStackItem = styled(Paper)({
  margin: 0,
  display: "inline",
  padding: ".5rem 1rem",
});
// const StyledLink = styled(Link)({
//   color: "var(--medium-gray) !important",
//   "&:hover": {
//     color: "#fff !important",
//     backgroundColor: "transparent",
//     textDecorationLine: "underline",
//     textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
//     transform: "scale(1.1)",
//     transition: ".2s",
//   },
// });

export default function Project({ currentProject }) {
  const { name, videoDemo, longDescription, technology, link, repo } = currentProject;
  // description,
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile && (
        <Typography sx={{ width: "100%" }} component="h2" variant="h3" typography={{ xs: "cardHeaderSm", md: "cardHeader" }}>
          {name}
        </Typography>
      )}
      <Grid container rowSpacing={24} columnSpacing={4}>
        {/* Change order at md screen */}
        {/* <Grid item xs={12} md={7} sx={{ maxHeight: "150px", order: { md: 2 } }}>
          
        </Grid> */}
        {/* Project Image */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="video"
            autoPlay
            loop
            muted
            sx={{
              boxShadow: "rgba(28, 28, 28, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.2) 0px 15px 12px",
              borderRadius: "12px",
              overflow: "hidden",
              objectFit: "cover",
              width: { xs: "100%" },
              height: { xs: "400px", md: "100%" },
              minHeight: { lg: "450px" },
              opacity: ".9",
              background: "var(--dark-card-bg)",
            }}
            src={videoDemo}
          />
        </Grid>
        {/* Project header, about, and cta */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", ml: { xs: 0, md: 4, lg: 12 } }}>
            {!isMobile && (
              <Typography sx={{ my: 4 }} component="h2" variant="h3" typography={{ xs: "cardHeaderSm", md: "cardHeader" }}>
                {name}
              </Typography>
            )}
            <Typography mt={4} component="h3" variant="h3">
              About
            </Typography>
            <Typography mt={1} mb={4} component="p">
              {longDescription}
            </Typography>
            {/* <Typography component="h3" variant="h3">
              Technologies
            </Typography>
            <Box sx={{ mt: "1rem", mb: 4, display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "1rem" }} fontSize={{ lg: "18px" }}>
              {technology.map((currentTech) => (
                <StyledStackItem component="p" key={currentTech}>
                  {currentTech}
                </StyledStackItem>
              ))}
            </Box> */}
            <Stack direction={"row"} gap={8}>
              <Typography mt={3} mb={1} component="h3" variant="h6" fontSize={"22px"}>
                <Link sx={{ display: "flex", alignItems: "center" }} href={link} target="_blank" rel="noopener noreferrer">
                  <FaGlobeAmericas style={{ marginRight: ".8rem" }} />
                  Website
                </Link>
              </Typography>

              <Typography mt={3} mb={1} component="h3" variant="h6" fontSize={"22px"}>
                <Link sx={{ display: "flex", alignItems: "center" }} href={repo} target="_blank" rel="noopener noreferrer">
                  {/* {repo} */}
                  <FaGithub style={{ marginRight: ".8rem" }} />
                  Github
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Grid>
        {/* Role and learnings */}
        <Grid item sx={12} md={6}>
          <Box sx={{ paddingBlock: { xs: 0, md: 4 } }}>
            <Typography component="h3" variant="h3">
              Role
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>
          </Box>
          <Box sx={{ paddingBlock: { xs: 0, md: 4 }, paddingTop: { xs: 4 } }}>
            <Typography component="h3" variant="h3">
              Learnings
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>
          </Box>
        </Grid>
        {/* Technology */}
        <Grid item xs={12} md={6}>
          <Box sx={{ ml: { xs: 0, md: 4, lg: 12 } }}>
            <Typography mt={4} component="h3" variant="h3">
              Technologies
            </Typography>
            <Box sx={{ mt: 4, mb: 4, display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "1rem" }} fontSize={{ lg: "18px" }}>
              {technology.map((currentTech) => (
                <StyledStackItem component="p" key={currentTech}>
                  {currentTech}
                </StyledStackItem>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Wire frames */}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", minHeight: "400px" }}>
            <Box sx={{ width: { xs: "100%", md: "50%" }, backgroundColor: "blue" }}>
              <h1>Image</h1>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" }, backgroundColor: "green" }}>
              <h1>Text</h1>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
