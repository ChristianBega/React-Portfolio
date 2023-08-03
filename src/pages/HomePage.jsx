import { Container, styled } from "@mui/material";
import Hero from "../components/Home/hero.component";
import AboutMe from "../components/AboutMe/aboutMe.component";
import RecentProjects from "../components/recentProjects/recentProjects.component";
import { HeroSectionOverlay } from "../components/SectionOverlays/heroSectionOverlay.component";
// import { MainSectionOverlay } from "../components/SectionOverlays/mainSectionOverlay.component";

const StyledHeroContainer = styled(Container)({
  minHeight: "75vh",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  position: "relative",
});
export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroSectionOverlay />
      <StyledHeroContainer id="main-content-section">
        <AboutMe />
        <RecentProjects />
      </StyledHeroContainer>
      {/* <MainSectionOverlay /> */}
    </>
  );
}
