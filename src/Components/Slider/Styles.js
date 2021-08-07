import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    transition: "all ease-in-out 250ms",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    margin: "0 8px",
  },
}));
export default useStyles;
