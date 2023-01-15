import React from "react";
import { Box, Button, TextField } from "@mui/material/";

function Contact() {
  return (
    <section className="contactSection" style={{ paddingInline: "2rem" }}>
      <h2 style={{ textAlign: "center", margin: "3rem" }}>
        Let's Chat! <span>Contact me below.</span>
      </h2>
      <Box
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
            defaultValue="Name here..."
            variant="standard"
          />
          <TextField
            style={{ marginTop: "3rem" }}
            sx={{ label: { color: "white" }, input: { color: "var(--lighter-medium-gray)" } }}
            id="email"
            label="Email"
            defaultValue="Email here..."
            variant="standard"
          />
          <TextField
            style={{ marginTop: "3rem" }}
            sx={{ label: { color: "white" }, input: { color: "var(--lighter-medium-gray)" } }}
            id="contactMessage"
            label="Leave a message here"
            defaultValue="Questions here..."
            variant="standard"
          />
        </div>
      </Box>
      <Box textAlign="center">
        <Button variant="contained">Submit</Button>
      </Box>
    </section>
  );
}

export default Contact;
