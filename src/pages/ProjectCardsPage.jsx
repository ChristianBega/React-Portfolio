import { Box, Button, Container } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import FinancialTrackerVideo from "../Assets/videos/FinicalAppDemo.mp4";
// import StudyAppImg from "../Assets/videos/StudyBuddyApp.png";
import WeatherDashboardVideo from "../Assets/videos/WeatherDashboardDemo-Mobile.mp4";
import HangryVideo from "../Assets/videos/HangryDemo.mp4";

import ProjectCard from "../components/ProjectCards";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
const StyledButton = styled(Button)({
  // backgroundColor: "rgba(165, 165, 165, .3)",
  // minHeight: "160px",
  // borderRadius: ".6rem",
  // padding: "1.2rem 1rem",
  "&:hover": {
    color: "#fff",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
});

export default function ProjectCardsPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/resume", { replace: true }), [navigate]);

  const [projects] = useState([
    {
      name: "React Weather Dashboard",
      description: "A weather dashboard utilizing Open weather api to display daily weather forecast.",
      longDescription: "A long description explaining the process etc...",
      videoDemo: WeatherDashboardVideo,
      link: "https://reactweatherdashboard.netlify.app/",
      repo: "https://github.com/ChristianBega/Weather-Dashboard",
      technology: ["React", "Javascript", "3rd Party API", "Tailwind"],
      // versionHistory : [{}] - pull in github api data to show commit history to show recent improvements.
      // more about the project - wire frames, figma designs, etc.
    },
    {
      name: "Financial Tracker",
      description: "A MERN full stack application that allows users track bills, savings, and expenses.",
      longDescription: "A long description explaining the process etc...",
      videoDemo: FinancialTrackerVideo,
      link: "https://golden-goose-finance.herokuapp.com/",
      repo: "https://github.com/ChristianBega/Golden-Goose-Finance",
      technology: ["React", "Javascript", "MongoDB", "Express", "Node"],
    },

    {
      name: "Study Buddies",
      description: "A full stack application that serves as a study productivity aid.",
      longDescription: "A long description explaining the process etc...",
      // videoDemo: StudyAppImg,
      link: "https://studybuddiezzz.herokuapp.com/",
      repo: "https://github.com/JerimiahK/studyBuddies",
      technology: ["React", "Javascript", "SQL", "Express", "Node", "SCSS", "Material UI"],
    },
    {
      name: "Hangry",
      description: "A food recipe application that provides users with recipes personalized by their dietary and nutritional search filters. ",
      longDescription: "A long description explaining the process etc...",
      videoDemo: HangryVideo,
      link: "https://mandiebot.github.io/Hangry/",
      repo: "https://github.com/ChristianBega/Hangry",
      technology: ["Javascript", "3rd Party API", "Boot Strap"],
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container sx={{ minHeight: "100vh", mt: 5, display: "grid", gap: "2rem", justifyContent: "center" }}>
        {/* <Projects /> */}
        {/* map over all project and create cards */}
        {projects.map((project, i) => (
          <Link id={project.name} to="/project-page" state={{ project: project }}>
            <ProjectCard project={project} key={"project" + i} />
          </Link>
        ))}
      </Container>
      <Box textAlign="center" marginY={5}>
        <StyledButton onClick={handleOnClick}>
          View my resume <AiOutlineArrowRight />
        </StyledButton>
      </Box>
    </>
  );
}
