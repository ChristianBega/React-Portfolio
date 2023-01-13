import React from "react";
import cardImg from "../../images/news-menu-bg.png";
import cardImg2 from "../../images/StudyBuddyApp.png";

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
function ProjectCards() {
  return (
    <>
      <div style={styles.card} className="card">
        <img style={styles.projectImg} src={cardImg} alt="" />
        <div style={styles.cardText} className="cardText">
          <h3>News Home Page</h3>
          <span>Technologies</span>
          <div className="linkWrapper">
            <a href="https://t3mpz.github.io/news-homepage-main/">Live Demo</a>
            <a style={styles.marginLeft} href="https://github.com/T3mpz/news-homepage-main">
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div style={styles.card} className="card">
        <img style={styles.projectImg} src={cardImg2} alt="" />
        <div style={styles.cardText} className="cardText">
          <h3>Study Buddies</h3>
          <span>Technologies</span>
          <div className="linkWrapper">
            <a href="https://studybuddiezzz.herokuapp.com/">Live Demo</a>
            <a style={styles.marginLeft} href="https://github.com/JerimiahK/studyBuddies">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
