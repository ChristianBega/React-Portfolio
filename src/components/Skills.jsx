import React from "react";
const styles = {
  skillsSection: {
    minHeight: "86vh",
  },
  skillsContainer: {
    padding: "1rem 0.5rem",
    display: "flex",
    gap: "1rem",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  skillItem: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "var(--dark-bg)",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  h2: {
    textAlign: "center",
  },
};
function Skills() {
  return (
    <>
      <section className="skillsSection" style={styles.skillsSection}>
        <h2 style={styles.h2}>Skills</h2>
        <div style={styles.skillsContainer} className="skillsContainer">
          <div style={styles.skillItem}>Html & Css</div>
          <div style={styles.skillItem}>Mongo DB</div>
          <div style={styles.skillItem}>Mongoose</div>
          <div style={styles.skillItem}>Graph Ql</div>
          <div style={styles.skillItem}>mySQL</div>
          <div style={styles.skillItem}>Sequelize</div>
          <div style={styles.skillItem}>Javascript</div>
          <div style={styles.skillItem}>React</div>
          <div style={styles.skillItem}>Node</div>
          <div style={styles.skillItem}>Express</div>
        </div>
      </section>
    </>
  );
}

export default Skills;
