import styled from "@emotion/styled";
import { Box, Container, TextField, Input } from "@mui/material";
import React from "react";
import { useFormContext, Controller, useForm } from "react-hook-form";
// import { Input } from "@material-ui/core";

const StyledTextField = styled(TextField)({
  // border: "1px solid red",
  "&:active": { border: "1px solid orange" },
});
function ContactForm() {
  const { control, handleSubmit } = useForm();
  const formContext = useFormContext();
  console.log(formContext);
  return (
    <Container sx={{ minHeight: "85vh", mt: 5, textAlign: "center" }}>
      <Box component="form">
        <Controller
          render={({ field }) => <StyledTextField label="Name " {...field} />}
          name="name"
          variant="filled"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
        {/* Controller */}
        {/* Text field */}
      </Box>
    </Container>
  );
}

export default ContactForm;
{
  /* <Box component="form">
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
      </Box> */
}
