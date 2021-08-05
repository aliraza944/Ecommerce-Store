import { createTheme, responsiveFontSizes } from "@material-ui/core";
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024,
      xl: 1920,
    },
  },
  props: {
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
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          padding: "0",
          margin: "0",
          boxSizing: "border-box",
        },
        body: {
          margin: "0",
        },
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
