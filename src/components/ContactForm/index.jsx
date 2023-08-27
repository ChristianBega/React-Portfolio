import { Box, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import EmailService from "../../Services/EmailService";

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

const StyledButton = styled(Button)({
  zIndex: 1,
  backgroundColor: "var(--light-blue) !important",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    boxShadow: "0px 0px 20px 4px rgba(67, 67, 71, 0.6)",
    transform: "scale(1.1)",
    transition: ".2s",
  },
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
  
  const onSubmit = (data) => {
    EmailService.sendEmail(data);
    reset();
  };

  return (
    <Box maxWidth="sm" marginX="auto" component="form" onSubmit={handleSubmit(onSubmit)}>
      <StyledTextField variant="filled" label="Name " {...register("from_name", { required: "Name is required *" })} />
      <Typography variant="small" component="p">
        {errors.name?.message}
      </Typography>
      <StyledTextField
        variant="filled"
        label="Email "
        {...register(
          "email",
          { pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } },
          { required: "Email is required", minLength: { value: 4, message: "Minimum length is 4 characters" } }
        )}
      />
      <Typography variant="small" component="p">
        {errors.email?.message}
      </Typography>
      <StyledTextField variant="filled" label="Company " {...register("company", { required: "Company is required *" })} />
      <Typography variant="small" component="p">
        {errors.company?.message}
      </Typography>

      <StyledFormControl variant="filled">
        <InputLabel id="selectMenu">Reason for message</InputLabel>
        <Select id="selectMenu" {...register("reason", { required: "Reason is required" })}>
          {choices.map((option, index) => (
            <MenuItem sx={{ color: "#000 !important" }} key={index} value={option}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
      <Typography variant="small" component="p">
        {errors.reason?.message}
      </Typography>

      <StyledTextField
        multiline
        minRows={2}
        maxRows={4}
        variant="filled"
        label="Message "
        {...register("message", {
          required: "Message is required",
          minLength: { value: 50, message: "Minimum length is 50 characters" },
          maxLength: { value: 275, message: "Maximum length is 275 characters" },
        })}
      />
      <Typography variant="small" component="p">
        {errors.message?.message}
      </Typography>

      <Box textAlign="center" mt={5}>
        <StyledButton onSubmit={onSubmit} type="submit" variant="contained">
          Submit
        </StyledButton>
      </Box>
    </Box>
  );
}
