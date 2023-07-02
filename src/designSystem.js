import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,

  // Break points
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
  // Color Palette
  palette: {
    // primary: {
    //   main: "",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
    // secondary: {
    //   main: "",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
    // accent: {
    //   accentOne: "",
    //   accentTwo: "",
    // },
    // text: {
    //   primary: "#FFFAFA",
    // },
    // borders: {
    //   primary: "",
    // },
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
          border: "1px solid #fff",
          ":hover": {
            // background: "rgba(3, 155, 229, 0.6)",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        },
        // Small buttons
        sizeSmall: {
          color: "Red",
          lineHeight: "22px",
          fontSize: "18px",
          padding: "10px 12px",
          width: "220px",
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
          // backgroundColor: "red",
          background: " rgba( 255, 255, 255, .6 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.3 )",
          backdropFilter: "blur( 12px )",
          webkitBackdropFilter: "blur( 12px )",
          // borderRadius: "10px",
          // border: "1px solid rgba( 255, 255, 255, 0.18 )",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          zIndex: "1000",
          fontFamily: "Work Sans !important",
          padding: 6,
          "&:hover": {
            color: "#fff",
            backgroundColor: "transparent",
            textDecorationLine: "underline",
            textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
            transform: "scale(1.1)",
            transition: ".2s ease-in-out",
            fontWeight: "600",
          },
        },
      },
    },
  },
  // Typography
  typography: {
    fontFamily: "Work Sans",
    allVariants: {
      color: "#FFFAFA",
    },
    h1: {
      fontFamily: "Unbounded",
      fontSize: "87px",
      lineHeight: "62px",
      fontWeight: "700",
    },
    h2: {
      fontFamily: "Bowlby One SC, cursive ",
      fontSize: "56px !important",
      // lineHeight: "52px !important",
      letterSpacing: ".2rem",
    },
    h3: {
      // fontFamily: "Unbounded",
      fontSize: "30px",
      fontWeight: "500",
    },
    h4: {
      fontFamily: "Unbounded",
      fontSize: "28px",
      lineHeight: "32px",
      fontWeight: "600",
    },
    cardHeader: {
      fontFamily: "Work Sans",
      fontSize: "56px !important",
      letterSpacing: ".2rem",
      fontWeight: "800",
    },
  },

  // bodyTextLg: {
  //   fontFamily: "Work Sans",
  //   fontSize: "18px",
  //   lineHeight: "22px",
  // },
  // bodyTextSm: {
  //   fontFamily: "Work Sans",
  //   fontSize: "16px",
  //   lineHeight: "18px",
  // },
});
