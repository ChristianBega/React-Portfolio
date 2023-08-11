import { Grid, Typography, styled, useMediaQuery } from "@mui/material";
import ViewMore from "../Buttons/viewMore.component";
import { aboutTextData } from "../../siteData/aboutMeData";
import AboutMeImage from "../../Assets/images/profileIMG.jpeg";
import { useTheme } from "@emotion/react";
const StyledGridAboutSection = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    paddingBlock: theme.spacing(15),
  },
  [theme.breakpoints.up("md")]: {
    paddingBlock: theme.spacing(30),
  },
}));

const StyledGridItemTitle = styled(Grid)(({ theme }) => ({
  // my: { xs: 10, md: 15 },
  textAlign: "left",
}));

const StyledGridItemBio = styled(Grid)(({ theme }) => ({
  textAlign: "left",
  // my: { xs: 10, md: 15 },
}));

const StyledGridItemImage = styled(Grid)(({ theme }) => ({
  marginBlock: "1rem",
}));

// const StyledGridItemTools = styled(Grid)(({ theme }) => ({}));

export default function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledGridAboutSection id="about-section" container>
      {/* Grid item - header */}
      <StyledGridItemTitle item xs={12}>
        <Typography typography="h2" component="h2" variant="h2">
          About Me
        </Typography>
      </StyledGridItemTitle>
      {isMobile && (
        <StyledGridItemImage item xs={12} md={4}>
          <img
            src={AboutMeImage}
            style={{
              borderRadius: "12px",
              height: "350px",
              boxShadow:
                " rgba(0, 0, 0, 0.09) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
            }}
            alt="Christian Bega's Portfolio "
          />
        </StyledGridItemImage>
      )}
      {/* Grid item - bio */}
      <StyledGridItemBio item xs={12} md={8}>
        {aboutTextData.map((text) => (
          <Typography typography={{ xs: "paragraphSm", md: "paragraphLg" }} sx={{ maxWidth: "800px" }}>
            {text.text}
          </Typography>
        ))}
        <ViewMore buttonType="about-me" />
      </StyledGridItemBio>
      {/* Image */}
      {!isMobile && (
        <StyledGridItemImage item xs={12} md={4}>
          <img
            style={{
              borderRadius: "12px",
              height: "350px",
              boxShadow:
                " rgba(0, 0, 0, 0.09) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
            }}
            src={AboutMeImage}
            alt="Christian Bega's Portfolio "
          />
        </StyledGridItemImage>
      )}

      {/* Tool Kit */}
      {/* <StyledGridItemTools item xs={12} md={12}>
        <p>My toolkit `emoji`</p>
      </StyledGridItemTools> */}
    </StyledGridAboutSection>
  );
}
