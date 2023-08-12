import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,

  // Break points
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ipad: 820,
      surface7Pro: 912,
      md: 913,
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
          zIndex: "2000",
          color: "#FAF9F6",
          transition: "all .3s ease-In-Out",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0,0,0, 0.06) 0px 2px 1px, rgba(0,0,0, 0.09) 0px 4px 2px, rgba(0,0,0, 0.09) 0px 8px 4px, rgba(0,0,0, 0.09) 0px 16px 8px, rgba(0,0,0, 0.09) 0px 32px 16px !important",
          ":hover": {
            cursor: "pointer",
            // transform: "scale(1.1)",
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
          fontSize: "16px",
          lineHeight: "22px",
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
          color: "#fff",
          fontFamily: "Nunito !important",
          textDecoration: "none",
          zIndex: "2000",
          "&:hover": {
            transform: "scale(1.05)",
            transition: ".3s ease-in-out",
            fontWeight: "600",
            textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "1rem",
          "@media (min-width: 820px)": {
            padding: "2rem",
          },
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
    paragraphSm: {
      fontFamily: "Nunito",
      marginBottom: "1rem",
      fontSize: "16px",
      fontWeight: "200",
      // color: "#e2e1e1",
    },
    paragraphLg: {
      fontFamily: "Nunito",
      marginBottom: "1rem",
      fontSize: "18px",
      fontWeight: "200",
      // color: "#e2e1e1",
    },
    linkText: {
      fontFamily: "Nunito",
      // fontSize: "16px",
      fontWeight: "600",
      color: "#e2e1e1",
    },
    // h1: {
    //   fontFamily: "Unbounded",
    //   fontSize: "77px",
    //   lineHeight: "62px",
    //   fontWeight: "700",
    // },
    h2: {
      fontFamily: "Nunito",
      // fontFamily: "Unbounded",
      fontSize: "42px !important",
      letterSpacing: ".2rem",
      fontWeight: "500",
      marginBottom: "1rem",
    },
    h3: {
      fontFamily: "Unbounded",
      fontSize: "22px",
      fontWeight: "300",
      marginBottom: "1rem",
    },
    h4: {
      fontFamily: "Unbounded",
      fontSize: "18px",
      fontWeight: "300",
    },
    cardHeader: {
      fontFamily: "Nunito",
      fontSize: "33px !important",
      letterSpacing: ".2rem",
      fontWeight: "800",
      marginBottom: "1rem",
    },
    cardHeaderSm: {
      fontFamily: "Nunito",
      fontSize: "24px !important",
      letterSpacing: ".2rem",
      fontWeight: "800",
      marginBottom: "1rem",
    },
  },
});
