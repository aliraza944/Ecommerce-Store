import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  griditem: {
    height: "100vh",
  },
  columnitems: {
    height: "50vh",
  },
  gridparent: {
    "& img": {
      width: "100%",
      height: "100%",
      margin: "0",
      objectFit: "cover",
    },
  },
  heroimage: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  herogif: {
    position: "relative",
  },
  herotextsection: {
    position: "absolute",
    top: "25%",
    left: "0%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      textAlign: "left",
      left: "5%",
    },

    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiButton-root": {
      textTransform: "uppercase",
      backgroundColor: "white",
      color: "black",
      fontWeight: "300",
      borderRadius: "0",
      margin: "20px 0 0 0",
    },
  },
  herotexttitle: {
    fontWeight: "800",
  },
  herotext: {
    fontWeight: "400",
  },
  giftexttitle: {
    fontWeight: 500,
    textTransform: "uppercase",
    color: "white",
  },
  giftextsection: {
    position: "absolute",
    top: "25%",
    textAlign: "center",
    color: "white",
    flexDirection: "column",
    width: "100%",
  },
}));
export default useStyles;
