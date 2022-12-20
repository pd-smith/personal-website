import createTheme from "@mui/material/styles/createTheme";

const baseTheme = createTheme();

export const theme = createTheme({
  palette: {
    text: {
      primary: "#29251a",
    },
  },
  typography: {
    fontWeightBold: 600,
    fontFamily: ["'Jost'", "sans-serif"].join(","),
    fontSize: 8,
    body1: {
      fontSize: "1rem",
      letterSpacing: ".25rem",
      textTransform: "uppercase",
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 300,
      letterSpacing: "1rem",
      textTransform: "uppercase",
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
      fontWeight: 900,
      textTransform: "uppercase",
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
  },
});
