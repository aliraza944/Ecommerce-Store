import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    backgroundColor: "black",
  },
  herocontainer: {
    position: "relative",
  },
  productcontainer: {
    position: "relative",
  },
  contentstory: {
    flexDirection: "column",
    textAlign: "center",
    position: "absolute",
    top: "60%",
    width: "100%",
    [theme.breakpoints.up("800")]: {
      top: "25%",
      left: "5%",
      width: "40%",
    },
  },
  fancy: {
    flexDirection: "column",
    backgroundColor: "#1C79BF",
    width: "100%",
    textAlign: "center",
    "& .MuiTypography-h4": {
      fontWeight: "500",
      width: "50%",
    },
    "& img": {
      margin: "20px 0 20px 0",
    },
  },
}));
export default useStyles;
