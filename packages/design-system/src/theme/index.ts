import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#29251a",
    },
  },
  typography: {
    fontWeightBold: 600,
    fontSize: 8,
    h1: {
      fontSize: "4rem",
      fontWeight: 300,
      letterSpacing: "1rem",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "1rem",
      letterSpacing: ".25rem",
      fontWeight: 900,
      textTransform: "uppercase",
    },
  },
});
