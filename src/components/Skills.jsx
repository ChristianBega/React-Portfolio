import React from "react";
const styles = {
  skillsSection: {
    backgroundColor: "green",
    minHeight: "100vh",
  },
  skillItem: {},
  h2: {
    margin: "0",
  },
};
function Skills() {
  return (
    <>
      <section className="skillsSection" style={styles.skillsSection}>
        <h2 style={styles.h2}>Skills</h2>
        <div style={styles.skillsContainer} className="skillsContainer">
          <div className="skillItem">Html & Css</div>
          <div className="skillItem">Mongo DB</div>
          <div className="skillItem">Mongoose</div>
          <div className="skillItem">Graph Ql</div>
          <div className="skillItem">mySQL</div>
          <div className="skillItem">Sequelize</div>
          <div className="skillItem">Javascript</div>
          <div className="skillItem">React</div>
          <div className="skillItem">Node</div>
          <div className="skillItem">Express</div>
        </div>
      </section>
    </>
  );
}

export default Skills;
