import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    scrollBehavior: "smooth",

    " & .MuiBox-root": {
      height: "100vh",
      backgroundColor: "blue",
      scrollSnapAlign: "start",
    },
  },
}));
export default useStyles;
