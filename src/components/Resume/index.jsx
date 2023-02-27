import React from "react";
import { Box, Button, Container, ImageList, ImageListItem, Typography } from "@mui/material/";
import CssImg from "../../Assets/images/skills/Css.svg";
import HtmlImg from "../../Assets/images/skills/Html.svg";

import ExpressImg from "../../Assets/images/skills/Express.svg";
import BootStrapImg from "../../Assets/images/skills/BootStrap.svg";
import GitHubImg from "../../Assets/images/skills/GitHub.svg";
import JavaScriptImg from "../../Assets/images/skills/JavaScript.svg";
import ReactImg from "../../Assets/images/skills/React.svg";
import NodeJsImg from "../../Assets/images/skills/NodeJs.svg";
import MongoDBImg from "../../Assets/images/skills/MongoDB.svg";
import MySQLImg from "../../Assets/images/skills/mySQL.svg";
import styled from "@emotion/styled";

const experienceData = [
  {
    projectName: "Study Buddies",
    demoLink: "https://studybuddiezzz.herokuapp.com/",
    accomplishments: [
      "Developed a full stack study productivity web application that allows users to easily organize and access their coding resources.",
      "Applied the MVC software architecture pattern to develop and construct a REST API which uses a mySQL relational database paired with Sequelize ORM.",
    ],
    technology: ["JavaScript", "JQuery", "Handlebars", "Express", "Node", "mySQL", "Sequelize ORM"],
  },
  {
    projectName: "Financial Tracker",
    demoLink: "https://golden-goose-finance.herokuapp.com/",
    accomplishments: [
      "Created a MERN full stack finance tracker that provides users the ability to monitor their spending habits.",
      "Provided assistance to back-end development by designing models, resolvers, and typeDefs for REST API.",
      "Additionally, led the integration of a REST API to React front end, utilizing GraphQL queries and mutations. ",
    ],
    technology: ["React", "MongoDB", "Node", "Express", "Graph Ql", "Material UI"],
  },
  {
    projectName: "Weather Dashboard",
    demoLink: "https://reactweatherdashboard.netlify.app/",
    accomplishments: [
      "Constructed a single page application which uses Open Weather Api to retrieve and display weather forecasts.",
      "Built a weather dashboard and recently refactored with React and Tailwind.",
      "Included progressive web app services workers to offer offline and downloadable features.",
    ],
    technology: ["JavaScript", "JQuery", "3rd party APIs", "Bootstrap"],
  },
  {
    projectName: "Hangry",
    demoLink: "https://mandiebot.github.io/Hangry/",
    accomplishments: [
      "Implemented Edamam recipe search API to create a web application that displays recipe inspiration personalized by dietary & nutritional search filters.",
      "Played a key role in leading research and integration of 3rd party API, correctly fetching data and dynamic displaying it back to the user.",
    ],
    technology: ["JavaScript", "JQuery", "3rd party APIs", "Bootstrap"],
  },
];
const skillsData = [
  {
    skillName: "HTML 5",
    skillImg: HtmlImg,
  },
  {
    skillName: "CSS 3",
    skillImg: CssImg,
  },
  {
    skillName: "BootStrap",
    skillImg: BootStrapImg,
  },
  {
    skillName: "Express",
    skillImg: ExpressImg,
  },
  {
    skillName: "Git version control",
    skillImg: GitHubImg,
  },
  {
    skillName: "Javascript",
    skillImg: JavaScriptImg,
  },
  {
    skillName: "React",
    skillImg: ReactImg,
  },
  {
    skillName: "Node JS",
    skillImg: NodeJsImg,
  },
  {
    skillName: "MongoDB",
    skillImg: MongoDBImg,
  },
  {
    skillName: "mySQL",
    skillImg: MySQLImg,
  },
];

const StyledButton = styled(Button)({
  backgroundColor: "var(--light-blue) !important",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    boxShadow: "0px 0px 20px 4px rgba(67, 67, 71, 0.6)",
    transform: "scale(1.1)",
    transition: ".2s",
  },
});

export default function Resume() {
  return (
    <Container maxWidth="lg">
      {/* Resume button */}
      <Box textAlign="center" marginTop="2rem">
        <StyledButton variant="contained">
          <a
            className="resumeButton"
            href="https://drive.google.com/file/d/1-WQoVHOrq66Bvrxsng9jAARhzWwAEK19/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </StyledButton>
      </Box>
      {/* Summary section */}
      <Box marginTop="3rem" textAlign="center" sx={{ maxWidth: "650px", marginX: "auto" }}>
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700", letterSpacing: ".1rem" }}>
          Summary
        </Typography>
        <Typography variant="p" component="p" sx={{ lineHeight: "1.2rem", fontSize: { md: "18px" } }}>
          A dynamic, detail-oriented Web Developer with a year of experience developing fully responsive, user-friendly, single-page applications.
          Capable of applying agile methodologies to design, develop, and implement features and improvements that support user interface concepts.
          Adept ability to communicate and collaborate with different teams of developers to produce a minimum viable product and fulfill project
          deadlines.
        </Typography>
      </Box>
      {/* Skills section */}
      <Box marginY="3rem" textAlign="center">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700", letterSpacing: ".1rem" }}>
          Skills
        </Typography>
        <ImageList
          sx={{ minWidth: "340px", minHeight: "128px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}
          cols={3}
          rowHeight={64}
        >
          {skillsData.map((skill, index) => (
            <ImageListItem sx={{ width: "64px", height: "64px" }} key={index}>
              <img
                src={`${skill.skillImg}?w=64&h=64&fit=crop&auto=format`}
                srcSet={`${skill.skillImg}?w=64&h=64&fit=crop&auto=format&dpr=2 2x`}
                alt={skill.skillName}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {/* <Box marginTop="2rem">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700", letterSpacing: ".1rem", textAlign: "center" }}>
          Experience
        </Typography>
        <Box>
          {experienceData.map((experience, index) => (
            <Box key={index}>
              <Typography variant="h6" component="h3" mb={2}>
                {experience.projectName} |
                <span>
                  <a href={experience.demoLink} target="_blank" rel="noreferrer">
                    &nbsp;Demo
                  </a>
                </span>
              </Typography>
              <Box style={{ color: "var(--medium-gray)" }}>
                <Typography variant="p" component="p" marginBottom="1rem">
                  <Typography component="p" variant="p" sx={{ color: "#fff", mb: ".5rem" }}>
                    Summary:
                  </Typography>
                  {experience.accomplishments[0]}
                </Typography>
                <Typography variant="p" component="p" marginBottom="1rem">
                  <Typography component="p" variant="p" sx={{ color: "#fff", mb: ".5rem" }}>
                    Role:
                  </Typography>
                  {experience.accomplishments[1]}
                </Typography>
                {experience.accomplishments[2] && (
                  <Typography variant="p" component="p" marginBottom="1rem">
                    {experience.accomplishments[2]}
                  </Typography>
                )}
                <Typography variant="p" component="p" marginBottom="1rem">
                  <Typography component="p" variant="p" sx={{ color: "#fff", mb: ".5rem" }}>
                    Technology:
                  </Typography>
                  {experience.technology.map((test, index) => (
                    <small key={index}> {test}, </small>
                  ))}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box> */}
      {/* Eduction Section */}
      <Box marginTop="2rem" sx={{ maxWidth: "650px", marginX: "auto" }}>
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700", letterSpacing: ".1rem", textAlign: "center" }}>
          Eduction
        </Typography>
        <Box>
          <Typography display="flex" justifyContent="space-between" variant="p" component="p" mb={1} color="#fff" sx={{ fontSize: { md: "18px" } }}>
            Denver University
            <Typography variant="" component="small" sx={{ md: "110%" }}>
              January 2023
            </Typography>
          </Typography>
          <Typography variant="" component="small" sx={{ md: "110%" }}>
            Full Stack Web Development Boot Camp
          </Typography>
        </Box>
        <Box mt="1rem">
          <Typography display="flex" justifyContent="space-between" variant="p" component="p" mb={1} color="#fff" sx={{ fontSize: { md: "18px" } }}>
            Community College of Aurora
            <Typography variant="" component="small" sx={{ md: "110%" }}>
              March 2022
            </Typography>
          </Typography>
          <Typography variant="" component="small" sx={{ md: "110%" }}>
            Associates of General Studies
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
