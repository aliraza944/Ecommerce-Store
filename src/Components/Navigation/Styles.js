import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "1px solid #fff",
    "& .MuiAppBar-root": {
      boxShadow: "none",
      backgroundColor: "black",
      color: "white",
    },
    "& .MuiToolbar-root": {
      borderBottom: "1px solid #fff",
    },
  },
  menuButton: {
    flexShrink: 0,
    lineHeight: "10px",
  },
  drawerpaper: {
    width: "70%",
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
