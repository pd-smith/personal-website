import createTheme from "@mui/material/styles/createTheme";

const baseTheme = createTheme();

export const theme = createTheme({
  palette: {
    text: {
      primary: "#29251a",
    },
    background: {
      default: "#2f2d26",
      paper: "#fffbf0",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
          font-family: Marlin;
          src: url("MARLIN.otf") format("opentype");
        }
      `,
    },
  },
  typography: {
    fontWeightBold: 600,
    fontFamily: ["'Marlin'", "sans-serif"].join(","),
    fontSize: 8,
    body1: {
      fontSize: "1rem",
      letterSpacing: ".25rem",
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 900,
      letterSpacing: "1rem",
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        letterSpacing: ".65rem",
      },
    },
    h2: {
      fontSize: "2rem",
      letterSpacing: ".25rem",
      fontWeight: 600,
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
  },
});
