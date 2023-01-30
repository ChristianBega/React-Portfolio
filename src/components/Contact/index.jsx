import React from "react";
import { Container, Typography } from "@mui/material/";

import ContactForm from "../ContactForm";

function Contact() {
  return (
    <Container sx={{ minHeight: "85vh", my: 5, textAlign: "center" }}>
      <Typography component="h2" variant="h2" textAlign="center" mt={4}>
        Let's Chat!
        <Typography component="p" variant="h4" sx={{ fontSize: "2rem" }}>
          Contact me below.
        </Typography>
      </Typography>
      <ContactForm />
    </Container>
  );
}

export default Contact;
