import { Box, Paper, styled } from "@mui/material";
import { CardOverlay } from "../CardOverlay/cardOverlay.component";

const StyledImage = styled(Box)(({ theme }) => ({
  width: "375px",
  height: "350px",
  objectFit: "fill",
  borderRadius: "12px",
  zIndex: "-100",
  boxShadow: "rgba(28, 28, 28, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.2) 0px 15px 12px",
  [theme.breakpoints.up("md")]: {
    minWidth: "450px",
    minHeight: "400px",
  },
  [theme.breakpoints.down("md")]: {
    objectFit: "fill",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "22rem",
  },
}));

const StyledVideo = styled(Box)(({ theme }) => ({
  width: "375px",
  height: "350px",
  objectFit: "fill",
  borderRadius: "12px",
  zIndex: "100",
  [theme.breakpoints.up("md")]: {
    minWidth: "450px",
    minHeight: "400px",
  },
}));

export default function CardImage({ project, isMobile }) {
  const { videoDemo } = project;

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {isMobile ? (
        <>
          <StyledImage component="video" src={videoDemo}></StyledImage>
          <CardOverlay isMobile={isMobile}></CardOverlay>
        </>
      ) : (
        <>
          <StyledVideo component="video" muted controls>
            <source src={videoDemo} type="video/mp4"></source>
          </StyledVideo>
        </>
      )}
      {/* When in view play video else stop video */}
      {/* add video control buttons to play and pause   */}
    </Box>
  );
}
