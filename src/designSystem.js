import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  // spacing: (factor) => `${0.25 * factor}rem`,

  // Break points
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
  // Buttons
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // minWidth: "200px",
          maxWidth: "250px",
          color: "#FAF9F6",
          transition: "all .3s ease-In-Out",
          border: "1px solid #fff",
          ":hover": {
            background: "rgba(3, 155, 229, 0.6)",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        },
        // Small buttons
        sizeSmall: {
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
  },
  typography: {
    // fontFamily: "Unbounded Sans",
    h1: {
      fontFamily: "Unbounded",
      fontSize: "58px",
      lineHeight: "62px",
      fontWeight: "700",
    },
    h2: {
      fontFamily: "Unbounded ",
      fontSize: "36px !important",
      lineHeight: "52px !important",
      fontWeight: "700 !important",
    },
    // h3: {
    //   fontFamily: "Unbounded",
    //   fontSize: "38px",
    //   lineHeight: "42px",
    //   fontWeight: "700",
    // },
    // h4: {
    //   fontFamily: "Unbounded",
    //   fontSize: "28px",
    //   lineHeight: "32px",
    //   fontWeight: "600",
    // },
    bodyTextLg: {
      fontFamily: "Work Sans",
      fontSize: "18px",
      lineHeight: "22px",
    },
    bodyTextSm: {
      fontFamily: "Work Sans",
      fontSize: "16px",
      lineHeight: "18px",
    },
    linkTextDesktop: {
      color: "#21c067",
      fontFamily: "Work Sans",
      lineHeight: "18px",
      fontSize: "20px",
      width: "100%",
    },
    linkTextMobile: {
      color: "#283F76",
      fontFamily: "Work Sans",
      lineHeight: "22px",
      fontSize: "28px",
      width: "100%",
    },
    // MuiTypography: {
    //     styleOverrides: {
    //         root: {
    //             fontWeight: "800",
    //         },
    //     },
    // },
  },
});
