import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    backgroundColor: "white",
    display: "inline-block",
    padding: "10px 10px",
    "& .MuiTypography-root": {
      textTransform: "uppercase",
      color: "black !important",
      fontWeight: "400",
    },
  },
}));
export default useStyles;
