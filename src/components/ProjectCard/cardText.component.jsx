import React from "react";
import { useLocation } from "react-router";
import { Box, Stack, Typography, styled } from "@mui/material";
import { CardLinks } from "../CardLinks/cardLinks.component";
import { HiArrowSmRight } from "react-icons/hi";

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
  const { name, description, link } = project;
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
        <Stack sx={{ zIndex: "2000" }} direction="row" spacing={6}>
          <CardLinks handleClick={handleClick} href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </CardLinks>
          {/* <CardLinks handleClick={handleClick} href={repo} target="_blank" rel="noopener noreferrer">
            Source Code
          </CardLinks> */}
          <CardLinks linkType={"browserLink"} id={name} to="/project-page" state={{ project: project, prevPath: location.pathname }}>
            View More
            <HiArrowSmRight />
          </CardLinks>
        </Stack>
        <Box sx={{ marginTop: 4 }}></Box>
      </Box>
    </StyledBox>
  );
}
