import React from "react";
import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material/";
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

const experienceData = [
  {
    projectName: "Study Buddies",
    demoLink: "https://studybuddiezzz.herokuapp.com/",
    accomplishments: [
      "Applied MVC software architecture patterns to construct an API that served as the backend to a productivity study web application.",
      "Developed MySQL database to store user data, skillfully utilizing Sequelize ORM to build out models, views, and controllers.",
    ],
    technology: ["JavaScript", "JQuery", "Handlebars", "Express", "Node", "mySQL"],
  },
  {
    projectName: "Financial Tracker",
    demoLink: "https://golden-goose-finance.herokuapp.com/",
    accomplishments: [
      "Utilized React and Material UI to develop and deploy a finance tracker web application linked to a MongoDB database.",
      "Contributed to front end UI/UX wireframing & design, as well as employing queries & mutations to regulate data.",
      "Provided additional assistance to the back end by debugging, troubleshooting, and testing.",
    ],
    technology: ["React", "MongoDB", "Node", "Express", "Graph Ql", "Material UI"],
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

export default function Resume() {
  return (
    <>
      {/* Resume button */}
      <Box textAlign="center" marginTop="2rem">
        <Button variant="contained">
          <a className="resumeButton" href="https://drive.google.com/file/d/1EWKWdADy6-VGt00r396ispcyx2H2ElWB/view" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </Button>
      </Box>
      {/* Summary section */}
      <Box marginTop="3rem" textAlign="center">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700", letterSpacing: ".1rem" }}>
          Summary
        </Typography>
        <Typography variant="p" component="p" sx={{ lineHeight: "1.2rem" }}>
          {/* I’m a MERN full-stack web developer graduate from Denver University. While at Denver University, I had the opportunity to collaborate with different teams of developers to plan, build, and deploy applications using agile methodology's to solve real-world problems. */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem molestiae tempora quo nobis quod modi nemo non tempore. Voluptatem in
          quod, iste perspiciatis quo doloribus facere odit quibusdam quas id enim dolores nemo itaque. Vero, consequuntur! Eius voluptatum repellat,
          labore est ducimus a nostrum ab consequuntur porro accusantium quisquam?
        </Typography>
      </Box>
      {/* Skills section */}
      <Box marginY="3rem" textAlign="center">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700", letterSpacing: ".1rem" }}>
          Skills
        </Typography>
        <ImageList
          sx={{ minWidth: "375px", minHeight: "128px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}
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
      {/* Experience Section */}
      <Box marginTop="2rem">
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
      </Box>
      {/* Eduction Section */}
      <Box marginTop="2rem">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700", letterSpacing: ".1rem", textAlign: "center" }}>
          Eduction
        </Typography>
        <Box>
          <Typography display="flex" justifyContent="space-between" variant="p" component="p" mb={1} color="#fff">
            Denver University
            <Typography variant="" component="small">
              January 2023
            </Typography>
          </Typography>
          <Typography variant="" component="small">
            Full Stack Web Development Boot Camp
          </Typography>
        </Box>
        <Box mt="1rem">
          <Typography display="flex" justifyContent="space-between" variant="p" component="p" mb={1} color="#fff">
            Community College of Aurora
            <Typography variant="" component="small">
              March 2022
            </Typography>
          </Typography>
          <Typography variant="" component="small">
            Associates of General Studies
          </Typography>
        </Box>
      </Box>
    </>
  );
}
