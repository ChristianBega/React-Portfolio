import styled from "@emotion/styled";
import { Card, Typography, Link, CardContent, CardMedia, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
// import { Link } from "react-router-dom";
import cardImg from "../../images/news-menu-bg.png";
// import cardImg2 from "../../images/StudyBuddyApp.png";

const StyledProjectCard = styled(Card)({
  maxWidth: "25rem",
  marginBlock: "1.6rem",
});
const StyledLinkItem = styled(Paper)({
  fontWeight: "semibold",
  textDecoration: "none",
  cursor: "pointer",
  background: "lightgray",
});

function ProjectCards({ project }) {
  const { name, description, link, repo, image } = project;

  return (
    <StyledProjectCard>
      <CardMedia sx={{ height: 240 }} image={image} title="Project image" />
      <CardContent>
        <Typography component="h2" variant="h5">
          {name}
        </Typography>
        <Typography component="p">{description}</Typography>
        <Stack direction="row" spacing={3}>
          <StyledLinkItem>
            <a href={link}>Live Demo</a>
          </StyledLinkItem>
          <StyledLinkItem>
            <a href={repo}>Source Code</a>
          </StyledLinkItem>
        </Stack>
      </CardContent>
    </StyledProjectCard>
  );
}

export default ProjectCards;
{
  /* <div style={styles.card} className="card">
        <img style={styles.projectImg} src={image} alt="" />
        <div style={styles.cardText} className="cardText">
          <h3>{name}</h3>
          <span>{description}</span>
          <div className="linkWrapper">
            
          </div>
        </div>
      </div> */
}
