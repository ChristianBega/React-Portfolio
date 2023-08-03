import { Grid, Typography, styled } from "@mui/material";
import ViewMore from "../buttons/viewMore.component";
import { aboutTextData } from "../../siteData/aboutMeData";

const StyledGridAboutSection = styled(Grid)(({ theme }) => ({
  border: "1px solid red",
  justifyContent: "center",
  alignItems: "center",
  // my: { xs: 5, md: 10 },
}));

const StyledGridItemTitle = styled(Grid)(({ theme }) => ({
  // my: { xs: 10, md: 15 },
  textAlign: "left",
}));

const StyledGridItemBio = styled(Grid)(({ theme }) => ({
  textAlign: "left",
  // my: { xs: 10, md: 15 },
}));

const StyledGridItemImage = styled(Grid)(({ theme }) => ({}));

const StyledGridItemTools = styled(Grid)(({ theme }) => ({}));

export default function AboutMe() {
  return (
    <StyledGridAboutSection id="about-section" container>
      {/* Grid item - header */}
      <StyledGridItemTitle item xs={12}>
        <Typography typography="h2" component="h2" variant="h2">
          About Me
        </Typography>
      </StyledGridItemTitle>
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
      <StyledGridItemImage item xs={12} md={4}>
        <p>Image</p>
      </StyledGridItemImage>
      {/* Tool Kit */}
      <StyledGridItemTools item xs={12} md={12}>
        <p>My toolkit `emoji`</p>
      </StyledGridItemTools>
    </StyledGridAboutSection>
  );
}
