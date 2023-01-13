import React from "react";

const styles = {
  formContainer: {
    minHeight: "350px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    borderRadius: "5px",
    padding: "1.3rem",
    margin: "1.5rem",
    overflow: "hidden",
    boxShadow: "0px 0px 10px #000",
    backgroundColor: "var(--light-gray)",
  },
  h2: {
    textAlign: "center",
  },
};
function Contact() {
  return (
    <>
      <section className="contactSection">
        <h2 style={styles.h2}>
          Let's Chat! <span>Contact me below.</span>
        </h2>
        <form style={styles.formContainer}>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter name here" />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter email here" />
          <label for="contactMessage">Message:</label>
          <textarea name="contactMessage" id="contactMessage" placeholder="Inquiries"></textarea>
          <button className="formButton">Submit</button>
        </form>
        <div className="socialLinkContainer">Socials Here</div>
      </section>
    </>
  );
}

export default Contact;
