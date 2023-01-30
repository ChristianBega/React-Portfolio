import React from "react";
import { Box, Button, Typography, List, ListItem } from "@mui/material/";
import { Container } from "@mui/system";

const styles = {
  resumeSection: {
    padding: "1rem",
  },
  resumeButton: {
    display: "flex",
    margin: "1rem auto",
  },
};
function Resume() {
  return (
    <Container sx={{ minHeight: "85vh", mt: 5 }}>
      <Box textAlign="center" marginTop="2rem">
        <Button variant="contained">
          <a className="resumeButton" href="https://drive.google.com/file/d/1EWKWdADy6-VGt00r396ispcyx2H2ElWB/view" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </Button>
      </Box>

      <Box marginTop="2rem">
        <Typography variant="h4" component="h1" marginBottom="1rem">
          Experience
        </Typography>
        <Box>
          <Typography variant="h6" component="p" style={{ color: "#fff" }}>
            Project #1
          </Typography>
          <List style={{ color: "var(--medium-gray)" }}>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corporis commodi veritatis corrupti minima maxime.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corporis commodi veritatis corrupti minima maxime.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corporis commodi veritatis corrupti minima maxime.
            </Typography>
          </List>
        </Box>
        <Box>
          <Typography variant="h6" component="p" style={{ color: "#fff" }}>
            Project #2
          </Typography>
          <List style={{ color: "var(--medium-gray)" }}>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corporis commodi veritatis corrupti minima maxime.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corporis commodi veritatis corrupti minima maxime.
            </Typography>
            <Typography variant="" component="li" marginBottom="1rem" marginLeft=".6rem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corporis commodi veritatis corrupti minima maxime.
            </Typography>
          </List>
        </Box>
      </Box>
      <Box marginTop="2rem">
        <Typography variant="h4" component="h1" marginBottom="1rem">
          Eduction
        </Typography>
        <Typography variant="" component="p">
          Denver University / Junior Web Developer
        </Typography>
        <Typography variant="" component="small">
          Student August 2022 - January 2023, Colorado
        </Typography>
        <Typography variant="" component="p" marginTop="2rem">
          Community College Of Aurora / A.G.S
        </Typography>
        <Typography variant="" component="small">
          August 2019 - March 2022, Colorado
        </Typography>
      </Box>
    </Container>
  );
}

export default Resume;
