import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    maxWidth: "300px",

    backgroundColor: "white",
    display: "block",
    borderRadius: "0px",
    padding: "10px 30px",
    "& .MuiTypography-root": {
      textTransform: "uppercase",
      color: "black !important",
      fontWeight: "300",
    },
    "& .MuiButton-contained": {
      boxShdow: "none",
    },
  },
}));
export default useStyles;
