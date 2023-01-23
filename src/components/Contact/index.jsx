import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material/";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "Name here...",
    email: "Email here...",
    message: "Message here...",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Invalid Email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handled form", formState);
    }
  };

  return (
    <section className="contactSection" style={{ paddingInline: "2rem" }}>
      <h2 style={{ textAlign: "center", margin: "3rem" }}>
        Let's Chat! <span>Contact me below.</span>
      </h2>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, minWidth: "18rem", display: "flex", flexDirection: "column", alignContent: "center" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            style={{ marginTop: "3rem" }}
            sx={{
              label: { color: "white" },
              input: { color: "var(--lighter-medium-gray)" },
            }}
            id="name"
            label="Name"
            placeholder={name}
            onBlur={handleChange}
            variant="standard"
          />
          <TextField
            style={{ marginTop: "3rem" }}
            sx={{ label: { color: "white" }, input: { color: "var(--lighter-medium-gray)" } }}
            id="email"
            label="Email"
            placeholder={email}
            onBlur={handleChange}
            variant="standard"
          />
          <TextField
            style={{ marginTop: "3rem" }}
            sx={{ label: { color: "white" }, input: { color: "var(--lighter-medium-gray)" } }}
            id="contactMessage"
            label="Leave a message here"
            placeholder={message}
            onBlur={handleChange}
            variant="standard"
          />
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </Box>
      <Box textAlign="center">
        <Button variant="contained">Submit</Button>
      </Box>
    </section>
  );
}

export default Contact;
