import styled from "@emotion/styled";
import { Box, Stack, Typography, Link } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    textAlign: "left",
  },
  [theme.breakpoints.down("md")]: {
    height: "22rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "flex-end",
    background: "linear-gradient(0deg, rgba(37, 37, 37, 0.855) 30%, rgba(78, 78, 78, 0.3) 100%)",
  },
}));
export default function CardText({ project }) {
  const { name, description, link, repo } = project;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
  };
  return (
    <StyledBox>
      <Box id="test" sx={{ padding: { xs: 4, md: 0 }, ml: { md: 4 } }}>
        <Typography component="h3" variant="h2" typography={{ xs: "cardHeaderSm", md: "cardHeader" }}>
          {name}
        </Typography>
        <Typography fontSize={{ xs: "16px", md: "18px" }} component="p" my={4}>
          {description}
        </Typography>
        <Stack fontSize={{ xs: "16px", md: "18px" }} direction="row" spacing={6} mt={2}>
          <Link onClick={handleClick} href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Link>
          <Link onClick={handleClick} href={repo} target="_blank" rel="noopener noreferrer">
            Source Code
          </Link>
        </Stack>
      </Box>
    </StyledBox>
  );
}
