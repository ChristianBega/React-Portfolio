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
          border: "2px solid #fff",
          ":hover": {
            // background: "rgba(3, 155, 229, 0.6)",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        },
        // Small buttons
        sizeSmall: {
          // marginLeft: ".5rem",
          marginBlock: "2rem",
          minWidth: "25px",
          width: "45px",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "50%",
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
          background: " rgba( 255, 255, 255, .1 )",
          boxShadow: "0 8px 16px 0 rgba( 31, 38, 135, 0.4 )",
          backdropFilter: "blur( 8px )",
          webkitBackdropFilter: "blur( 8px )",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Work Sans !important",
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
    fontFamily: "Work Sans",
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
      // fontFamily: "Bowlby One SC, cursive ",
      fontFamily: "Unbounded",
      fontSize: "56px !important",
      letterSpacing: ".2rem",
      fontWeight: "800",
    },
    h3: {
      // fontFamily: "Work Sans",
      fontFamily: "Unbounded",
      fontSize: "24px",
      fontWeight: "300",
    },
    // h4: {
    //   fontFamily: "Unbounded",
    //   fontSize: "28px",
    //   lineHeight: "32px",
    //   fontWeight: "600",
    // },
    cardHeader: {
      fontFamily: "Work Sans",
      fontSize: "56px !important",
      letterSpacing: ".2rem",
      fontWeight: "500",
    },
    cardHeaderSm: {
      fontSize: "28px !important",
      letterSpacing: ".1rem",
      fontWeight: "500",
      // opacity: ".8",
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
