import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import BackHome from "../components/Buttons/backHome.component";
import Project from "../components/Project/project.component";

export default function ProjectPage() {
  const location = useLocation();
  const currentProject = location.state?.project;
  const previousPath = location.state?.prevPath;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {previousPath === "/" ? <BackHome buttonType="back" /> : <BackHome buttonType="projectPage" />}
        <Project currentProject={currentProject} />
      </Container>
      <Footer />
    </>
  );
}
