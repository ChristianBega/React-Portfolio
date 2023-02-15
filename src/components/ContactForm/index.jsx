import { Box, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import { useForm } from "react-hook-form";
// 1. Finish validation for email - pattern
const StyledTextField = styled(TextField)({
  backgroundColor: "var(--light-form-bg)",
  width: "100%",
  marginTop: "1rem",
});
const StyledFormControl = styled(FormControl)({
  backgroundColor: "var(--light-form-bg)",
  width: "100%",
  marginTop: "1rem",
});

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

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <Box component="form" onSubmit={handleSubmit(() => reset())}>
      <StyledTextField variant="filled" label="Name " {...register("name", { required: "This is required" })} />
      <Typography variant="small" component="p">
        {errors.name?.message}
      </Typography>
      <StyledTextField
        variant="filled"
        label="Email "
        {...register(
          "email",
          { required: "This is required", minLength: { value: 4, message: "Minimum length is 4 characters" } },
          { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }
        )}
      />
      <Typography variant="small" component="p">
        {errors.email?.message}
      </Typography>
      <StyledTextField variant="filled" label="Company " {...register("company", { required: "This is required" })} />
      <Typography variant="small" component="p">
        {errors.company?.message}
      </Typography>
      <StyledFormControl variant="filled">
        <InputLabel id="selectMenu">Reason for message</InputLabel>
        <Select id="selectMenu" {...register("reason", { required: "This is required" })}>
          {choices.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option.label?.message}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="small" component="p">
          {errors.reason?.message}
        </Typography>
      </StyledFormControl>

      <StyledTextField
        multiline
        minRows={2}
        maxRows={4}
        variant="filled"
        label="Message "
        {...register("message", {
          required: "This is required",
          minLength: { value: 25, message: "Minimum length is 25 characters" },
          maxLength: { value: 275, message: "Maximum length is 275 characters" },
        })}
      />
      <Typography variant="small" component="p">
        {errors.message?.message}
      </Typography>

      <Box textAlign="center" mt={5}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
