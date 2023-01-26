import React from "react";
import { Container, ImageListItem, Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

import HtmlSvg from "./images/html.svg";
import GraphQlSvg from "./images/GraphQl.svg";
import MongoDBSvg from "./images/MongoDb.svg";
import ExpressSvg from "./images/Express.svg";
import NodeSvg from "./images/NodeJs.svg";
import ReactSvg from "./images/React.svg";
import JavaScriptSvg from "./images/JavaScript.svg";
import SequelizeSvg from "./images/Sequelize.svg";
import FigmaSvg from "./images/Figma.svg";
import GitHubSvg from "./images/GitHub.svg";
import MaterialUISvg from "./images/MaterialUI.svg";
import CssSvg from "./images/Css.svg";
import BootstrapSvg from "./images/BootStrap.svg";
const StyledSkillItem = styled(ImageListItem)({
  // backgroundColor: "var(--another-gray)",
  minWidth: "7rem",
  maxWidth: "8rem",
  maxHeight: "8rem",
  flex: "1",
  margin: "1rem",
  color: "#fff",
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  "&:hover": {
    scale: "1.2",
    transition: "all .3s ease-in-out",
  },
  objectFit: "cover",
});
function Skills() {
  return (
    <>
      <Container sx={{ minHeight: "85vh", maxWidth: "90vw", my: 5, display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {/* <StyledSkillItem>
          <img src={HtmlSvg} alt="" />
        </StyledSkillItem> */}
        <StyledSkillItem>
          <img src={ReactSvg} alt="" loading="lazy" />
        </StyledSkillItem>
        <StyledSkillItem>
          <img src={JavaScriptSvg} alt="" loading="lazy" />
        </StyledSkillItem>
        {/* <StyledSkillItem>
          <img src={FigmaSvg} alt="" loading="lazy" />
        </StyledSkillItem> */}
        <StyledSkillItem>
          <img src={GraphQlSvg} alt="" loading="lazy" />
        </StyledSkillItem>
        <StyledSkillItem>
          <img src={MongoDBSvg} alt="" loading="lazy" />
        </StyledSkillItem>
        <StyledSkillItem>
          <img src={ExpressSvg} alt="" loading="lazy" />
        </StyledSkillItem>
        <StyledSkillItem>
          <img src={MaterialUISvg} alt="" loading="lazy" />
        </StyledSkillItem>
        <StyledSkillItem>
          <img src={NodeSvg} alt="" loading="lazy" />
        </StyledSkillItem>
        {/* <StyledSkillItem>
          <img src={GitHubSvg} alt="" loading="lazy" />
        </StyledSkillItem> */}
        <StyledSkillItem>
          <img src={SequelizeSvg} alt="" loading="lazy" />
        </StyledSkillItem>
        {/* <StyledSkillItem>
          <img src={BootstrapSvg} alt="" />
        </StyledSkillItem> */}
        {/* <StyledSkillItem>
          <img src={CssSvg} alt="" />
        </StyledSkillItem> */}
      </Container>
    </>
  );
}

export default Skills;
{
  /* <section className="skillsSection">
  <h2 style={styles.h2}>Skills</h2>
  <div style={styles.skillsContainer} className="skillsContainer">
    <div style={styles.skillItem}>Html & Css</div>
    <div style={styles.skillItem}>mySQL</div>
    <div style={styles.skillItem}>Sequelize</div>
    <div style={styles.skillItem}>Javascript</div>
    <div style={styles.skillItem}>React</div>
    <div style={styles.skillItem}>Node</div>
    <div style={styles.skillItem}>Express</div>
    <div style={styles.skillItem}>Mongo DB</div>
    <div style={styles.skillItem}>Mongoose</div>
    <div style={styles.skillItem}>Graph Ql</div>
  </div>
</section>; */
}
