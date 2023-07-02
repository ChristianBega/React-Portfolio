import { Box, Stack, Typography, Link } from "@mui/material";
import React from "react";

export default function CardText({ project }) {
  const { name, description, link, repo, videoDemo } = project;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
  };
  return (
    <Box sx={{ ml: 10, width: "50%", textAlign: "left" }}>
      <Typography component="h3" variant="h2" typography="cardHeader">
        {name}
      </Typography>
      <Typography fontSize="18px" component="p" my={4}>
        {description}
      </Typography>
      <Stack fontSize="18px" direction="row" spacing={6} mt={2}>
        <Link onClick={handleClick} href={link} target="_blank" rel="noopener noreferrer">
          Live Demo
        </Link>
        <Link onClick={handleClick} href={repo} target="_blank" rel="noopener noreferrer">
          Source Code
        </Link>
      </Stack>
    </Box>
  );
}
