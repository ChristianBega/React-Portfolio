import React from "react";
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
    <>
      <section className="resumeSection" style={styles.resumeSection}>
        <button style={styles.resumeButton}>Download Resume</button>
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, necessitatibus aliquam error nam alias nihil eum dignissimos quas eos sequi
          assumenda, quasi dolor delectus iste iusto id dolores quis, fugiat harum veniam corporis recusandae maiores. Facere, asperiores earum! Iste
          maiores, atque eaque quod voluptatibus eius?
        </p>
        <h2>Eduction</h2>
        <p>Denver University / Junior Web Developer </p>
        <small>Student August 2022 - January 2023, Colorado</small>
        <p>Community College Of Aurora / Associates of General Studies</p>
        <small>August 2019 - March 2022, Colorado</small>
      </section>
    </>
  );
}

export default Resume;
