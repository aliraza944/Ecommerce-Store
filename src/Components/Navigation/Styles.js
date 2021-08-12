import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiAppBar-root": {
      boxShadow: "none",
      backgroundColor: "black",
      color: "white",
    },
    "& .MuiToolbar-root": {},
  },
  logo: {
    cursor: "pointer",

    width: "150px",
    [theme.breakpoints.up("lg")]: {
      width: "170px",
    },
  },
  navicons: {
    "& > *": {
      margin: "0 0 0 40px",
      cursor: "pointer",
    },
  },
  menuButton: {
    flexShrink: 0,
    lineHeight: "10px",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  drawerpaper: {
    width: "70%",
  },
  title: {
    flexGrow: 0,
    cursor: "pointer",
    textTransform: "uppercase",
    margin: "0 0 0 20px",
    fontWeight: "500",
  },
  navelements: {
    width: "100%",
  },
}));
export default useStyles;
