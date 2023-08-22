import { Box, styled } from "@mui/material";

const StyledImage = styled(Box)(({ theme }) => ({
  width: "375px",
  height: "350px",
  objectFit: "fill",
  borderRadius: "12px",
  zIndex: "-100",
  // boxShadow: "rgba(28, 28, 28, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.2) 0px 15px 12px",
  boxShadow: "0 29px 52px rgba(56, 56, 56, 0.4), 0 25px 16px rgba(66, 66, 66, 0.2)",

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
  const { videoDemo, imageDemo } = project;

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {isMobile ? (
        <StyledImage component="img" src={imageDemo}></StyledImage>
      ) : (
        <StyledVideo component="video" muted controls>
          <source src={videoDemo} type="video/mp4"></source>
        </StyledVideo>
      )}
    </Box>
  );
}
