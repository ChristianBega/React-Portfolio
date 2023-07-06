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
          // border: "2px solid #fff",
          ":hover": {
            // background: "rgba(3, 155, 229, 0.6)",
            cursor: "pointer",
            // transform: "scale(1.1)",
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
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0,0,0, 0.06) 0px 2px 1px, rgba(0,0,0, 0.09) 0px 4px 2px, rgba(0,0,0, 0.09) 0px 8px 4px, rgba(0,0,0, 0.09) 0px 16px 8px, rgba(0,0,0, 0.09) 0px 32px 16px !important",
          // boxShadow: "0px 0px 16px 6px rgba(86, 79, 224, 0.6)",

          "&:hover": {
            border: "none",
            color: "#fff",
            boxShadow: "rgb(0, 0, 0, 0.3) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.2) -3px -3px 6px 1px inset !important",
            transition: ".3s ease-in-out",
            fontWeight: "600",
            textShadow: "0 0 .2em rgba(3, 155, 229, 0.6), 0 0 0.4em #cacedd",
          },
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
      fontSize: "55px !important",
      letterSpacing: ".2rem",
      fontWeight: "800",
    },
    h3: {
      // fontFamily: "Work Sans",
      fontFamily: "Unbounded",
      fontSize: "28px",
      fontWeight: "300",
      marginBottom: "1rem",
    },
    h4: {
      fontFamily: "Unbounded",
      fontSize: "18px",
      // lineHeight: "32px",
      fontWeight: "300",
    },
    cardHeader: {
      fontFamily: "Work Sans",
      fontSize: "53px !important",
      letterSpacing: ".2rem",
      fontWeight: "500",
    },
    cardHeaderSm: {
      fontSize: "32px !important",
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
