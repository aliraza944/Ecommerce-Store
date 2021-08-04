import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heroimage: {
    height: "calc(100vh - 51px)",
    position: "relative",
    margin: "-2px 0 0 0",
  },
  herotextsection: {
    position: "absolute",
    top: "20%",
    textAlign: "center",
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiButton-root": {
      textTransform: "uppercase",
      backgroundColor: "white",
      color: "black",
      fontWeight: "300",
      borderRadius: "0",
      margin: "20px 0 0 0",
    },
  },
  herotexttitle: {
    fontWeight: "800",
  },
  herotext: {
    fontWeight: "400",
  },
}));
export default useStyles;
