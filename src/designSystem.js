import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  // spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
});
