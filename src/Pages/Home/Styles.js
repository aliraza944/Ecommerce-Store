import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",

    " & .MuiBox-root": {
      height: "100vh",
      backgroundColor: "yellow",
    },
  },
}));
export default useStyles;
