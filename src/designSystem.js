import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,

  // Break points
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ipad: 820,
      md: 900,
      surface7Pro: 912,
      lg: 1200,
    },
  },
  // Color Palette
  palette: {
    onHover: {
      primary: "red",
    },
  },
  //Components (Buttons)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FAF9F6",
          transition: "all .3s ease-In-Out",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0,0,0, 0.06) 0px 2px 1px, rgba(0,0,0, 0.09) 0px 4px 2px, rgba(0,0,0, 0.09) 0px 8px 4px, rgba(0,0,0, 0.09) 0px 16px 8px, rgba(0,0,0, 0.09) 0px 32px 16px !important",
          ":hover": {
            cursor: "pointer",
            boxShadow: "rgb(0, 0, 0, 0.3) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.2) -3px -3px 6px 1px inset !important",
            textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
            transition: ".3s ease-in-out",
            fontWeight: "600",
          },
        },
        // Small buttons
        sizeSmall: {
          minWidth: "25px",
          width: "45px",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "50%",
          ":hover": {
            color: "#fff",
          },
        },
        // Medium buttons
        sizeMedium: {
          lineHeight: "22px",
          fontSize: "18px",
          padding: "10px 12px",
          width: "250px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          maxHeight: "85px",
          padding: "1.5rem",
          background: " rgba( 0, 0, 0, 0 )",
          backdropFilter: "blur( 8px )",
          webkitBackdropFilter: "blur( 8px )",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito !important",
          "&:hover": {
            textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "1rem",
        },
      },
    },
  },
  // Typography
  typography: {
    fontFamily: "Nunito, sans-serif",
    allVariants: {
      color: "#edebeb",
    },
    h1: {
      fontFamily: "Unbounded",
      fontSize: "87px",
      lineHeight: "62px",
      fontWeight: "700",
    },
    h2: {
      fontFamily: "Unbounded",
      fontSize: "55px !important",
      letterSpacing: ".2rem",
      fontWeight: "300",
    },
    h3: {
      fontFamily: "Unbounded",
      fontSize: "28px",
      fontWeight: "200",
      marginBottom: "1rem",
    },
    h4: {
      fontFamily: "Unbounded",
      fontSize: "18px",
      fontWeight: "300",
    },
    cardHeader: {
      fontFamily: "Nunito",
      fontSize: "45px !important",
      letterSpacing: ".2rem",
      fontWeight: "500",
    },
    cardHeaderSm: {
      fontFamily: "Nunito",
      fontSize: "32px !important",
      letterSpacing: ".1rem",
      fontWeight: "500",
    },
  },
});
