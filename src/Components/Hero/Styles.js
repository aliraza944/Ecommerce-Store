import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
    backgroundPosition: "center",
    backgroundSize: "cover",
    postion: "relative",
    display: "flex",
    flexDirection: "column",
  },
  bottombar: {
    width: "100%",
    "& .MuiTypography-root": {
      color: "black",
      fontWeight: "400",
    },
    "& .MuiToolbar-root": {
      backgroundColor: "white",
    },
  },
  herotitle: {
    position: "absolute",
    top: "30%",
    left: "40%",
    color: "#f4f4f3",
  },
  bottomprice: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& .MuiTypography-root": {
      color: "#f4f4f3",
      fontWeight: "500",
      margin: "0  40px 0 0",
      textDecoration: "none",
    },
  },
}));
export default useStyles;
