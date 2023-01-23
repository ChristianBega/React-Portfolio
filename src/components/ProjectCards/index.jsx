import React from "react";
import cardImg from "../../images/news-menu-bg.png";
// import cardImg2 from "../../images/StudyBuddyApp.png";

const styles = {
  card: {
    minHeight: "25rem",
    width: "clamp(15vw, 21em, 100vw)",
    margin: "1.5rem auto",
  },
  projectImg: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderTopLeftRadius: "0.3rem",
    borderTopRightRadius: "0.3rem",
  },
  cardText: {
    display: "flex",
    gap: ".8rem",
    flexDirection: "column",
    backgroundColor: "var(--dark-bg)",
    padding: "1.5rem .8rem",
  },
  marginLeft: {
    marginLeft: "1rem",
  },
};
function ProjectCards({ project }) {
  const { name, description, link, repo, image } = project;

  return (
    <>
      <div style={styles.card} className="card">
        <img style={styles.projectImg} src={image} alt="" />
        <div style={styles.cardText} className="cardText">
          <h3>{name}</h3>
          <span>{description}</span>
          <div className="linkWrapper">
            <a href={link}>Live Demo</a>
            <a style={styles.marginLeft} href={repo}>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
