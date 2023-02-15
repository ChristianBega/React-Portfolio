// import React, { useState } from "react";
// import ProjectCard from "../ProjectCards";
// import NewHomePageImg from "../ProjectCards/images/news-menu-bg.png";
// import FinancialTrackerImg from "../ProjectCards/images/FinaicalTracker.png";
// import StudyAppImg from "../ProjectCards/images/StudyBuddyApp.png";

// import { Container } from "@mui/material";
// import styled from "@emotion/styled";

// const StyledContainer = styled(Container)({
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center",
// });

// function Projects() {
//   const [projects] = useState([
//     {
//       name: "Financial Tracker",
//       description: "A MERN full stack application that allows users track bills, savings, and expenses.",
//       image: FinancialTrackerImg,
//       link: "https://golden-goose-finance.herokuapp.com/",
//       repo: "https://github.com/edyta0106/Financial_Tracker",
//     },
//     {
//       name: "Study Buddies",
//       description: "A full stack application that serves as a study productivity aid.",
//       image: StudyAppImg,
//       link: "https://studybuddiezzz.herokuapp.com/",
//       repo: "https://github.com/JerimiahK/studyBuddies",
//     },
//     {
//       name: "News Home Page",
//       description: "HTML and CSS New Landing Page.",
//       image: NewHomePageImg,
//       link: "https://t3mpz.github.io/news-homepage-main/",
//       repo: "https://github.com/T3mpz/news-homepage-main",
//     },
//     // {
//     //   name: "News Home Page",
//     //   description: "LoremLoremLorem",
//     //   image: cardImg,
//     //   link: "https://t3mpz.github.io/news-homepage-main/",
//     //   repo: "https://github.com/T3mpz/news-homepage-main",
//     // },
//   ]);
//   return (
//     <>
//       <StyledContainer>
//         {projects.map((project, i) => (
//           <ProjectCard project={project} key={"project" + i} />
//         ))}
//       </StyledContainer>
//     </>
//   );
// }

// export default Projects;
