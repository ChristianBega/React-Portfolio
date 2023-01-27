import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material/";
import { validateEmail } from "../../utils/helpers";
import styled from "@emotion/styled";

const choices = [
  {
    label: "Regarding an open position",
  },
  {
    label: "Regarding collaborating on a project",
  },
  {
    label: "Curious about a project",
  },
  {
    label: "other (specify in details)",
  },
];

// const StyledTextField = styled(TextField)({
//   border: "1px solid red",
//   "&:active": { border: "1px solid orange" },
// });

function Contact() {
  const [formState, setFormState] = useState({
    name: "Name here...",
    email: "Email here...",
    message: "Message here...",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // const { name, email, message } = formState;

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
  //name
  //email
  //company
  //reason - , , ,
  // message

  return (
    <section className="contactSection" style={{ paddingInline: "2rem" }}>
      <h2 style={{ textAlign: "center", margin: "3rem" }}></h2>
      <Typography component="h2" variant="h2" textAlign="center">
        Let's Chat!{" "}
        <Typography component="p" variant="h4" sx={{ fontSize: "2rem" }}>
          Contact me below.
        </Typography>
      </Typography>
      <Box component="form">
        <TextField
          required
          // style={{ marginTop: "3rem" }}
          sx={{
            label: { color: "white" },
            input: { color: "var(--lighter-medium-gray)" },
          }}
          id="name"
          label="Name "
          variant="filled"
          onBlur={handleChange}
        />
        <TextField
          required
          // style={{ marginTop: "3rem" }}
          sx={{
            label: { color: "white" },
            input: { color: "var(--lighter-medium-gray)" },
          }}
          id="email"
          label="Email "
          variant="filled"
          onBlur={handleChange}
        />
        <TextField
          required
          // style={{ marginTop: "3rem" }}
          sx={{
            label: { color: "white" },
            input: { color: "var(--lighter-medium-gray)" },
          }}
          id="company"
          label="Company "
          variant="filled"
          onBlur={handleChange}
        />
        <TextField
          required
          // style={{ marginTop: "3rem" }}
          sx={{
            label: { color: "white" },
            input: { color: "var(--lighter-medium-gray)" },
          }}
          id="company"
          label="Company "
          variant="filled"
          onBlur={handleChange}
        />

        <TextField select id="Reason" helperText="Please select an option">
          {choices.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <StyledTextField></StyledTextField>
      </Box>

      <Box textAlign="center">
        <Button variant="contained">Submit</Button>
      </Box>
    </section>
  );
}

export default Contact;
//  <Box
//    onSubmit={handleSubmit}
//    component="form"
//    sx={{
//      "& .MuiTextField-root": { m: 2, minWidth: "18rem", display: "flex", flexDirection: "column", alignContent: "center" },
//    }}
//    noValidate
//    autoComplete="off"
//  >
//    <TextField
//      style={{ marginTop: "3rem" }}
//      sx={{
//        label: { color: "white" },
//        input: { color: "var(--lighter-medium-gray)" },
//      }}
//      id="name"
//      label="Name"
//      placeholder={name}
//      onBlur={handleChange}
//      variant="standard"
//    />
//    <TextField
//      style={{ marginTop: "3rem" }}
//      sx={{ label: { color: "white" }, input: { color: "var(--lighter-medium-gray)" } }}
//      id="email"
//      label="Email"
//      placeholder={email}
//      onBlur={handleChange}
//      variant="standard"
//    />
//    <TextField
//      style={{ marginTop: "3rem" }}
//      sx={{ label: { color: "white" }, input: { color: "var(--lighter-medium-gray)" } }}
//      id="contactMessage"
//      label="Leave a message here"
//      placeholder={message}
//      onBlur={handleChange}
//      variant="standard"
//    />

//    {errorMessage && (
//      <div>
//        <p>{errorMessage}</p>
//      </div>
//    )}
//  </Box>;
