import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Grid, Link, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const StyledStackItem = styled(Paper)({
  margin: 0,
  display: "inline",
  padding: ".5rem 1rem",
});

const StyledVideo = styled(Box)(({ theme }) => ({
  boxShadow: "rgba(28, 28, 28, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.2) 0px 15px 12px",
  borderRadius: "12px",
  overflow: "hidden",
  objectFit: "cover",
  width: "100%",
  minHeight: "450px",
  opacity: ".9",
  // background: "var(--dark-card-bg)",
  [theme.breakpoints.down("sm")]: {
    minHeight: "400px",
  },
  [theme.breakpoints.between("sm", "surface7Pro")]: {
    minHeight: "500px",
  },
}));

export default function Project({ currentProject }) {
  const { name, videoDemo, longDescription, technology, link, repo, role } = currentProject;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile && (
        <Typography sx={{ width: "100%" }} typography="h2" component="h2" variant="h2">
          {name}
        </Typography>
      )}
      {/*   */}
      <Grid container rowSpacing={isMobile ? 12 : 24} columnSpacing={isMobile ? 0 : 8}>
        {/* Project Image */}
        <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12} md={6}>
          <StyledVideo
            component="video"
            controls
            // autoPlay
            // loop
            muted
            src={videoDemo}
          />
        </Grid>
        {/* Project header, about, and cta */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              ml: { xs: 0, md: 4, lg: 12 },
            }}
          >
            {!isMobile && (
              <Typography typography="h2" component="h2" variant="h2">
                {name}
              </Typography>
            )}
            <Typography component="h3" variant="h3">
              Summary
            </Typography>

            <Typography component="p" typography={{ xs: "paragraphSm", md: "paragraphLg" }}>
              {longDescription}
            </Typography>

            {/* Technology */}
            <Stack direction={"row"} gap={8}>
              <Link typography="linkText" sx={{ display: "flex", alignItems: "center" }} href={link} target="_blank" rel="noopener noreferrer">
                <FaGlobeAmericas style={{ marginRight: ".8rem" }} />
                Website
              </Link>
              <Typography component="h3" variant="h6">
                <Link typography="linkText" sx={{ display: "flex", alignItems: "center" }} href={repo} target="_blank" rel="noopener noreferrer">
                  {/* {repo} */}
                  <FaGithub style={{ marginRight: ".8rem" }} />
                  Github
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Grid>
        {/* Role and learnings */}
        <Grid item xs={12} md={6}>
          {/* sx={{ paddingBlock: { xs: 0, md: 4 } }} */}
          <Box>
            <Typography component="h3" variant="h3">
              Role
            </Typography>
            {role?.map((role) => {
              return (
                <>
                  <Typography component="p" typography={{ xs: "paragraphSm", md: "paragraphLg" }}>
                    <Typography component="span" sx={{ marginRight: 2 }}>
                      &#8226;
                    </Typography>
                    {role}
                  </Typography>
                </>
              );
            })}
          </Box>
          {/* <Box sx={{ paddingBlock: { xs: 0, md: 4 }, paddingTop: { xs: 4 } }}>
            <Typography component="h3" variant="h3">
              Learnings
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>
          </Box> */}
        </Grid>
        {/* Technology */}
        <Grid item xs={12} md={6}>
          <Box sx={{ ml: { xs: 0, md: 4, lg: 12 } }}>
            <Typography component="h3" variant="h3">
              Technologies
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "1rem", fontFamily: "Nunito" }} fontSize={{ lg: "18px" }}>
              {technology.map((currentTech) => (
                <StyledStackItem component="p" key={currentTech}>
                  {currentTech}
                </StyledStackItem>
              ))}
            </Box>
          </Box>
        </Grid>

        {/*! Wire frames - WORK IN PROGRESS */}
        {/* <Grid item xs={12}>
          <Box sx={{ display: "flex", minHeight: "400px" }}>
            <Box sx={{ width: { xs: "100%", md: "50%" }, backgroundColor: "blue" }}>
              <h1>Image</h1>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" }, backgroundColor: "green" }}>
              <h1>Text</h1>
            </Box>
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
}
