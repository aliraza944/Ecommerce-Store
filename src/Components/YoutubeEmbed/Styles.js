import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  videoResponsive: {
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    height: 0,
  },
  frame: {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
}));

export default useStyles;
