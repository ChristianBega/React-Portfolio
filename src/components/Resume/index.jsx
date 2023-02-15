import React from "react";
import { Box, Button, Typography, List } from "@mui/material/";
import { Container } from "@mui/system";

function Resume() {
  return (
    <Container sx={{ minHeight: "85vh", my: 5 }}>
      {/* Resume button */}
      <Box textAlign="center" marginTop="2rem">
        <Button variant="contained">
          <a className="resumeButton" href="https://drive.google.com/file/d/1EWKWdADy6-VGt00r396ispcyx2H2ElWB/view" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </Button>
      </Box>
      {/* Summary section */}
      <Box marginTop="2rem">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700" }}>
          Summary
        </Typography>
        <Typography variant="p" component="p">
          I’m a Junior MERN full-stack web developer graduate from Denver University. While at Denver University, I had the opportunity to collaborate
          with different teams of developers to plan, build, and deploy applications that solved real-world problems.
        </Typography>
      </Box>
      {/* Skills section */}

      <Box marginTop="2rem">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700" }}>
          Experience
        </Typography>
        <Box>
          <Typography variant="h6" component="h3">
            Study Buddies |
            <span>
              <a href="https://studybuddiezzz.herokuapp.com/" target="_blank" rel="noreferrer">
                &nbsp;Demo
              </a>
            </span>
          </Typography>

          <List style={{ color: "var(--medium-gray)" }}>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Applied MVC software architecture patterns to construct an API that served as the backend to a productivity study web application.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Developed MySQL database to store user data, skillfully utilizing Sequelize ORM to build out models, views, and controllers.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Technology : JavaScript, JQuery, Handlebars, Express, Node, and mySQL
            </Typography>
          </List>
        </Box>
        <Box>
          <Typography variant="h6" component="h3">
            Financial Tracker |
            <span>
              <a href="https://golden-goose-finance.herokuapp.com/" target="_blank" rel="noreferrer">
                &nbsp;Demo
              </a>
            </span>
          </Typography>

          <List style={{ color: "var(--medium-gray)" }}>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Utilized React and Material UI to develop and deploy a finance tracker web application linked to a MongoDD database.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Contributed to front end UI/UX wireframing & design, as well as employing queries & mutations to regulate data.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Provided additional assistance to the back end by debugging, troubleshooting, and testing.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Technology : React, MongoDB, Node, Express, Graph Ql, Material UI
            </Typography>
          </List>
        </Box>
        <Box>
          <Typography variant="h6" component="h3">
            Hangry |
            <span>
              <a href="https://mandiebot.github.io/Hangry/" target="_blank" rel="noreferrer">
                &nbsp;Demo
              </a>
            </span>
          </Typography>

          <List style={{ color: "var(--medium-gray)" }}>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Implemented Edamam recipe search API to create a web application that displays recipe inspiration personalized by dietary & nutritional
              search filters.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Played a key role in leading research and integration of 3rd party API, correctly fetching data and dynamic displaying it back to the
              user.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Technology : JavaScript , JQuery , Fetching APIs , and BootstrapI
            </Typography>
          </List>
        </Box>
      </Box>
      <Box marginTop="2rem">
        <Typography variant="h4" component="h2" marginBottom="1rem" sx={{ fontWeight: "700" }}>
          Eduction
        </Typography>
        <Box>
          <Typography display="flex" justifyContent="space-between" variant="" component="p">
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
          <Typography display="flex" justifyContent="space-between" variant="" component="p">
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
    </Container>
  );
}

export default Resume;
