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
  },
  bottombar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    "& .MuiTypography-root": {
      color: "black",
      fontWeight: "400",
    },
    "& .MuiToolbar-root": {
      backgroundColor: "white",
    },
  },
}));
export default useStyles;
