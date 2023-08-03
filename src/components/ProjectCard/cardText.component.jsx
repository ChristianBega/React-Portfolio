import React from "react";
import { useLocation } from "react-router";
import { Box, Stack, Typography, styled } from "@mui/material";
import { CardLinks } from "../CardLinks/cardLinks.component";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    textAlign: "left",
  },
  [theme.breakpoints.down("md")]: {
    background: "linear-gradient(0deg, rgba(37, 37, 37, 0.855) 30%, rgba(78, 78, 78, 0.3) 100%)",
    height: "22rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "flex-end",
    borderRadius: "12px",
  },
}));

export default function CardText({ project }) {
  const { name, description, link, repo } = project;
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
  };
  return (
    <StyledBox>
      <Box sx={{ padding: { xs: 4, md: 0 } }}>
        <Typography component="h3" variant="h3" typography={{ xs: "cardHeaderSm", md: "cardHeader" }}>
          {name}
        </Typography>
        <Typography component="p" typography={{ xs: "paragraphSm", md: "paragraphLg" }} my={4}>
          {description}
        </Typography>
        <Stack sx={{ zIndex: "2000" }} direction="row" spacing={6} mt={2}>
          <CardLinks handleClick={handleClick} href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </CardLinks>
          <CardLinks handleClick={handleClick} href={repo} target="_blank" rel="noopener noreferrer">
            Source Code
          </CardLinks>
          <CardLinks linkType={"browserLink"} id={name} to="/project-page" state={{ project: project, prevPath: location.pathname }}>
            View More
          </CardLinks>
        </Stack>
      </Box>
    </StyledBox>
  );
}

// boxShadow:
//   "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px !important",
// boxShadow: "rgb(0, 0, 0, 0.3) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.2) -3px -3px 6px 1px inset !important",
