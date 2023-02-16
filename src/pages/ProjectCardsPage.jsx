import { Box, Button, Container } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import FinancialTrackerImg from "../Assets/images/FinaicalTracker.png";
import StudyAppImg from "../Assets/images/StudyBuddyApp.png";
import WeatherDashboardVideo from "../Assets/videos/WeatherDashboardDemo-Mobile.mp4";
import HangryImg from "../Assets/images/Hangry.PNG";

import ProjectCard from "../components/ProjectCards";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function ProjectCardsPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/resume", { replace: true }), [navigate]);

  const [projects] = useState([
    {
      name: "React Weather Dashboard",
      description: "A weather dashboard utilizing Open weather api to display daily weather forecast.",
      image: WeatherDashboardVideo,
      link: "https://reactweatherdashboard.netlify.app/",
      repo: "https://github.com/ChristianBega/Weather-Dashboard",
    },
    {
      name: "Financial Tracker",
      description: "A MERN full stack application that allows users track bills, savings, and expenses.",
      image: FinancialTrackerImg,
      link: "https://golden-goose-finance.herokuapp.com/",
      repo: "https://github.com/ChristianBega/Golden-Goose-Finance",
    },

    {
      name: "Study Buddies",
      description: "A full stack application that serves as a study productivity aid.",
      image: StudyAppImg,
      link: "https://studybuddiezzz.herokuapp.com/",
      repo: "https://github.com/JerimiahK/studyBuddies",
    },
    {
      name: "Hangry",
      description: "A food recipe application that provides users with recipes personalized by their dietary and nutritional search filters. ",
      image: HangryImg,
      link: "https://mandiebot.github.io/Hangry/",
      repo: "https://github.com/ChristianBega/Hangry",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container sx={{ minHeight: "85vh", mt: 5, display: "grid", gap: "2rem", justifyContent: "center" }}>
      {/* <Projects /> */}
      {/* map over all project and create cards */}
      {projects.map((project, i) => (
        <ProjectCard project={project} key={"project" + i} />
      ))}
      <Box textAlign="center" marginY={0}>
        <Button onClick={handleOnClick}>
          View my resume <AiOutlineArrowRight />
        </Button>
      </Box>
      ;
    </Container>
  );
}
