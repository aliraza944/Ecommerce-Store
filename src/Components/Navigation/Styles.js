import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiAppBar-root": {
      boxShadow: "none",
      backgroundColor: "black",
      color: "white",
    },
  },
  menuButton: {
    flexShrink: 0,
  },
  title: {
    flexGrow: 0,
    cursor: "pointer",
  },
  navelements: {
    width: "100%",
  },
  modalpaper: {
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#fafafa5c",
    "& .MuiTypography-root": {
      fontWeight: "400",
      color: "white",
      margin: "0 0 5px 0",
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
    },
  },
  modalelements: {
    marginTop: "10%",
  },
  closeicon: {
    color: "white",
    position: "absolute",
    right: 0,
    top: "10%",
    cursor: "pointer",
  },
}));
export default useStyles;
