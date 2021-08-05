import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    minWidth: "120px",
    backgroundColor: "white",
    display: "block",
    borderRadius: "0px",
    padding: "10px 10px",
    "& .MuiTypography-root": {
      textTransform: "uppercase",
      color: "black !important",
      fontWeight: "400",
    },
  },
}));
export default useStyles;
