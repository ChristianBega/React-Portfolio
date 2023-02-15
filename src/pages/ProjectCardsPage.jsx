import { Box, Button, Container } from "@mui/material";
import React, { useCallback, useState } from "react";
import NewHomePageImg from "../Assets/images/news-menu-bg.png";
import FinancialTrackerImg from "../Assets/images/FinaicalTracker.png";
import StudyAppImg from "../Assets/images/StudyBuddyApp.png";
import ProjectCard from "../components/ProjectCards";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function ProjectCardsPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/resume", { replace: true }), [navigate]);

  const [projects] = useState([
    {
      name: "Financial Tracker",
      description: "A MERN full stack application that allows users track bills, savings, and expenses.",
      image: FinancialTrackerImg,
      link: "https://golden-goose-finance.herokuapp.com/",
      repo: "https://github.com/edyta0106/Financial_Tracker",
    },
    {
      name: "Study Buddies",
      description: "A full stack application that serves as a study productivity aid.",
      image: StudyAppImg,
      link: "https://studybuddiezzz.herokuapp.com/",
      repo: "https://github.com/JerimiahK/studyBuddies",
    },
    {
      name: "News Home Page",
      description: "HTML and CSS New Landing Page.",
      image: NewHomePageImg,
      link: "https://t3mpz.github.io/news-homepage-main/",
      repo: "https://github.com/T3mpz/news-homepage-main",
    },
  ]);
  return (
    <Container sx={{ minHeight: "85vh", mt: 5, display: "grid", gap: "2rem" }}>
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
