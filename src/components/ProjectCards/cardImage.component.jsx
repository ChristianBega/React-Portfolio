import { Box, Paper, Typography } from "@mui/material";
import { BsEyeFill } from "react-icons/bs";
import styled from "@emotion/styled";

import { Link, useLocation } from "react-router-dom";
const StyledImage = styled(Box)(({ theme }) => ({
  width: "375px",
  height: "350px",
  objectFit: "fill",
  zIndex: "-100",
  borderRadius: "12px",
  boxShadow: "rgba(28, 28, 28, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.2) 0px 15px 12px",
  [theme.breakpoints.up("md")]: {
    minWidth: "500px",
    height: "375px",
  },
  [theme.breakpoints.down("md")]: {
    objectFit: "fill",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "22rem",
  },

  "&:hover": {
    border: "2px solid rgba(255, 255, 255, 0.209)",
  },
}));

const StyledOverlay = styled(Paper)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  opacity: "0",
  transition: ".4s ease-in-out",
  zIndex: "1",
  borderRadius: "12px",
  [theme.breakpoints.up("md")]: {
    top: 0,
    bottom: 0,
    maxHeight: "375px",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "22rem",
  },
  "&:hover": {
    background: "linear-gradient(0deg, rgba(37, 37, 37, 0.8) 30%, rgba(78, 78, 78, 0.4) 100%)",
    boxShadow: "0px 0px 16px 6px rgba(86, 79, 224, 0.6)",
    opacity: "1",
  },
}));
export default function CardImage({ project }) {
  const { name, videoDemo } = project;
  const location = useLocation();

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Link id={name} to="/project-page" state={{ project: project, prevPath: location.pathname }}>
        <StyledImage component="video" autoPlay loop muted src={videoDemo}></StyledImage>
        <StyledOverlay>
          <BsEyeFill size="50px" color="#fff" />
          <Typography component="p">View more</Typography>
        </StyledOverlay>
      </Link>
    </Box>
  );
}
