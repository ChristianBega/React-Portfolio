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
  color: "var(--light-blue) !important",

  "&:hover": {
    color: "#fff !important",
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
      description: "A weather dashboard web application that retrieves and displays daily weather forecast.",
      longDescription:
        "The weather dashboard is a single-page react application that uses two 3rd party APIs. The first, Open Weather API, allows users to search for a city and retrieve weather forecast data. The second, Google Maps API, provides users with a google map of the city they searched...",
      videoDemo: WeatherDashboardVideo,
      link: "https://reactweatherdashboard.netlify.app/",
      repo: "https://github.com/ChristianBega/Weather-Dashboard",
      technology: ["React", "Javascript", "3rd Party API", "Tailwind"],
      // versionHistory : [{}] - pull in github api data to show commit history to show recent improvements.
      // more about the project - wire frames, figma designs, etc.
    },
    {
      name: "Golden Goose Finance",
      description: "A MERN full stack finance tracking web application that allows users monitor their bills, savings, and expenses.",
      longDescription:
        "Golden Goose Finance is MERN full stack single-page react application that offers users a simple user-friendly solution for tracking their finances. The backend built with express, node and mongo DB allows users to perform CRUD operations on their financial data. ",
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
          <Link sx={{ height: "80%" }} id={project.name} to="/project-page" state={{ project: project }}>
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
