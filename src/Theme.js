import { createTheme, responsiveFontSizes } from "@material-ui/core";
let theme = createTheme({
  props: {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1024,
        xl: 1920,
      },
    },
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: "300",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "300",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "300",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "300",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "300",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "300",
    },
    body1: {
      fontSize: "0.8rem",
      fontWeight: "300",
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".link": {
          textDecoration: "none",
          color: "white",
        },
        ".justifycenter": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".justifyspacebetween": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".justifyspacearound": {
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
