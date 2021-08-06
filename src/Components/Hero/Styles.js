import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0",
  },

  gridparent: {
    "& img": {
      width: "100%",
      height: "100%",
      margin: "0",
      objectFit: "cover",
    },
  },
  columnitems: {
    dispaly: "flex",
    flexDirection: "column",
    width: "100%",
    height: "50%",
    "& div": {
      width: "100%",
      height: "100%",
    },
  },
  heroimage: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  herogif: {
    position: "relative",
    width: "100%",
    "& img ": {
      width: "100%",
      height: "100%",
    },
  },
  herotextsection: {
    position: "absolute",
    width: "100%",
    top: "25%",
    left: "0%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      textAlign: "left",
      alignItems: "flex-start",
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
