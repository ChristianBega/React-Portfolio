import { Box, Button, Grid, styled } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import FinancialTrackerVideo from "../Assets/videos/GoldenGooseFianceDemo.mp4";
import StudyAppImg from "../Assets/videos/StudyBuddiesDemo.mp4";
import WeatherDashboardVideo from "../Assets/videos/WeatherDashboardDemo-Mobile.mp4";
import HangryVideo from "../Assets/videos/HangryDemo.mp4";

import ProjectCard from "../components/ProjectCards";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { transition1 } from "../transitions";
import { motion } from "framer-motion";
// import styled from "@emotion/styled";
const StyledButton = styled(Button)(({ theme }) => ({
  color: "var(--light-blue) !important",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
  fontSize: "16px",
  [theme.breakpoints.up("md")]: {
    fontSize: "115%",
  },
}));

export default function ProjectCardsPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/resume", { replace: true }), [navigate]);

  const [projects] = useState([
    {
      name: "React Weather Dashboard",
      description: "A weather dashboard web application that retrieves and displays daily weather forecast.",
      longDescription:
        "This weather dashboard is a React single-page application that utilizes 3rd Party APIs to fetch and retrieve weather forecast data. The Open Weather API allows users to search for a city and retrieve weather forecast data. The Google Maps API then takes the city's coordinates and displays a map of that city. The overall goal of this project was to create a simple and user-friendly application that allowed users to quickly and easily search for a city and view its current weather conditions.",
      videoDemo: WeatherDashboardVideo,
      link: "https://reactweatherdashboard.netlify.app/",
      repo: "https://github.com/ChristianBega/Weather-Dashboard",
      technology: ["React", "Javascript", "3rd Party API", "Tailwind", "Local Storage"],
      // versionHistory : [{}] - pull in github api data to show commit history to show recent improvements.
      // more about the project - wire frames, figma designs, etc.
    },
    {
      name: "Golden Goose Finance",
      description: "A MERN full stack finance tracking web application that allows users monitor their bills, savings, and expenses.",
      longDescription:
        "Golden Goose Finance is a full-stack MERN web application that provides users with an intuitive and user-friendly solution for tracking their finances. The application is built with MongoDB, Express, Node.js, React, and Material UI, allowing users to track their expenses, savings, and bills in an organized manner. Additionally, users can view their financial data through charts and graphs to gain insight into their financial habits.",
      videoDemo: FinancialTrackerVideo,
      link: "https://golden-goose-finance.herokuapp.com/",
      repo: "https://github.com/ChristianBega/Golden-Goose-Finance",
      technology: ["React", "Javascript", "MongoDB", "Express", "Node", "Material UI", "Mongoose ODM", "JSON web tokens"],
    },

    {
      name: "Study Buddies",
      description: "A full stack application that serves as a study productivity aid to help manage and access coding resources.",
      longDescription:
        "Study Buddies is a full stack web application that gives users an efficient and convenient way to manage and access their coding resources. The backend API, built with a MySQL relational database, allows users to perform Create, Read, Update, and Delete (CRUD) operations on their resources. Our goal with Study Buddies is to help users maximize their study productivity by creating a single reference for all their coding resources.",
      videoDemo: StudyAppImg,
      link: "https://studybuddiezzz.herokuapp.com/",
      repo: "https://github.com/JerimiahK/studyBuddies",
      technology: ["Handle Bars", "Javascript", "mySQL", "Express", "Node", "Boot Strap"],
    },
    {
      name: "Hangry",
      description: "A food recipe application that provides users with recipes personalized by their dietary and nutritional search filters. ",
      // React- based,
      longDescription:
        "Hangry is a mobile-first web application that uses the Edamam Food Search Recipe 3rd party API to give users tailored recipe recommendations based on their dietary and nutritional preferences. Every recipe comes with comprehensive nutritional data, allowing users to make informed food choices.",
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
      <Grid
        component={motion.div}
        initial={{ opacity: 0, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}
        container
        maxWidth="lg"
        marginX={{ lg: "auto" }}
        spacing={{ xs: 2, md: 3 }}
        sx={{ minHeight: "100vh", padding: 2 }}
      >
        {/* <Projects /> */}
        {/* map over all project and create cards */}
        {projects.map((project, i) => (
          <Grid
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Link id={project.name} to="/project-page" state={{ project: project }}>
              <ProjectCard project={project} key={"project" + i} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" marginY={5}>
        <StyledButton onClick={handleOnClick}>
          View my resume <AiOutlineArrowRight />
        </StyledButton>
      </Box>
    </>
  );
}
