import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    top: "0",
    padding: "10px 10px",
    zIndex: "10",
    backgroundColor: "black",
  },
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    "& .MuiTypography-body1": {
      margin: "0 10px 0 0",
    },
  },
  nameandprice: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  cartbtn: {
    backgroundColor: "white",
    borderRadius: "0px",
  },
}));
export default useStyles;
