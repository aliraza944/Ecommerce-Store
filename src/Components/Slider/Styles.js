import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    margin: "0 8px",
  },
  slider: {
    animation: `$fadeeffect 3000ms ${theme.transitions.easing.easeInOut} 0ms `,
  },
  "@keyframes fadeeffect": {
    "0%": {
      opacity: 0,
    },
    "25%": {
      opacity: 0.25,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
}));
export default useStyles;
