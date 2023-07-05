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

const StyledButtonLinks = styled(Link)(({ theme }) => ({
  zIndex: "1000",
  padding: ".8rem 1rem !important",
  borderRadius: "12% !important",
  boxShadow:
    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px !important",
  "&:hover": {
    color: "#fff",
    transform: "scale(1.1)",
    boxShadow: "rgb(0, 0, 0, 0.3) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.2) -3px -3px 6px 1px inset !important",
    transition: ".3s ease-in-out",
    fontWeight: "600",
  },
  [theme.breakpoints.down("sm")]: {
    padding: ".4rem 1rem !important",
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
      <Box sx={{ padding: { xs: 4, md: 0 } }}>
        <Typography component="h3" variant="h3" typography={{ xs: "cardHeaderSm", md: "cardHeader" }}>
          {name}
        </Typography>
        <Typography fontSize={{ xs: "16px", md: "18px" }} component="p" my={4}>
          {description}
        </Typography>
        <Stack fontSize={{ xs: "16px", md: "18px" }} direction="row" spacing={6} mt={2}>
          <StyledButtonLinks onClick={handleClick} href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </StyledButtonLinks>
          <StyledButtonLinks onClick={handleClick} href={repo} target="_blank" rel="noopener noreferrer">
            Source Code
          </StyledButtonLinks>
        </Stack>
      </Box>
    </StyledBox>
  );
}
