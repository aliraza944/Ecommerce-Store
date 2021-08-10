import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "10px 20px",
    maxWidth: "600px",
    position: "static",
    margin: "10px 0 0 0",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "45%",
    },
    "& > *": {
      margin: "15px 0 0 0",
    },
    "& .MuiTypography-body1": {
      margin: "0 0 0 10px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
      backgroundColor: "white",
    },
    "& .MuiSelect-filled.MuiSelect-filled ": {
      backgroundColor: "white",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiFormLabel-root": {
      color: "black",
      width: "80%",
      height: "99%",
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",
      "& img": {
        height: "100%",
        margin: "0 10px 0 0 ",
      },
    },

    "& .MuiInputLabel-filled": {
      transform: "translate(0px, 0px)",
    },
    "& .MuiOutlinedInput-root": {
      border: "1px solid white",
    },
  },
  formcontrol: {
    "& .MuiSvgIcon-root": {
      fill: "black",
    },
  },
  reviewcount: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cartbutton: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    "& .MuiButton-root": {
      borderRadius: "0px",
    },
  },
  cartbtn: {
    minWidth: "200px",
    backgroundColor: "white",
    padding: "10px 30px",
    flexGrow: "1",
    margin: "0 0 0 5px",
  },
  productandreview: {
    borderTop: "1px solid #fff",
    borderBottom: "1px solid #fff",
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& .MuiTypography-body1": {
      padding: "20px 0px",
      width: "50%",
      display: "flex",
      alignItems: "center",
    },
    "& .MuiSvgIcon-root": {
      margin: "0 10px 0 0",
    },
  },
  menuitems: {
    height: "60px",
    backgroundColor: "white",
  },
}));
export default useStyles;
